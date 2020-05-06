webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Box.jsx":
/*!****************************!*\
  !*** ./components/Box.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _this = undefined,
    _jsxFileName = "/home/michael/Desktop/Practice/take-home/src/components/Box.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

var Box = function Box(_ref) {
  var board = _ref.board,
      rowNum = _ref.rowNum,
      boxNum = _ref.boxNum,
      boxData = _ref.boxData,
      circle = _ref.circle,
      topColorRed = _ref.topColorRed,
      selectedPiece = _ref.selectedPiece,
      setSelectedPiece = _ref.setSelectedPiece,
      potentialMoves = _ref.potentialMoves,
      setPotentialMoves = _ref.setPotentialMoves,
      currentPlayer = _ref.currentPlayer,
      setPlayer = _ref.setPlayer,
      setBoard = _ref.setBoard;
  var evenRow = rowNum % 2 === 0;
  var evenBox = boxNum % 2 === 0;
  var boxColor = evenRow && evenBox || !evenRow && !evenBox ? "black" : "white";

  var isPotentialMove = function isPotentialMove() {
    return potentialMoves.some(function (el) {
      return el[0] === boxNum && el[1] === rowNum;
    });
  };

  var potentialMove = isPotentialMove();
  var potentialClass = potentialMove ? "potential" : "";

  var _selectedPiece = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(selectedPiece, 2),
      x = _selectedPiece[0],
      y = _selectedPiece[1];

  console.log(x, y);

  var handleMove = function handleMove() {
    console.log(board[y][x]);
    if (!potentialMove || board[y][x] !== currentPlayer) return;
    setBoard(function (prevBoard) {
      var newBoard = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prevBoard);

      var newRow = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prevBoard[rowNum]);

      newRow[boxNum] = currentPlayer;
      newBoard[rowNum] = newRow;
      newBoard[y][x] = "o";
      return newBoard;
    });
    var nextMove = currentPlayer === "t" ? "b" : "t";
    setPlayer(nextMove);
    setPotentialMoves([]);
  };

  if (boxData === "o") {
    return __jsx("div", {
      className: "box--".concat(boxColor, " ").concat(potentialClass),
      onClick: handleMove,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }
    });
  }

  var pieceColor = topColorRed && boxData === "t" || !topColorRed && boxData === "b" ? "red" : "black";
  var pieceShape = circle ? "circle" : "";
  var pieceSelected = selectedPiece[0] === boxNum && selectedPiece[1] === rowNum ? "selected" : "";

  var checkMoves = function checkMoves(array) {
    return array.reduce(function (acc, _ref2) {
      var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, 2),
          x = _ref3[0],
          y = _ref3[1];

      if (board[y][x] || board[y][x] === "o") {
        acc.push([x, y]);
      }

      return acc;
    }, []);
  };

  var handleSelect = function handleSelect() {
    setSelectedPiece([boxNum, rowNum]);
    setPotentialMoves(function () {
      var left = boxData === "t" ? [boxNum - 1, rowNum + 1] : [boxNum - 1, rowNum - 1];
      var right = boxData === "t" ? [boxNum + 1, rowNum + 1] : [boxNum + 1, rowNum - 1];
      var newPotentialMoves = checkMoves([left, right]);
      return newPotentialMoves;
    });
  };

  return __jsx("div", {
    className: "box--".concat(boxColor),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "piece--".concat(pieceColor, " ").concat(pieceShape, " ").concat(pieceSelected),
    onClick: handleSelect,
    key: "".concat(boxNum, ",").concat(rowNum),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ })

})
//# sourceMappingURL=index.js.880b0681c9b58b3c33c5.hot-update.js.map