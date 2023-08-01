import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export function Board({ list, handleClick, cardImage, onChange }) {
  const generateUniqueKey = () => {
    return uuidv4();
  };
  return (
    <div className="main">
      {list.map((charcter) => {
        return (
          <div
            className="main-container"
            key={generateUniqueKey()}
            onClick={() => handleClick(charcter.id)}
          >
            <div className={`the-card card-animation ${onChange}`}>
              <div className="front">
                <img src={charcter.image} className="charcter-img" alt="" />
              </div>
              <div className="back">
                <img src={cardImage} className="charcter-img" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
