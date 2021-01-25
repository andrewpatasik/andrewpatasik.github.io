/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/cv.css":
/*!***************************!*\
  !*** ./src/styles/cv.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://andrewpatasik.github.io/./src/styles/cv.css?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://andrewpatasik.github.io/./src/styles/style.css?");

/***/ }),

/***/ "./src/styles/utilities.css":
/*!**********************************!*\
  !*** ./src/styles/utilities.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://andrewpatasik.github.io/./src/styles/utilities.css?");

/***/ }),

/***/ "./src/images/project-1.png":
/*!**********************************!*\
  !*** ./src/images/project-1.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/project-1.png\";\n\n//# sourceURL=webpack://andrewpatasik.github.io/./src/images/project-1.png?");

/***/ }),

/***/ "./src/images/project-2.png":
/*!**********************************!*\
  !*** ./src/images/project-2.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/project-2.png\";\n\n//# sourceURL=webpack://andrewpatasik.github.io/./src/images/project-2.png?");

/***/ }),

/***/ "./src/images/project-3.png":
/*!**********************************!*\
  !*** ./src/images/project-3.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/project-3.png\";\n\n//# sourceURL=webpack://andrewpatasik.github.io/./src/images/project-3.png?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _typing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typing */ \"./src/js/typing.js\");\n/* harmony import */ var _styles_utilities_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/utilities.css */ \"./src/styles/utilities.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_cv_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/cv.css */ \"./src/styles/cv.css\");\n/* harmony import */ var _images_project_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/project-1.png */ \"./src/images/project-1.png\");\n/* harmony import */ var _images_project_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/project-2.png */ \"./src/images/project-2.png\");\n/* harmony import */ var _images_project_3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/project-3.png */ \"./src/images/project-3.png\");\n\n\n// CSS\n\n\n\n\n\n// Asset\n\n\n\n\n\n(0,_typing__WEBPACK_IMPORTED_MODULE_0__.default)();\n\nlet list1 = document.getElementById('li_blog');\nlet list2 = document.getElementById('li_project');\nlet list3 = document.getElementById('li_cv');\nlet navigation = document.querySelector('.navigation');\nlet navbar = document.getElementById('navbar');\nlet project1 = document.getElementById('project-1');\nlet project2 = document.getElementById('project-2');\nlet project3 = document.getElementById('project-3');\nlet pItem1 = document.getElementById('p-item-1');\nlet pItem2 = document.getElementById('p-item-2');\nlet pItem3 = document.getElementById('p-item-3');\nlet dropdownBtn = document.getElementById('dropdown-btn');\nlet dropdownItem = document.getElementById('dropdown-item');\nlet screenWidth = window.outerWidth;\n\nfunction phoneScreen() {\n    // let ic1 = document.createElement('i');\n    // ic1.classList.add('fa');\n    // ic1.classList.add('fa-pencil-square-o');\n    // ic1.setAttribute('aria-hidden', 'true');\n    // let ic2 = document.createElement('i');\n    // ic2.classList.add('fas');\n    // ic2.classList.add('fa-code');\n    // let ic3 = document.createElement('i');\n    // ic3.classList.add('far');\n    // ic3.classList.add('fa-id-badge');\n\n    if (screenWidth <= 650) {\n        // list1.innerHTML = '';\n        // list2.innerHTML = '';\n        // list3.innerHTML = '';\n\n        // list1.appendChild(ic1);\n        // list2.appendChild(ic2);\n        // list3.appendChild(ic3);\n\n        list2.classList.add('hid');\n        list1.classList.add('hid');\n        list3.classList.add('hid');\n        dropdownItem.getElementsByTagName('DIV')[0].classList.add('hid');\n    }\n    // console.log(screenWidth);\n}\n\nwindow.addEventListener('resize', () => {\n    var w = window.innerWidth;\n\n    if (w <= 720) {\n        list2.classList.add('hid');\n        list1.classList.add('hid');\n        list3.classList.add('hid');\n        dropdownItem.getElementsByTagName('DIV')[0].classList.add('hid');\n    } else if (w > 720){\n        list2.classList.remove('hid');\n        list1.classList.remove('hid');\n        list3.classList.remove('hid');\n        dropdownItem.getElementsByTagName('DIV')[0].classList.remove('hid');\n    }\n\n})\n\n\n// if scroll, focus\n// let isScrolling;\n// window.addEventListener('scroll', (e) => {\n//     // focus navbar when scrolling\n//     navbar.classList.add('focus');\n//     // clear timeout event\n//     window.clearTimeout(isScrolling);\n//     //timeout event to blur navbar if not scrolling\n//     isScrolling = setTimeout(() => {\n//         navbar.classList.remove('focus');\n//     }, 1000);\n// })\n\nphoneScreen();\n\nproject1.addEventListener('mouseover', () => {\n    pItem1.classList.add('show');\n}, false);\n\nproject1.addEventListener('mouseout', () => {\n    pItem1.classList.remove('show');\n}, false);\n\nproject2.addEventListener('mouseover', () => {\n    pItem2.classList.add('show');\n}, false);\n\nproject2.addEventListener('mouseout', () => {\n    pItem2.classList.remove('show');\n\n}, false);\n\nproject3.addEventListener('mouseover', () => {\n    pItem3.classList.add('show');\n}, false);\n\nproject3.addEventListener('mouseout', () => {\n    pItem3.classList.remove('show');\n}, false);\n\ndropdownBtn.addEventListener('click', (e) => {\n    list1.classList.toggle('hid');\n    list2.classList.toggle('hid');\n    list3.classList.toggle('hid');\n    dropdownItem.getElementsByTagName('DIV')[0].classList.toggle('hid');\n    // console.log(dropdownItem.getElementsByTagName('DIV'));\n});\n\nwindow.addEventListener('click', (e) => {\n    var w = window.outerWidth;\n    if(w <= 650) {\n        if (e.target !== dropdownBtn) {\n            list1.classList.add('hid');\n            list2.classList.add('hid');\n            list3.classList.add('hid');\n                dropdownItem.getElementsByTagName('DIV')[0].classList.add('hid');\n            }\n    }\n})\n\nwindow.addEventListener('scroll', () => {\n    if (window.scrollY == 0) {\n        navigation.classList.remove('grey');\n        navigation.classList.add('gradient-bg');\n        console.log('top');\n    } else {\n        navigation.classList.remove('gradient-bg');\n        navigation.classList.add('grey');\n    }\n})\n\n//# sourceURL=webpack://andrewpatasik.github.io/./src/js/script.js?");

/***/ }),

/***/ "./src/js/typing.js":
/*!**************************!*\
  !*** ./src/js/typing.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction typing () {\n    var TxtType = function (el, toRotate, period) {\n        this.toRotate = toRotate;\n        this.el = el;\n        this.loopNum = 0;\n        this.period = parseInt(period, 10) || 2000;\n        this.txt = '';\n        this.tick();\n        this.isDeleting = false;\n    };\n    \n    TxtType.prototype.tick = function () {\n        var i = this.loopNum % this.toRotate.length;\n        var fullTxt = this.toRotate[i];\n    \n        if (this.isDeleting) {\n            this.txt = fullTxt.substring(0, this.txt.length - 1);\n        } else {\n            this.txt = fullTxt.substring(0, this.txt.length + 1);\n        }\n    \n        this.el.innerHTML = '<span class=\"wrap\">' + this.txt + '</span>';\n    \n        var that = this;\n        var delta = 200 - Math.random() * 100;\n    \n        if (this.isDeleting) {\n            delta /= 2;\n        }\n    \n        if (!this.isDeleting && this.txt === fullTxt) {\n            delta = this.period;\n            this.isDeleting = true;\n        } else if (this.isDeleting && this.txt === '') {\n            this.isDeleting = false;\n            this.loopNum++;\n            delta = 500;\n        }\n    \n        setTimeout(function () {\n            that.tick();\n        }, delta);\n    };\n    \n    window.onload = function () {\n        var elements = document.getElementsByClassName('typewrite');\n        for (var i = 0; i < elements.length; i++) {\n            var toRotate = elements[i].getAttribute('data-type');\n            var period = elements[i].getAttribute('data-period');\n            if (toRotate) {\n                new TxtType(elements[i], JSON.parse(toRotate), period);\n            }\n        }\n        // INJECT CSS\n        var css = document.createElement(\"style\");\n        css.type = \"text/css\";\n        css.innerHTML = \".typewrite > .wrap { border-right: 0.08em solid #fff}\";\n        document.body.appendChild(css);\n    };\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typing);\n\n//# sourceURL=webpack://andrewpatasik.github.io/./src/js/typing.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;