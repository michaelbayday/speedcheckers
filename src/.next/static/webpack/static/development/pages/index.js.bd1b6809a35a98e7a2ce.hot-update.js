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
      boxData = _ref.boxData;
  var evenRow = rowNum % 2 === 0;
  var evenBox = boxNum % 2 === 0;
  var boxColor = "white";

  if (evenRow) {
    if (evenBox) {
      boxColor = "black";
    }
  } else {
    if (!evenBox) {
      boxColor = "black";
    }
  }

  return __jsx("div", {
    className: "box--".concat(boxColor),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ })

})
//# sourceMappingURL=index.js.bd1b6809a35a98e7a2ce.hot-update.js.map