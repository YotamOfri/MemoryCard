import { useState, useRef } from "react";
import "../styles/BackgroundMusic.css";
import "../styles/SideBtns.css";
import song from "../resources/ThemeSong.mp3";

function BackgroundMusic() {
  const [volume, setVolume] = useState(0.1);
  const [isVolume, setIsVolume] = useState(false);
  const [isSliderVisible, setSliderVisible] = useState(false);
  const audioElement = document.getElementById("backgroundAudio");
  document.addEventListener("DOMContentLoaded", function () {
    const audioElement = document.getElementById("backgroundAudio");
    audioElement.volume = volume;
  });

  const audioRef = useRef(null);
  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    const audioElement = document.getElementById("backgroundAudio");
    audioElement.addEventListener("ended", function () {
      this.currentTime = 0;
      this.play();
    });

    audioElement.volume = event.target.value;
  };
  const handleMouseEnter = () => {
    setSliderVisible(true);
  };
  const handleMouseLeave = () => {
    setSliderVisible(false);
  };
  const play = () => {
    setIsVolume((current) => (current ? false : true));
    audioElement.volume = volume;
    if (!isVolume) audioRef.current.play();
    else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };
  return (
    <div className="music-container" onMouseLeave={handleMouseLeave}>
      <audio id="backgroundAudio" ref={audioRef}>
        <source src={song} type="audio/mpeg" />
      </audio>
      {/* Volume bar */}
      <div
        className="volume-btn"
        onMouseEnter={handleMouseEnter}
        onClick={play}
      >
        <i
          className={`bx bx-volume${
            !isVolume
              ? "-mute"
              : volume >= 0.5
              ? "-full"
              : volume <= 0.1
              ? ""
              : "-low"
          }`}
        ></i>
      </div>
      <div
        className="volumebar-container"
        id={`${isSliderVisible && isVolume ? "sliderVisable" : ""}`}
      >
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="volume-bar"
        />
      </div>
    </div>
  );
}

export default BackgroundMusic;
