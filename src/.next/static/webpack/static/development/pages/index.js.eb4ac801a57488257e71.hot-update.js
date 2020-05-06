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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var savedGame = JSON.parse(localStorage.getItem("board"));
    console.log(savedGame);
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
  }, [rowNums]);

  var saveGame = function saveGame() {
    localStorage.setItem("board", JSON.stringify(board));
  };

  return __jsx("div", {
    className: "main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
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
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx("button", {
    onClick: function onClick() {
      setRowNum(inputRows);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "Submit"), __jsx("div", {
    className: "toggles",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "shape-toggle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "Select your shape"), __jsx("div", {
    className: "toggles",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
      lineNumber: 58,
      columnNumber: 13
    }
  }), __jsx("label", {
    htmlFor: "circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
      lineNumber: 68,
      columnNumber: 13
    }
  }), __jsx("label", {
    htmlFor: "square",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "Square"))), __jsx("div", {
    className: "color-toggles",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, "Choose the top player's color"), __jsx("div", {
    className: "toggles",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
      lineNumber: 82,
      columnNumber: 13
    }
  }), __jsx("label", {
    htmlFor: "circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 92,
      columnNumber: 13
    }
  }), __jsx("label", {
    htmlFor: "square",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
        lineNumber: 105,
        columnNumber: 9
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.eb4ac801a57488257e71.hot-update.js.map