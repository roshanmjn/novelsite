import React, { useEffect, useState } from "react";

const SortMenu = () => {
  const [activeLanguages, setIsActiveLanguages] = useState("0");
  const [activeStatus, setIsActiveStatus] = useState("0");
  const [activeSort, setIsActiveSort] = useState("0");
  const [status, setCurrentStatus] = useState("any");

  //   useEffect(() => {
  //     if (activeSort === "0") {
  //       setCurrentStatus("any");
  //     } else if (activeSort === "1") {
  //       setCurrentStatus("ongoing");
  //     } else if (activeSort === "2") {
  //       setCurrentStatus("completed");
  //     } else if (activeSort === "3") {
  //       setCurrentStatus("hiatus");
  //     }
  //   }, [status]);

  return (
    <>
      <div className="col-12 d-flex flex-row justify-content-between flex-wrap series-container-wrapper">
        {/* one */}
        <div className="col-12 col-lg-5 series language-group">
          <div className="col-12 d-flex justifty-content-between flex-column language-group-wrapper">
            <h6 className="language-group-title">Languages</h6>
            <div className="col-12 language-group-item group-item group-item">
              <label htmlFor="">
                <span
                  className={`${
                    activeLanguages === "0" ? "series-active" : ""
                  } item `}
                  onClick={() => setIsActiveLanguages("0")}
                >
                  Any
                </span>
              </label>
              <label htmlFor="">
                <span
                  className={`${
                    activeLanguages === "1" ? "series-active" : ""
                  } item `}
                  onClick={() => setIsActiveLanguages("1")}
                >
                  Chinese
                </span>
              </label>
              <label htmlFor="">
                <span
                  className={`${
                    activeLanguages === "2" ? "series-active" : ""
                  } item`}
                  onClick={() => setIsActiveLanguages("2")}
                >
                  Korean
                </span>
              </label>
            </div>
          </div>
        </div>
        {/* two */}
        <div className="col-12 col-lg-7 series status-group">
          <div className="col-12 d-flex justifty-content-between flex-column status-group-wrapper">
            <h6 className="status-group-title">Status</h6>
            <div className="col-12 status-group-item group-item group-item">
              <label htmlFor="">
                <span
                  className={`${
                    activeStatus === "0" ? "series-active" : ""
                  } item `}
                  onClick={() => setIsActiveStatus("0")}
                >
                  Any
                </span>
              </label>
              <label htmlFor="">
                <span
                  className={`${
                    activeStatus === "1" ? "series-active" : ""
                  } item `}
                  onClick={() => setIsActiveStatus("1")}
                >
                  Ongoing
                </span>
              </label>
              <label htmlFor="">
                <span
                  className={`${
                    activeStatus === "2" ? "series-active" : ""
                  } item `}
                  onClick={() => setIsActiveStatus("2")}
                >
                  Completed
                </span>
              </label>
              <label htmlFor="">
                <span
                  className={`${
                    activeStatus === "3" ? "series-active" : ""
                  } item `}
                  onClick={() => setIsActiveStatus("3")}
                >
                  Hiatus
                </span>
              </label>
            </div>
          </div>
        </div>
        {/* three */}
        <div className="col-12 series sort-group">
          <div className="col-12 d-flex justifty-content-between flex-column series-group-wrapper">
            <h6 className="sort-group-title">Sort By</h6>
            <div className="col-12 sort-group-item group-item group-item">
              <label htmlFor="">
                <span
                  className={`${
                    activeSort === "0" ? "series-active" : ""
                  } item`}
                  onClick={() => setIsActiveSort("0")}
                >
                  Name
                </span>
              </label>
              <label htmlFor="">
                <span
                  className={`${
                    activeSort === "1" ? "series-active" : ""
                  } item`}
                  onClick={() => setIsActiveSort("1")}
                >
                  Popular
                </span>
              </label>
              <label htmlFor="">
                <span
                  className={`${
                    activeSort === "2" ? "series-active" : ""
                  } item`}
                  onClick={() => setIsActiveSort("2")}
                >
                  Chapters
                </span>
              </label>
              <label htmlFor="">
                <span
                  className={`${
                    activeSort === "3" ? "series-active" : ""
                  } item`}
                  onClick={() => setIsActiveSort("3")}
                >
                  New
                </span>
              </label>
              <label htmlFor="">
                <span
                  className={`${
                    activeSort === "4" ? "series-active" : ""
                  } item`}
                  onClick={() => setIsActiveSort("4")}
                >
                  Rating
                </span>
              </label>
            </div>
          </div>
        </div>
        {/* four */}
        <div className="col-12 series genre-group">
          <div className="col-12 d-flex justifty-content-between flex-column genre-group-wrapper">
            <h6 className="genre-group-title">Genre</h6>
            <div className="col-12">
              <input type="text" className="input-genre" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortMenu;
