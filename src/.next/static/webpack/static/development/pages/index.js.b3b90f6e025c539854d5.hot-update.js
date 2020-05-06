webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Box.jsx":
/*!****************************!*\
  !*** ./components/Box.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/home/michael/Desktop/Practice/take-home/src/components/Box.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Box = function Box(_ref) {
  var rowNum = _ref.rowNum,
      boxNum = _ref.boxNum,
      boxData = _ref.boxData,
      circle = _ref.circle,
      topColorRed = _ref.topColorRed,
      selectedPiece = _ref.selectedPiece,
      setSelectedPiece = _ref.setSelectedPiece,
      potentialMoves = _ref.potentialMoves,
      setPotentialMoves = _ref.setPotentialMoves;
  var evenRow = rowNum % 2 === 0;
  var evenBox = boxNum % 2 === 0;
  var boxColor = evenRow && evenBox || !evenRow && !evenBox ? "black" : "white";

  var isPotentialMove = function isPotentialMove() {
    return potentialMoves.some(function (el) {
      return el[0] === boxNum && el[1] === rowNum;
    });
  };

  if (boxData === "o") {
    return __jsx("div", {
      className: "box--".concat(boxColor),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 12
      }
    });
  }

  var pieceColor = topColorRed && boxData === "t" || !topColorRed && boxData === "b" ? "red" : "black";
  var pieceShape = circle ? "circle" : "";
  var pieceSelected = selectedPiece[0] === boxNum && selectedPiece[1] === rowNum ? "selected" : "";

  var handleSelect = function handleSelect() {
    setSelectedPiece([boxNum, rowNum]);
  };

  return __jsx("div", {
    className: "box--".concat(boxColor),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "piece--".concat(pieceColor, " ").concat(pieceShape, " ").concat(pieceSelected),
    onClick: handleSelect,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ })

})
//# sourceMappingURL=index.js.b3b90f6e025c539854d5.hot-update.js.map