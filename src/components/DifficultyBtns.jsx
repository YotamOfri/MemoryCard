import "../styles/DifficultyBtns.css";
export function DifficultyBtns({ setDifficulty }) {
  const handleClick = (difficulty) => () => {
    setDifficulty(difficulty);
  };
  return (
    <div className="difficulty-btn-container">
      <button className="difficulty-btn" onClick={handleClick(5)}>
        <img
          className="difficulty-image"
          src="https://wallpapers.com/images/featured/rick-and-morty-8rc57d4ds44gqzau.jpg"
          alt=""
        />
        <h1>Easy</h1>
      </button>
      <button className="difficulty-btn" onClick={handleClick(10)}>
        <img
          className="difficulty-image"
          src="https://w0.peakpx.com/wallpaper/150/419/HD-wallpaper-rick-and-morty.jpg"
          alt=""
        />
        <h1>Medium</h1>
      </button>
      <button className="difficulty-btn" onClick={handleClick(15)}>
        {" "}
        <img
          className="difficulty-image"
          src="https://image.winudf.com/v2/image1/Y29tLnNnbW9iaWxlLnJpY2thbmRtb3J0eV9zY3JlZW5fM18xNTc3NzI5OTkwXzA0OQ/screen-0.webp?fakeurl=1&type=.webp"
          alt=""
        />
        <h1>Hard</h1>
      </button>
    </div>
  );
}
