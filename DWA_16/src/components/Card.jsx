import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`./src/images/${props.img}`} className="card--image" />
      <div className="card--stats">
        <img src="./src/images/star.png" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewcount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> /person
      </p>
    </div>
  );
}
