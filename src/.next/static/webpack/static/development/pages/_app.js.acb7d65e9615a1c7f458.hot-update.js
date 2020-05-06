webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/styles.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/styles.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".main .row {\n  display: flex;\n  flex-direction: row;\n}\n.main .row .box, .main .row .piece--black, .main .row .box--black, .main .row .box--white {\n  width: 100px;\n  height: 100px;\n}\n.main .row .box--white {\n  background-color: white;\n}\n.main .row .box--black {\n  background-color: black;\n}\n.main .row .piece, .main .row .piece--red {\n  width: 80px;\n  height: 80px;\n  border-radius: 40px;\n}\n.main .row .piece--red {\n  background-color: white;\n}\n.main .row .piece--black {\n  background-color: black;\n}", "",{"version":3,"sources":["/home/michael/Desktop/Practice/take-home/src/styles/styles.scss"],"names":[],"mappings":"AACE;EACE,aAAA;EACA,mBAAA;AAAJ;AACI;EACE,YAAA;EACA,aAAA;AACN;AAAM;EAEE,uBAAA;AACR;AACM;EAEE,uBAAA;AAAR;AAGI;EACE,WAAA;EACA,YAAA;EACA,mBAAA;AADN;AAEM;EAEE,uBAAA;AADR;AAGM;EAEE,uBAAA;AAFR","file":"styles.scss","sourcesContent":[".main {\n  .row {\n    display: flex;\n    flex-direction: row;\n    .box {\n      width: 100px;\n      height: 100px;\n      &--white {\n        @extend .box;\n        background-color: white;\n      }\n      &--black {\n        @extend .box;\n        background-color: black;\n      }\n    }\n    .piece {\n      width: 80px;\n      height: 80px;\n      border-radius: 40px;\n      &--red {\n        @extend .piece;\n        background-color: white;\n      }\n      &--black {\n        @extend .box;\n        background-color: black;\n      }\n    }\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=_app.js.acb7d65e9615a1c7f458.hot-update.js.map