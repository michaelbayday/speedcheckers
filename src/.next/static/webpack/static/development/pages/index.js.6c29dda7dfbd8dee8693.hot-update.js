webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Row.jsx":
/*!****************************!*\
  !*** ./components/Row.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Box */ "./components/Box.jsx");
var _this = undefined,
    _jsxFileName = "/home/michael/Desktop/Practice/take-home/src/components/Row.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Row = function Row(_ref) {
  var rowData = _ref.rowData,
      rowNum = _ref.rowNum,
      circle = _ref.circle,
      topColorRed = _ref.topColorRed,
      selectedPiece = _ref.selectedPiece,
      setSelectedPiece = _ref.setSelectedPiece;
  return __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, rowData.map(function (el, boxNum) {
    return __jsx(_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
      rowNum: rowNum,
      boxData: el,
      boxNum: boxNum,
      circle: circle,
      topColorRed: topColorRed,
      selectedPiece: selectedPiece,
      setSelectedPiece: setSelectedPiece,
      potentialMoves: potentialMoves,
      setPotentialMoves: setPotentialMoves,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Row);

/***/ })

})
//# sourceMappingURL=index.js.6c29dda7dfbd8dee8693.hot-update.js.map