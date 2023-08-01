import { useState } from "react";
import cardImage from "../resources/card.jpg";
import "../styles/board.css";
import { Board } from "./Board";
import { LosePage } from "./LosePage";
import { WinPage } from "./WinPage";
export function CardList({ characterList, difficulty }) {
  // Vars
  const cards = characterList.slice(0, difficulty);
  const [clickedList, setClickedList] = useState([]);
  const [onChange, setOnChange] = useState("");
  const [endGame, setEndGame] = useState(false);
  // functions
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const randomClickedCard = () => {
    let Isone = false;
    let tempList = [];
    while (true) {
      let randomNumber = getRandomInt(0, cards.length - 1);
      if (!tempList.includes(randomNumber)) tempList.push(randomNumber);
      else continue;
      if (!clickedList.includes(randomNumber)) Isone = true;
      if (tempList.length === 3) {
        if (Isone) break;
        else tempList = [];
      }
    }
    return tempList.map((number) => cards[number]);
  };
  const handleClick = (id) => {
    if (clickedList.includes(id - 1)) return setEndGame("lost");
    if (clickedList.length + 1 === cards.length) return setEndGame("won");
    clickedList.push(id - 1);
    setOnChange("X");
    setTimeout(() => {
      setOnChange("");
      setList([...randomClickedCard()]);
    }, 1000);
  };
  const [list, setList] = useState([...randomClickedCard()]);
  return (
    <div className="board-container">
      {endGame === "lost" ? (
        <LosePage></LosePage>
      ) : endGame === "won" ? (
        <WinPage></WinPage>
      ) : (
        ""
      )}
      <Board
        list={list}
        handleClick={handleClick}
        cardImage={cardImage}
        onChange={onChange}
      ></Board>
      <div className="score-container">
        <h1>
          {clickedList.length} / {difficulty}
        </h1>
      </div>
    </div>
  );
}
