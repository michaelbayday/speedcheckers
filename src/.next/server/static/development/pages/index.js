module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Box.jsx":
/*!****************************!*\
  !*** ./components/Box.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/michael/Desktop/Practice/take-home/src/components/Box.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

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
  setBoard
}) => {
  const evenRow = rowNum % 2 === 0;
  const evenBox = boxNum % 2 === 0;
  const boxColor = evenRow && evenBox || !evenRow && !evenBox ? "black" : "white";

  const isPotentialMove = () => {
    return potentialMoves.some(el => {
      return el[0] === boxNum && el[1] === rowNum;
    });
  };

  const potentialMove = isPotentialMove();
  const potentialClass = potentialMove ? "potential" : "";
  const [x, y] = selectedPiece;

  const handleMove = () => {
    if (!potentialMove || board[y][x] !== currentPlayer) return;
    setBoard(prevBoard => {
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
    return __jsx("div", {
      className: `box--${boxColor} ${potentialClass}`,
      onClick: handleMove,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }
    });
  }

  const pieceColor = topColorRed && boxData === "t" || !topColorRed && boxData === "b" ? "red" : "black";
  const pieceShape = circle ? "circle" : "";
  const pieceSelected = selectedPiece[0] === boxNum && selectedPiece[1] === rowNum ? "selected" : "";

  const checkMoves = array => {
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
        const left = boxData === "t" ? [boxNum - 1, rowNum + 1] : [boxNum - 1, rowNum - 1];
        const right = boxData === "t" ? [boxNum + 1, rowNum + 1] : [boxNum + 1, rowNum - 1];
        const newPotentialMoves = checkMoves([left, right]);
        return newPotentialMoves;
      });
    }
  };

  return __jsx("div", {
    className: `box--${boxColor}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: `piece--${pieceColor} ${pieceShape} ${pieceSelected}`,
    onClick: handleSelect,
    key: `${boxNum},${rowNum}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ }),

/***/ "./components/Row.jsx":
/*!****************************!*\
  !*** ./components/Row.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Box */ "./components/Box.jsx");
var _jsxFileName = "/home/michael/Desktop/Practice/take-home/src/components/Row.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


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
  setBoard
}) => {
  return __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, rowData.map((el, boxNum) => __jsx(_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: `row ${rowNum} box ${boxNum}`,
    rowNum: rowNum,
    boxData: el,
    boxNum: boxNum,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Row);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Row */ "./components/Row.jsx");
var _jsxFileName = "/home/michael/Desktop/Practice/take-home/src/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const App = () => {
  const {
    0: rowNums,
    1: setRowNum
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(8);
  const {
    0: inputRows,
    1: setInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(8);
  const {
    0: board,
    1: setBoard
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: circle,
    1: setShape
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: topColorRed,
    1: setTopColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: selectedPiece,
    1: setSelectedPiece
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: potentialMoves,
    1: setPotentialMoves
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: currentPlayer,
    1: setPlayer
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("t");
  const {
    0: resetGame,
    1: setReset
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
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

  return __jsx("div", {
    className: "main",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "Number of Board Rows"), __jsx("input", {
    type: "number",
    value: inputRows,
    onChange: e => {
      setInput(e.target.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), __jsx("button", {
    onClick: () => {
      setRowNum(inputRows);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "Submit")), __jsx("div", {
    className: "toggles",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "shape-toggle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, "Select your shape"), __jsx("div", {
    className: "toggles",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "radio",
    name: "shape",
    value: true,
    onChange: () => {
      setShape(true);
    },
    defaultChecked: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }), __jsx("label", {
    htmlFor: "circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, "Circle"), __jsx("input", {
    type: "radio",
    name: "shape",
    value: false,
    onChange: () => {
      setShape(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }), __jsx("label", {
    htmlFor: "square",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "Square"))), __jsx("div", {
    className: "color-toggles",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, "Choose the top player's color"), __jsx("div", {
    className: "toggles",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "radio",
    name: "color",
    value: true,
    onChange: () => {
      setTopColor(true);
    },
    defaultChecked: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }), __jsx("label", {
    htmlFor: "circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, "Red"), __jsx("input", {
    type: "radio",
    name: "color",
    value: false,
    onChange: () => {
      setTopColor(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }), __jsx("label", {
    htmlFor: "square",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, "Black")))), board.map((el, rowNum) => __jsx(_components_Row__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "game-management",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, "Game management"), __jsx("button", {
    onClick: saveGame,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, "Save Game"), __jsx("button", {
    onClick: () => {
      localStorage.removeItem("board");
      setReset(!resetGame);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, "Reset Game")));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/michael/Desktop/Practice/take-home/src/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map