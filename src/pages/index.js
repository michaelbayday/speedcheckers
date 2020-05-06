import { useState, useEffect } from "react";
import Row from "../components/Row";

const App = () => {
  const [rowNums, setRowNum] = useState(8);
  const [inputRows, setInput] = useState(8);
  const [board, setBoard] = useState([]);
  const [circle, setShape] = useState(true);
  const [topColorRed, setTopColor] = useState(true);
  const [selectedPiece, setSelectedPiece] = useState([]);
  const [potentialMoves, setPotentialMoves] = useState([]);
  const [currentPlayer, setPlayer] = useState("t");
  const [resetGame, setReset] = useState(false);
  useEffect(() => {
    const savedGame = JSON.parse(localStorage.getItem("board"));
    if (!savedGame) {
      setBoard(() => {
        const newBoard = [];
        for (let i = 0; i < rowNums; i++) {
          newBoard.push([]);
          for (let j = 0; j < rowNums; j++) {
            if (i <= 1) {
              newBoard[i].push("t");
            } else if (i >= rowNums - 2) {
              newBoard[i].push("b");
            } else {
              newBoard[i].push("o");
            }
          }
        }
        return newBoard;
      });
    } else {
      setBoard(() => savedGame);
    }
  }, [rowNums, resetGame]);

  const saveGame = () => {
    localStorage.setItem("board", JSON.stringify(board));
  };
  return (
    <div className="main">
      <div>
        <h3>Number of Board Rows</h3>
        <input
          type="number"
          value={inputRows}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setRowNum(inputRows);
          }}
        >
          Submit
        </button>
      </div>
      <div className="toggles">
        <div className="shape-toggle">
          <h3>Select your shape</h3>
          <div className="toggles">
            <input
              type="radio"
              name="shape"
              value={true}
              onChange={() => {
                setShape(true);
              }}
              defaultChecked
            />
            <label htmlFor="circle">Circle</label>
            <input
              type="radio"
              name="shape"
              value={false}
              onChange={() => {
                setShape(false);
              }}
            />
            <label htmlFor="square">Square</label>
          </div>
        </div>
        <div className="color-toggles">
          <h3>Choose the top player's color</h3>
          <div className="toggles">
            <input
              type="radio"
              name="color"
              value={true}
              onChange={() => {
                setTopColor(true);
              }}
              defaultChecked
            />
            <label htmlFor="circle">Red</label>
            <input
              type="radio"
              name="color"
              value={false}
              onChange={() => {
                setTopColor(false);
              }}
            />
            <label htmlFor="square">Black</label>
          </div>
        </div>
      </div>
      {board.map((el, rowNum) => (
        <Row
          key={rowNum}
          rowData={el}
          rowNum={rowNum}
          circle={circle}
          topColorRed={topColorRed}
          selectedPiece={selectedPiece}
          setSelectedPiece={setSelectedPiece}
          potentialMoves={potentialMoves}
          setPotentialMoves={setPotentialMoves}
          board={board}
          currentPlayer={currentPlayer}
          setPlayer={setPlayer}
          setBoard={setBoard}
        />
      ))}
      <div className="game-management">
        <h3>Game management</h3>
        <button onClick={saveGame}>Save Game</button>
        <button
          onClick={() => {
            localStorage.removeItem("board");
            setReset(!resetGame);
          }}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default App;
