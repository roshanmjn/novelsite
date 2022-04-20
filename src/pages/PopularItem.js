import React from "react";
import amiya from "../images/img1.jpg";
import amiya1 from "../images/img2.png";
import amiya2 from "../images/img3.png";
import amiya3 from "../images/img4.png";

const imagedata = [
  {
    imgsrc: amiya,
    title: "Doktah",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis repudiandae hic harum voluptatem nobis obcaecati iste maxime laboriosam, magni, ab voluptate, perferendis voluptas amet excepturi provident fuga similique dolore minima.",
  },
  {
    imgsrc: amiya1,
    title: "Amiya",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis repudiandae hic harum voluptatem nobis obcaecati iste maxime laboriosam, magni, ab voluptate, perferendis voluptas amet excepturi provident fuga similique dolore minima.",
  },
  {
    imgsrc: amiya2,
    title: "Date",
  },
  {
    imgsrc: amiya3,
    title: "Risky",
  },
  {
    imgsrc: amiya1,
    title: "Amiya",
  },
  {
    imgsrc: amiya2,
    title: "Date",
  },
  {
    imgsrc: amiya3,
    title: "Risky",
  },
  {
    imgsrc: amiya,
    title: "Doktah",
  },
];

const PopularItem = (props) => {
  //   console.log(props);
  return (
    <>
      <div className="col-4 col-lg-3 releases-part-two d-flex flex-column justify-content-center align-items-center">
        <img
          src={props.imgsrc}
          alt={props.imgsrc}
          className="releases-image-small "
        />
        <h5>{props.title}</h5>
      </div>
    </>
  );
};

export { PopularItem, imagedata };
