import "../styles/EndPage.css";
export function WinPage() {
  return (
    <div className="endPage">
      <div className="Won">
        <h1>You Win</h1>
        <button className="rest-btn">
          <a href="index.html">Restart</a>
        </button>
      </div>
    </div>
  );
}
