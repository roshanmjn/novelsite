import React from "react";
import amiya from "../images/img1.jpg";
import amiya1 from "../images/img2.png";
import amiya2 from "../images/img3.png";
import amiya3 from "../images/img4.png";

const imageWeekData = [
  {
    imgsrc: amiya,
    title: "Doktah",
    rating: "80%",
  },
  {
    imgsrc: amiya1,
    title: "Amiya",
    rating: "80%",
  },
  {
    imgsrc: amiya2,
    title: "Date",
    rating: "80%",
  },
  {
    imgsrc: amiya3,
    title: "Risky",
    rating: "80%",
  },
  {
    imgsrc: amiya1,
    title: "Amiya",
    rating: "80%",
  },
  {
    imgsrc: amiya2,
    title: "Date",
    rating: "80%",
  },
];

const PopularItemWeek = (props) => {
  return (
    <>
      <div className="col-4 col-lg-2 d-flex flex-column justify-content-between align-items-center weekly-popular ">
        <img src={props.imgsrc} alt="asd" />
        <span>{props.title}</span>
        <span>{props.rating}</span>
      </div>
    </>
  );
};

export { imageWeekData, PopularItemWeek };
