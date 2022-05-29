const router = require("express").Router();
const conn = require("../database");
const async = require("async");
const Connection = require("mysql/lib/Connection");

router.use("/recommendation", (req, res, next) => {
  console.log("REQ mad on /recommendation route");
  next();
});

router.post("/recommendation", (req, res) => {
  const query1 = "select id,username from tbl_users";
  const query2 =
    "select user_id,username,novel_id,tbl_novel.name,genre,tbl_novel_rating.rating from tbl_novel_rating left join tbl_users on tbl_novel_rating.user_id=tbl_users.id left join tbl_novel on tbl_novel_rating.novel_id=tbl_novel.id where user_id =?";

  const mainArray = [];

  // prettier-ignore
  conn.query(query1, (err, row1) => {
    const arr = [];
    async.each(row1, (row, callback) => {
      // console.log(row["id"]);
      conn.query(query2, row["id"], (err, row2) => {
        if (err) {
          callback();
        } else {
          var array = [];          
          var obj = {};
          for (j = 0; j < row2.length; j++) {            
            array.push({
              title:row2[j].name,
              rating:row2[j].rating
            });
          }
          arr.push({username:row['username'],novels:array})
          callback(); 
        }
      });
    },function(err){
      // console.log(err);
      res.send(arr)
      
    });
    
   
  });
});

router.post("/recommendation-object", (req, res) => {
  const query1 = "select id,username from tbl_users";
  const query2 =
    "select user_id,username,novel_id,tbl_novel.name,genre,tbl_novel_rating.rating from tbl_novel_rating left join tbl_users on tbl_novel_rating.user_id=tbl_users.id left join tbl_novel on tbl_novel_rating.novel_id=tbl_novel.id where user_id =?";

  const mainArray = [];

  // prettier-ignore
  conn.query(query1, (err, row1) => {
    const arr = [];
    var core = {}
    async.each(row1, (row, callback) => {
      // console.log(row["id"]);
      conn.query(query2, row["id"], (err, row2) => {
        if (err) {
          callback();
        } else {
          var array = [];
          // var core = {}
          var obj = {};
          for (j = 0; j < row2.length; j++) {
            obj[row2[j].novel_id] = row2[j].rating;
            // array.push({[row2[j].name]:row2[j].rating});
          }        
          // arr.push({[row['username']]:array})
          arr.push({[row['username']]:obj});
          // core={...core,obj}
          core[row['username']]=obj
          
          callback(); 
        }
      });
    },function(err){
      res.send(core)
    });
  
  });
});

router.post("/recommendation-algorithm", (req, res) => {
  dataset = req.body.data;
  user = req.body.user1;

  // console.log(dataset.rmjn["The United States Bill of Rights"]);

  const similarityDistance = (dataset, person1, person2) => {
    // console.log(dataset["rmjn"]);
    var similar = {};
    var sum = 0;
    Object.entries(dataset[person1]).forEach(([key, value]) => {
      if (dataset[person2].hasOwnProperty(key)) {
        similar = { ...similar, [key]: 1 };
      }
    });
    // // TO GET LENGTH OF SIMILAR OBJECT
    if (Object.keys(similar).length == 0) {
      return 0;
    }
    Object.entries(dataset[person1]).forEach(([key, value]) => {
      // console.log(dataset.person2);
      // console.log(dataset[person2][key]);
      if (dataset[person2].hasOwnProperty(key)) {
        sum = sum + Math.pow(value - dataset[person2][key], 2);
      }
    });

    return 1 / (1 + Math.sqrt(sum));
  };

  const getRecommendations = (dataset, person) => {
    var total = {};
    var simSums = {};
    var ranks = {};
    var test = {};
    var sim = 0;
    Object.entries(dataset).forEach(([otherPerson]) => {
      // console.log(otherPerson, ":", novels);
      if (otherPerson != person) {
        // console.log(otherPerson);
        sim = similarityDistance(dataset, person, otherPerson);
      }
      if (sim > 0) {
        // console.log(sim);
        Object.entries(dataset).forEach(([otherPerson, novels]) => {
          // console.log(otherPerson, ":", novels);
          // console.log(otherPerson, ":");
          Object.entries(novels).forEach(([novel]) => {
            if (!dataset[person].hasOwnProperty(novel)) {
              if (!total.hasOwnProperty(novel)) {
                total = { ...total, [novel]: 0 };
              }
              total[novel] += dataset[otherPerson][novel] * sim;
              if (!simSums.hasOwnProperty(novel)) {
                simSums = { ...simSums, [novel]: 0 };
              }
              simSums[novel] += sim;
              // prettier-ignore
              // console.log(dataset[otherPerson], ":", dataset[otherPerson][novel]);
              // console.log("-----x------");
            }
          });
        });
      }
    });
    Object.entries(total).forEach(([novel, rating]) => {
      // console.log(novel, ":", rating);
      ranks = { ...ranks, [novel]: rating / simSums[novel] };
    });

    sorted = Object.entries(ranks).sort((a, b) => {
      return b[1] - a[1];
    });
    const obj = Object.fromEntries(sorted);
    return sorted;
    // return sorted;
    // const gg = "";
  };
  // console.log(getRecommendations(dataset, "rmjn"));
  // getRecommendations(dataset, "rmjn");
  res.send(getRecommendations(dataset, user));
});

module.exports = router;
