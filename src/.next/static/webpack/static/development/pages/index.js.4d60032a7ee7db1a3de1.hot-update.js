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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      circle = _useState4[0],
      setShape = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      topColorRed = _useState5[0],
      setTopColor = _useState5[1];

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
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx("button", {
    onClick: function onClick() {
      setRowNum(inputRows);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, "Submit"), __jsx("div", {
    className: "toggles",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "Select your shape"), __jsx("div", {
    className: "shape-toggle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
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
      lineNumber: 48,
      columnNumber: 11
    }
  }), __jsx("label", {
    "for": "circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
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
      lineNumber: 58,
      columnNumber: 11
    }
  }), __jsx("label", {
    "for": "square",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, "Square")), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, "Choose the top player's color"), __jsx("div", {
    className: "color-toggle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
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
      lineNumber: 70,
      columnNumber: 11
    }
  }), __jsx("label", {
    "for": "circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
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
      lineNumber: 80,
      columnNumber: 11
    }
  }), __jsx("label", {
    "for": "square",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, "Black"))), board.map(function (el, rowNum) {
    return __jsx(_components_Row__WEBPACK_IMPORTED_MODULE_1__["default"], {
      rowData: el,
      rowNum: rowNum,
      circle: circle,
      topColorRed: topColorRed,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.4d60032a7ee7db1a3de1.hot-update.js.map