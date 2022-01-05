"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_playground"] = self["webpackChunkwebpack_playground"] || []).push([["test"],{

/***/ "./test.js":
/*!*****************!*\
  !*** ./test.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.js */ \"./module.js\");\n\n\nfunction makeDocument() {\n    const div = document.createElement('div');\n    div.append((0,_module_js__WEBPACK_IMPORTED_MODULE_0__.getHello)('World'))\n    document.body.append(div);\n}\n\nmakeDocument();\n\n//# sourceURL=webpack://webpack_playground/./test.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./test.js"));
/******/ }
]);