import React from "react";
import "./Card.css";

function Card({ caption, src, currNum, totalNum }) {
  return (
    <div className="Card">
      <img src={src} alt={caption} />
      <p>{caption}</p>
      <p>
        Image {currNum} of {totalNum}
      </p>
    </div>
  );
}

export default Card;
