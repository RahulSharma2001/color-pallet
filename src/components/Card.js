import React from "react";
import "./style.css";
import { GetColorName } from "hex-color-to-color-name";

const Card = ({ hexcode }) => {
  return (
    <div className="card">
      <div className="colorDiv" style={{ backgroundColor: hexcode }}>
        <span className="hexcode">{hexcode}</span>
      </div>
      <h2>{GetColorName(hexcode)}</h2>
    </div>
  );
};

export default Card;
