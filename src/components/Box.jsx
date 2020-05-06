const Box = ({
  board,
  rowNum,
  boxNum,
  boxData,
  circle,
  topColorRed,
  selectedPiece,
  setSelectedPiece,
  potentialMoves,
  setPotentialMoves,
  currentPlayer,
  setPlayer,
  setBoard,
}) => {
  const evenRow = rowNum % 2 === 0;
  const evenBox = boxNum % 2 === 0;
  const boxColor =
    (evenRow && evenBox) || (!evenRow && !evenBox) ? "black" : "white";

  const isPotentialMove = () => {
    return potentialMoves.some((el) => {
      return el[0] === boxNum && el[1] === rowNum;
    });
  };
  const potentialMove = isPotentialMove();
  const potentialClass = potentialMove ? "potential" : "";
  const [x, y] = selectedPiece;
  const handleMove = () => {
    if (!potentialMove || board[y][x] !== currentPlayer) return;
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      const newRow = [...prevBoard[rowNum]];
      newRow[boxNum] = currentPlayer;
      newBoard[rowNum] = newRow;

      newBoard[y][x] = "o";
      return newBoard;
    });
    const nextMove = currentPlayer === "t" ? "b" : "t";
    setPlayer(nextMove);
    setPotentialMoves([]);
  };
  if (boxData === "o") {
    return (
      <div
        className={`box--${boxColor} ${potentialClass}`}
        onClick={handleMove}
      />
    );
  }
  const pieceColor =
    (topColorRed && boxData === "t") || (!topColorRed && boxData === "b")
      ? "red"
      : "black";
  const pieceShape = circle ? "circle" : "";
  const pieceSelected =
    selectedPiece[0] === boxNum && selectedPiece[1] === rowNum
      ? "selected"
      : "";

  const checkMoves = (array) => {
    return array.reduce((acc, [x, y]) => {
      if (board[y][x] || board[y][x] === "o") {
        acc.push([x, y]);
      }
      return acc;
    }, []);
  };
  const handleSelect = () => {
    if (board[rowNum][boxNum] === currentPlayer) {
      setSelectedPiece([boxNum, rowNum]);
      setPotentialMoves(() => {
        const left =
          boxData === "t" ? [boxNum - 1, rowNum + 1] : [boxNum - 1, rowNum - 1];
        const right =
          boxData === "t" ? [boxNum + 1, rowNum + 1] : [boxNum + 1, rowNum - 1];
        const newPotentialMoves = checkMoves([left, right]);
        return newPotentialMoves;
      });
    }
  };
  return (
    <div className={`box--${boxColor}`}>
      <div
        className={`piece--${pieceColor} ${pieceShape} ${pieceSelected}`}
        onClick={handleSelect}
        key={`${boxNum},${rowNum}`}
      />
    </div>
  );
};

export default Box;
