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
      rowNum = _useState[0],
      setRowNum = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(8),
      inputRows = _useState2[0],
      setInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      board = _useState3[0],
      setBoard = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setBoard(function () {
      var newBoard = [];

      for (var i = 0; i < rowNum; i++) {
        newBoard.push([]);

        for (var j = 0; j < rowNum; j++) {
          if (i <= 1) {
            newBoard[i].push("t");
          } else if (i >= rowNum - 2) {
            newBoard[i].push("b");
          } else {
            newBoard[i].push("o");
          }
        }
      }

      return newBoard;
    });
  }, [rowNum]);
  return __jsx("div", {
    className: "main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx("button", {
    onClick: function onClick() {
      setRowNum(inputRows);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "Submit"), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "Select your shape"), __jsx("div", {
    className: "shape-toggle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "radio",
    name: "circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), __jsx("label", {
    "for": "circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "Circle"), __jsx("input", {
    type: "radio",
    name: "square",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx("label", {
    "for": "square",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "Square")), board.map(function (el, rowNum) {
    return __jsx(_components_Row__WEBPACK_IMPORTED_MODULE_1__["default"], {
      rowData: el,
      rowNum: rowNum,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.e639d25f9df09a38d4f3.hot-update.js.map