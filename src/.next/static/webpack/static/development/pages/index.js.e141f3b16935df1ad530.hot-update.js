webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Row */ "./components/Row.jsx");
var _this = undefined,
    _jsxFileName = "/home/michael/Desktop/Practice/take-home/src/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var App = function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(8),
      rowNums = _useState[0],
      setRowNum = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(8),
      inputRows = _useState2[0],
      setInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      board = _useState3[0],
      setBoard = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      circle = _useState4[0],
      setShape = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      topColorRed = _useState5[0],
      setTopColor = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      selectedPiece = _useState6[0],
      setSelectedPiece = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      potentialMoves = _useState7[0],
      setPotentialMoves = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("t"),
      currentPlayer = _useState8[0],
      setPlayer = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      resetGame = _useState9[0],
      setReset = _useState9[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var savedGame = JSON.parse(localStorage.getItem("board"));

    if (!savedGame) {
      setBoard(function () {
        var newBoard = [];

        for (var i = 0; i < rowNums; i++) {
          newBoard.push([]);

          for (var j = 0; j < rowNums; j++) {
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
      setBoard(savedGame);
    }
  }, [rowNums, resetGame]);

  var saveGame = function saveGame() {
    localStorage.setItem("board", JSON.stringify(board));
  };

  return __jsx("div", {
    className: "main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Number of Board Rows"), __jsx("input", {
    type: "number",
    value: inputRows,
    onChange: function onChange(e) {
      setInput(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), __jsx("button", {
    onClick: function onClick() {
      setRowNum(inputRows);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "Submit")), __jsx("div", {
    className: "toggles",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "shape-toggle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, "Select your shape"), __jsx("div", {
    className: "toggles",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "radio",
    name: "shape",
    value: true,
    onChange: function onChange() {
      setShape(true);
    },
    defaultChecked: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), __jsx("label", {
    htmlFor: "circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "Circle"), __jsx("input", {
    type: "radio",
    name: "shape",
    value: false,
    onChange: function onChange() {
      setShape(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }), __jsx("label", {
    htmlFor: "square",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, "Square"))), __jsx("div", {
    className: "color-toggles",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, "Choose the top player's color"), __jsx("div", {
    className: "toggles",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "radio",
    name: "color",
    value: true,
    onChange: function onChange() {
      setTopColor(true);
    },
    defaultChecked: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }), __jsx("label", {
    htmlFor: "circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, "Red"), __jsx("input", {
    type: "radio",
    name: "color",
    value: false,
    onChange: function onChange() {
      setTopColor(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }), __jsx("label", {
    htmlFor: "square",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, "Black")))), board.map(function (el, rowNum) {
    return __jsx(_components_Row__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: rowNum,
      rowData: el,
      rowNum: rowNum,
      circle: circle,
      topColorRed: topColorRed,
      selectedPiece: selectedPiece,
      setSelectedPiece: setSelectedPiece,
      potentialMoves: potentialMoves,
      setPotentialMoves: setPotentialMoves,
      board: board,
      currentPlayer: currentPlayer,
      setPlayer: setPlayer,
      setBoard: setBoard,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }
    });
  }), __jsx("div", {
    className: "game-management",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, "Game management"), __jsx("button", {
    onClick: saveGame,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, "Save Game"), __jsx("button", {
    onClick: function onClick() {
      localStorage.removeItem("board");
      setReset(!resetGame);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, "Reset Game")));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.e141f3b16935df1ad530.hot-update.js.map