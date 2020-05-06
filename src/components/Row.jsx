import Box from "./Box";

const Row = ({
  board,
  rowData,
  rowNum,
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
  return (
    <div className="row">
      {rowData.map((el, boxNum) => (
        <Box
          key={`row ${rowNum} box ${boxNum}`}
          rowNum={rowNum}
          boxData={el}
          boxNum={boxNum}
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
    </div>
  );
};

export default Row;
