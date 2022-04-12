"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_playground"] = self["webpackChunkwebpack_playground"] || []).push([["index"],{

/***/ "./src/03_Spliting/index.js":
/*!**********************************!*\
  !*** ./src/03_Spliting/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction makeHTML() {\n    lodash__WEBPACK_IMPORTED_MODULE_0___default()(['A', 'B', 'C']).forEach((number) => {\n        const div = document.createElement(\"div\");\n        div.innerHTML = number.toString();\n        document.body.appendChild(div)\n    });\n}\n\nmakeHTML();\n\n//# sourceURL=webpack://webpack_playground/./src/03_Spliting/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/03_Spliting/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);