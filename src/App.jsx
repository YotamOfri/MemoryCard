import { useEffect, useState } from "react";
import "./styles/Card.css";
import "./styles/App.css";
import VideoBackground from "./components/VideoBackground";
import { CardList } from "./components/CardList";
import BackgroundMusic from "./components/BackgroundMusic";
import { Information } from "./components/InformationBtn";
import { SideBtns } from "./components/SideBtns";
import { Logo } from "./components/Logo";
import { DifficultyBtns } from "./components/DifficultyBtns";

function App() {
  const baseUrl = "https://rickandmortyapi.com/api/character/";
  const [characterList, setCharacterList] = useState([]);
  const [difficulty, setDifficulty] = useState(false);
  useEffect(() => {
    for (let index = 1; index < 20; index++) {
      fetch(baseUrl + `${index}`)
        .then((response) => response.json())
        .then((json) => setCharacterList((current) => [...current, json]));
    }
  }, [baseUrl]);
  return (
    <div className="app">
      {difficulty ? (
        <CardList
          characterList={characterList}
          difficulty={difficulty}
        ></CardList>
      ) : (
        <DifficultyBtns setDifficulty={setDifficulty}></DifficultyBtns>
      )}
      {/* Background Stuff */}
      <Logo></Logo>
      <VideoBackground></VideoBackground>
      <SideBtns></SideBtns>
    </div>
  );
}

export default App;
