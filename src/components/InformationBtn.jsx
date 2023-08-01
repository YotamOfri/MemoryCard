import { useState } from "react";

export function Information() {
  const [isVisible, setIstVisible] = useState(false);
  const handleClick = () => {
    setIstVisible((current) => (current ? false : true));
  };
  return (
    <div className="information-btn-container">
      <div className="information-btn" onClick={handleClick}>
        <i className={`bx bx-${isVisible ? "x" : "question-mark"}`}></i>
      </div>
      <div
        className={`Information-img-container ${
          isVisible ? "Information-img-container-visible" : ""
        }`}
      >
        <img
          src="https://www.pngplay.com/wp-content/uploads/13/Rick-And-Monty-Transparent-File.png"
          alt=""
        />
        <div className="information-card-container">
          <div className="info-card">
            <h1>Don&apos;t click on the same card twice!</h1>
          </div>
          <div className="info-card">
            <h1>Click on Rick And Morty logo to go back.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
