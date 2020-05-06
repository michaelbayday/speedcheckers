webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Box.jsx":
/*!****************************!*\
  !*** ./components/Box.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "/home/michael/Desktop/Practice/take-home/src/components/Box.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

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
      setPotentialMoves = _ref.setPotentialMoves;
  var evenRow = rowNum % 2 === 0;
  var evenBox = boxNum % 2 === 0;
  var boxColor = evenRow && evenBox || !evenRow && !evenBox ? "black" : "white";

  var isPotentialMove = function isPotentialMove() {
    return potentialMoves.some(function (el) {
      return el[0] === boxNum && el[1] === rowNum;
    });
  };

  var potentialMove = isPotentialMove() ? "potential" : "";

  if (boxData === "o") {
    return __jsx("div", {
      className: "box--".concat(boxColor, " ").concat(potentialMove),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 12
      }
    });
  }

  var pieceColor = topColorRed && boxData === "t" || !topColorRed && boxData === "b" ? "red" : "black";
  var pieceShape = circle ? "circle" : "";
  var pieceSelected = selectedPiece[0] === boxNum && selectedPiece[1] === rowNum ? "selected" : "";

  var checkMoves = function checkMoves(array) {
    return array.reduce(function (acc, _ref2) {
      var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
          x = _ref3[0],
          y = _ref3[1];

      if (x >= 0 || x < board.length || board[y][x] === "o") {
        acc.push([x, y]);
      }

      return acc;
    }, []);
  };

  var handleSelect = function handleSelect() {
    setSelectedPiece([boxNum, rowNum]);
    setPotentialMoves(function () {
      if (boxData === "t") {
        var left = [boxNum - 1, rowNum + 1];
        var right = [boxNum + 1, rowNum + 1];

        var _newPotentialMoves = checkMoves([left, right]);

        if (boxNum === 0) {
          _newPotentialMoves.push(left);
        } else if (boxNum === board.length - 1) {
          _newPotentialMoves.push(right);
        } else {
          _newPotentialMoves.push(left);

          _newPotentialMoves.push(right);
        }
      } else if (boxData === "b") {
        var _left = [boxNum - 1, rowNum - 1];
        var _right = [boxNum + 1, rowNum - 1];

        var _newPotentialMoves2 = checkMoves([_left, _right]);

        if (boxNum === 0) {
          _newPotentialMoves2.push(_right);
        } else if (boxNum === board.length - 1) {
          _newPotentialMoves2.push(_left);
        } else {
          _newPotentialMoves2.push(_left);

          _newPotentialMoves2.push(_right);
        }
      }

      return newPotentialMoves;
    });
  };

  return __jsx("div", {
    className: "box--".concat(boxColor),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "piece--".concat(pieceColor, " ").concat(pieceShape, " ").concat(pieceSelected),
    onClick: handleSelect,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ })

})
//# sourceMappingURL=index.js.554a098e45db571f594c.hot-update.js.map