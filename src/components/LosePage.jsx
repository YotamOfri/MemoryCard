import "../styles/EndPage.css";
export function LosePage() {
  return (
    <div className="endPage">
      <div className="Lost">
        <h1>You Lose</h1>
        <button className="rest-btn">
          <a href="index.html">Restart</a>
        </button>
      </div>
    </div>
  );
}
