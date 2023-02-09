/*!
 * 
 * litepicker.amd.js
 * Litepicker v2.0.11 (https://github.com/wakirin/Litepicker)
 * Package: litepicker (https://www.npmjs.com/package/litepicker)
 * License: MIT (https://github.com/wakirin/Litepicker/blob/master/LICENCE.md)
 * Copyright 2019-2021 Rinat G.
 *     
 * Hash: 9c65b43b3526f57209d5
 * 
 */
define("Litepicker", [], function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/dts-css-modules-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/dts-css-modules-loader??ref--5-1!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/postcss-loader/src??ref--5-3!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\n  --litepicker-container-months-color-bg: #fff;\n  --litepicker-container-months-box-shadow-color: #ddd;\n  --litepicker-footer-color-bg: #fafafa;\n  --litepicker-footer-box-shadow-color: #ddd;\n  --litepicker-tooltip-color-bg: #fff;\n  --litepicker-month-header-color: #333;\n  --litepicker-button-prev-month-color: #9e9e9e;\n  --litepicker-button-next-month-color: #9e9e9e;\n  --litepicker-button-prev-month-color-hover: #2196f3;\n  --litepicker-button-next-month-color-hover: #2196f3;\n  --litepicker-month-width: calc(var(--litepicker-day-width) * 7);\n  --litepicker-month-weekday-color: #9e9e9e;\n  --litepicker-month-week-number-color: #9e9e9e;\n  --litepicker-day-width: 38px;\n  --litepicker-day-color: #333;\n  --litepicker-day-color-hover: #2196f3;\n  --litepicker-is-today-color: #f44336;\n  --litepicker-is-in-range-color: #bbdefb;\n  --litepicker-is-locked-color: #9e9e9e;\n  --litepicker-is-start-color: #fff;\n  --litepicker-is-start-color-bg: #2196f3;\n  --litepicker-is-end-color: #fff;\n  --litepicker-is-end-color-bg: #2196f3;\n  --litepicker-button-cancel-color: #fff;\n  --litepicker-button-cancel-color-bg: #9e9e9e;\n  --litepicker-button-apply-color: #fff;\n  --litepicker-button-apply-color-bg: #2196f3;\n  --litepicker-button-reset-color: #909090;\n  --litepicker-button-reset-color-hover: #2196f3;\n  --litepicker-highlighted-day-color: #333;\n  --litepicker-highlighted-day-color-bg: #ffeb3b; }\n\n.show-week-numbers {\n  --litepicker-month-width: calc(var(--litepicker-day-width) * 8); }\n\n.litepicker {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 0.8em;\n  display: none; }\n  .litepicker button {\n    border: none;\n    background: none; }\n  .litepicker .container__main {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .litepicker .container__months {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    background-color: var(--litepicker-container-months-color-bg);\n    border-radius: 5px;\n    -webkit-box-shadow: 0 0 5px var(--litepicker-container-months-box-shadow-color);\n            box-shadow: 0 0 5px var(--litepicker-container-months-box-shadow-color);\n    width: calc(var(--litepicker-month-width) + 10px);\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box; }\n    .litepicker .container__months.columns-2 {\n      width: calc((var(--litepicker-month-width) * 2) + 20px); }\n    .litepicker .container__months.columns-3 {\n      width: calc((var(--litepicker-month-width) * 3) + 30px); }\n    .litepicker .container__months.columns-4 {\n      width: calc((var(--litepicker-month-width) * 4) + 40px); }\n    .litepicker .container__months.split-view .month-item-header .button-previous-month,\n    .litepicker .container__months.split-view .month-item-header .button-next-month {\n      visibility: visible; }\n    .litepicker .container__months .month-item {\n      padding: 5px;\n      width: var(--litepicker-month-width);\n      -webkit-box-sizing: content-box;\n              box-sizing: content-box; }\n      .litepicker .container__months .month-item-header {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        font-weight: 500;\n        padding: 10px 5px;\n        text-align: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        color: var(--litepicker-month-header-color); }\n        .litepicker .container__months .month-item-header div {\n          -webkit-box-flex: 1;\n              -ms-flex: 1;\n                  flex: 1; }\n          .litepicker .container__months .month-item-header div > .month-item-name {\n            margin-right: 5px; }\n          .litepicker .container__months .month-item-header div > .month-item-year {\n            padding: 0; }\n        .litepicker .container__months .month-item-header .reset-button {\n          color: var(--litepicker-button-reset-color); }\n          .litepicker .container__months .month-item-header .reset-button > svg {\n            fill: var(--litepicker-button-reset-color); }\n          .litepicker .container__months .month-item-header .reset-button * {\n            pointer-events: none; }\n          .litepicker .container__months .month-item-header .reset-button:hover {\n            color: var(--litepicker-button-reset-color-hover); }\n            .litepicker .container__months .month-item-header .reset-button:hover > svg {\n              fill: var(--litepicker-button-reset-color-hover); }\n        .litepicker .container__months .month-item-header .button-previous-month,\n        .litepicker .container__months .month-item-header .button-next-month {\n          visibility: hidden;\n          text-decoration: none;\n          padding: 3px 5px;\n          border-radius: 3px;\n          -webkit-transition: color 0.3s, border 0.3s;\n          transition: color 0.3s, border 0.3s;\n          cursor: default; }\n          .litepicker .container__months .month-item-header .button-previous-month *,\n          .litepicker .container__months .month-item-header .button-next-month * {\n            pointer-events: none; }\n        .litepicker .container__months .month-item-header .button-previous-month {\n          color: var(--litepicker-button-prev-month-color); }\n          .litepicker .container__months .month-item-header .button-previous-month > svg,\n          .litepicker .container__months .month-item-header .button-previous-month > img {\n            fill: var(--litepicker-button-prev-month-color); }\n          .litepicker .container__months .month-item-header .button-previous-month:hover {\n            color: var(--litepicker-button-prev-month-color-hover); }\n            .litepicker .container__months .month-item-header .button-previous-month:hover > svg {\n              fill: var(--litepicker-button-prev-month-color-hover); }\n        .litepicker .container__months .month-item-header .button-next-month {\n          color: var(--litepicker-button-next-month-color); }\n          .litepicker .container__months .month-item-header .button-next-month > svg,\n          .litepicker .container__months .month-item-header .button-next-month > img {\n            fill: var(--litepicker-button-next-month-color); }\n          .litepicker .container__months .month-item-header .button-next-month:hover {\n            color: var(--litepicker-button-next-month-color-hover); }\n            .litepicker .container__months .month-item-header .button-next-month:hover > svg {\n              fill: var(--litepicker-button-next-month-color-hover); }\n      .litepicker .container__months .month-item-weekdays-row {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        justify-self: center;\n        -webkit-box-pack: start;\n            -ms-flex-pack: start;\n                justify-content: flex-start;\n        color: var(--litepicker-month-weekday-color); }\n        .litepicker .container__months .month-item-weekdays-row > div {\n          padding: 5px 0;\n          font-size: 85%;\n          -webkit-box-flex: 1;\n              -ms-flex: 1;\n                  flex: 1;\n          width: var(--litepicker-day-width);\n          text-align: center; }\n      .litepicker .container__months .month-item:first-child .button-previous-month {\n        visibility: visible; }\n      .litepicker .container__months .month-item:last-child .button-next-month {\n        visibility: visible; }\n      .litepicker .container__months .month-item.no-previous-month .button-previous-month {\n        visibility: hidden; }\n      .litepicker .container__months .month-item.no-next-month .button-next-month {\n        visibility: hidden; }\n  .litepicker .container__days {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    justify-self: center;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    text-align: center;\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box; }\n    .litepicker .container__days > div,\n    .litepicker .container__days > a {\n      padding: 5px 0;\n      width: var(--litepicker-day-width); }\n    .litepicker .container__days .day-item {\n      color: var(--litepicker-day-color);\n      text-align: center;\n      text-decoration: none;\n      border-radius: 3px;\n      -webkit-transition: color 0.3s, border 0.3s;\n      transition: color 0.3s, border 0.3s;\n      cursor: default; }\n      .litepicker .container__days .day-item:hover {\n        color: var(--litepicker-day-color-hover);\n        -webkit-box-shadow: inset 0 0 0 1px var(--litepicker-day-color-hover);\n                box-shadow: inset 0 0 0 1px var(--litepicker-day-color-hover); }\n      .litepicker .container__days .day-item.is-today {\n        color: var(--litepicker-is-today-color); }\n      .litepicker .container__days .day-item.is-locked {\n        color: var(--litepicker-is-locked-color); }\n        .litepicker .container__days .day-item.is-locked:hover {\n          color: var(--litepicker-is-locked-color);\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n          cursor: default; }\n      .litepicker .container__days .day-item.is-in-range {\n        background-color: var(--litepicker-is-in-range-color);\n        border-radius: 0; }\n      .litepicker .container__days .day-item.is-start-date {\n        color: var(--litepicker-is-start-color);\n        background-color: var(--litepicker-is-start-color-bg);\n        border-top-left-radius: 5px;\n        border-bottom-left-radius: 5px;\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0; }\n        .litepicker .container__days .day-item.is-start-date.is-flipped {\n          border-top-left-radius: 0;\n          border-bottom-left-radius: 0;\n          border-top-right-radius: 5px;\n          border-bottom-right-radius: 5px; }\n      .litepicker .container__days .day-item.is-end-date {\n        color: var(--litepicker-is-end-color);\n        background-color: var(--litepicker-is-end-color-bg);\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n        border-top-right-radius: 5px;\n        border-bottom-right-radius: 5px; }\n        .litepicker .container__days .day-item.is-end-date.is-flipped {\n          border-top-left-radius: 5px;\n          border-bottom-left-radius: 5px;\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0; }\n      .litepicker .container__days .day-item.is-start-date.is-end-date {\n        border-top-left-radius: 5px;\n        border-bottom-left-radius: 5px;\n        border-top-right-radius: 5px;\n        border-bottom-right-radius: 5px; }\n      .litepicker .container__days .day-item.is-highlighted {\n        color: var(--litepicker-highlighted-day-color);\n        background-color: var(--litepicker-highlighted-day-color-bg); }\n    .litepicker .container__days .week-number {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      color: var(--litepicker-month-week-number-color);\n      font-size: 85%; }\n  .litepicker .container__footer {\n    text-align: right;\n    padding: 10px 5px;\n    margin: 0 5px;\n    background-color: var(--litepicker-footer-color-bg);\n    -webkit-box-shadow: inset 0px 3px 3px 0px var(--litepicker-footer-box-shadow-color);\n            box-shadow: inset 0px 3px 3px 0px var(--litepicker-footer-box-shadow-color);\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n    .litepicker .container__footer .preview-date-range {\n      margin-right: 10px;\n      font-size: 90%; }\n    .litepicker .container__footer .button-cancel {\n      background-color: var(--litepicker-button-cancel-color-bg);\n      color: var(--litepicker-button-cancel-color);\n      border: 0;\n      padding: 3px 7px 4px;\n      border-radius: 3px; }\n      .litepicker .container__footer .button-cancel * {\n        pointer-events: none; }\n    .litepicker .container__footer .button-apply {\n      background-color: var(--litepicker-button-apply-color-bg);\n      color: var(--litepicker-button-apply-color);\n      border: 0;\n      padding: 3px 7px 4px;\n      border-radius: 3px;\n      margin-left: 10px;\n      margin-right: 10px; }\n      .litepicker .container__footer .button-apply:disabled {\n        opacity: 0.7; }\n      .litepicker .container__footer .button-apply * {\n        pointer-events: none; }\n  .litepicker .container__tooltip {\n    position: absolute;\n    margin-top: -4px;\n    padding: 4px 8px;\n    border-radius: 4px;\n    background-color: var(--litepicker-tooltip-color-bg);\n    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);\n            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);\n    white-space: nowrap;\n    font-size: 11px;\n    pointer-events: none;\n    visibility: hidden; }\n    .litepicker .container__tooltip:before {\n      position: absolute;\n      bottom: -5px;\n      left: calc(50% - 5px);\n      border-top: 5px solid rgba(0, 0, 0, 0.12);\n      border-right: 5px solid transparent;\n      border-left: 5px solid transparent;\n      content: \"\"; }\n    .litepicker .container__tooltip:after {\n      position: absolute;\n      bottom: -4px;\n      left: calc(50% - 4px);\n      border-top: 4px solid var(--litepicker-tooltip-color-bg);\n      border-right: 4px solid transparent;\n      border-left: 4px solid transparent;\n      content: \"\"; }\n", ""]);
// Exports
exports.locals = {
	"showWeekNumbers": "show-week-numbers",
	"litepicker": "litepicker",
	"containerMain": "container__main",
	"containerMonths": "container__months",
	"columns2": "columns-2",
	"columns3": "columns-3",
	"columns4": "columns-4",
	"splitView": "split-view",
	"monthItemHeader": "month-item-header",
	"buttonPreviousMonth": "button-previous-month",
	"buttonNextMonth": "button-next-month",
	"monthItem": "month-item",
	"monthItemName": "month-item-name",
	"monthItemYear": "month-item-year",
	"resetButton": "reset-button",
	"monthItemWeekdaysRow": "month-item-weekdays-row",
	"noPreviousMonth": "no-previous-month",
	"noNextMonth": "no-next-month",
	"containerDays": "container__days",
	"dayItem": "day-item",
	"isToday": "is-today",
	"isLocked": "is-locked",
	"isInRange": "is-in-range",
	"isStartDate": "is-start-date",
	"isFlipped": "is-flipped",
	"isEndDate": "is-end-date",
	"isHighlighted": "is-highlighted",
	"weekNumber": "week-number",
	"containerFooter": "container__footer",
	"previewDateRange": "preview-date-range",
	"buttonCancel": "button-cancel",
	"buttonApply": "button-apply",
	"containerTooltip": "container__tooltip"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/events/events.js":
/*!*******************************************************!*\
  !*** ../customCalendar/node_modules/events/events.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/calendar.ts":
/*!*************************!*\
  !*** ./src/calendar.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! ./core */ "./src/core.ts");
var datetime_1 = __webpack_require__(/*! ./datetime */ "./src/datetime.ts");
var style = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar(options) {
        return _super.call(this, options) || this;
        //
    }
    Calendar.prototype.render = function () {
        var _this = this;
        this.emit('before:render', this.ui);
        var mainBlock = document.createElement('div');
        mainBlock.className = style.containerMain;
        var months = document.createElement('div');
        months.className = style.containerMonths;
        var descBlock = document.createElement('div');
        descBlock.className = 'container__desc';
        mainBlock.appendChild(descBlock);
        if (style["columns" + this.options.numberOfColumns]) {
            months.classList.remove(style.columns2, style.columns3, style.columns4);
            months.classList.add(style["columns" + this.options.numberOfColumns]);
        }
        if (this.options.splitView) {
            months.classList.add(style.splitView);
        }
        if (this.options.showWeekNumbers) {
            months.classList.add(style.showWeekNumbers);
        }
        var startDate = this.calendars[0].clone();
        var startMonthIdx = startDate.getMonth();
        var totalMonths = startDate.getMonth() + this.options.numberOfMonths;
        var calendarIdx = 0;
        // tslint:disable-next-line: prefer-for-of
        for (var idx = startMonthIdx; idx < totalMonths; idx += 1) {
            var dateIterator = startDate.clone();
            dateIterator.setDate(1);
            dateIterator.setHours(0, 0, 0, 0);
            if (this.options.splitView) {
                dateIterator = this.calendars[calendarIdx].clone();
            }
            else {
                dateIterator.setMonth(idx);
            }
            months.appendChild(this.renderMonth(dateIterator, calendarIdx));
            calendarIdx += 1;
        }
        this.ui.innerHTML = '';
        mainBlock.appendChild(months);
        if (this.options.resetButton) {
            var resetButton = void 0;
            if (typeof this.options.resetButton === 'function') {
                resetButton = this.options.resetButton.call(this);
            }
            else {
                resetButton = document.createElement('button');
                resetButton.type = 'button';
                resetButton.className = style.resetButton;
                resetButton.innerHTML = this.options.buttonText.reset;
            }
            resetButton.addEventListener('click', function (e) {
                e.preventDefault();
                // tslint:disable-next-line: no-string-literal
                _this['clearSelection']();
            });
            mainBlock
                .querySelector("." + style.monthItem + ":last-child")
                .querySelector("." + style.monthItemHeader)
                .appendChild(resetButton);
        }
        this.ui.appendChild(mainBlock);
        if (!this.options.autoApply || this.options.footerHTML) {
            this.ui.appendChild(this.renderFooter());
        }
        if (this.options.showTooltip) {
            this.ui.appendChild(this.renderTooltip());
        }
        this.ui.dataset.plugins = (this.options.plugins || []).join('|');
        this.emit('render', this.ui);
    };
    Calendar.prototype.renderMonth = function (date, calendarIdx) {
        var _this = this;
        var startDate = date.clone();
        var totalDays = 32 - new Date(startDate.getFullYear(), startDate.getMonth(), 32).getDate();
        var month = document.createElement('div');
        month.className = style.monthItem;
        var monthHeader = document.createElement('div');
        monthHeader.className = style.monthItemHeader;
        var monthAndYear = document.createElement('div');
        if (this.options.dropdowns.months) {
            var selectMonths = document.createElement('select');
            selectMonths.className = style.monthItemName;
            for (var x = 0; x < 12; x += 1) {
                var option = document.createElement('option');
                // day 2 because iOS bug with `toLocaleString`
                // https://github.com/wakirin/Litepicker/issues/113
                var monthName = new datetime_1.DateTime(new Date(date.getFullYear(), x, 2, 0, 0, 0));
                var optionMonth = new datetime_1.DateTime(new Date(date.getFullYear(), x, 1, 0, 0, 0));
                option.value = String(x);
                option.text = monthName.toLocaleString(this.options.lang, { month: 'long' });
                option.disabled = (this.options.minDate
                    && optionMonth.isBefore(new datetime_1.DateTime(this.options.minDate), 'month'))
                    || (this.options.maxDate && optionMonth.isAfter(new datetime_1.DateTime(this.options.maxDate), 'month'));
                option.selected = optionMonth.getMonth() === date.getMonth();
                selectMonths.appendChild(option);
            }
            selectMonths.addEventListener('change', function (e) {
                var target = e.target;
                var idx = 0;
                if (_this.options.splitView) {
                    var monthItem = target.closest("." + style.monthItem);
                    idx = utils_1.findNestedMonthItem(monthItem);
                }
                _this.calendars[idx].setMonth(Number(target.value));
                _this.render();
                _this.emit('change:month', _this.calendars[idx], idx, e);
            });
            monthAndYear.appendChild(selectMonths);
        }
        else {
            var monthName = document.createElement('strong');
            monthName.className = style.monthItemName;
            monthName.innerHTML = date.toLocaleString(this.options.lang, { month: 'long' });
            monthAndYear.appendChild(monthName);
        }
        if (this.options.dropdowns.years) {
            var selectYears_1 = document.createElement('select');
            selectYears_1.className = style.monthItemYear;
            var minYear = this.options.dropdowns.minYear;
            var maxYear = this.options.dropdowns.maxYear
                ? this.options.dropdowns.maxYear
                : (new Date()).getFullYear();
            if (date.getFullYear() > maxYear) {
                var option = document.createElement('option');
                option.value = String(date.getFullYear());
                option.text = String(date.getFullYear());
                option.selected = true;
                option.disabled = true;
                selectYears_1.appendChild(option);
            }
            for (var x = maxYear; x >= minYear; x -= 1) {
                var option = document.createElement('option');
                var optionYear = new datetime_1.DateTime(new Date(x, 0, 1, 0, 0, 0));
                option.value = String(x);
                option.text = String(x);
                option.disabled = (this.options.minDate
                    && optionYear.isBefore(new datetime_1.DateTime(this.options.minDate), 'year'))
                    || (this.options.maxDate
                        && optionYear.isAfter(new datetime_1.DateTime(this.options.maxDate), 'year'));
                option.selected = date.getFullYear() === x;
                selectYears_1.appendChild(option);
            }
            if (date.getFullYear() < minYear) {
                var option = document.createElement('option');
                option.value = String(date.getFullYear());
                option.text = String(date.getFullYear());
                option.selected = true;
                option.disabled = true;
                selectYears_1.appendChild(option);
            }
            if (this.options.dropdowns.years === 'asc') {
                var childs = Array.prototype.slice.call(selectYears_1.childNodes);
                var options = childs.reverse();
                selectYears_1.innerHTML = '';
                options.forEach(function (y) {
                    y.innerHTML = y.value;
                    selectYears_1.appendChild(y);
                });
            }
            selectYears_1.addEventListener('change', function (e) {
                var target = e.target;
                var idx = 0;
                if (_this.options.splitView) {
                    var monthItem = target.closest("." + style.monthItem);
                    idx = utils_1.findNestedMonthItem(monthItem);
                }
                _this.calendars[idx].setFullYear(Number(target.value));
                _this.render();
                _this.emit('change:year', _this.calendars[idx], idx, e);
            });
            monthAndYear.appendChild(selectYears_1);
        }
        else {
            var monthYear = document.createElement('span');
            monthYear.className = style.monthItemYear;
            monthYear.innerHTML = String(date.getFullYear());
            monthAndYear.appendChild(monthYear);
        }
        var previousMonthButton = document.createElement('button');
        previousMonthButton.type = 'button';
        previousMonthButton.className = style.buttonPreviousMonth;
        previousMonthButton.innerHTML = this.options.buttonText.previousMonth;
        var nextMonthButton = document.createElement('button');
        nextMonthButton.type = 'button';
        nextMonthButton.className = style.buttonNextMonth;
        nextMonthButton.innerHTML = this.options.buttonText.nextMonth;
        monthHeader.appendChild(previousMonthButton);
        monthHeader.appendChild(monthAndYear);
        monthHeader.appendChild(nextMonthButton);
        if (this.options.minDate
            && startDate.isSameOrBefore(new datetime_1.DateTime(this.options.minDate), 'month')) {
            month.classList.add(style.noPreviousMonth);
        }
        if (this.options.maxDate
            && startDate.isSameOrAfter(new datetime_1.DateTime(this.options.maxDate), 'month')) {
            month.classList.add(style.noNextMonth);
        }
        var weekdaysRow = document.createElement('div');
        weekdaysRow.className = style.monthItemWeekdaysRow;
        if (this.options.showWeekNumbers) {
            weekdaysRow.innerHTML = '<div>W</div>';
        }
        for (var w = 1; w <= 7; w += 1) {
            // 7 days, 4 is «Thursday» (new Date(1970, 0, 1, 12, 0, 0, 0))
            var dayIdx = 7 - 4 + this.options.firstDay + w;
            var weekday = document.createElement('div');
            weekday.innerHTML = this.weekdayName(dayIdx);
            weekday.title = this.weekdayName(dayIdx, 'long');
            weekdaysRow.appendChild(weekday);
        }
        var days = document.createElement('div');
        days.className = style.containerDays;
        var skipDays = this.calcSkipDays(startDate);
        if (this.options.showWeekNumbers && skipDays) {
            days.appendChild(this.renderWeekNumber(startDate));
        }
        for (var idx = 0; idx < skipDays; idx += 1) {
            var dummy = document.createElement('div');
            days.appendChild(dummy);
        }
        // tslint:disable-next-line: prefer-for-of
        for (var idx = 1; idx <= totalDays; idx += 1) {
            startDate.setDate(idx);
            if (this.options.showWeekNumbers && startDate.getDay() === this.options.firstDay) {
                days.appendChild(this.renderWeekNumber(startDate));
            }
            days.appendChild(this.renderDay(startDate));
        }
        month.appendChild(monthHeader);
        month.appendChild(weekdaysRow);
        month.appendChild(days);
        this.emit('render:month', month, date);
        return month;
    };
    Calendar.prototype.renderDay = function (date) {
        date.setHours();
        var day = document.createElement('div');
        day.className = style.dayItem;
        day.innerHTML = String(date.getDate());
        day.dataset.time = String(date.getTime());
        if (date.toDateString() === (new Date()).toDateString()) {
            day.classList.add(style.isToday);
        }
        if (this.datePicked.length) {
            if (this.datePicked[0].toDateString() === date.toDateString()) {
                day.classList.add(style.isStartDate);
                if (this.options.singleMode || this.inputType === 'departure') {
                    day.classList.add(style.isEndDate);
                }
            }
            if (this.datePicked.length === 2
                && this.datePicked[1].toDateString() === date.toDateString()) {
                day.classList.add(style.isEndDate);
            }
            if (this.datePicked.length === 2) {
                if (date.isBetween(this.datePicked[0], this.datePicked[1])) {
                    day.classList.add(style.isInRange);
                }
            }
        }
        else if (this.options.startDate) {
            var startDate = this.options.startDate;
            var endDate = this.options.endDate;
            if (startDate.toDateString() === date.toDateString()) {
                day.classList.add(style.isStartDate);
                if (this.options.singleMode) {
                    day.classList.add(style.isEndDate);
                }
            }
            if (endDate && endDate.toDateString() === date.toDateString()) {
                day.classList.add(style.isEndDate);
            }
            if (startDate && endDate) {
                if (date.isBetween(startDate, endDate)) {
                    day.classList.add(style.isInRange);
                }
            }
        }
        if (this.options.minDate && date.isBefore(new datetime_1.DateTime(this.options.minDate))) {
            day.classList.add(style.isLocked);
        }
        if (this.options.maxDate && date.isAfter(new datetime_1.DateTime(this.options.maxDate))) {
            day.classList.add(style.isLocked);
        }
        if (this.options.minDays > 1
            && this.datePicked.length === 1) {
            var minDays = this.options.minDays - 1; // subtract selected day
            var left = this.datePicked[0].clone().subtract(minDays, 'day');
            var right = this.datePicked[0].clone().add(minDays, 'day');
            if (date.isBetween(left, this.datePicked[0], '(]')) {
                day.classList.add(style.isLocked);
            }
            if (date.isBetween(this.datePicked[0], right, '[)')) {
                day.classList.add(style.isLocked);
            }
        }
        if (this.options.maxDays
            && this.datePicked.length === 1) {
            var maxDays = this.options.maxDays;
            var left = this.datePicked[0].clone().subtract(maxDays, 'day');
            var right = this.datePicked[0].clone().add(maxDays, 'day');
            if (date.isSameOrBefore(left)) {
                day.classList.add(style.isLocked);
            }
            if (date.isSameOrAfter(right)) {
                day.classList.add(style.isLocked);
            }
        }
        if (this.options.selectForward
            && this.datePicked.length === 1
            && date.isBefore(this.datePicked[0])) {
            day.classList.add(style.isLocked);
        }
        if (this.options.selectBackward
            && this.datePicked.length === 1
            && date.isAfter(this.datePicked[0])) {
            day.classList.add(style.isLocked);
        }
        var locked = utils_1.dateIsLocked(date, this.options, this.datePicked);
        if (locked) {
            day.classList.add(style.isLocked);
        }
        if (this.options.highlightedDays.length) {
            var isHighlighted = this.options.highlightedDays
                .filter(function (d) {
                if (d instanceof Array) {
                    return date.isBetween(d[0], d[1], '[]');
                }
                return d.isSame(date, 'day');
            }).length;
            if (isHighlighted) {
                day.classList.add(style.isHighlighted);
            }
        }
        // fix bug iOS 10-12 - https://github.com/wakirin/Litepicker/issues/124
        day.tabIndex = !day.classList.contains('is-locked') ? 0 : -1;
        this.emit('render:day', day, date);
        return day;
    };
    Calendar.prototype.renderFooter = function () {
        var footer = document.createElement('div');
        footer.className = style.containerFooter;
        if (this.options.footerHTML) {
            footer.innerHTML = this.options.footerHTML;
        }
        else {
            footer.innerHTML = "\n      <span class=\"" + style.previewDateRange + "\"></span>\n      <button type=\"button\" class=\"" + style.buttonCancel + "\">" + this.options.buttonText.cancel + "</button>\n      <button type=\"button\" class=\"" + style.buttonApply + "\">" + this.options.buttonText.apply + "</button>\n      ";
        }
        if (this.options.singleMode) {
            if (this.datePicked.length === 1) {
                var startValue = this.datePicked[0].format(this.options.format, this.options.lang);
                footer.querySelector("." + style.previewDateRange).innerHTML = startValue;
            }
        }
        else {
            if (this.datePicked.length === 1) {
                footer.querySelector("." + style.buttonApply).setAttribute('disabled', '');
            }
            if (this.datePicked.length === 2) {
                var startValue = this.datePicked[0].format(this.options.format, this.options.lang);
                var endValue = this.datePicked[1].format(this.options.format, this.options.lang);
                footer.querySelector("." + style.previewDateRange)
                    .innerHTML = "" + startValue + this.options.delimiter + endValue;
            }
        }
        this.emit('render:footer', footer);
        return footer;
    };
    Calendar.prototype.renderWeekNumber = function (date) {
        var wn = document.createElement('div');
        var week = date.getWeek(this.options.firstDay);
        wn.className = style.weekNumber;
        wn.innerHTML = week === 53 && date.getMonth() === 0 ? '53 / 1' : week;
        return wn;
    };
    Calendar.prototype.renderTooltip = function () {
        var t = document.createElement('div');
        t.className = style.containerTooltip;
        return t;
    };
    Calendar.prototype.weekdayName = function (day, representation) {
        if (representation === void 0) { representation = 'short'; }
        return new Date(1970, 0, day, 12, 0, 0, 0)
            .toLocaleString(this.options.lang, { weekday: representation });
    };
    Calendar.prototype.calcSkipDays = function (date) {
        var total = date.getDay() - this.options.firstDay;
        if (total < 0)
            total += 7;
        return total;
    };
    return Calendar;
}(core_1.LPCore));
exports.Calendar = Calendar;


/***/ }),

/***/ "./src/core.ts":
/*!*********************!*\
  !*** ./src/core.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(/*! events */ "./node_modules/events/events.js");
var datetime_1 = __webpack_require__(/*! ./datetime */ "./src/datetime.ts");
var litepicker_1 = __webpack_require__(/*! ./litepicker */ "./src/litepicker.ts");
var LPCore = /** @class */ (function (_super) {
    __extends(LPCore, _super);
    function LPCore(options) {
        var _this = _super.call(this) || this;
        _this.datePicked = [];
        _this.calendars = [];
        _this.parentUi = document.querySelector('.modal-order-date');
        _this.options = {
            element: null,
            elementEnd: null,
            parentEl: null,
            // tslint:disable-next-line: object-literal-sort-keys
            firstDay: 1,
            format: 'YYYY-MM-DD',
            lang: 'en-US',
            delimiter: ' - ',
            numberOfMonths: 1,
            numberOfColumns: 1,
            startDate: null,
            endDate: null,
            zIndex: 9999,
            position: 'auto',
            selectForward: false,
            selectBackward: false,
            splitView: false,
            inlineMode: false,
            singleMode: true,
            autoApply: true,
            allowRepick: false,
            showWeekNumbers: false,
            showTooltip: true,
            scrollToDate: true,
            mobileFriendly: true,
            resetButton: false,
            autoRefresh: false,
            lockDaysFormat: 'YYYY-MM-DD',
            lockDays: [],
            disallowLockDaysInRange: false,
            lockDaysInclusivity: '[]',
            highlightedDaysFormat: 'YYYY-MM-DD',
            highlightedDays: [],
            dropdowns: {
                minYear: 1990,
                // tslint:disable-next-line: object-literal-sort-keys
                maxYear: null,
                months: false,
                years: false,
            },
            buttonText: {
                apply: 'Apply',
                cancel: 'Cancel',
                previousMonth: '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.919 0l2.748 2.667L5.333 8l5.334 5.333L7.919 16 0 8z" fill-rule="nonzero"/></svg>',
                nextMonth: '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.748 16L0 13.333 5.333 8 0 2.667 2.748 0l7.919 8z" fill-rule="nonzero"/></svg>',
                reset: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n        <path d=\"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z\"/>\n      </svg>",
            },
            tooltipText: {
                one: 'day',
                other: 'days',
            },
        };
        _this.options = __assign(__assign({}, _this.options), options.element.dataset);
        Object.keys(_this.options).forEach(function (opt) {
            if (_this.options[opt] === 'true' || _this.options[opt] === 'false') {
                _this.options[opt] = _this.options[opt] === 'true';
            }
        });
        var dropdowns = __assign(__assign({}, _this.options.dropdowns), options.dropdowns);
        var buttonText = __assign(__assign({}, _this.options.buttonText), options.buttonText);
        var tooltipText = __assign(__assign({}, _this.options.tooltipText), options.tooltipText);
        _this.options = __assign(__assign({}, _this.options), options);
        _this.options.dropdowns = __assign({}, dropdowns);
        _this.options.buttonText = __assign({}, buttonText);
        _this.options.tooltipText = __assign({}, tooltipText);
        if (!_this.options.elementEnd) {
            _this.options.allowRepick = false;
        }
        if (_this.options.lockDays.length) {
            _this.options.lockDays = datetime_1.DateTime.convertArray(_this.options.lockDays, _this.options.lockDaysFormat);
        }
        if (_this.options.highlightedDays.length) {
            _this.options.highlightedDays = datetime_1.DateTime.convertArray(_this.options.highlightedDays, _this.options.highlightedDaysFormat);
        }
        var _a = _this.parseInput(), startValue = _a[0], endValue = _a[1];
        if (_this.options.startDate) {
            if (_this.options.singleMode || _this.options.endDate) {
                startValue = new datetime_1.DateTime(_this.options.startDate, _this.options.format, _this.options.lang);
            }
        }
        if (startValue && _this.options.endDate) {
            endValue = new datetime_1.DateTime(_this.options.endDate, _this.options.format, _this.options.lang);
        }
        if (startValue instanceof datetime_1.DateTime && !isNaN(startValue.getTime())) {
            _this.options.startDate = startValue;
        }
        if (_this.options.startDate && endValue instanceof datetime_1.DateTime && !isNaN(endValue.getTime())) {
            _this.options.endDate = endValue;
        }
        if (_this.options.singleMode && !(_this.options.startDate instanceof datetime_1.DateTime)) {
            _this.options.startDate = null;
        }
        if (!_this.options.singleMode
            && (!(_this.options.startDate instanceof datetime_1.DateTime)
                || !(_this.options.endDate instanceof datetime_1.DateTime))) {
            _this.options.startDate = null;
            _this.options.endDate = null;
        }
        for (var idx = 0; idx < _this.options.numberOfMonths; idx += 1) {
            var date = _this.options.startDate instanceof datetime_1.DateTime
                ? _this.options.startDate.clone()
                : new datetime_1.DateTime();
            if (!_this.options.startDate && (idx === 0 || _this.options.splitView)) {
                var maxDate = _this.options.maxDate ? new datetime_1.DateTime(_this.options.maxDate) : null;
                var minDate = _this.options.minDate ? new datetime_1.DateTime(_this.options.minDate) : null;
                var offsetMonths = _this.options.numberOfMonths - 1;
                var isDateRange = minDate && maxDate && date.isAfter(maxDate);
                if (isDateRange) {
                    date = minDate.clone();
                    date.setDate(1);
                }
                else if (!minDate && maxDate && date.isAfter(maxDate)) {
                    date = maxDate.clone();
                    date.setDate(1);
                    date.setMonth(date.getMonth() - offsetMonths);
                }
            }
            date.setDate(1);
            date.setMonth(date.getMonth() + idx);
            _this.calendars[idx] = date;
        }
        if (_this.options.showTooltip) {
            if (_this.options.tooltipPluralSelector) {
                _this.pluralSelector = _this.options.tooltipPluralSelector;
            }
            else {
                try {
                    var pluralRules = new Intl.PluralRules(_this.options.lang);
                    _this.pluralSelector = pluralRules.select.bind(pluralRules);
                }
                catch (_b) {
                    // fallback
                    _this.pluralSelector = function (arg0) {
                        if (Math.abs(arg0) === 0)
                            return 'one';
                        return 'other';
                    };
                }
            }
        }
        return _this;
    }
    LPCore.add = function (name, data) {
        litepicker_1.Litepicker.prototype[name] = data;
    };
    LPCore.prototype.setSingleMode = function (mode) {
        this.options.singleMode = mode;
    };
    // tslint:disable-next-line: function-name
    LPCore.prototype.DateTime = function (date, format) {
        if (date) {
            return new datetime_1.DateTime(date, format);
        }
        return new datetime_1.DateTime();
    };
    LPCore.prototype.init = function () {
        var _this = this;
        if (this.options.plugins && this.options.plugins.length) {
            this.options.plugins.forEach(function (plugin) {
                if (litepicker_1.Litepicker.prototype.hasOwnProperty(plugin)) {
                    litepicker_1.Litepicker.prototype[plugin].init.call(_this, _this);
                }
                else {
                    console.warn("Litepicker: plugin \u00AB" + plugin + "\u00BB not found.");
                }
            });
        }
    };
    LPCore.prototype.parseInput = function () {
        var delimiter = this.options.delimiter;
        var delimiterRegex = new RegExp("" + delimiter);
        var splittedValue = this.options.element instanceof HTMLInputElement
            ? this.options.element.value.split(delimiter)
            : [];
        if (this.options.elementEnd) {
            if (this.options.element instanceof HTMLInputElement
                && this.options.element.value.length
                && this.options.elementEnd instanceof HTMLInputElement
                && this.options.elementEnd.value.length) {
                return [
                    new datetime_1.DateTime(this.options.element.value, this.options.format),
                    new datetime_1.DateTime(this.options.elementEnd.value, this.options.format),
                ];
            }
        }
        else if (this.options.singleMode) {
            if (this.options.element instanceof HTMLInputElement
                && this.options.element.value.length) {
                return [
                    new datetime_1.DateTime(this.options.element.value, this.options.format),
                ];
            }
        }
        else if (this.options.element instanceof HTMLInputElement
            && delimiterRegex.test(this.options.element.value)
            && splittedValue.length
            && splittedValue.length % 2 === 0) {
            var d1 = splittedValue.slice(0, splittedValue.length / 2).join(delimiter);
            var d2 = splittedValue.slice(splittedValue.length / 2).join(delimiter);
            return [
                new datetime_1.DateTime(d1, this.options.format),
                new datetime_1.DateTime(d2, this.options.format),
            ];
        }
        return [];
    };
    LPCore.prototype.isShowning = function () {
        return this.ui && this.ui.style.display !== 'none';
    };
    LPCore.prototype.findPosition = function (element) {
        // const rect = element.getBoundingClientRect();
        var rect = this.parentUi.getBoundingClientRect();
        var calRect = this.ui.getBoundingClientRect();
        var orientation = this.options.position.split(' ');
        var scrollX = window.scrollX || window.pageXOffset;
        var scrollY = window.scrollY || window.pageYOffset;
        var top = 0;
        var left = 0;
        if (orientation[0] === 'auto' || !(/top|bottom/.test(orientation[0]))) {
            top = rect.bottom + scrollY;
            var isOutBounds = rect.bottom + calRect.height > window.innerHeight;
            var hasTopSpace = (rect.top + scrollY) - calRect.height >= calRect.height;
            if (isOutBounds && hasTopSpace) {
                top = (rect.top + scrollY) - calRect.height;
            }
        }
        else {
            top = rect[orientation[0]] + scrollY;
            if (orientation[0] === 'top') {
                top -= calRect.height;
            }
        }
        if (!(/left|right/.test(orientation[0])) && (!orientation[1] || orientation[1] === 'auto' || !(/left|right/.test(orientation[1])))) {
            left = rect.left + scrollX;
            var isOutBounds = rect.left + calRect.width > window.innerWidth;
            var hasLeftSpace = (rect.right + scrollX) - calRect.width >= 0;
            if (isOutBounds && hasLeftSpace) {
                left = (rect.right + scrollX) - calRect.width;
            }
        }
        else {
            if (/left|right/.test(orientation[0])) {
                left = rect[orientation[0]] + scrollX;
            }
            else {
                left = rect[orientation[1]] + scrollX;
            }
            if (orientation[0] === 'right' || orientation[1] === 'right') {
                left -= calRect.width;
            }
        }
        return {
            left: left,
            top: top,
        };
    };
    return LPCore;
}(events_1.EventEmitter));
exports.LPCore = LPCore;


/***/ }),

/***/ "./src/datetime.ts":
/*!*************************!*\
  !*** ./src/datetime.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DateTime = /** @class */ (function () {
    function DateTime(date, format, lang) {
        if (date === void 0) { date = null; }
        if (format === void 0) { format = null; }
        if (lang === void 0) { lang = 'en-US'; }
        if (typeof format === 'object' && format !== null) {
            // tslint:disable-next-line: max-line-length
            this.dateInstance = format.parse(date instanceof DateTime ? date.clone().toJSDate() : date);
        }
        else if (typeof format === 'string') {
            this.dateInstance = (DateTime.parseDateTime(date, format, lang));
        }
        else if (date) {
            this.dateInstance = (DateTime.parseDateTime(date));
        }
        else {
            this.dateInstance = (DateTime.parseDateTime(new Date()));
        }
        this.lang = lang;
    }
    DateTime.parseDateTime = function (date, format, lang) {
        if (format === void 0) { format = 'YYYY-MM-DD'; }
        if (lang === void 0) { lang = 'en-US'; }
        if (!date)
            return new Date(NaN);
        if (date instanceof Date)
            return new Date(date);
        if (date instanceof DateTime)
            return date.clone().toJSDate();
        if (/^-?\d{10,}$/.test(date))
            return DateTime.getDateZeroTime(new Date(Number(date)));
        if (typeof date === 'string') {
            var matches = [];
            var m = null;
            // tslint:disable-next-line: no-conditional-assignment
            while ((m = DateTime.regex.exec(format)) != null) {
                if (m[1] === '\\')
                    continue; // delete when regexp lookbehind
                matches.push(m);
            }
            if (matches.length) {
                var datePattern = {
                    year: null,
                    month: null,
                    shortMonth: null,
                    longMonth: null,
                    day: null,
                    value: '',
                };
                if (matches[0].index > 0) {
                    datePattern.value += '.*?';
                }
                for (var _i = 0, _a = Object.entries(matches); _i < _a.length; _i++) {
                    var _b = _a[_i], k = _b[0], match = _b[1];
                    var key = Number(k);
                    var _c = DateTime.formatPatterns(match[0], lang), group = _c.group, pattern = _c.pattern;
                    datePattern[group] = key + 1;
                    datePattern.value += pattern;
                    datePattern.value += '.*?'; // any delimiters
                }
                var dateRegex = new RegExp("^" + datePattern.value + "$");
                if (dateRegex.test(date)) {
                    var d = dateRegex.exec(date);
                    var year = Number(d[datePattern.year]);
                    var month = null;
                    if (datePattern.month) {
                        month = Number(d[datePattern.month]) - 1;
                    }
                    else if (datePattern.shortMonth) {
                        month = DateTime.shortMonths(lang).indexOf(d[datePattern.shortMonth]);
                    }
                    else if (datePattern.longMonth) {
                        month = DateTime.longMonths(lang).indexOf(d[datePattern.longMonth]);
                    }
                    var day = Number(d[datePattern.day]) || 1;
                    return new Date(year, month, day, 0, 0, 0, 0);
                }
            }
        }
        return DateTime.getDateZeroTime(new Date(date));
    };
    DateTime.convertArray = function (array, format) {
        return array
            .map(function (d) {
            if (d instanceof Array) {
                return d.map(function (d1) { return new DateTime(d1, format); });
            }
            return new DateTime(d, format);
        });
    };
    DateTime.getDateZeroTime = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
    };
    DateTime.shortMonths = function (lang) {
        return DateTime.MONTH_JS
            .map(function (x) { return new Date(2019, x).toLocaleString(lang, { month: 'short' }); });
    };
    DateTime.longMonths = function (lang) {
        return DateTime.MONTH_JS
            .map(function (x) { return new Date(2019, x).toLocaleString(lang, { month: 'long' }); });
    };
    DateTime.formatPatterns = function (token, lang) {
        switch (token) {
            case 'YY':
            case 'YYYY':
                return {
                    group: 'year',
                    pattern: "(\\d{" + token.length + "})",
                };
            case 'M':
                return {
                    group: 'month',
                    pattern: '(\\d{1,2})',
                };
            case 'MM':
                return {
                    group: 'month',
                    pattern: '(\\d{2})',
                };
            case 'MMM':
                return {
                    group: 'shortMonth',
                    pattern: "(" + DateTime.shortMonths(lang).join('|') + ")",
                };
            case 'MMMM':
                return {
                    group: 'longMonth',
                    pattern: "(" + DateTime.longMonths(lang).join('|') + ")",
                };
            case 'D':
                return {
                    group: 'day',
                    pattern: '(\\d{1,2})',
                };
            case 'DD':
                return {
                    group: 'day',
                    pattern: '(\\d{2})',
                };
        }
    };
    DateTime.prototype.toJSDate = function () {
        return this.dateInstance;
    };
    DateTime.prototype.toLocaleString = function (arg0, arg1) {
        return this.dateInstance.toLocaleString(arg0, arg1);
    };
    DateTime.prototype.toDateString = function () {
        return this.dateInstance.toDateString();
    };
    DateTime.prototype.getSeconds = function () {
        return this.dateInstance.getSeconds();
    };
    DateTime.prototype.getDay = function () {
        return this.dateInstance.getDay();
    };
    DateTime.prototype.getTime = function () {
        return this.dateInstance.getTime();
    };
    DateTime.prototype.getDate = function () {
        return this.dateInstance.getDate();
    };
    DateTime.prototype.getMonth = function () {
        return this.dateInstance.getMonth();
    };
    DateTime.prototype.getFullYear = function () {
        return this.dateInstance.getFullYear();
    };
    DateTime.prototype.setMonth = function (arg) {
        return this.dateInstance.setMonth(arg);
    };
    DateTime.prototype.setHours = function (hours, minutes, seconds, ms) {
        if (hours === void 0) { hours = 0; }
        if (minutes === void 0) { minutes = 0; }
        if (seconds === void 0) { seconds = 0; }
        if (ms === void 0) { ms = 0; }
        this.dateInstance.setHours(hours, minutes, seconds, ms);
    };
    DateTime.prototype.setSeconds = function (arg) {
        return this.dateInstance.setSeconds(arg);
    };
    DateTime.prototype.setDate = function (arg) {
        return this.dateInstance.setDate(arg);
    };
    DateTime.prototype.setFullYear = function (arg) {
        return this.dateInstance.setFullYear(arg);
    };
    DateTime.prototype.getWeek = function (firstDay) {
        var target = new Date(this.timestamp());
        var dayNr = (this.getDay() + (7 - firstDay)) % 7;
        target.setDate(target.getDate() - dayNr);
        var startWeekday = target.getTime();
        target.setMonth(0, 1);
        if (target.getDay() !== firstDay) {
            target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
        }
        return 1 + Math.ceil((startWeekday - target.getTime()) / 604800000);
    };
    DateTime.prototype.clone = function () {
        return new DateTime(this.toJSDate());
    };
    DateTime.prototype.isBetween = function (date1, date2, inclusivity) {
        if (inclusivity === void 0) { inclusivity = '()'; }
        switch (inclusivity) {
            default:
            case '()':
                return this.timestamp() > date1.getTime() && this.timestamp() < date2.getTime();
            case '[)':
                return this.timestamp() >= date1.getTime() && this.timestamp() < date2.getTime();
            case '(]':
                return this.timestamp() > date1.getTime() && this.timestamp() <= date2.getTime();
            case '[]':
                return this.timestamp() >= date1.getTime() && this.timestamp() <= date2.getTime();
        }
    };
    DateTime.prototype.isBefore = function (date, unit) {
        if (unit === void 0) { unit = 'seconds'; }
        switch (unit) {
            case 'second':
            case 'seconds':
                return date.getTime() > this.getTime();
            case 'day':
            case 'days':
                return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
                    > new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime();
            case 'month':
            case 'months':
                return new Date(date.getFullYear(), date.getMonth(), 1).getTime()
                    > new Date(this.getFullYear(), this.getMonth(), 1).getTime();
            case 'year':
            case 'years':
                return date.getFullYear() > this.getFullYear();
        }
        throw new Error('isBefore: Invalid unit!');
    };
    DateTime.prototype.isSameOrBefore = function (date, unit) {
        if (unit === void 0) { unit = 'seconds'; }
        switch (unit) {
            case 'second':
            case 'seconds':
                return date.getTime() >= this.getTime();
            case 'day':
            case 'days':
                return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
                    >= new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime();
            case 'month':
            case 'months':
                return new Date(date.getFullYear(), date.getMonth(), 1).getTime()
                    >= new Date(this.getFullYear(), this.getMonth(), 1).getTime();
        }
        throw new Error('isSameOrBefore: Invalid unit!');
    };
    DateTime.prototype.isAfter = function (date, unit) {
        if (unit === void 0) { unit = 'seconds'; }
        switch (unit) {
            case 'second':
            case 'seconds':
                return this.getTime() > date.getTime();
            case 'day':
            case 'days':
                return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime()
                    > new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
            case 'month':
            case 'months':
                return new Date(this.getFullYear(), this.getMonth(), 1).getTime()
                    > new Date(date.getFullYear(), date.getMonth(), 1).getTime();
            case 'year':
            case 'years':
                return this.getFullYear() > date.getFullYear();
        }
        throw new Error('isAfter: Invalid unit!');
    };
    DateTime.prototype.isSameOrAfter = function (date, unit) {
        if (unit === void 0) { unit = 'seconds'; }
        switch (unit) {
            case 'second':
            case 'seconds':
                return this.getTime() >= date.getTime();
            case 'day':
            case 'days':
                return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime()
                    >= new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
            case 'month':
            case 'months':
                return new Date(this.getFullYear(), this.getMonth(), 1).getTime()
                    >= new Date(date.getFullYear(), date.getMonth(), 1).getTime();
        }
        throw new Error('isSameOrAfter: Invalid unit!');
    };
    DateTime.prototype.isSame = function (date, unit) {
        if (unit === void 0) { unit = 'seconds'; }
        switch (unit) {
            case 'second':
            case 'seconds':
                return this.getTime() === date.getTime();
            case 'day':
            case 'days':
                return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime()
                    === new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
            case 'month':
            case 'months':
                return new Date(this.getFullYear(), this.getMonth(), 1).getTime()
                    === new Date(date.getFullYear(), date.getMonth(), 1).getTime();
        }
        throw new Error('isSame: Invalid unit!');
    };
    DateTime.prototype.add = function (duration, unit) {
        if (unit === void 0) { unit = 'seconds'; }
        switch (unit) {
            case 'second':
            case 'seconds':
                this.setSeconds(this.getSeconds() + duration);
                break;
            case 'day':
            case 'days':
                this.setDate(this.getDate() + duration);
                break;
            case 'month':
            case 'months':
                this.setMonth(this.getMonth() + duration);
                break;
        }
        return this;
    };
    DateTime.prototype.subtract = function (duration, unit) {
        if (unit === void 0) { unit = 'seconds'; }
        switch (unit) {
            case 'second':
            case 'seconds':
                this.setSeconds(this.getSeconds() - duration);
                break;
            case 'day':
            case 'days':
                this.setDate(this.getDate() - duration);
                break;
            case 'month':
            case 'months':
                this.setMonth(this.getMonth() - duration);
                break;
        }
        return this;
    };
    DateTime.prototype.diff = function (date, unit) {
        if (unit === void 0) { unit = 'seconds'; }
        var oneDay = 1000 * 60 * 60 * 24;
        switch (unit) {
            default:
            case 'second':
            case 'seconds':
                return this.getTime() - date.getTime();
            case 'day':
            case 'days':
                return Math.round((this.timestamp() - date.getTime()) / oneDay);
            case 'month':
            case 'months':
            // @TODO
        }
    };
    DateTime.prototype.format = function (format, lang) {
        if (lang === void 0) { lang = 'en-US'; }
        if (typeof format === 'object') {
            return format.output(this.clone().toJSDate());
        }
        var response = '';
        var matches = [];
        var m = null;
        // tslint:disable-next-line: no-conditional-assignment
        while ((m = DateTime.regex.exec(format)) != null) {
            if (m[1] === '\\')
                continue; // delete when regexp lookbehind
            matches.push(m);
        }
        if (matches.length) {
            // add start line of tokens are not at the beginning
            if (matches[0].index > 0) {
                response += format.substring(0, matches[0].index);
            }
            for (var _i = 0, _a = Object.entries(matches); _i < _a.length; _i++) {
                var _b = _a[_i], k = _b[0], match = _b[1];
                var key = Number(k);
                response += this.formatTokens(match[0], lang);
                if (matches[key + 1]) {
                    response += format.substring(match.index + match[0].length, matches[key + 1].index);
                }
                // add end line if tokens are not at the ending
                if (key === matches.length - 1) {
                    response += format.substring(match.index + match[0].length);
                }
            }
        }
        // remove escape characters
        return response.replace(/\\/g, '');
    };
    DateTime.prototype.timestamp = function () {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0, 0).getTime();
    };
    DateTime.prototype.formatTokens = function (token, lang) {
        switch (token) {
            case 'YY': return String(this.getFullYear()).slice(-2);
            case 'YYYY': return String(this.getFullYear());
            case 'M': return String(this.getMonth() + 1);
            case 'MM': return ("0" + (this.getMonth() + 1)).slice(-2);
            case 'MMM': return DateTime.shortMonths(lang)[this.getMonth()];
            case 'MMMM': return DateTime.longMonths(lang)[this.getMonth()];
            case 'D': return String(this.getDate());
            case 'DD': return ("0" + this.getDate()).slice(-2);
            default: return '';
        }
    };
    // replace to regexp lookbehind when most popular browsers will support
    // https://caniuse.com/#feat=js-regexp-lookbehind
    // /(?<!\\)(Y{2,4}|M{1,4}|D{1,2}|d{1,4}])/g
    DateTime.regex = /(\\)?(Y{2,4}|M{1,4}|D{1,2}|d{1,4})/g;
    DateTime.MONTH_JS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    return DateTime;
}());
exports.DateTime = DateTime;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var litepicker_1 = __webpack_require__(/*! ./litepicker */ "./src/litepicker.ts");
exports.Litepicker = litepicker_1.Litepicker;
__webpack_require__(/*! ./methods */ "./src/methods.ts");
window.Litepicker = litepicker_1.Litepicker;
exports.default = litepicker_1.Litepicker;


/***/ }),

/***/ "./src/litepicker.ts":
/*!***************************!*\
  !*** ./src/litepicker.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var calendar_1 = __webpack_require__(/*! ./calendar */ "./src/calendar.ts");
var datetime_1 = __webpack_require__(/*! ./datetime */ "./src/datetime.ts");
var style = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var Litepicker = /** @class */ (function (_super) {
    __extends(Litepicker, _super);
    function Litepicker(options) {
        var _this = _super.call(this, options) || this;
        _this.preventClick = false;
        //
        _this.bindEvents();
        return _this;
    }
    Litepicker.prototype.scrollToDate = function (el) {
        if (this.options.scrollToDate) {
            // tslint:disable-next-line: max-line-length
            var startDate = this.options.startDate instanceof datetime_1.DateTime ? this.options.startDate.clone() : null;
            // tslint:disable-next-line: max-line-length
            var endDate = this.options.endDate instanceof datetime_1.DateTime ? this.options.endDate.clone() : null;
            if (this.options.startDate && (!el || el === this.options.element)) {
                startDate.setDate(1);
                this.calendars[0] = startDate.clone();
            }
            else if (el && this.options.endDate && el === this.options.elementEnd) {
                endDate.setDate(1);
                if (this.options.numberOfMonths > 1 && endDate.isAfter(startDate)) {
                    endDate.setMonth(endDate.getMonth() - (this.options.numberOfMonths - 1));
                }
                this.calendars[0] = endDate.clone();
            }
        }
    };
    Litepicker.prototype.bindEvents = function () {
        document.addEventListener('click', this.onClick.bind(this), true);
        this.ui = document.createElement('div');
        this.ui.className = style.litepicker;
        this.ui.style.display = 'none';
        this.ui.addEventListener('mouseenter', this.onMouseEnter.bind(this), true);
        this.ui.addEventListener('mouseleave', this.onMouseLeave.bind(this), false);
        if (this.options.autoRefresh) {
            if (this.options.element instanceof HTMLElement) {
                this.options.element.addEventListener('keyup', this.onInput.bind(this), true);
            }
            if (this.options.elementEnd instanceof HTMLElement) {
                this.options.elementEnd.addEventListener('keyup', this.onInput.bind(this), true);
            }
        }
        else {
            if (this.options.element instanceof HTMLElement) {
                this.options.element.addEventListener('change', this.onInput.bind(this), true);
            }
            if (this.options.elementEnd instanceof HTMLElement) {
                this.options.elementEnd.addEventListener('change', this.onInput.bind(this), true);
            }
        }
        if (this.options.parentEl) {
            if (this.options.parentEl instanceof HTMLElement) {
                this.options.parentEl.appendChild(this.ui);
            }
            else {
                document.querySelector(this.options.parentEl).appendChild(this.ui);
            }
        }
        else {
            if (this.options.inlineMode) {
                if (this.options.element instanceof HTMLInputElement) {
                    this.options.element.parentNode.appendChild(this.ui);
                }
                else {
                    this.options.element.appendChild(this.ui);
                }
            }
            else {
                document.body.appendChild(this.ui);
            }
        }
        this.updateInput();
        this.init();
        if (typeof this.options.setup === 'function') {
            this.options.setup.call(this, this);
        }
        this.render();
        if (this.options.inlineMode) {
            this.show();
        }
    };
    Litepicker.prototype.updateInput = function () {
        if (!(this.options.element instanceof HTMLInputElement))
            return;
        var startDate = this.options.startDate;
        var endDate = this.options.endDate;
        if (this.options.singleMode && startDate) {
            this.options.element.value = startDate.format(this.options.format, this.options.lang);
        }
        else if (!this.options.singleMode && startDate && endDate) {
            var startValue = startDate.format(this.options.format, this.options.lang);
            var endValue = endDate.format(this.options.format, this.options.lang);
            if (this.options.elementEnd instanceof HTMLInputElement) {
                this.options.element.value = startValue;
                this.options.elementEnd.value = endValue;
            }
            else {
                this.options.element.value = "" + startValue + this.options.delimiter + endValue;
            }
        }
        if (!startDate && !endDate) {
            this.options.element.value = '';
            if (this.options.elementEnd instanceof HTMLInputElement) {
                this.options.elementEnd.value = '';
            }
        }
    };
    Litepicker.prototype.isSamePicker = function (el) {
        var picker = el.closest("." + style.litepicker);
        return picker === this.ui;
    };
    Litepicker.prototype.shouldShown = function (el) {
        return !el.disabled && (el === this.options.element
            || (this.options.elementEnd && el === this.options.elementEnd));
    };
    Litepicker.prototype.shouldResetDatePicked = function () {
        return this.options.singleMode || this.datePicked.length === 2;
    };
    Litepicker.prototype.shouldSwapDatePicked = function () {
        return this.datePicked.length === 2
            && this.datePicked[0].getTime() > this.datePicked[1].getTime();
    };
    Litepicker.prototype.shouldCheckLockDays = function () {
        return this.options.disallowLockDaysInRange
            && this.datePicked.length === 2;
    };
    Litepicker.prototype.onClick = function (e) {
        var target = e.target;
        if (!target || !this.ui) {
            return;
        }
        // Click on element
        if (this.shouldShown(target)) {
            this.show(target);
            return;
        }
        // Click outside picker
        if (!target.closest("." + style.litepicker) && this.isShowning()) {
            this.hide();
            return;
        }
        if (!this.isSamePicker(target)) {
            return;
        }
        this.emit('before:click', target);
        if (this.preventClick) {
            this.preventClick = false;
            return;
        }
        // Click on date
        if (target.classList.contains(style.dayItem)) {
            e.preventDefault();
            if (target.classList.contains(style.isLocked)) {
                return;
            }
            if (this.shouldResetDatePicked()) {
                this.datePicked.length = 0;
            }
            this.datePicked[this.datePicked.length] = new datetime_1.DateTime(target.dataset.time);
            if (this.shouldSwapDatePicked()) {
                var tempDate = this.datePicked[1].clone();
                this.datePicked[1] = this.datePicked[0].clone();
                this.datePicked[0] = tempDate.clone();
            }
            if (this.shouldCheckLockDays()) {
                var locked = utils_1.rangeIsLocked(this.datePicked, this.options);
                if (locked) {
                    this.emit('error:range', this.datePicked);
                    this.datePicked.length = 0;
                }
            }
            this.render();
            this.emit.apply(this, __spreadArrays(['preselect'], __spreadArrays(this.datePicked).map(function (d) { return d.clone(); })));
            if (this.options.autoApply) {
                if (this.options.singleMode && this.datePicked.length) {
                    this.setDate(this.datePicked[0]);
                    // this.hide();
                    this.options.singleMode = false;
                    this.render();
                }
                else if (!this.options.singleMode && this.datePicked.length === 2) {
                    this.setDateRange(this.datePicked[0], this.datePicked[1]);
                    this.hide();
                }
            }
            return;
        }
        // Click on button previous month
        if (target.classList.contains(style.buttonPreviousMonth)) {
            e.preventDefault();
            var idx = 0;
            var numberOfMonths = this.options.switchingMonths || this.options.numberOfMonths;
            if (this.options.splitView) {
                var monthItem = target.closest("." + style.monthItem);
                idx = utils_1.findNestedMonthItem(monthItem);
                numberOfMonths = 1;
            }
            this.calendars[idx].setMonth(this.calendars[idx].getMonth() - numberOfMonths);
            this.gotoDate(this.calendars[idx], idx);
            this.emit('change:month', this.calendars[idx], idx);
            return;
        }
        // Click on button next month
        if (target.classList.contains(style.buttonNextMonth)) {
            e.preventDefault();
            var idx = 0;
            var numberOfMonths = this.options.switchingMonths || this.options.numberOfMonths;
            if (this.options.splitView) {
                var monthItem = target.closest("." + style.monthItem);
                idx = utils_1.findNestedMonthItem(monthItem);
                numberOfMonths = 1;
            }
            this.calendars[idx].setMonth(this.calendars[idx].getMonth() + numberOfMonths);
            this.gotoDate(this.calendars[idx], idx);
            this.emit('change:month', this.calendars[idx], idx);
            return;
        }
        // Click on button cancel
        if (target.classList.contains(style.buttonCancel)) {
            e.preventDefault();
            this.hide();
            this.emit('button:cancel');
        }
        // Click on button apply
        if (target.classList.contains(style.buttonApply)) {
            e.preventDefault();
            if (this.options.singleMode && this.datePicked.length) {
                this.setDate(this.datePicked[0]);
            }
            else if (!this.options.singleMode && this.datePicked.length === 2) {
                this.setDateRange(this.datePicked[0], this.datePicked[1]);
            }
            this.hide();
            this.emit('button:apply', this.options.startDate, this.options.endDate);
        }
    };
    Litepicker.prototype.showTooltip = function (element, text) {
        var tooltip = this.ui.querySelector("." + style.containerTooltip);
        tooltip.style.visibility = 'visible';
        tooltip.innerHTML = text;
        var pickerBCR = this.ui.getBoundingClientRect();
        var tooltipBCR = tooltip.getBoundingClientRect();
        var dayBCR = element.getBoundingClientRect();
        var top = dayBCR.top;
        var left = dayBCR.left;
        if (this.options.inlineMode && this.options.parentEl) {
            var parentBCR = this.ui.parentNode.getBoundingClientRect();
            top -= parentBCR.top;
            left -= parentBCR.left;
        }
        else {
            top -= pickerBCR.top;
            left -= pickerBCR.left;
        }
        top -= tooltipBCR.height;
        left -= tooltipBCR.width / 2;
        left += dayBCR.width / 2;
        tooltip.style.top = top + "px";
        tooltip.style.left = left + "px";
        this.emit('tooltip', tooltip, element);
    };
    Litepicker.prototype.hideTooltip = function () {
        var tooltip = this.ui.querySelector("." + style.containerTooltip);
        tooltip.style.visibility = 'hidden';
    };
    Litepicker.prototype.shouldAllowMouseEnter = function (el) {
        return !this.options.singleMode
            && !el.classList.contains(style.isLocked);
    };
    Litepicker.prototype.shouldAllowRepick = function () {
        return this.options.elementEnd
            && this.options.allowRepick
            && this.options.startDate
            && this.options.endDate;
    };
    Litepicker.prototype.isDayItem = function (el) {
        return el.classList.contains(style.dayItem);
    };
    Litepicker.prototype.onMouseEnter = function (event) {
        var _this = this;
        var target = event.target;
        if (!this.isDayItem(target)) {
            return;
        }
        if (this.shouldAllowMouseEnter(target)) {
            if (this.shouldAllowRepick()) {
                if (this.triggerElement === this.options.element) {
                    this.datePicked[0] = this.options.endDate.clone();
                }
                else if (this.triggerElement === this.options.elementEnd) {
                    this.datePicked[0] = this.options.startDate.clone();
                }
            }
            if (this.datePicked.length !== 1) {
                return;
            }
            var startDateElement = this.ui
                .querySelector("." + style.dayItem + "[data-time=\"" + this.datePicked[0].getTime() + "\"]");
            var date1_1 = this.datePicked[0].clone();
            var date2_1 = new datetime_1.DateTime(target.dataset.time);
            var isFlipped = false;
            if (date1_1.getTime() > date2_1.getTime()) {
                var tempDate = date1_1.clone();
                date1_1 = date2_1.clone();
                date2_1 = tempDate.clone();
                isFlipped = true;
            }
            var allDayItems = Array.prototype.slice.call(this.ui.querySelectorAll("." + style.dayItem));
            allDayItems.forEach(function (d) {
                var date = new datetime_1.DateTime(d.dataset.time);
                var day = _this.renderDay(date);
                if (date.isBetween(date1_1, date2_1)) {
                    day.classList.add(style.isInRange);
                }
                d.className = day.className;
            });
            target.classList.add(style.isEndDate);
            if (isFlipped) {
                if (startDateElement) {
                    startDateElement.classList.add(style.isFlipped);
                }
                target.classList.add(style.isFlipped);
            }
            else {
                if (startDateElement) {
                    startDateElement.classList.remove(style.isFlipped);
                }
                target.classList.remove(style.isFlipped);
            }
            if (this.options.showTooltip) {
                var days = date2_1.diff(date1_1, 'day') + 1;
                if (typeof this.options.tooltipNumber === 'function') {
                    days = this.options.tooltipNumber.call(this, days);
                }
                if (days > 0) {
                    var pluralName = this.pluralSelector(days);
                    var pluralText = this.options.tooltipText[pluralName]
                        ? this.options.tooltipText[pluralName]
                        : "[" + pluralName + "]";
                    var text = days + " " + pluralText;
                    this.showTooltip(target, text);
                    // fix bug iOS 10-12 - https://github.com/wakirin/Litepicker/issues/124
                    var ua = window.navigator.userAgent;
                    var iDevice = /(iphone|ipad)/i.test(ua);
                    var iOS11or12 = /OS 1([0-2])/i.test(ua);
                    if (iDevice && iOS11or12) {
                        target.dispatchEvent(new Event('click'));
                    }
                }
                else {
                    this.hideTooltip();
                }
            }
        }
    };
    Litepicker.prototype.onMouseLeave = function (event) {
        var target = event.target;
        if (!this.options.allowRepick
            || (this.options.allowRepick && !this.options.startDate && !this.options.endDate)) {
            return;
        }
        this.datePicked.length = 0;
        this.render();
    };
    Litepicker.prototype.onInput = function (event) {
        var _a = this.parseInput(), startValue = _a[0], endValue = _a[1];
        var isValid = false;
        var dateFormat = this.options.format;
        if (this.options.elementEnd) {
            isValid = startValue instanceof datetime_1.DateTime
                && endValue instanceof datetime_1.DateTime
                && startValue.format(dateFormat) === this.options.element.value
                && endValue.format(dateFormat) === this.options.elementEnd.value;
        }
        else if (this.options.singleMode) {
            isValid = startValue instanceof datetime_1.DateTime
                && startValue.format(dateFormat) === this.options.element.value;
        }
        else {
            isValid = startValue instanceof datetime_1.DateTime
                && endValue instanceof datetime_1.DateTime
                // tslint:disable-next-line: max-line-length
                && "" + startValue.format(dateFormat) + this.options.delimiter + endValue.format(dateFormat) === this.options.element.value;
        }
        if (isValid) {
            if (endValue && startValue.getTime() > endValue.getTime()) {
                var tempDate = startValue.clone();
                startValue = endValue.clone();
                endValue = tempDate.clone();
            }
            this.options.startDate = new datetime_1.DateTime(startValue, this.options.format, this.options.lang);
            if (endValue) {
                this.options.endDate = new datetime_1.DateTime(endValue, this.options.format, this.options.lang);
            }
            this.updateInput();
            this.render();
            var dateGo = startValue.clone();
            var monthIdx = 0;
            var isStart = true;
            if (this.options.elementEnd) {
                isStart = startValue.format(dateFormat) === event.target.value;
            }
            else {
                isStart = event.target.value.startsWith(startValue.format(dateFormat));
            }
            if (!isStart) {
                dateGo = endValue.clone();
                monthIdx = this.options.numberOfMonths - 1;
            }
            this.emit('selected', this.getStartDate(), this.getEndDate());
            this.gotoDate(dateGo, monthIdx);
        }
    };
    return Litepicker;
}(calendar_1.Calendar));
exports.Litepicker = Litepicker;


/***/ }),

/***/ "./src/methods.ts":
/*!************************!*\
  !*** ./src/methods.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var datetime_1 = __webpack_require__(/*! ./datetime */ "./src/datetime.ts");
var litepicker_1 = __webpack_require__(/*! ./litepicker */ "./src/litepicker.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
litepicker_1.Litepicker.prototype.show = function (el) {
    if (el === void 0) { el = null; }
    this.emit('before:show', el);
    console.log('asd');
    var element = el ? el : this.options.element;
    this.triggerElement = element;
    if (this.isShowning()) {
        return;
    }
    if (this.options.inlineMode) {
        this.ui.style.position = 'relative';
        this.ui.style.display = 'inline-block';
        this.ui.style.top = null;
        this.ui.style.left = null;
        this.ui.style.bottom = null;
        this.ui.style.right = null;
        return;
    }
    this.scrollToDate(el);
    this.render();
    this.ui.style.position = 'absolute';
    this.ui.style.display = 'block';
    this.ui.style.zIndex = this.options.zIndex;
    var position = this.findPosition(element);
    this.ui.style.top = position.top + "px";
    this.ui.style.left = position.left + "px";
    this.ui.style.right = null;
    this.ui.style.bottom = null;
    this.emit('show', el);
};
litepicker_1.Litepicker.prototype.hide = function () {
    if (!this.isShowning()) {
        return;
    }
    this.datePicked.length = 0;
    this.updateInput();
    if (this.options.inlineMode) {
        this.render();
        return;
    }
    this.ui.style.display = 'none';
    this.emit('hide');
};
litepicker_1.Litepicker.prototype.getDate = function () {
    return this.getStartDate();
};
litepicker_1.Litepicker.prototype.getStartDate = function () {
    if (this.options.startDate) {
        return this.options.startDate.clone();
    }
    return null;
};
litepicker_1.Litepicker.prototype.getEndDate = function () {
    if (this.options.endDate) {
        return this.options.endDate.clone();
    }
    return null;
};
litepicker_1.Litepicker.prototype.setDate = function (date, force) {
    if (force === void 0) { force = false; }
    var d = new datetime_1.DateTime(date, this.options.format, this.options.lang);
    var isLocked = utils_1.dateIsLocked(d, this.options, [d]);
    if (isLocked && !force) {
        this.emit('error:date', d);
    }
    else {
        this.setStartDate(date);
        if (this.options.inlineMode) {
            this.render();
        }
        this.emit('selected', this.getDate());
    }
};
litepicker_1.Litepicker.prototype.setStartDate = function (date) {
    if (!date)
        return;
    this.options.startDate = new datetime_1.DateTime(date, this.options.format, this.options.lang);
    this.updateInput();
};
litepicker_1.Litepicker.prototype.setEndDate = function (date) {
    if (!date)
        return;
    this.options.endDate = new datetime_1.DateTime(date, this.options.format, this.options.lang);
    if (this.options.startDate.getTime() > this.options.endDate.getTime()) {
        this.options.endDate = this.options.startDate.clone();
        this.options.startDate = new datetime_1.DateTime(date, this.options.format, this.options.lang);
    }
    this.updateInput();
};
litepicker_1.Litepicker.prototype.setDateRange = function (date1, date2, force) {
    if (force === void 0) { force = false; }
    // stop repicking by resetting the trigger element
    this.triggerElement = undefined;
    var d1 = new datetime_1.DateTime(date1, this.options.format, this.options.lang);
    var d2 = new datetime_1.DateTime(date2, this.options.format, this.options.lang);
    var isLocked = false;
    if (this.options.disallowLockDaysInRange) {
        isLocked = utils_1.rangeIsLocked([d1, d2], this.options);
    }
    else {
        isLocked = utils_1.dateIsLocked(d1, this.options, [d1, d2])
            || utils_1.dateIsLocked(d2, this.options, [d1, d2]);
    }
    if (isLocked && !force) {
        this.emit('error:range', [d1, d2]);
    }
    else {
        this.setStartDate(d1);
        this.setEndDate(d2);
        if (this.options.inlineMode) {
            this.render();
        }
        this.updateInput();
        this.emit('selected', this.getStartDate(), this.getEndDate());
    }
};
litepicker_1.Litepicker.prototype.gotoDate = function (date, idx) {
    if (idx === void 0) { idx = 0; }
    var toDate = new datetime_1.DateTime(date);
    toDate.setDate(1);
    this.calendars[idx] = toDate.clone();
    this.render();
};
litepicker_1.Litepicker.prototype.setLockDays = function (array) {
    this.options.lockDays = datetime_1.DateTime.convertArray(array, this.options.lockDaysFormat);
    this.render();
};
litepicker_1.Litepicker.prototype.setHighlightedDays = function (array) {
    this.options.highlightedDays = datetime_1.DateTime.convertArray(array, this.options.highlightedDaysFormat);
    this.render();
};
litepicker_1.Litepicker.prototype.setOptions = function (options) {
    delete options.element;
    delete options.elementEnd;
    delete options.parentEl;
    if (options.startDate) {
        options.startDate = new datetime_1.DateTime(options.startDate, this.options.format, this.options.lang);
    }
    if (options.endDate) {
        options.endDate = new datetime_1.DateTime(options.endDate, this.options.format, this.options.lang);
    }
    var dropdowns = __assign(__assign({}, this.options.dropdowns), options.dropdowns);
    var buttonText = __assign(__assign({}, this.options.buttonText), options.buttonText);
    var tooltipText = __assign(__assign({}, this.options.tooltipText), options.tooltipText);
    this.options = __assign(__assign({}, this.options), options);
    this.options.dropdowns = __assign({}, dropdowns);
    this.options.buttonText = __assign({}, buttonText);
    this.options.tooltipText = __assign({}, tooltipText);
    if (this.options.singleMode && !(this.options.startDate instanceof datetime_1.DateTime)) {
        this.options.startDate = null;
        this.options.endDate = null;
    }
    if (!this.options.singleMode
        && (!(this.options.startDate instanceof datetime_1.DateTime)
            || !(this.options.endDate instanceof datetime_1.DateTime))) {
        this.options.startDate = null;
        this.options.endDate = null;
    }
    for (var idx = 0; idx < this.options.numberOfMonths; idx += 1) {
        var date = this.options.startDate
            ? this.options.startDate.clone()
            : new datetime_1.DateTime();
        date.setDate(1);
        date.setMonth(date.getMonth() + idx);
        this.calendars[idx] = date;
    }
    if (this.options.lockDays.length) {
        this.options.lockDays = datetime_1.DateTime.convertArray(this.options.lockDays, this.options.lockDaysFormat);
    }
    if (this.options.highlightedDays.length) {
        this.options.highlightedDays = datetime_1.DateTime.convertArray(this.options.highlightedDays, this.options.highlightedDaysFormat);
    }
    this.render();
    if (this.options.inlineMode) {
        this.show();
    }
    this.updateInput();
};
litepicker_1.Litepicker.prototype.clearSelection = function () {
    this.options.startDate = null;
    this.options.endDate = null;
    this.datePicked.length = 0;
    this.updateInput();
    if (this.isShowning()) {
        this.render();
    }
    this.emit('clear:selection');
};
litepicker_1.Litepicker.prototype.destroy = function () {
    if (this.ui && this.ui.parentNode) {
        this.ui.parentNode.removeChild(this.ui);
        this.ui = null;
    }
    this.emit('destroy');
};


/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/dts-css-modules-loader??ref--5-1!../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../node_modules/postcss-loader/src??ref--5-3!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/dts-css-modules-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function insertAtTop(element) {
                var parent = document.querySelector('head');
                // eslint-disable-next-line no-underscore-dangle
                var lastInsertedElement = window._lastElementInsertedByStyleLoader;

                if (!window.disableLitepickerStyles) {
                  if (!lastInsertedElement) {
                    parent.insertBefore(element, parent.firstChild);
                  } else if (lastInsertedElement.nextSibling) {
                    parent.insertBefore(element, lastInsertedElement.nextSibling);
                  } else {
                    parent.appendChild(element);
                  }

                  // eslint-disable-next-line no-underscore-dangle
                  window._lastElementInsertedByStyleLoader = element;
                }
              };
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function findNestedMonthItem(monthItem) {
    var children = monthItem.parentNode.childNodes;
    for (var i = 0; i < children.length; i = i + 1) {
        var curNode = children.item(i);
        if (curNode === monthItem) {
            return i;
        }
    }
    return 0;
}
exports.findNestedMonthItem = findNestedMonthItem;
function dateIsLocked(date, options, pickedDates) {
    var isLocked = false;
    if (options.lockDays.length) {
        isLocked = options.lockDays
            .filter(function (d) {
            if (d instanceof Array) {
                return date.isBetween(d[0], d[1], options.lockDaysInclusivity);
            }
            return d.isSame(date, 'day');
        }).length;
    }
    if (!isLocked && typeof options.lockDaysFilter === 'function') {
        isLocked = options.lockDaysFilter.call(this, date.clone(), null, pickedDates);
    }
    return isLocked;
}
exports.dateIsLocked = dateIsLocked;
function rangeIsLocked(days, options) {
    var isLocked = false;
    if (options.lockDays.length) {
        isLocked = options.lockDays
            .filter(function (d) {
            if (d instanceof Array) {
                var isEqualToRange = days[0].toDateString() === d[0].toDateString()
                    && days[1].toDateString() === d[1].toDateString();
                return d[0].isBetween(days[0], days[1], options.lockDaysInclusivity)
                    || d[1].isBetween(days[0], days[1], options.lockDaysInclusivity)
                    || isEqualToRange;
            }
            return d.isBetween(days[0], days[1], options.lockDaysInclusivity);
        }).length;
    }
    if (!isLocked && typeof options.lockDaysFilter === 'function') {
        isLocked = options.lockDaysFilter.call(this, days[0].clone(), days[1].clone(), days);
    }
    return isLocked;
}
exports.rangeIsLocked = rangeIsLocked;


/***/ })

/******/ })});;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaXRlcGlja2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uLi9jdXN0b21DYWxlbmRhci9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9MaXRlcGlja2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9zcmMvY2FsZW5kYXIudHMiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uL3NyYy9jb3JlLnRzIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9zcmMvZGF0ZXRpbWUudHMiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9MaXRlcGlja2VyLy4vc3JjL2xpdGVwaWNrZXIudHMiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uL3NyYy9tZXRob2RzLnRzIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9zcmMvc2Nzcy9tYWluLnNjc3M/Y2MxZSIsIndlYnBhY2s6Ly9MaXRlcGlja2VyLy4vc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtR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Q0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxvQkFBb0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtCQUFrQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtCQUFrQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdCQUFnQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsZ0JBQWdCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJO0FBQzNDLDhCQUE4QixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJO0FBQ3ZEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNsYWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxtQkFBbUIsbUJBQU8sQ0FBQyx5Q0FBYztBQUN6QztBQUNBLG1CQUFPLENBQUMsbUNBQVc7QUFDbkI7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05hO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpREFBaUQsUUFBUTtBQUN6RCx3Q0FBd0MsUUFBUTtBQUNoRCx3REFBd0QsUUFBUTtBQUNoRTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxpQkFBaUIsbUJBQU8sQ0FBQyxxQ0FBWTtBQUNyQyxpQkFBaUIsbUJBQU8sQ0FBQyxxQ0FBWTtBQUNyQyxZQUFZLG1CQUFPLENBQUMsOENBQWtCO0FBQ3RDLGNBQWMsbUJBQU8sQ0FBQywrQkFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0hBQWtILGtCQUFrQixFQUFFO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDbkI7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzSkFBMkU7O0FBRWhHO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hDYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJsaXRlcGlja2VyLmFtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tbGl0ZXBpY2tlci1jb250YWluZXItbW9udGhzLWNvbG9yLWJnOiAjZmZmO1xcbiAgLS1saXRlcGlja2VyLWNvbnRhaW5lci1tb250aHMtYm94LXNoYWRvdy1jb2xvcjogI2RkZDtcXG4gIC0tbGl0ZXBpY2tlci1mb290ZXItY29sb3ItYmc6ICNmYWZhZmE7XFxuICAtLWxpdGVwaWNrZXItZm9vdGVyLWJveC1zaGFkb3ctY29sb3I6ICNkZGQ7XFxuICAtLWxpdGVwaWNrZXItdG9vbHRpcC1jb2xvci1iZzogI2ZmZjtcXG4gIC0tbGl0ZXBpY2tlci1tb250aC1oZWFkZXItY29sb3I6ICMzMzM7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLXByZXYtbW9udGgtY29sb3I6ICM5ZTllOWU7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLW5leHQtbW9udGgtY29sb3I6ICM5ZTllOWU7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLXByZXYtbW9udGgtY29sb3ItaG92ZXI6ICMyMTk2ZjM7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLW5leHQtbW9udGgtY29sb3ItaG92ZXI6ICMyMTk2ZjM7XFxuICAtLWxpdGVwaWNrZXItbW9udGgtd2lkdGg6IGNhbGModmFyKC0tbGl0ZXBpY2tlci1kYXktd2lkdGgpICogNyk7XFxuICAtLWxpdGVwaWNrZXItbW9udGgtd2Vla2RheS1jb2xvcjogIzllOWU5ZTtcXG4gIC0tbGl0ZXBpY2tlci1tb250aC13ZWVrLW51bWJlci1jb2xvcjogIzllOWU5ZTtcXG4gIC0tbGl0ZXBpY2tlci1kYXktd2lkdGg6IDM4cHg7XFxuICAtLWxpdGVwaWNrZXItZGF5LWNvbG9yOiAjMzMzO1xcbiAgLS1saXRlcGlja2VyLWRheS1jb2xvci1ob3ZlcjogIzIxOTZmMztcXG4gIC0tbGl0ZXBpY2tlci1pcy10b2RheS1jb2xvcjogI2Y0NDMzNjtcXG4gIC0tbGl0ZXBpY2tlci1pcy1pbi1yYW5nZS1jb2xvcjogI2JiZGVmYjtcXG4gIC0tbGl0ZXBpY2tlci1pcy1sb2NrZWQtY29sb3I6ICM5ZTllOWU7XFxuICAtLWxpdGVwaWNrZXItaXMtc3RhcnQtY29sb3I6ICNmZmY7XFxuICAtLWxpdGVwaWNrZXItaXMtc3RhcnQtY29sb3ItYmc6ICMyMTk2ZjM7XFxuICAtLWxpdGVwaWNrZXItaXMtZW5kLWNvbG9yOiAjZmZmO1xcbiAgLS1saXRlcGlja2VyLWlzLWVuZC1jb2xvci1iZzogIzIxOTZmMztcXG4gIC0tbGl0ZXBpY2tlci1idXR0b24tY2FuY2VsLWNvbG9yOiAjZmZmO1xcbiAgLS1saXRlcGlja2VyLWJ1dHRvbi1jYW5jZWwtY29sb3ItYmc6ICM5ZTllOWU7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLWFwcGx5LWNvbG9yOiAjZmZmO1xcbiAgLS1saXRlcGlja2VyLWJ1dHRvbi1hcHBseS1jb2xvci1iZzogIzIxOTZmMztcXG4gIC0tbGl0ZXBpY2tlci1idXR0b24tcmVzZXQtY29sb3I6ICM5MDkwOTA7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLXJlc2V0LWNvbG9yLWhvdmVyOiAjMjE5NmYzO1xcbiAgLS1saXRlcGlja2VyLWhpZ2hsaWdodGVkLWRheS1jb2xvcjogIzMzMztcXG4gIC0tbGl0ZXBpY2tlci1oaWdobGlnaHRlZC1kYXktY29sb3ItYmc6ICNmZmViM2I7IH1cXG5cXG4uc2hvdy13ZWVrLW51bWJlcnMge1xcbiAgLS1saXRlcGlja2VyLW1vbnRoLXdpZHRoOiBjYWxjKHZhcigtLWxpdGVwaWNrZXItZGF5LXdpZHRoKSAqIDgpOyB9XFxuXFxuLmxpdGVwaWNrZXIge1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBkaXNwbGF5OiBub25lOyB9XFxuICAubGl0ZXBpY2tlciBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7IH1cXG4gIC5saXRlcGlja2VyIC5jb250YWluZXJfX21haW4ge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1jb250YWluZXItbW9udGhzLWNvbG9yLWJnKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tbGl0ZXBpY2tlci1jb250YWluZXItbW9udGhzLWJveC1zaGFkb3ctY29sb3IpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tbGl0ZXBpY2tlci1jb250YWluZXItbW9udGhzLWJveC1zaGFkb3ctY29sb3IpO1xcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1saXRlcGlja2VyLW1vbnRoLXdpZHRoKSArIDEwcHgpO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocy5jb2x1bW5zLTIge1xcbiAgICAgIHdpZHRoOiBjYWxjKCh2YXIoLS1saXRlcGlja2VyLW1vbnRoLXdpZHRoKSAqIDIpICsgMjBweCk7IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzLmNvbHVtbnMtMyB7XFxuICAgICAgd2lkdGg6IGNhbGMoKHZhcigtLWxpdGVwaWNrZXItbW9udGgtd2lkdGgpICogMykgKyAzMHB4KTsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMuY29sdW1ucy00IHtcXG4gICAgICB3aWR0aDogY2FsYygodmFyKC0tbGl0ZXBpY2tlci1tb250aC13aWR0aCkgKiA0KSArIDQwcHgpOyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocy5zcGxpdC12aWV3IC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLXByZXZpb3VzLW1vbnRoLFxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMuc3BsaXQtdmlldyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1uZXh0LW1vbnRoIHtcXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbSB7XFxuICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgIHdpZHRoOiB2YXIoLS1saXRlcGlja2VyLW1vbnRoLXdpZHRoKTtcXG4gICAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1tb250aC1oZWFkZXItY29sb3IpOyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIGRpdiB7XFxuICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgICAgICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgICAgICAgICBmbGV4OiAxOyB9XFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgZGl2ID4gLm1vbnRoLWl0ZW0tbmFtZSB7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciBkaXYgPiAubW9udGgtaXRlbS15ZWFyIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwOyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5yZXNldC1idXR0b24ge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tcmVzZXQtY29sb3IpOyB9XFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLnJlc2V0LWJ1dHRvbiA+IHN2ZyB7XFxuICAgICAgICAgICAgZmlsbDogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tcmVzZXQtY29sb3IpOyB9XFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLnJlc2V0LWJ1dHRvbiAqIHtcXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5yZXNldC1idXR0b246aG92ZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1yZXNldC1jb2xvci1ob3Zlcik7IH1cXG4gICAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5yZXNldC1idXR0b246aG92ZXIgPiBzdmcge1xcbiAgICAgICAgICAgICAgZmlsbDogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tcmVzZXQtY29sb3ItaG92ZXIpOyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tcHJldmlvdXMtbW9udGgsXFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tbmV4dC1tb250aCB7XFxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYm9yZGVyIDAuM3M7XFxuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJvcmRlciAwLjNzO1xcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLXByZXZpb3VzLW1vbnRoICosXFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1uZXh0LW1vbnRoICoge1xcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tcHJldmlvdXMtbW9udGgge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tcHJldi1tb250aC1jb2xvcik7IH1cXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLXByZXZpb3VzLW1vbnRoID4gc3ZnLFxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tcHJldmlvdXMtbW9udGggPiBpbWcge1xcbiAgICAgICAgICAgIGZpbGw6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLXByZXYtbW9udGgtY29sb3IpOyB9XFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1wcmV2aW91cy1tb250aDpob3ZlciB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLXByZXYtbW9udGgtY29sb3ItaG92ZXIpOyB9XFxuICAgICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLXByZXZpb3VzLW1vbnRoOmhvdmVyID4gc3ZnIHtcXG4gICAgICAgICAgICAgIGZpbGw6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLXByZXYtbW9udGgtY29sb3ItaG92ZXIpOyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tbmV4dC1tb250aCB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1uZXh0LW1vbnRoLWNvbG9yKTsgfVxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tbmV4dC1tb250aCA+IHN2ZyxcXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLW5leHQtbW9udGggPiBpbWcge1xcbiAgICAgICAgICAgIGZpbGw6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLW5leHQtbW9udGgtY29sb3IpOyB9XFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1uZXh0LW1vbnRoOmhvdmVyIHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tbmV4dC1tb250aC1jb2xvci1ob3Zlcik7IH1cXG4gICAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tbmV4dC1tb250aDpob3ZlciA+IHN2ZyB7XFxuICAgICAgICAgICAgICBmaWxsOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1uZXh0LW1vbnRoLWNvbG9yLWhvdmVyKTsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS13ZWVrZGF5cy1yb3cge1xcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1tb250aC13ZWVrZGF5LWNvbG9yKTsgfVxcbiAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLXdlZWtkYXlzLXJvdyA+IGRpdiB7XFxuICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICAgICAgICBmb250LXNpemU6IDg1JTtcXG4gICAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAgICAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XFxuICAgICAgICAgIHdpZHRoOiB2YXIoLS1saXRlcGlja2VyLWRheS13aWR0aCk7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbTpmaXJzdC1jaGlsZCAuYnV0dG9uLXByZXZpb3VzLW1vbnRoIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW06bGFzdC1jaGlsZCAuYnV0dG9uLW5leHQtbW9udGgge1xcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS5uby1wcmV2aW91cy1tb250aCAuYnV0dG9uLXByZXZpb3VzLW1vbnRoIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS5uby1uZXh0LW1vbnRoIC5idXR0b24tbmV4dC1tb250aCB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cXG4gIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgPiBkaXYsXFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgPiBhIHtcXG4gICAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgICB3aWR0aDogdmFyKC0tbGl0ZXBpY2tlci1kYXktd2lkdGgpOyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtIHtcXG4gICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1kYXktY29sb3IpO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYm9yZGVyIDAuM3M7XFxuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYm9yZGVyIDAuM3M7XFxuICAgICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW06aG92ZXIge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItZGF5LWNvbG9yLWhvdmVyKTtcXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHZhcigtLWxpdGVwaWNrZXItZGF5LWNvbG9yLWhvdmVyKTtcXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHZhcigtLWxpdGVwaWNrZXItZGF5LWNvbG9yLWhvdmVyKTsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtLmlzLXRvZGF5IHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWlzLXRvZGF5LWNvbG9yKTsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtLmlzLWxvY2tlZCB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1pcy1sb2NrZWQtY29sb3IpOyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbS5pcy1sb2NrZWQ6aG92ZXIge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1pcy1sb2NrZWQtY29sb3IpO1xcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0uaXMtaW4tcmFuZ2Uge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1pcy1pbi1yYW5nZS1jb2xvcik7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0uaXMtc3RhcnQtZGF0ZSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1pcy1zdGFydC1jb2xvcik7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWlzLXN0YXJ0LWNvbG9yLWJnKTtcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7IH1cXG4gICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtLmlzLXN0YXJ0LWRhdGUuaXMtZmxpcHBlZCB7XFxuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbS5pcy1lbmQtZGF0ZSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1pcy1lbmQtY29sb3IpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1pcy1lbmQtY29sb3ItYmcpO1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDsgfVxcbiAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0uaXMtZW5kLWRhdGUuaXMtZmxpcHBlZCB7XFxuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbS5pcy1zdGFydC1kYXRlLmlzLWVuZC1kYXRlIHtcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4OyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0uaXMtaGlnaGxpZ2h0ZWQge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItaGlnaGxpZ2h0ZWQtZGF5LWNvbG9yKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpdGVwaWNrZXItaGlnaGxpZ2h0ZWQtZGF5LWNvbG9yLWJnKTsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC53ZWVrLW51bWJlciB7XFxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLW1vbnRoLXdlZWstbnVtYmVyLWNvbG9yKTtcXG4gICAgICBmb250LXNpemU6IDg1JTsgfVxcbiAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZm9vdGVyIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWZvb3Rlci1jb2xvci1iZyk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDNweCAzcHggMHB4IHZhcigtLWxpdGVwaWNrZXItZm9vdGVyLWJveC1zaGFkb3ctY29sb3IpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAzcHggM3B4IDBweCB2YXIoLS1saXRlcGlja2VyLWZvb3Rlci1ib3gtc2hhZG93LWNvbG9yKTtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4OyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2Zvb3RlciAucHJldmlldy1kYXRlLXJhbmdlIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgICAgZm9udC1zaXplOiA5MCU7IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZm9vdGVyIC5idXR0b24tY2FuY2VsIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1jYW5jZWwtY29sb3ItYmcpO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1jYW5jZWwtY29sb3IpO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBwYWRkaW5nOiAzcHggN3B4IDRweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19mb290ZXIgLmJ1dHRvbi1jYW5jZWwgKiB7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19mb290ZXIgLmJ1dHRvbi1hcHBseSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tYXBwbHktY29sb3ItYmcpO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1hcHBseS1jb2xvcik7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIHBhZGRpbmc6IDNweCA3cHggNHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19mb290ZXIgLmJ1dHRvbi1hcHBseTpkaXNhYmxlZCB7XFxuICAgICAgICBvcGFjaXR5OiAwLjc7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19mb290ZXIgLmJ1dHRvbi1hcHBseSAqIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICAubGl0ZXBpY2tlciAuY29udGFpbmVyX190b29sdGlwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpdGVwaWNrZXItdG9vbHRpcC1jb2xvci1iZyk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX190b29sdGlwOmJlZm9yZSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogLTVweDtcXG4gICAgICBsZWZ0OiBjYWxjKDUwJSAtIDVweCk7XFxuICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX190b29sdGlwOmFmdGVyIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAtNHB4O1xcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNHB4KTtcXG4gICAgICBib3JkZXItdG9wOiA0cHggc29saWQgdmFyKC0tbGl0ZXBpY2tlci10b29sdGlwLWNvbG9yLWJnKTtcXG4gICAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInNob3dXZWVrTnVtYmVyc1wiOiBcInNob3ctd2Vlay1udW1iZXJzXCIsXG5cdFwibGl0ZXBpY2tlclwiOiBcImxpdGVwaWNrZXJcIixcblx0XCJjb250YWluZXJNYWluXCI6IFwiY29udGFpbmVyX19tYWluXCIsXG5cdFwiY29udGFpbmVyTW9udGhzXCI6IFwiY29udGFpbmVyX19tb250aHNcIixcblx0XCJjb2x1bW5zMlwiOiBcImNvbHVtbnMtMlwiLFxuXHRcImNvbHVtbnMzXCI6IFwiY29sdW1ucy0zXCIsXG5cdFwiY29sdW1uczRcIjogXCJjb2x1bW5zLTRcIixcblx0XCJzcGxpdFZpZXdcIjogXCJzcGxpdC12aWV3XCIsXG5cdFwibW9udGhJdGVtSGVhZGVyXCI6IFwibW9udGgtaXRlbS1oZWFkZXJcIixcblx0XCJidXR0b25QcmV2aW91c01vbnRoXCI6IFwiYnV0dG9uLXByZXZpb3VzLW1vbnRoXCIsXG5cdFwiYnV0dG9uTmV4dE1vbnRoXCI6IFwiYnV0dG9uLW5leHQtbW9udGhcIixcblx0XCJtb250aEl0ZW1cIjogXCJtb250aC1pdGVtXCIsXG5cdFwibW9udGhJdGVtTmFtZVwiOiBcIm1vbnRoLWl0ZW0tbmFtZVwiLFxuXHRcIm1vbnRoSXRlbVllYXJcIjogXCJtb250aC1pdGVtLXllYXJcIixcblx0XCJyZXNldEJ1dHRvblwiOiBcInJlc2V0LWJ1dHRvblwiLFxuXHRcIm1vbnRoSXRlbVdlZWtkYXlzUm93XCI6IFwibW9udGgtaXRlbS13ZWVrZGF5cy1yb3dcIixcblx0XCJub1ByZXZpb3VzTW9udGhcIjogXCJuby1wcmV2aW91cy1tb250aFwiLFxuXHRcIm5vTmV4dE1vbnRoXCI6IFwibm8tbmV4dC1tb250aFwiLFxuXHRcImNvbnRhaW5lckRheXNcIjogXCJjb250YWluZXJfX2RheXNcIixcblx0XCJkYXlJdGVtXCI6IFwiZGF5LWl0ZW1cIixcblx0XCJpc1RvZGF5XCI6IFwiaXMtdG9kYXlcIixcblx0XCJpc0xvY2tlZFwiOiBcImlzLWxvY2tlZFwiLFxuXHRcImlzSW5SYW5nZVwiOiBcImlzLWluLXJhbmdlXCIsXG5cdFwiaXNTdGFydERhdGVcIjogXCJpcy1zdGFydC1kYXRlXCIsXG5cdFwiaXNGbGlwcGVkXCI6IFwiaXMtZmxpcHBlZFwiLFxuXHRcImlzRW5kRGF0ZVwiOiBcImlzLWVuZC1kYXRlXCIsXG5cdFwiaXNIaWdobGlnaHRlZFwiOiBcImlzLWhpZ2hsaWdodGVkXCIsXG5cdFwid2Vla051bWJlclwiOiBcIndlZWstbnVtYmVyXCIsXG5cdFwiY29udGFpbmVyRm9vdGVyXCI6IFwiY29udGFpbmVyX19mb290ZXJcIixcblx0XCJwcmV2aWV3RGF0ZVJhbmdlXCI6IFwicHJldmlldy1kYXRlLXJhbmdlXCIsXG5cdFwiYnV0dG9uQ2FuY2VsXCI6IFwiYnV0dG9uLWNhbmNlbFwiLFxuXHRcImJ1dHRvbkFwcGx5XCI6IFwiYnV0dG9uLWFwcGx5XCIsXG5cdFwiY29udGFpbmVyVG9vbHRpcFwiOiBcImNvbnRhaW5lcl9fdG9vbHRpcFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uICRnZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuICRnZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSAkZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgUmVmbGVjdEFwcGx5KHRoaXMubGlzdGVuZXIsIHRoaXMudGFyZ2V0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCIuL2NvcmVcIik7XHJcbnZhciBkYXRldGltZV8xID0gcmVxdWlyZShcIi4vZGF0ZXRpbWVcIik7XHJcbnZhciBzdHlsZSA9IHJlcXVpcmUoXCIuL3Njc3MvbWFpbi5zY3NzXCIpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG52YXIgQ2FsZW5kYXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ2FsZW5kYXIsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDYWxlbmRhcihvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpIHx8IHRoaXM7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuICAgIENhbGVuZGFyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmVtaXQoJ2JlZm9yZTpyZW5kZXInLCB0aGlzLnVpKTtcclxuICAgICAgICB2YXIgbWFpbkJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbWFpbkJsb2NrLmNsYXNzTmFtZSA9IHN0eWxlLmNvbnRhaW5lck1haW47XHJcbiAgICAgICAgdmFyIG1vbnRocyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1vbnRocy5jbGFzc05hbWUgPSBzdHlsZS5jb250YWluZXJNb250aHM7XHJcbiAgICAgICAgdmFyIGRlc2NCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRlc2NCbG9jay5jbGFzc05hbWUgPSAnY29udGFpbmVyX19kZXNjJztcclxuICAgICAgICBtYWluQmxvY2suYXBwZW5kQ2hpbGQoZGVzY0Jsb2NrKTtcclxuICAgICAgICBpZiAoc3R5bGVbXCJjb2x1bW5zXCIgKyB0aGlzLm9wdGlvbnMubnVtYmVyT2ZDb2x1bW5zXSkge1xyXG4gICAgICAgICAgICBtb250aHMuY2xhc3NMaXN0LnJlbW92ZShzdHlsZS5jb2x1bW5zMiwgc3R5bGUuY29sdW1uczMsIHN0eWxlLmNvbHVtbnM0KTtcclxuICAgICAgICAgICAgbW9udGhzLmNsYXNzTGlzdC5hZGQoc3R5bGVbXCJjb2x1bW5zXCIgKyB0aGlzLm9wdGlvbnMubnVtYmVyT2ZDb2x1bW5zXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3BsaXRWaWV3KSB7XHJcbiAgICAgICAgICAgIG1vbnRocy5jbGFzc0xpc3QuYWRkKHN0eWxlLnNwbGl0Vmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1dlZWtOdW1iZXJzKSB7XHJcbiAgICAgICAgICAgIG1vbnRocy5jbGFzc0xpc3QuYWRkKHN0eWxlLnNob3dXZWVrTnVtYmVycyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdGFydERhdGUgPSB0aGlzLmNhbGVuZGFyc1swXS5jbG9uZSgpO1xyXG4gICAgICAgIHZhciBzdGFydE1vbnRoSWR4ID0gc3RhcnREYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgdmFyIHRvdGFsTW9udGhzID0gc3RhcnREYXRlLmdldE1vbnRoKCkgKyB0aGlzLm9wdGlvbnMubnVtYmVyT2ZNb250aHM7XHJcbiAgICAgICAgdmFyIGNhbGVuZGFySWR4ID0gMDtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcclxuICAgICAgICBmb3IgKHZhciBpZHggPSBzdGFydE1vbnRoSWR4OyBpZHggPCB0b3RhbE1vbnRoczsgaWR4ICs9IDEpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGVJdGVyYXRvciA9IHN0YXJ0RGF0ZS5jbG9uZSgpO1xyXG4gICAgICAgICAgICBkYXRlSXRlcmF0b3Iuc2V0RGF0ZSgxKTtcclxuICAgICAgICAgICAgZGF0ZUl0ZXJhdG9yLnNldEhvdXJzKDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNwbGl0Vmlldykge1xyXG4gICAgICAgICAgICAgICAgZGF0ZUl0ZXJhdG9yID0gdGhpcy5jYWxlbmRhcnNbY2FsZW5kYXJJZHhdLmNsb25lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlSXRlcmF0b3Iuc2V0TW9udGgoaWR4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtb250aHMuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJNb250aChkYXRlSXRlcmF0b3IsIGNhbGVuZGFySWR4KSk7XHJcbiAgICAgICAgICAgIGNhbGVuZGFySWR4ICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudWkuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgbWFpbkJsb2NrLmFwcGVuZENoaWxkKG1vbnRocyk7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZXNldEJ1dHRvbikge1xyXG4gICAgICAgICAgICB2YXIgcmVzZXRCdXR0b24gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnJlc2V0QnV0dG9uID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvbiA9IHRoaXMub3B0aW9ucy5yZXNldEJ1dHRvbi5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcclxuICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uLmNsYXNzTmFtZSA9IHN0eWxlLnJlc2V0QnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b24uaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLmJ1dHRvblRleHQucmVzZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1zdHJpbmctbGl0ZXJhbFxyXG4gICAgICAgICAgICAgICAgX3RoaXNbJ2NsZWFyU2VsZWN0aW9uJ10oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG1haW5CbG9ja1xyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZS5tb250aEl0ZW0gKyBcIjpsYXN0LWNoaWxkXCIpXHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlLm1vbnRoSXRlbUhlYWRlcilcclxuICAgICAgICAgICAgICAgIC5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudWkuYXBwZW5kQ2hpbGQobWFpbkJsb2NrKTtcclxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5hdXRvQXBwbHkgfHwgdGhpcy5vcHRpb25zLmZvb3RlckhUTUwpIHtcclxuICAgICAgICAgICAgdGhpcy51aS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlckZvb3RlcigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93VG9vbHRpcCkge1xyXG4gICAgICAgICAgICB0aGlzLnVpLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyVG9vbHRpcCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51aS5kYXRhc2V0LnBsdWdpbnMgPSAodGhpcy5vcHRpb25zLnBsdWdpbnMgfHwgW10pLmpvaW4oJ3wnKTtcclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbmRlcicsIHRoaXMudWkpO1xyXG4gICAgfTtcclxuICAgIENhbGVuZGFyLnByb3RvdHlwZS5yZW5kZXJNb250aCA9IGZ1bmN0aW9uIChkYXRlLCBjYWxlbmRhcklkeCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHN0YXJ0RGF0ZSA9IGRhdGUuY2xvbmUoKTtcclxuICAgICAgICB2YXIgdG90YWxEYXlzID0gMzIgLSBuZXcgRGF0ZShzdGFydERhdGUuZ2V0RnVsbFllYXIoKSwgc3RhcnREYXRlLmdldE1vbnRoKCksIDMyKS5nZXREYXRlKCk7XHJcbiAgICAgICAgdmFyIG1vbnRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbW9udGguY2xhc3NOYW1lID0gc3R5bGUubW9udGhJdGVtO1xyXG4gICAgICAgIHZhciBtb250aEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1vbnRoSGVhZGVyLmNsYXNzTmFtZSA9IHN0eWxlLm1vbnRoSXRlbUhlYWRlcjtcclxuICAgICAgICB2YXIgbW9udGhBbmRZZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kcm9wZG93bnMubW9udGhzKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3RNb250aHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgICAgICAgc2VsZWN0TW9udGhzLmNsYXNzTmFtZSA9IHN0eWxlLm1vbnRoSXRlbU5hbWU7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgMTI7IHggKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgLy8gZGF5IDIgYmVjYXVzZSBpT1MgYnVnIHdpdGggYHRvTG9jYWxlU3RyaW5nYFxyXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dha2lyaW4vTGl0ZXBpY2tlci9pc3N1ZXMvMTEzXHJcbiAgICAgICAgICAgICAgICB2YXIgbW9udGhOYW1lID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUobmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCB4LCAyLCAwLCAwLCAwKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uTW9udGggPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIHgsIDEsIDAsIDAsIDApKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IFN0cmluZyh4KTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gbW9udGhOYW1lLnRvTG9jYWxlU3RyaW5nKHRoaXMub3B0aW9ucy5sYW5nLCB7IG1vbnRoOiAnbG9uZycgfSk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24uZGlzYWJsZWQgPSAodGhpcy5vcHRpb25zLm1pbkRhdGVcclxuICAgICAgICAgICAgICAgICAgICAmJiBvcHRpb25Nb250aC5pc0JlZm9yZShuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMubWluRGF0ZSksICdtb250aCcpKVxyXG4gICAgICAgICAgICAgICAgICAgIHx8ICh0aGlzLm9wdGlvbnMubWF4RGF0ZSAmJiBvcHRpb25Nb250aC5pc0FmdGVyKG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHRoaXMub3B0aW9ucy5tYXhEYXRlKSwgJ21vbnRoJykpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uTW9udGguZ2V0TW9udGgoKSA9PT0gZGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0TW9udGhzLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZWN0TW9udGhzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWR4ID0gMDtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnNwbGl0Vmlldykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtb250aEl0ZW0gPSB0YXJnZXQuY2xvc2VzdChcIi5cIiArIHN0eWxlLm1vbnRoSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWR4ID0gdXRpbHNfMS5maW5kTmVzdGVkTW9udGhJdGVtKG1vbnRoSXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jYWxlbmRhcnNbaWR4XS5zZXRNb250aChOdW1iZXIodGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ2NoYW5nZTptb250aCcsIF90aGlzLmNhbGVuZGFyc1tpZHhdLCBpZHgsIGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbW9udGhBbmRZZWFyLmFwcGVuZENoaWxkKHNlbGVjdE1vbnRocyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbW9udGhOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3Ryb25nJyk7XHJcbiAgICAgICAgICAgIG1vbnRoTmFtZS5jbGFzc05hbWUgPSBzdHlsZS5tb250aEl0ZW1OYW1lO1xyXG4gICAgICAgICAgICBtb250aE5hbWUuaW5uZXJIVE1MID0gZGF0ZS50b0xvY2FsZVN0cmluZyh0aGlzLm9wdGlvbnMubGFuZywgeyBtb250aDogJ2xvbmcnIH0pO1xyXG4gICAgICAgICAgICBtb250aEFuZFllYXIuYXBwZW5kQ2hpbGQobW9udGhOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kcm9wZG93bnMueWVhcnMpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdFllYXJzXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgICAgICAgc2VsZWN0WWVhcnNfMS5jbGFzc05hbWUgPSBzdHlsZS5tb250aEl0ZW1ZZWFyO1xyXG4gICAgICAgICAgICB2YXIgbWluWWVhciA9IHRoaXMub3B0aW9ucy5kcm9wZG93bnMubWluWWVhcjtcclxuICAgICAgICAgICAgdmFyIG1heFllYXIgPSB0aGlzLm9wdGlvbnMuZHJvcGRvd25zLm1heFllYXJcclxuICAgICAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLmRyb3Bkb3ducy5tYXhZZWFyXHJcbiAgICAgICAgICAgICAgICA6IChuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICBpZiAoZGF0ZS5nZXRGdWxsWWVhcigpID4gbWF4WWVhcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gU3RyaW5nKGRhdGUuZ2V0RnVsbFllYXIoKSk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IFN0cmluZyhkYXRlLmdldEZ1bGxZZWFyKCkpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RZZWFyc18xLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIgeCA9IG1heFllYXI7IHggPj0gbWluWWVhcjsgeCAtPSAxKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uWWVhciA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKG5ldyBEYXRlKHgsIDAsIDEsIDAsIDAsIDApKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IFN0cmluZyh4KTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gU3RyaW5nKHgpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLmRpc2FibGVkID0gKHRoaXMub3B0aW9ucy5taW5EYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgb3B0aW9uWWVhci5pc0JlZm9yZShuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMubWluRGF0ZSksICd5ZWFyJykpXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgKHRoaXMub3B0aW9ucy5tYXhEYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIG9wdGlvblllYXIuaXNBZnRlcihuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMubWF4RGF0ZSksICd5ZWFyJykpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gZGF0ZS5nZXRGdWxsWWVhcigpID09PSB4O1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0WWVhcnNfMS5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgPCBtaW5ZZWFyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBTdHJpbmcoZGF0ZS5nZXRGdWxsWWVhcigpKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gU3RyaW5nKGRhdGUuZ2V0RnVsbFllYXIoKSk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdFllYXJzXzEuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRyb3Bkb3ducy55ZWFycyA9PT0gJ2FzYycpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGlsZHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChzZWxlY3RZZWFyc18xLmNoaWxkTm9kZXMpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBjaGlsZHMucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0WWVhcnNfMS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHkuaW5uZXJIVE1MID0geS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RZZWFyc18xLmFwcGVuZENoaWxkKHkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZWN0WWVhcnNfMS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkeCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5zcGxpdFZpZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbW9udGhJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoXCIuXCIgKyBzdHlsZS5tb250aEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlkeCA9IHV0aWxzXzEuZmluZE5lc3RlZE1vbnRoSXRlbShtb250aEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2FsZW5kYXJzW2lkeF0uc2V0RnVsbFllYXIoTnVtYmVyKHRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdjaGFuZ2U6eWVhcicsIF90aGlzLmNhbGVuZGFyc1tpZHhdLCBpZHgsIGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbW9udGhBbmRZZWFyLmFwcGVuZENoaWxkKHNlbGVjdFllYXJzXzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIG1vbnRoWWVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgbW9udGhZZWFyLmNsYXNzTmFtZSA9IHN0eWxlLm1vbnRoSXRlbVllYXI7XHJcbiAgICAgICAgICAgIG1vbnRoWWVhci5pbm5lckhUTUwgPSBTdHJpbmcoZGF0ZS5nZXRGdWxsWWVhcigpKTtcclxuICAgICAgICAgICAgbW9udGhBbmRZZWFyLmFwcGVuZENoaWxkKG1vbnRoWWVhcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwcmV2aW91c01vbnRoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgcHJldmlvdXNNb250aEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XHJcbiAgICAgICAgcHJldmlvdXNNb250aEJ1dHRvbi5jbGFzc05hbWUgPSBzdHlsZS5idXR0b25QcmV2aW91c01vbnRoO1xyXG4gICAgICAgIHByZXZpb3VzTW9udGhCdXR0b24uaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLmJ1dHRvblRleHQucHJldmlvdXNNb250aDtcclxuICAgICAgICB2YXIgbmV4dE1vbnRoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbmV4dE1vbnRoQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcclxuICAgICAgICBuZXh0TW9udGhCdXR0b24uY2xhc3NOYW1lID0gc3R5bGUuYnV0dG9uTmV4dE1vbnRoO1xyXG4gICAgICAgIG5leHRNb250aEJ1dHRvbi5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMuYnV0dG9uVGV4dC5uZXh0TW9udGg7XHJcbiAgICAgICAgbW9udGhIZWFkZXIuYXBwZW5kQ2hpbGQocHJldmlvdXNNb250aEJ1dHRvbik7XHJcbiAgICAgICAgbW9udGhIZWFkZXIuYXBwZW5kQ2hpbGQobW9udGhBbmRZZWFyKTtcclxuICAgICAgICBtb250aEhlYWRlci5hcHBlbmRDaGlsZChuZXh0TW9udGhCdXR0b24pO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWluRGF0ZVxyXG4gICAgICAgICAgICAmJiBzdGFydERhdGUuaXNTYW1lT3JCZWZvcmUobmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLm1pbkRhdGUpLCAnbW9udGgnKSkge1xyXG4gICAgICAgICAgICBtb250aC5jbGFzc0xpc3QuYWRkKHN0eWxlLm5vUHJldmlvdXNNb250aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWF4RGF0ZVxyXG4gICAgICAgICAgICAmJiBzdGFydERhdGUuaXNTYW1lT3JBZnRlcihuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMubWF4RGF0ZSksICdtb250aCcpKSB7XHJcbiAgICAgICAgICAgIG1vbnRoLmNsYXNzTGlzdC5hZGQoc3R5bGUubm9OZXh0TW9udGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgd2Vla2RheXNSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3ZWVrZGF5c1Jvdy5jbGFzc05hbWUgPSBzdHlsZS5tb250aEl0ZW1XZWVrZGF5c1JvdztcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dXZWVrTnVtYmVycykge1xyXG4gICAgICAgICAgICB3ZWVrZGF5c1Jvdy5pbm5lckhUTUwgPSAnPGRpdj5XPC9kaXY+JztcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgdyA9IDE7IHcgPD0gNzsgdyArPSAxKSB7XHJcbiAgICAgICAgICAgIC8vIDcgZGF5cywgNCBpcyDCq1RodXJzZGF5wrsgKG5ldyBEYXRlKDE5NzAsIDAsIDEsIDEyLCAwLCAwLCAwKSlcclxuICAgICAgICAgICAgdmFyIGRheUlkeCA9IDcgLSA0ICsgdGhpcy5vcHRpb25zLmZpcnN0RGF5ICsgdztcclxuICAgICAgICAgICAgdmFyIHdlZWtkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgd2Vla2RheS5pbm5lckhUTUwgPSB0aGlzLndlZWtkYXlOYW1lKGRheUlkeCk7XHJcbiAgICAgICAgICAgIHdlZWtkYXkudGl0bGUgPSB0aGlzLndlZWtkYXlOYW1lKGRheUlkeCwgJ2xvbmcnKTtcclxuICAgICAgICAgICAgd2Vla2RheXNSb3cuYXBwZW5kQ2hpbGQod2Vla2RheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkYXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGF5cy5jbGFzc05hbWUgPSBzdHlsZS5jb250YWluZXJEYXlzO1xyXG4gICAgICAgIHZhciBza2lwRGF5cyA9IHRoaXMuY2FsY1NraXBEYXlzKHN0YXJ0RGF0ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93V2Vla051bWJlcnMgJiYgc2tpcERheXMpIHtcclxuICAgICAgICAgICAgZGF5cy5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcldlZWtOdW1iZXIoc3RhcnREYXRlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IHNraXBEYXlzOyBpZHggKz0gMSkge1xyXG4gICAgICAgICAgICB2YXIgZHVtbXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGF5cy5hcHBlbmRDaGlsZChkdW1teSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWZvci1vZlxyXG4gICAgICAgIGZvciAodmFyIGlkeCA9IDE7IGlkeCA8PSB0b3RhbERheXM7IGlkeCArPSAxKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZS5zZXREYXRlKGlkeCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1dlZWtOdW1iZXJzICYmIHN0YXJ0RGF0ZS5nZXREYXkoKSA9PT0gdGhpcy5vcHRpb25zLmZpcnN0RGF5KSB7XHJcbiAgICAgICAgICAgICAgICBkYXlzLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyV2Vla051bWJlcihzdGFydERhdGUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkYXlzLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyRGF5KHN0YXJ0RGF0ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtb250aC5hcHBlbmRDaGlsZChtb250aEhlYWRlcik7XHJcbiAgICAgICAgbW9udGguYXBwZW5kQ2hpbGQod2Vla2RheXNSb3cpO1xyXG4gICAgICAgIG1vbnRoLmFwcGVuZENoaWxkKGRheXMpO1xyXG4gICAgICAgIHRoaXMuZW1pdCgncmVuZGVyOm1vbnRoJywgbW9udGgsIGRhdGUpO1xyXG4gICAgICAgIHJldHVybiBtb250aDtcclxuICAgIH07XHJcbiAgICBDYWxlbmRhci5wcm90b3R5cGUucmVuZGVyRGF5ID0gZnVuY3Rpb24gKGRhdGUpIHtcclxuICAgICAgICBkYXRlLnNldEhvdXJzKCk7XHJcbiAgICAgICAgdmFyIGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRheS5jbGFzc05hbWUgPSBzdHlsZS5kYXlJdGVtO1xyXG4gICAgICAgIGRheS5pbm5lckhUTUwgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpO1xyXG4gICAgICAgIGRheS5kYXRhc2V0LnRpbWUgPSBTdHJpbmcoZGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgICAgIGlmIChkYXRlLnRvRGF0ZVN0cmluZygpID09PSAobmV3IERhdGUoKSkudG9EYXRlU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNUb2RheSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRhdGVQaWNrZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGVQaWNrZWRbMF0udG9EYXRlU3RyaW5nKCkgPT09IGRhdGUudG9EYXRlU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzU3RhcnREYXRlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSB8fCB0aGlzLmlucHV0VHlwZSA9PT0gJ2RlcGFydHVyZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0VuZERhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAyXHJcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmRhdGVQaWNrZWRbMV0udG9EYXRlU3RyaW5nKCkgPT09IGRhdGUudG9EYXRlU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzRW5kRGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRlLmlzQmV0d2Vlbih0aGlzLmRhdGVQaWNrZWRbMF0sIHRoaXMuZGF0ZVBpY2tlZFsxXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0luUmFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zdGFydERhdGUpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0RGF0ZSA9IHRoaXMub3B0aW9ucy5zdGFydERhdGU7XHJcbiAgICAgICAgICAgIHZhciBlbmREYXRlID0gdGhpcy5vcHRpb25zLmVuZERhdGU7XHJcbiAgICAgICAgICAgIGlmIChzdGFydERhdGUudG9EYXRlU3RyaW5nKCkgPT09IGRhdGUudG9EYXRlU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzU3RhcnREYXRlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzRW5kRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVuZERhdGUgJiYgZW5kRGF0ZS50b0RhdGVTdHJpbmcoKSA9PT0gZGF0ZS50b0RhdGVTdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNFbmREYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRlLmlzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNJblJhbmdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1pbkRhdGUgJiYgZGF0ZS5pc0JlZm9yZShuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMubWluRGF0ZSkpKSB7XHJcbiAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzTG9ja2VkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXhEYXRlICYmIGRhdGUuaXNBZnRlcihuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMubWF4RGF0ZSkpKSB7XHJcbiAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzTG9ja2VkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5taW5EYXlzID4gMVxyXG4gICAgICAgICAgICAmJiB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHZhciBtaW5EYXlzID0gdGhpcy5vcHRpb25zLm1pbkRheXMgLSAxOyAvLyBzdWJ0cmFjdCBzZWxlY3RlZCBkYXlcclxuICAgICAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmRhdGVQaWNrZWRbMF0uY2xvbmUoKS5zdWJ0cmFjdChtaW5EYXlzLCAnZGF5Jyk7XHJcbiAgICAgICAgICAgIHZhciByaWdodCA9IHRoaXMuZGF0ZVBpY2tlZFswXS5jbG9uZSgpLmFkZChtaW5EYXlzLCAnZGF5Jyk7XHJcbiAgICAgICAgICAgIGlmIChkYXRlLmlzQmV0d2VlbihsZWZ0LCB0aGlzLmRhdGVQaWNrZWRbMF0sICcoXScpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0xvY2tlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGUuaXNCZXR3ZWVuKHRoaXMuZGF0ZVBpY2tlZFswXSwgcmlnaHQsICdbKScpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0xvY2tlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXhEYXlzXHJcbiAgICAgICAgICAgICYmIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdmFyIG1heERheXMgPSB0aGlzLm9wdGlvbnMubWF4RGF5cztcclxuICAgICAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmRhdGVQaWNrZWRbMF0uY2xvbmUoKS5zdWJ0cmFjdChtYXhEYXlzLCAnZGF5Jyk7XHJcbiAgICAgICAgICAgIHZhciByaWdodCA9IHRoaXMuZGF0ZVBpY2tlZFswXS5jbG9uZSgpLmFkZChtYXhEYXlzLCAnZGF5Jyk7XHJcbiAgICAgICAgICAgIGlmIChkYXRlLmlzU2FtZU9yQmVmb3JlKGxlZnQpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0xvY2tlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGUuaXNTYW1lT3JBZnRlcihyaWdodCkpIHtcclxuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzTG9ja2VkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNlbGVjdEZvcndhcmRcclxuICAgICAgICAgICAgJiYgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMVxyXG4gICAgICAgICAgICAmJiBkYXRlLmlzQmVmb3JlKHRoaXMuZGF0ZVBpY2tlZFswXSkpIHtcclxuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNMb2NrZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNlbGVjdEJhY2t3YXJkXHJcbiAgICAgICAgICAgICYmIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDFcclxuICAgICAgICAgICAgJiYgZGF0ZS5pc0FmdGVyKHRoaXMuZGF0ZVBpY2tlZFswXSkpIHtcclxuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNMb2NrZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbG9ja2VkID0gdXRpbHNfMS5kYXRlSXNMb2NrZWQoZGF0ZSwgdGhpcy5vcHRpb25zLCB0aGlzLmRhdGVQaWNrZWQpO1xyXG4gICAgICAgIGlmIChsb2NrZWQpIHtcclxuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNMb2NrZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGlzSGlnaGxpZ2h0ZWQgPSB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuaXNCZXR3ZWVuKGRbMF0sIGRbMV0sICdbXScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGQuaXNTYW1lKGRhdGUsICdkYXknKTtcclxuICAgICAgICAgICAgfSkubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAoaXNIaWdobGlnaHRlZCkge1xyXG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNIaWdobGlnaHRlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZml4IGJ1ZyBpT1MgMTAtMTIgLSBodHRwczovL2dpdGh1Yi5jb20vd2FraXJpbi9MaXRlcGlja2VyL2lzc3Vlcy8xMjRcclxuICAgICAgICBkYXkudGFiSW5kZXggPSAhZGF5LmNsYXNzTGlzdC5jb250YWlucygnaXMtbG9ja2VkJykgPyAwIDogLTE7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZW5kZXI6ZGF5JywgZGF5LCBkYXRlKTtcclxuICAgICAgICByZXR1cm4gZGF5O1xyXG4gICAgfTtcclxuICAgIENhbGVuZGFyLnByb3RvdHlwZS5yZW5kZXJGb290ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGZvb3Rlci5jbGFzc05hbWUgPSBzdHlsZS5jb250YWluZXJGb290ZXI7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5mb290ZXJIVE1MKSB7XHJcbiAgICAgICAgICAgIGZvb3Rlci5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMuZm9vdGVySFRNTDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvb3Rlci5pbm5lckhUTUwgPSBcIlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJcIiArIHN0eWxlLnByZXZpZXdEYXRlUmFuZ2UgKyBcIlxcXCI+PC9zcGFuPlxcbiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIgKyBzdHlsZS5idXR0b25DYW5jZWwgKyBcIlxcXCI+XCIgKyB0aGlzLm9wdGlvbnMuYnV0dG9uVGV4dC5jYW5jZWwgKyBcIjwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIgKyBzdHlsZS5idXR0b25BcHBseSArIFwiXFxcIj5cIiArIHRoaXMub3B0aW9ucy5idXR0b25UZXh0LmFwcGx5ICsgXCI8L2J1dHRvbj5cXG4gICAgICBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRWYWx1ZSA9IHRoaXMuZGF0ZVBpY2tlZFswXS5mb3JtYXQodGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xyXG4gICAgICAgICAgICAgICAgZm9vdGVyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZS5wcmV2aWV3RGF0ZVJhbmdlKS5pbm5lckhUTUwgPSBzdGFydFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgZm9vdGVyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZS5idXR0b25BcHBseSkuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0VmFsdWUgPSB0aGlzLmRhdGVQaWNrZWRbMF0uZm9ybWF0KHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcclxuICAgICAgICAgICAgICAgIHZhciBlbmRWYWx1ZSA9IHRoaXMuZGF0ZVBpY2tlZFsxXS5mb3JtYXQodGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xyXG4gICAgICAgICAgICAgICAgZm9vdGVyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZS5wcmV2aWV3RGF0ZVJhbmdlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbm5lckhUTUwgPSBcIlwiICsgc3RhcnRWYWx1ZSArIHRoaXMub3B0aW9ucy5kZWxpbWl0ZXIgKyBlbmRWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbmRlcjpmb290ZXInLCBmb290ZXIpO1xyXG4gICAgICAgIHJldHVybiBmb290ZXI7XHJcbiAgICB9O1xyXG4gICAgQ2FsZW5kYXIucHJvdG90eXBlLnJlbmRlcldlZWtOdW1iZXIgPSBmdW5jdGlvbiAoZGF0ZSkge1xyXG4gICAgICAgIHZhciB3biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHZhciB3ZWVrID0gZGF0ZS5nZXRXZWVrKHRoaXMub3B0aW9ucy5maXJzdERheSk7XHJcbiAgICAgICAgd24uY2xhc3NOYW1lID0gc3R5bGUud2Vla051bWJlcjtcclxuICAgICAgICB3bi5pbm5lckhUTUwgPSB3ZWVrID09PSA1MyAmJiBkYXRlLmdldE1vbnRoKCkgPT09IDAgPyAnNTMgLyAxJyA6IHdlZWs7XHJcbiAgICAgICAgcmV0dXJuIHduO1xyXG4gICAgfTtcclxuICAgIENhbGVuZGFyLnByb3RvdHlwZS5yZW5kZXJUb29sdGlwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdC5jbGFzc05hbWUgPSBzdHlsZS5jb250YWluZXJUb29sdGlwO1xyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIENhbGVuZGFyLnByb3RvdHlwZS53ZWVrZGF5TmFtZSA9IGZ1bmN0aW9uIChkYXksIHJlcHJlc2VudGF0aW9uKSB7XHJcbiAgICAgICAgaWYgKHJlcHJlc2VudGF0aW9uID09PSB2b2lkIDApIHsgcmVwcmVzZW50YXRpb24gPSAnc2hvcnQnOyB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKDE5NzAsIDAsIGRheSwgMTIsIDAsIDAsIDApXHJcbiAgICAgICAgICAgIC50b0xvY2FsZVN0cmluZyh0aGlzLm9wdGlvbnMubGFuZywgeyB3ZWVrZGF5OiByZXByZXNlbnRhdGlvbiB9KTtcclxuICAgIH07XHJcbiAgICBDYWxlbmRhci5wcm90b3R5cGUuY2FsY1NraXBEYXlzID0gZnVuY3Rpb24gKGRhdGUpIHtcclxuICAgICAgICB2YXIgdG90YWwgPSBkYXRlLmdldERheSgpIC0gdGhpcy5vcHRpb25zLmZpcnN0RGF5O1xyXG4gICAgICAgIGlmICh0b3RhbCA8IDApXHJcbiAgICAgICAgICAgIHRvdGFsICs9IDc7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDYWxlbmRhcjtcclxufShjb3JlXzEuTFBDb3JlKSk7XHJcbmV4cG9ydHMuQ2FsZW5kYXIgPSBDYWxlbmRhcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGV2ZW50c18xID0gcmVxdWlyZShcImV2ZW50c1wiKTtcclxudmFyIGRhdGV0aW1lXzEgPSByZXF1aXJlKFwiLi9kYXRldGltZVwiKTtcclxudmFyIGxpdGVwaWNrZXJfMSA9IHJlcXVpcmUoXCIuL2xpdGVwaWNrZXJcIik7XHJcbnZhciBMUENvcmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoTFBDb3JlLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTFBDb3JlKG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLmRhdGVQaWNrZWQgPSBbXTtcclxuICAgICAgICBfdGhpcy5jYWxlbmRhcnMgPSBbXTtcclxuICAgICAgICBfdGhpcy5wYXJlbnRVaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1vcmRlci1kYXRlJyk7XHJcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgZWxlbWVudDogbnVsbCxcclxuICAgICAgICAgICAgZWxlbWVudEVuZDogbnVsbCxcclxuICAgICAgICAgICAgcGFyZW50RWw6IG51bGwsXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogb2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXHJcbiAgICAgICAgICAgIGZpcnN0RGF5OiAxLFxyXG4gICAgICAgICAgICBmb3JtYXQ6ICdZWVlZLU1NLUREJyxcclxuICAgICAgICAgICAgbGFuZzogJ2VuLVVTJyxcclxuICAgICAgICAgICAgZGVsaW1pdGVyOiAnIC0gJyxcclxuICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM6IDEsXHJcbiAgICAgICAgICAgIG51bWJlck9mQ29sdW1uczogMSxcclxuICAgICAgICAgICAgc3RhcnREYXRlOiBudWxsLFxyXG4gICAgICAgICAgICBlbmREYXRlOiBudWxsLFxyXG4gICAgICAgICAgICB6SW5kZXg6IDk5OTksXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYXV0bycsXHJcbiAgICAgICAgICAgIHNlbGVjdEZvcndhcmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWxlY3RCYWNrd2FyZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNwbGl0VmlldzogZmFsc2UsXHJcbiAgICAgICAgICAgIGlubGluZU1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaW5nbGVNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvQXBwbHk6IHRydWUsXHJcbiAgICAgICAgICAgIGFsbG93UmVwaWNrOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd1Rvb2x0aXA6IHRydWUsXHJcbiAgICAgICAgICAgIHNjcm9sbFRvRGF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgbW9iaWxlRnJpZW5kbHk6IHRydWUsXHJcbiAgICAgICAgICAgIHJlc2V0QnV0dG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b1JlZnJlc2g6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2NrRGF5c0Zvcm1hdDogJ1lZWVktTU0tREQnLFxyXG4gICAgICAgICAgICBsb2NrRGF5czogW10sXHJcbiAgICAgICAgICAgIGRpc2FsbG93TG9ja0RheXNJblJhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9ja0RheXNJbmNsdXNpdml0eTogJ1tdJyxcclxuICAgICAgICAgICAgaGlnaGxpZ2h0ZWREYXlzRm9ybWF0OiAnWVlZWS1NTS1ERCcsXHJcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkRGF5czogW10sXHJcbiAgICAgICAgICAgIGRyb3Bkb3duczoge1xyXG4gICAgICAgICAgICAgICAgbWluWWVhcjogMTk5MCxcclxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogb2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXHJcbiAgICAgICAgICAgICAgICBtYXhZZWFyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbW9udGhzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHllYXJzOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnV0dG9uVGV4dDoge1xyXG4gICAgICAgICAgICAgICAgYXBwbHk6ICdBcHBseScsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNNb250aDogJzxzdmcgd2lkdGg9XCIxMVwiIGhlaWdodD1cIjE2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNNy45MTkgMGwyLjc0OCAyLjY2N0w1LjMzMyA4bDUuMzM0IDUuMzMzTDcuOTE5IDE2IDAgOHpcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIvPjwvc3ZnPicsXHJcbiAgICAgICAgICAgICAgICBuZXh0TW9udGg6ICc8c3ZnIHdpZHRoPVwiMTFcIiBoZWlnaHQ9XCIxNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTIuNzQ4IDE2TDAgMTMuMzMzIDUuMzMzIDggMCAyLjY2NyAyLjc0OCAwbDcuOTE5IDh6XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiLz48L3N2Zz4nLFxyXG4gICAgICAgICAgICAgICAgcmVzZXQ6IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGhlaWdodD1cXFwiMjRcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgd2lkdGg9XFxcIjI0XFxcIj5cXG4gICAgICAgIDxwYXRoIGQ9XFxcIk0wIDBoMjR2MjRIMHpcXFwiIGZpbGw9XFxcIm5vbmVcXFwiLz5cXG4gICAgICAgIDxwYXRoIGQ9XFxcIk0xMyAzYy00Ljk3IDAtOSA0LjAzLTkgOUgxbDMuODkgMy44OS4wNy4xNEw5IDEySDZjMC0zLjg3IDMuMTMtNyA3LTdzNyAzLjEzIDcgNy0zLjEzIDctNyA3Yy0xLjkzIDAtMy42OC0uNzktNC45NC0yLjA2bC0xLjQyIDEuNDJDOC4yNyAxOS45OSAxMC41MSAyMSAxMyAyMWM0Ljk3IDAgOS00LjAzIDktOXMtNC4wMy05LTktOXptLTEgNXY1bDQuMjggMi41NC43Mi0xLjIxLTMuNS0yLjA4VjhIMTJ6XFxcIi8+XFxuICAgICAgPC9zdmc+XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvb2x0aXBUZXh0OiB7XHJcbiAgICAgICAgICAgICAgICBvbmU6ICdkYXknLFxyXG4gICAgICAgICAgICAgICAgb3RoZXI6ICdkYXlzJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgX3RoaXMub3B0aW9ucyksIG9wdGlvbnMuZWxlbWVudC5kYXRhc2V0KTtcclxuICAgICAgICBPYmplY3Qua2V5cyhfdGhpcy5vcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChvcHQpIHtcclxuICAgICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnNbb3B0XSA9PT0gJ3RydWUnIHx8IF90aGlzLm9wdGlvbnNbb3B0XSA9PT0gJ2ZhbHNlJykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMub3B0aW9uc1tvcHRdID0gX3RoaXMub3B0aW9uc1tvcHRdID09PSAndHJ1ZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgZHJvcGRvd25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIF90aGlzLm9wdGlvbnMuZHJvcGRvd25zKSwgb3B0aW9ucy5kcm9wZG93bnMpO1xyXG4gICAgICAgIHZhciBidXR0b25UZXh0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIF90aGlzLm9wdGlvbnMuYnV0dG9uVGV4dCksIG9wdGlvbnMuYnV0dG9uVGV4dCk7XHJcbiAgICAgICAgdmFyIHRvb2x0aXBUZXh0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIF90aGlzLm9wdGlvbnMudG9vbHRpcFRleHQpLCBvcHRpb25zLnRvb2x0aXBUZXh0KTtcclxuICAgICAgICBfdGhpcy5vcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIF90aGlzLm9wdGlvbnMpLCBvcHRpb25zKTtcclxuICAgICAgICBfdGhpcy5vcHRpb25zLmRyb3Bkb3ducyA9IF9fYXNzaWduKHt9LCBkcm9wZG93bnMpO1xyXG4gICAgICAgIF90aGlzLm9wdGlvbnMuYnV0dG9uVGV4dCA9IF9fYXNzaWduKHt9LCBidXR0b25UZXh0KTtcclxuICAgICAgICBfdGhpcy5vcHRpb25zLnRvb2x0aXBUZXh0ID0gX19hc3NpZ24oe30sIHRvb2x0aXBUZXh0KTtcclxuICAgICAgICBpZiAoIV90aGlzLm9wdGlvbnMuZWxlbWVudEVuZCkge1xyXG4gICAgICAgICAgICBfdGhpcy5vcHRpb25zLmFsbG93UmVwaWNrID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfdGhpcy5vcHRpb25zLmxvY2tEYXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBfdGhpcy5vcHRpb25zLmxvY2tEYXlzID0gZGF0ZXRpbWVfMS5EYXRlVGltZS5jb252ZXJ0QXJyYXkoX3RoaXMub3B0aW9ucy5sb2NrRGF5cywgX3RoaXMub3B0aW9ucy5sb2NrRGF5c0Zvcm1hdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfdGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgX3RoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXMgPSBkYXRldGltZV8xLkRhdGVUaW1lLmNvbnZlcnRBcnJheShfdGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5cywgX3RoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXNGb3JtYXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgX2EgPSBfdGhpcy5wYXJzZUlucHV0KCksIHN0YXJ0VmFsdWUgPSBfYVswXSwgZW5kVmFsdWUgPSBfYVsxXTtcclxuICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5zdGFydERhdGUpIHtcclxuICAgICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSB8fCBfdGhpcy5vcHRpb25zLmVuZERhdGUpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0VmFsdWUgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShfdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSwgX3RoaXMub3B0aW9ucy5mb3JtYXQsIF90aGlzLm9wdGlvbnMubGFuZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0YXJ0VmFsdWUgJiYgX3RoaXMub3B0aW9ucy5lbmREYXRlKSB7XHJcbiAgICAgICAgICAgIGVuZFZhbHVlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoX3RoaXMub3B0aW9ucy5lbmREYXRlLCBfdGhpcy5vcHRpb25zLmZvcm1hdCwgX3RoaXMub3B0aW9ucy5sYW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0YXJ0VmFsdWUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lICYmICFpc05hTihzdGFydFZhbHVlLmdldFRpbWUoKSkpIHtcclxuICAgICAgICAgICAgX3RoaXMub3B0aW9ucy5zdGFydERhdGUgPSBzdGFydFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5zdGFydERhdGUgJiYgZW5kVmFsdWUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lICYmICFpc05hTihlbmRWYWx1ZS5nZXRUaW1lKCkpKSB7XHJcbiAgICAgICAgICAgIF90aGlzLm9wdGlvbnMuZW5kRGF0ZSA9IGVuZFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5zaW5nbGVNb2RlICYmICEoX3RoaXMub3B0aW9ucy5zdGFydERhdGUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lKSkge1xyXG4gICAgICAgICAgICBfdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghX3RoaXMub3B0aW9ucy5zaW5nbGVNb2RlXHJcbiAgICAgICAgICAgICYmICghKF90aGlzLm9wdGlvbnMuc3RhcnREYXRlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZSlcclxuICAgICAgICAgICAgICAgIHx8ICEoX3RoaXMub3B0aW9ucy5lbmREYXRlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZSkpKSB7XHJcbiAgICAgICAgICAgIF90aGlzLm9wdGlvbnMuc3RhcnREYXRlID0gbnVsbDtcclxuICAgICAgICAgICAgX3RoaXMub3B0aW9ucy5lbmREYXRlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgX3RoaXMub3B0aW9ucy5udW1iZXJPZk1vbnRoczsgaWR4ICs9IDEpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGUgPSBfdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWVcclxuICAgICAgICAgICAgICAgID8gX3RoaXMub3B0aW9ucy5zdGFydERhdGUuY2xvbmUoKVxyXG4gICAgICAgICAgICAgICAgOiBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSgpO1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLm9wdGlvbnMuc3RhcnREYXRlICYmIChpZHggPT09IDAgfHwgX3RoaXMub3B0aW9ucy5zcGxpdFZpZXcpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF4RGF0ZSA9IF90aGlzLm9wdGlvbnMubWF4RGF0ZSA/IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKF90aGlzLm9wdGlvbnMubWF4RGF0ZSkgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1pbkRhdGUgPSBfdGhpcy5vcHRpb25zLm1pbkRhdGUgPyBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShfdGhpcy5vcHRpb25zLm1pbkRhdGUpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciBvZmZzZXRNb250aHMgPSBfdGhpcy5vcHRpb25zLm51bWJlck9mTW9udGhzIC0gMTtcclxuICAgICAgICAgICAgICAgIHZhciBpc0RhdGVSYW5nZSA9IG1pbkRhdGUgJiYgbWF4RGF0ZSAmJiBkYXRlLmlzQWZ0ZXIobWF4RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNEYXRlUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlID0gbWluRGF0ZS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0RGF0ZSgxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFtaW5EYXRlICYmIG1heERhdGUgJiYgZGF0ZS5pc0FmdGVyKG1heERhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IG1heERhdGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgLSBvZmZzZXRNb250aHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRhdGUuc2V0RGF0ZSgxKTtcclxuICAgICAgICAgICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyBpZHgpO1xyXG4gICAgICAgICAgICBfdGhpcy5jYWxlbmRhcnNbaWR4XSA9IGRhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnNob3dUb29sdGlwKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnRvb2x0aXBQbHVyYWxTZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucGx1cmFsU2VsZWN0b3IgPSBfdGhpcy5vcHRpb25zLnRvb2x0aXBQbHVyYWxTZWxlY3RvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBsdXJhbFJ1bGVzID0gbmV3IEludGwuUGx1cmFsUnVsZXMoX3RoaXMub3B0aW9ucy5sYW5nKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wbHVyYWxTZWxlY3RvciA9IHBsdXJhbFJ1bGVzLnNlbGVjdC5iaW5kKHBsdXJhbFJ1bGVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChfYikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucGx1cmFsU2VsZWN0b3IgPSBmdW5jdGlvbiAoYXJnMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoYXJnMCkgPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ29uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnb3RoZXInO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgTFBDb3JlLmFkZCA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhKSB7XHJcbiAgICAgICAgbGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlW25hbWVdID0gZGF0YTtcclxuICAgIH07XHJcbiAgICBMUENvcmUucHJvdG90eXBlLnNldFNpbmdsZU1vZGUgPSBmdW5jdGlvbiAobW9kZSkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlID0gbW9kZTtcclxuICAgIH07XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGZ1bmN0aW9uLW5hbWVcclxuICAgIExQQ29yZS5wcm90b3R5cGUuRGF0ZVRpbWUgPSBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0KSB7XHJcbiAgICAgICAgaWYgKGRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGRhdGUsIGZvcm1hdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSgpO1xyXG4gICAgfTtcclxuICAgIExQQ29yZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGx1Z2lucyAmJiB0aGlzLm9wdGlvbnMucGx1Z2lucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLmhhc093blByb3BlcnR5KHBsdWdpbikpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGVbcGx1Z2luXS5pbml0LmNhbGwoX3RoaXMsIF90aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkxpdGVwaWNrZXI6IHBsdWdpbiBcXHUwMEFCXCIgKyBwbHVnaW4gKyBcIlxcdTAwQkIgbm90IGZvdW5kLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIExQQ29yZS5wcm90b3R5cGUucGFyc2VJbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZGVsaW1pdGVyID0gdGhpcy5vcHRpb25zLmRlbGltaXRlcjtcclxuICAgICAgICB2YXIgZGVsaW1pdGVyUmVnZXggPSBuZXcgUmVnRXhwKFwiXCIgKyBkZWxpbWl0ZXIpO1xyXG4gICAgICAgIHZhciBzcGxpdHRlZFZhbHVlID0gdGhpcy5vcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWUuc3BsaXQoZGVsaW1pdGVyKVxyXG4gICAgICAgICAgICA6IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAmJiB0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZS5sZW5ndGhcclxuICAgICAgICAgICAgICAgICYmIHRoaXMub3B0aW9ucy5lbGVtZW50RW5kIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5vcHRpb25zLmVsZW1lbnRFbmQudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlLCB0aGlzLm9wdGlvbnMuZm9ybWF0KSxcclxuICAgICAgICAgICAgICAgICAgICBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMuZWxlbWVudEVuZC52YWx1ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCksXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICAgICAgICAgICAgICYmIHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCksXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudFxyXG4gICAgICAgICAgICAmJiBkZWxpbWl0ZXJSZWdleC50ZXN0KHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlKVxyXG4gICAgICAgICAgICAmJiBzcGxpdHRlZFZhbHVlLmxlbmd0aFxyXG4gICAgICAgICAgICAmJiBzcGxpdHRlZFZhbHVlLmxlbmd0aCAlIDIgPT09IDApIHtcclxuICAgICAgICAgICAgdmFyIGQxID0gc3BsaXR0ZWRWYWx1ZS5zbGljZSgwLCBzcGxpdHRlZFZhbHVlLmxlbmd0aCAvIDIpLmpvaW4oZGVsaW1pdGVyKTtcclxuICAgICAgICAgICAgdmFyIGQyID0gc3BsaXR0ZWRWYWx1ZS5zbGljZShzcGxpdHRlZFZhbHVlLmxlbmd0aCAvIDIpLmpvaW4oZGVsaW1pdGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGQxLCB0aGlzLm9wdGlvbnMuZm9ybWF0KSxcclxuICAgICAgICAgICAgICAgIG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGQyLCB0aGlzLm9wdGlvbnMuZm9ybWF0KSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfTtcclxuICAgIExQQ29yZS5wcm90b3R5cGUuaXNTaG93bmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51aSAmJiB0aGlzLnVpLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJztcclxuICAgIH07XHJcbiAgICBMUENvcmUucHJvdG90eXBlLmZpbmRQb3NpdGlvbiA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgLy8gY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgdmFyIHJlY3QgPSB0aGlzLnBhcmVudFVpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHZhciBjYWxSZWN0ID0gdGhpcy51aS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB2YXIgb3JpZW50YXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb24uc3BsaXQoJyAnKTtcclxuICAgICAgICB2YXIgc2Nyb2xsWCA9IHdpbmRvdy5zY3JvbGxYIHx8IHdpbmRvdy5wYWdlWE9mZnNldDtcclxuICAgICAgICB2YXIgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICB2YXIgdG9wID0gMDtcclxuICAgICAgICB2YXIgbGVmdCA9IDA7XHJcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uWzBdID09PSAnYXV0bycgfHwgISgvdG9wfGJvdHRvbS8udGVzdChvcmllbnRhdGlvblswXSkpKSB7XHJcbiAgICAgICAgICAgIHRvcCA9IHJlY3QuYm90dG9tICsgc2Nyb2xsWTtcclxuICAgICAgICAgICAgdmFyIGlzT3V0Qm91bmRzID0gcmVjdC5ib3R0b20gKyBjYWxSZWN0LmhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICAgICAgdmFyIGhhc1RvcFNwYWNlID0gKHJlY3QudG9wICsgc2Nyb2xsWSkgLSBjYWxSZWN0LmhlaWdodCA+PSBjYWxSZWN0LmhlaWdodDtcclxuICAgICAgICAgICAgaWYgKGlzT3V0Qm91bmRzICYmIGhhc1RvcFNwYWNlKSB7XHJcbiAgICAgICAgICAgICAgICB0b3AgPSAocmVjdC50b3AgKyBzY3JvbGxZKSAtIGNhbFJlY3QuaGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0b3AgPSByZWN0W29yaWVudGF0aW9uWzBdXSArIHNjcm9sbFk7XHJcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvblswXSA9PT0gJ3RvcCcpIHtcclxuICAgICAgICAgICAgICAgIHRvcCAtPSBjYWxSZWN0LmhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISgvbGVmdHxyaWdodC8udGVzdChvcmllbnRhdGlvblswXSkpICYmICghb3JpZW50YXRpb25bMV0gfHwgb3JpZW50YXRpb25bMV0gPT09ICdhdXRvJyB8fCAhKC9sZWZ0fHJpZ2h0Ly50ZXN0KG9yaWVudGF0aW9uWzFdKSkpKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSByZWN0LmxlZnQgKyBzY3JvbGxYO1xyXG4gICAgICAgICAgICB2YXIgaXNPdXRCb3VuZHMgPSByZWN0LmxlZnQgKyBjYWxSZWN0LndpZHRoID4gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgICAgIHZhciBoYXNMZWZ0U3BhY2UgPSAocmVjdC5yaWdodCArIHNjcm9sbFgpIC0gY2FsUmVjdC53aWR0aCA+PSAwO1xyXG4gICAgICAgICAgICBpZiAoaXNPdXRCb3VuZHMgJiYgaGFzTGVmdFNwYWNlKSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0ID0gKHJlY3QucmlnaHQgKyBzY3JvbGxYKSAtIGNhbFJlY3Qud2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICgvbGVmdHxyaWdodC8udGVzdChvcmllbnRhdGlvblswXSkpIHtcclxuICAgICAgICAgICAgICAgIGxlZnQgPSByZWN0W29yaWVudGF0aW9uWzBdXSArIHNjcm9sbFg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0ID0gcmVjdFtvcmllbnRhdGlvblsxXV0gKyBzY3JvbGxYO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvblswXSA9PT0gJ3JpZ2h0JyB8fCBvcmllbnRhdGlvblsxXSA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgbGVmdCAtPSBjYWxSZWN0LndpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgICAgIHRvcDogdG9wLFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExQQ29yZTtcclxufShldmVudHNfMS5FdmVudEVtaXR0ZXIpKTtcclxuZXhwb3J0cy5MUENvcmUgPSBMUENvcmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBEYXRlVGltZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIERhdGVUaW1lKGRhdGUsIGZvcm1hdCwgbGFuZykge1xyXG4gICAgICAgIGlmIChkYXRlID09PSB2b2lkIDApIHsgZGF0ZSA9IG51bGw7IH1cclxuICAgICAgICBpZiAoZm9ybWF0ID09PSB2b2lkIDApIHsgZm9ybWF0ID0gbnVsbDsgfVxyXG4gICAgICAgIGlmIChsYW5nID09PSB2b2lkIDApIHsgbGFuZyA9ICdlbi1VUyc7IH1cclxuICAgICAgICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ29iamVjdCcgJiYgZm9ybWF0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZUluc3RhbmNlID0gZm9ybWF0LnBhcnNlKGRhdGUgaW5zdGFuY2VvZiBEYXRlVGltZSA/IGRhdGUuY2xvbmUoKS50b0pTRGF0ZSgpIDogZGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZUluc3RhbmNlID0gKERhdGVUaW1lLnBhcnNlRGF0ZVRpbWUoZGF0ZSwgZm9ybWF0LCBsYW5nKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRlSW5zdGFuY2UgPSAoRGF0ZVRpbWUucGFyc2VEYXRlVGltZShkYXRlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGVJbnN0YW5jZSA9IChEYXRlVGltZS5wYXJzZURhdGVUaW1lKG5ldyBEYXRlKCkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYW5nID0gbGFuZztcclxuICAgIH1cclxuICAgIERhdGVUaW1lLnBhcnNlRGF0ZVRpbWUgPSBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0LCBsYW5nKSB7XHJcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gdm9pZCAwKSB7IGZvcm1hdCA9ICdZWVlZLU1NLUREJzsgfVxyXG4gICAgICAgIGlmIChsYW5nID09PSB2b2lkIDApIHsgbGFuZyA9ICdlbi1VUyc7IH1cclxuICAgICAgICBpZiAoIWRhdGUpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xyXG4gICAgICAgIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSlcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICAgIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZVRpbWUpXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmNsb25lKCkudG9KU0RhdGUoKTtcclxuICAgICAgICBpZiAoL14tP1xcZHsxMCx9JC8udGVzdChkYXRlKSlcclxuICAgICAgICAgICAgcmV0dXJuIERhdGVUaW1lLmdldERhdGVaZXJvVGltZShuZXcgRGF0ZShOdW1iZXIoZGF0ZSkpKTtcclxuICAgICAgICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gW107XHJcbiAgICAgICAgICAgIHZhciBtID0gbnVsbDtcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1jb25kaXRpb25hbC1hc3NpZ25tZW50XHJcbiAgICAgICAgICAgIHdoaWxlICgobSA9IERhdGVUaW1lLnJlZ2V4LmV4ZWMoZm9ybWF0KSkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1bMV0gPT09ICdcXFxcJylcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTsgLy8gZGVsZXRlIHdoZW4gcmVnZXhwIGxvb2tiZWhpbmRcclxuICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaChtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRlUGF0dGVybiA9IHtcclxuICAgICAgICAgICAgICAgICAgICB5ZWFyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3J0TW9udGg6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9uZ01vbnRoOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRheTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZXNbMF0uaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVBhdHRlcm4udmFsdWUgKz0gJy4qPyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmVudHJpZXMobWF0Y2hlcyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9iID0gX2FbX2ldLCBrID0gX2JbMF0sIG1hdGNoID0gX2JbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IE51bWJlcihrKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2MgPSBEYXRlVGltZS5mb3JtYXRQYXR0ZXJucyhtYXRjaFswXSwgbGFuZyksIGdyb3VwID0gX2MuZ3JvdXAsIHBhdHRlcm4gPSBfYy5wYXR0ZXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVQYXR0ZXJuW2dyb3VwXSA9IGtleSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVBhdHRlcm4udmFsdWUgKz0gcGF0dGVybjtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlUGF0dGVybi52YWx1ZSArPSAnLio/JzsgLy8gYW55IGRlbGltaXRlcnNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBkYXRlUmVnZXggPSBuZXcgUmVnRXhwKFwiXlwiICsgZGF0ZVBhdHRlcm4udmFsdWUgKyBcIiRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZVJlZ2V4LnRlc3QoZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IGRhdGVSZWdleC5leGVjKGRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB5ZWFyID0gTnVtYmVyKGRbZGF0ZVBhdHRlcm4ueWVhcl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtb250aCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGVQYXR0ZXJuLm1vbnRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoID0gTnVtYmVyKGRbZGF0ZVBhdHRlcm4ubW9udGhdKSAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRhdGVQYXR0ZXJuLnNob3J0TW9udGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGggPSBEYXRlVGltZS5zaG9ydE1vbnRocyhsYW5nKS5pbmRleE9mKGRbZGF0ZVBhdHRlcm4uc2hvcnRNb250aF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXRlUGF0dGVybi5sb25nTW9udGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGggPSBEYXRlVGltZS5sb25nTW9udGhzKGxhbmcpLmluZGV4T2YoZFtkYXRlUGF0dGVybi5sb25nTW9udGhdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRheSA9IE51bWJlcihkW2RhdGVQYXR0ZXJuLmRheV0pIHx8IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXksIDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBEYXRlVGltZS5nZXREYXRlWmVyb1RpbWUobmV3IERhdGUoZGF0ZSkpO1xyXG4gICAgfTtcclxuICAgIERhdGVUaW1lLmNvbnZlcnRBcnJheSA9IGZ1bmN0aW9uIChhcnJheSwgZm9ybWF0KSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5XHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgaWYgKGQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGQubWFwKGZ1bmN0aW9uIChkMSkgeyByZXR1cm4gbmV3IERhdGVUaW1lKGQxLCBmb3JtYXQpOyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGVUaW1lKGQsIGZvcm1hdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgRGF0ZVRpbWUuZ2V0RGF0ZVplcm9UaW1lID0gZnVuY3Rpb24gKGRhdGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCAwLCAwLCAwLCAwKTtcclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5zaG9ydE1vbnRocyA9IGZ1bmN0aW9uIChsYW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIERhdGVUaW1lLk1PTlRIX0pTXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIG5ldyBEYXRlKDIwMTksIHgpLnRvTG9jYWxlU3RyaW5nKGxhbmcsIHsgbW9udGg6ICdzaG9ydCcgfSk7IH0pO1xyXG4gICAgfTtcclxuICAgIERhdGVUaW1lLmxvbmdNb250aHMgPSBmdW5jdGlvbiAobGFuZykge1xyXG4gICAgICAgIHJldHVybiBEYXRlVGltZS5NT05USF9KU1xyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiBuZXcgRGF0ZSgyMDE5LCB4KS50b0xvY2FsZVN0cmluZyhsYW5nLCB7IG1vbnRoOiAnbG9uZycgfSk7IH0pO1xyXG4gICAgfTtcclxuICAgIERhdGVUaW1lLmZvcm1hdFBhdHRlcm5zID0gZnVuY3Rpb24gKHRva2VuLCBsYW5nKSB7XHJcbiAgICAgICAgc3dpdGNoICh0b2tlbikge1xyXG4gICAgICAgICAgICBjYXNlICdZWSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ1lZWVknOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cDogJ3llYXInLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiKFxcXFxke1wiICsgdG9rZW4ubGVuZ3RoICsgXCJ9KVwiLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSAnTSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwOiAnbW9udGgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm46ICcoXFxcXGR7MSwyfSknLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSAnTU0nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cDogJ21vbnRoJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAnKFxcXFxkezJ9KScsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlICdNTU0nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cDogJ3Nob3J0TW9udGgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiKFwiICsgRGF0ZVRpbWUuc2hvcnRNb250aHMobGFuZykuam9pbignfCcpICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlICdNTU1NJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6ICdsb25nTW9udGgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiKFwiICsgRGF0ZVRpbWUubG9uZ01vbnRocyhsYW5nKS5qb2luKCd8JykgKyBcIilcIixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgJ0QnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cDogJ2RheScsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogJyhcXFxcZHsxLDJ9KScsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlICdERCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwOiAnZGF5JyxcclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAnKFxcXFxkezJ9KScsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5wcm90b3R5cGUudG9KU0RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlO1xyXG4gICAgfTtcclxuICAgIERhdGVUaW1lLnByb3RvdHlwZS50b0xvY2FsZVN0cmluZyA9IGZ1bmN0aW9uIChhcmcwLCBhcmcxKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLnRvTG9jYWxlU3RyaW5nKGFyZzAsIGFyZzEpO1xyXG4gICAgfTtcclxuICAgIERhdGVUaW1lLnByb3RvdHlwZS50b0RhdGVTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLnRvRGF0ZVN0cmluZygpO1xyXG4gICAgfTtcclxuICAgIERhdGVUaW1lLnByb3RvdHlwZS5nZXRTZWNvbmRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS5nZXRTZWNvbmRzKCk7XHJcbiAgICB9O1xyXG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmdldERheSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2UuZ2V0RGF5KCk7XHJcbiAgICB9O1xyXG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmdldFRpbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLmdldFRpbWUoKTtcclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuZ2V0RGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2UuZ2V0RGF0ZSgpO1xyXG4gICAgfTtcclxuICAgIERhdGVUaW1lLnByb3RvdHlwZS5nZXRNb250aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2UuZ2V0TW9udGgoKTtcclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuZ2V0RnVsbFllYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICB9O1xyXG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLnNldE1vbnRoID0gZnVuY3Rpb24gKGFyZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS5zZXRNb250aChhcmcpO1xyXG4gICAgfTtcclxuICAgIERhdGVUaW1lLnByb3RvdHlwZS5zZXRIb3VycyA9IGZ1bmN0aW9uIChob3VycywgbWludXRlcywgc2Vjb25kcywgbXMpIHtcclxuICAgICAgICBpZiAoaG91cnMgPT09IHZvaWQgMCkgeyBob3VycyA9IDA7IH1cclxuICAgICAgICBpZiAobWludXRlcyA9PT0gdm9pZCAwKSB7IG1pbnV0ZXMgPSAwOyB9XHJcbiAgICAgICAgaWYgKHNlY29uZHMgPT09IHZvaWQgMCkgeyBzZWNvbmRzID0gMDsgfVxyXG4gICAgICAgIGlmIChtcyA9PT0gdm9pZCAwKSB7IG1zID0gMDsgfVxyXG4gICAgICAgIHRoaXMuZGF0ZUluc3RhbmNlLnNldEhvdXJzKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBtcyk7XHJcbiAgICB9O1xyXG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLnNldFNlY29uZHMgPSBmdW5jdGlvbiAoYXJnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLnNldFNlY29uZHMoYXJnKTtcclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuc2V0RGF0ZSA9IGZ1bmN0aW9uIChhcmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2Uuc2V0RGF0ZShhcmcpO1xyXG4gICAgfTtcclxuICAgIERhdGVUaW1lLnByb3RvdHlwZS5zZXRGdWxsWWVhciA9IGZ1bmN0aW9uIChhcmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2Uuc2V0RnVsbFllYXIoYXJnKTtcclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuZ2V0V2VlayA9IGZ1bmN0aW9uIChmaXJzdERheSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBuZXcgRGF0ZSh0aGlzLnRpbWVzdGFtcCgpKTtcclxuICAgICAgICB2YXIgZGF5TnIgPSAodGhpcy5nZXREYXkoKSArICg3IC0gZmlyc3REYXkpKSAlIDc7XHJcbiAgICAgICAgdGFyZ2V0LnNldERhdGUodGFyZ2V0LmdldERhdGUoKSAtIGRheU5yKTtcclxuICAgICAgICB2YXIgc3RhcnRXZWVrZGF5ID0gdGFyZ2V0LmdldFRpbWUoKTtcclxuICAgICAgICB0YXJnZXQuc2V0TW9udGgoMCwgMSk7XHJcbiAgICAgICAgaWYgKHRhcmdldC5nZXREYXkoKSAhPT0gZmlyc3REYXkpIHtcclxuICAgICAgICAgICAgdGFyZ2V0LnNldE1vbnRoKDAsIDEgKyAoKDQgLSB0YXJnZXQuZ2V0RGF5KCkpICsgNykgJSA3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDEgKyBNYXRoLmNlaWwoKHN0YXJ0V2Vla2RheSAtIHRhcmdldC5nZXRUaW1lKCkpIC8gNjA0ODAwMDAwKTtcclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZSh0aGlzLnRvSlNEYXRlKCkpO1xyXG4gICAgfTtcclxuICAgIERhdGVUaW1lLnByb3RvdHlwZS5pc0JldHdlZW4gPSBmdW5jdGlvbiAoZGF0ZTEsIGRhdGUyLCBpbmNsdXNpdml0eSkge1xyXG4gICAgICAgIGlmIChpbmNsdXNpdml0eSA9PT0gdm9pZCAwKSB7IGluY2x1c2l2aXR5ID0gJygpJzsgfVxyXG4gICAgICAgIHN3aXRjaCAoaW5jbHVzaXZpdHkpIHtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY2FzZSAnKCknOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGltZXN0YW1wKCkgPiBkYXRlMS5nZXRUaW1lKCkgJiYgdGhpcy50aW1lc3RhbXAoKSA8IGRhdGUyLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgY2FzZSAnWyknOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGltZXN0YW1wKCkgPj0gZGF0ZTEuZ2V0VGltZSgpICYmIHRoaXMudGltZXN0YW1wKCkgPCBkYXRlMi5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGNhc2UgJyhdJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWVzdGFtcCgpID4gZGF0ZTEuZ2V0VGltZSgpICYmIHRoaXMudGltZXN0YW1wKCkgPD0gZGF0ZTIuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBjYXNlICdbXSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aW1lc3RhbXAoKSA+PSBkYXRlMS5nZXRUaW1lKCkgJiYgdGhpcy50aW1lc3RhbXAoKSA8PSBkYXRlMi5nZXRUaW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIERhdGVUaW1lLnByb3RvdHlwZS5pc0JlZm9yZSA9IGZ1bmN0aW9uIChkYXRlLCB1bml0KSB7XHJcbiAgICAgICAgaWYgKHVuaXQgPT09IHZvaWQgMCkgeyB1bml0ID0gJ3NlY29uZHMnOyB9XHJcbiAgICAgICAgc3dpdGNoICh1bml0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZHMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpID4gdGhpcy5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2RheXMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgPiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgdGhpcy5nZXREYXRlKCkpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICAgICAgICBjYXNlICdtb250aHMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICA+IG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCAxKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ3llYXInOlxyXG4gICAgICAgICAgICBjYXNlICd5ZWFycyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpID4gdGhpcy5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lzQmVmb3JlOiBJbnZhbGlkIHVuaXQhJyk7XHJcbiAgICB9O1xyXG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmlzU2FtZU9yQmVmb3JlID0gZnVuY3Rpb24gKGRhdGUsIHVuaXQpIHtcclxuICAgICAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7IHVuaXQgPSAnc2Vjb25kcyc7IH1cclxuICAgICAgICBzd2l0Y2ggKHVuaXQpIHtcclxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcclxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kcyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPj0gdGhpcy5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2RheXMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgPj0gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIHRoaXMuZ2V0RGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcclxuICAgICAgICAgICAgY2FzZSAnbW9udGhzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgMSkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgPj0gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpc1NhbWVPckJlZm9yZTogSW52YWxpZCB1bml0IScpO1xyXG4gICAgfTtcclxuICAgIERhdGVUaW1lLnByb3RvdHlwZS5pc0FmdGVyID0gZnVuY3Rpb24gKGRhdGUsIHVuaXQpIHtcclxuICAgICAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7IHVuaXQgPSAnc2Vjb25kcyc7IH1cclxuICAgICAgICBzd2l0Y2ggKHVuaXQpIHtcclxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcclxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kcyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUaW1lKCkgPiBkYXRlLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgY2FzZSAnZGF5JzpcclxuICAgICAgICAgICAgY2FzZSAnZGF5cyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIHRoaXMuZ2V0RGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICA+IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBjYXNlICdtb250aCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ21vbnRocyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgID4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgY2FzZSAneWVhcic6XHJcbiAgICAgICAgICAgIGNhc2UgJ3llYXJzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEZ1bGxZZWFyKCkgPiBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaXNBZnRlcjogSW52YWxpZCB1bml0IScpO1xyXG4gICAgfTtcclxuICAgIERhdGVUaW1lLnByb3RvdHlwZS5pc1NhbWVPckFmdGVyID0gZnVuY3Rpb24gKGRhdGUsIHVuaXQpIHtcclxuICAgICAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7IHVuaXQgPSAnc2Vjb25kcyc7IH1cclxuICAgICAgICBzd2l0Y2ggKHVuaXQpIHtcclxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcclxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kcyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUaW1lKCkgPj0gZGF0ZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2RheXMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCB0aGlzLmdldERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgPj0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcclxuICAgICAgICAgICAgY2FzZSAnbW9udGhzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgMSkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgPj0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpc1NhbWVPckFmdGVyOiBJbnZhbGlkIHVuaXQhJyk7XHJcbiAgICB9O1xyXG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmlzU2FtZSA9IGZ1bmN0aW9uIChkYXRlLCB1bml0KSB7XHJcbiAgICAgICAgaWYgKHVuaXQgPT09IHZvaWQgMCkgeyB1bml0ID0gJ3NlY29uZHMnOyB9XHJcbiAgICAgICAgc3dpdGNoICh1bml0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZHMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGltZSgpID09PSBkYXRlLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgY2FzZSAnZGF5JzpcclxuICAgICAgICAgICAgY2FzZSAnZGF5cyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIHRoaXMuZ2V0RGF0ZSgpKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICA9PT0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcclxuICAgICAgICAgICAgY2FzZSAnbW9udGhzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgMSkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgPT09IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaXNTYW1lOiBJbnZhbGlkIHVuaXQhJyk7XHJcbiAgICB9O1xyXG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChkdXJhdGlvbiwgdW5pdCkge1xyXG4gICAgICAgIGlmICh1bml0ID09PSB2b2lkIDApIHsgdW5pdCA9ICdzZWNvbmRzJzsgfVxyXG4gICAgICAgIHN3aXRjaCAodW5pdCkge1xyXG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxyXG4gICAgICAgICAgICBjYXNlICdzZWNvbmRzJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U2Vjb25kcyh0aGlzLmdldFNlY29uZHMoKSArIGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdkYXknOlxyXG4gICAgICAgICAgICBjYXNlICdkYXlzJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0ZSh0aGlzLmdldERhdGUoKSArIGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtb250aCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ21vbnRocyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1vbnRoKHRoaXMuZ2V0TW9udGgoKSArIGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbiAoZHVyYXRpb24sIHVuaXQpIHtcclxuICAgICAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7IHVuaXQgPSAnc2Vjb25kcyc7IH1cclxuICAgICAgICBzd2l0Y2ggKHVuaXQpIHtcclxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcclxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kcyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNlY29uZHModGhpcy5nZXRTZWNvbmRzKCkgLSBkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZGF5JzpcclxuICAgICAgICAgICAgY2FzZSAnZGF5cyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGUodGhpcy5nZXREYXRlKCkgLSBkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICAgICAgICBjYXNlICdtb250aHMnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNb250aCh0aGlzLmdldE1vbnRoKCkgLSBkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmRpZmYgPSBmdW5jdGlvbiAoZGF0ZSwgdW5pdCkge1xyXG4gICAgICAgIGlmICh1bml0ID09PSB2b2lkIDApIHsgdW5pdCA9ICdzZWNvbmRzJzsgfVxyXG4gICAgICAgIHZhciBvbmVEYXkgPSAxMDAwICogNjAgKiA2MCAqIDI0O1xyXG4gICAgICAgIHN3aXRjaCAodW5pdCkge1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxyXG4gICAgICAgICAgICBjYXNlICdzZWNvbmRzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRpbWUoKSAtIGRhdGUuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBjYXNlICdkYXknOlxyXG4gICAgICAgICAgICBjYXNlICdkYXlzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKCh0aGlzLnRpbWVzdGFtcCgpIC0gZGF0ZS5nZXRUaW1lKCkpIC8gb25lRGF5KTtcclxuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICAgICAgICBjYXNlICdtb250aHMnOlxyXG4gICAgICAgICAgICAvLyBAVE9ET1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24gKGZvcm1hdCwgbGFuZykge1xyXG4gICAgICAgIGlmIChsYW5nID09PSB2b2lkIDApIHsgbGFuZyA9ICdlbi1VUyc7IH1cclxuICAgICAgICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdC5vdXRwdXQodGhpcy5jbG9uZSgpLnRvSlNEYXRlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVzcG9uc2UgPSAnJztcclxuICAgICAgICB2YXIgbWF0Y2hlcyA9IFtdO1xyXG4gICAgICAgIHZhciBtID0gbnVsbDtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWNvbmRpdGlvbmFsLWFzc2lnbm1lbnRcclxuICAgICAgICB3aGlsZSAoKG0gPSBEYXRlVGltZS5yZWdleC5leGVjKGZvcm1hdCkpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKG1bMV0gPT09ICdcXFxcJylcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlOyAvLyBkZWxldGUgd2hlbiByZWdleHAgbG9va2JlaGluZFxyXG4gICAgICAgICAgICBtYXRjaGVzLnB1c2gobSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyBhZGQgc3RhcnQgbGluZSBvZiB0b2tlbnMgYXJlIG5vdCBhdCB0aGUgYmVnaW5uaW5nXHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVzWzBdLmluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgKz0gZm9ybWF0LnN1YnN0cmluZygwLCBtYXRjaGVzWzBdLmluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmVudHJpZXMobWF0Y2hlcyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2IgPSBfYVtfaV0sIGsgPSBfYlswXSwgbWF0Y2ggPSBfYlsxXTtcclxuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBOdW1iZXIoayk7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZSArPSB0aGlzLmZvcm1hdFRva2VucyhtYXRjaFswXSwgbGFuZyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlc1trZXkgKyAxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlICs9IGZvcm1hdC5zdWJzdHJpbmcobWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgsIG1hdGNoZXNba2V5ICsgMV0uaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gYWRkIGVuZCBsaW5lIGlmIHRva2VucyBhcmUgbm90IGF0IHRoZSBlbmRpbmdcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IG1hdGNoZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlICs9IGZvcm1hdC5zdWJzdHJpbmcobWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlbW92ZSBlc2NhcGUgY2hhcmFjdGVyc1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5yZXBsYWNlKC9cXFxcL2csICcnKTtcclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5wcm90b3R5cGUudGltZXN0YW1wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgdGhpcy5nZXREYXRlKCksIDAsIDAsIDAsIDApLmdldFRpbWUoKTtcclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuZm9ybWF0VG9rZW5zID0gZnVuY3Rpb24gKHRva2VuLCBsYW5nKSB7XHJcbiAgICAgICAgc3dpdGNoICh0b2tlbikge1xyXG4gICAgICAgICAgICBjYXNlICdZWSc6IHJldHVybiBTdHJpbmcodGhpcy5nZXRGdWxsWWVhcigpKS5zbGljZSgtMik7XHJcbiAgICAgICAgICAgIGNhc2UgJ1lZWVknOiByZXR1cm4gU3RyaW5nKHRoaXMuZ2V0RnVsbFllYXIoKSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ00nOiByZXR1cm4gU3RyaW5nKHRoaXMuZ2V0TW9udGgoKSArIDEpO1xyXG4gICAgICAgICAgICBjYXNlICdNTSc6IHJldHVybiAoXCIwXCIgKyAodGhpcy5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKTtcclxuICAgICAgICAgICAgY2FzZSAnTU1NJzogcmV0dXJuIERhdGVUaW1lLnNob3J0TW9udGhzKGxhbmcpW3RoaXMuZ2V0TW9udGgoKV07XHJcbiAgICAgICAgICAgIGNhc2UgJ01NTU0nOiByZXR1cm4gRGF0ZVRpbWUubG9uZ01vbnRocyhsYW5nKVt0aGlzLmdldE1vbnRoKCldO1xyXG4gICAgICAgICAgICBjYXNlICdEJzogcmV0dXJuIFN0cmluZyh0aGlzLmdldERhdGUoKSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ0REJzogcmV0dXJuIChcIjBcIiArIHRoaXMuZ2V0RGF0ZSgpKS5zbGljZSgtMik7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gcmVwbGFjZSB0byByZWdleHAgbG9va2JlaGluZCB3aGVuIG1vc3QgcG9wdWxhciBicm93c2VycyB3aWxsIHN1cHBvcnRcclxuICAgIC8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI2ZlYXQ9anMtcmVnZXhwLWxvb2tiZWhpbmRcclxuICAgIC8vIC8oPzwhXFxcXCkoWXsyLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9XSkvZ1xyXG4gICAgRGF0ZVRpbWUucmVnZXggPSAvKFxcXFwpPyhZezIsNH18TXsxLDR9fER7MSwyfXxkezEsNH0pL2c7XHJcbiAgICBEYXRlVGltZS5NT05USF9KUyA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTFdO1xyXG4gICAgcmV0dXJuIERhdGVUaW1lO1xyXG59KCkpO1xyXG5leHBvcnRzLkRhdGVUaW1lID0gRGF0ZVRpbWU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBsaXRlcGlja2VyXzEgPSByZXF1aXJlKFwiLi9saXRlcGlja2VyXCIpO1xyXG5leHBvcnRzLkxpdGVwaWNrZXIgPSBsaXRlcGlja2VyXzEuTGl0ZXBpY2tlcjtcclxucmVxdWlyZShcIi4vbWV0aG9kc1wiKTtcclxud2luZG93LkxpdGVwaWNrZXIgPSBsaXRlcGlja2VyXzEuTGl0ZXBpY2tlcjtcclxuZXhwb3J0cy5kZWZhdWx0ID0gbGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNhbGVuZGFyXzEgPSByZXF1aXJlKFwiLi9jYWxlbmRhclwiKTtcclxudmFyIGRhdGV0aW1lXzEgPSByZXF1aXJlKFwiLi9kYXRldGltZVwiKTtcclxudmFyIHN0eWxlID0gcmVxdWlyZShcIi4vc2Nzcy9tYWluLnNjc3NcIik7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcbnZhciBMaXRlcGlja2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKExpdGVwaWNrZXIsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBMaXRlcGlja2VyKG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLnByZXZlbnRDbGljayA9IGZhbHNlO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgX3RoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLnNjcm9sbFRvRGF0ZSA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2Nyb2xsVG9EYXRlKSB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgICAgIHZhciBzdGFydERhdGUgPSB0aGlzLm9wdGlvbnMuc3RhcnREYXRlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZSA/IHRoaXMub3B0aW9ucy5zdGFydERhdGUuY2xvbmUoKSA6IG51bGw7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgICAgIHZhciBlbmREYXRlID0gdGhpcy5vcHRpb25zLmVuZERhdGUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lID8gdGhpcy5vcHRpb25zLmVuZERhdGUuY2xvbmUoKSA6IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhcnREYXRlICYmICghZWwgfHwgZWwgPT09IHRoaXMub3B0aW9ucy5lbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnREYXRlLnNldERhdGUoMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGVuZGFyc1swXSA9IHN0YXJ0RGF0ZS5jbG9uZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGVsICYmIHRoaXMub3B0aW9ucy5lbmREYXRlICYmIGVsID09PSB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCkge1xyXG4gICAgICAgICAgICAgICAgZW5kRGF0ZS5zZXREYXRlKDEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5udW1iZXJPZk1vbnRocyA+IDEgJiYgZW5kRGF0ZS5pc0FmdGVyKHN0YXJ0RGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmREYXRlLnNldE1vbnRoKGVuZERhdGUuZ2V0TW9udGgoKSAtICh0aGlzLm9wdGlvbnMubnVtYmVyT2ZNb250aHMgLSAxKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGVuZGFyc1swXSA9IGVuZERhdGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5iaW5kRXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLmJpbmQodGhpcyksIHRydWUpO1xyXG4gICAgICAgIHRoaXMudWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLnVpLmNsYXNzTmFtZSA9IHN0eWxlLmxpdGVwaWNrZXI7XHJcbiAgICAgICAgdGhpcy51aS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMudWkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMub25Nb3VzZUVudGVyLmJpbmQodGhpcyksIHRydWUpO1xyXG4gICAgICAgIHRoaXMudWkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Nb3VzZUxlYXZlLmJpbmQodGhpcyksIGZhbHNlKTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9SZWZyZXNoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMub25JbnB1dC5iaW5kKHRoaXMpLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnRFbmQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnRFbmQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uSW5wdXQuYmluZCh0aGlzKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uSW5wdXQuYmluZCh0aGlzKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50RW5kIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50RW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMub25JbnB1dC5iaW5kKHRoaXMpLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBhcmVudEVsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGFyZW50RWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnBhcmVudEVsLmFwcGVuZENoaWxkKHRoaXMudWkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMucGFyZW50RWwpLmFwcGVuZENoaWxkKHRoaXMudWkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlubGluZU1vZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMudWkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy51aSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMudWkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXQoKTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5zZXR1cCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2V0dXAuY2FsbCh0aGlzLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlubGluZU1vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLnVwZGF0ZUlucHV0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghKHRoaXMub3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgc3RhcnREYXRlID0gdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZTtcclxuICAgICAgICB2YXIgZW5kRGF0ZSA9IHRoaXMub3B0aW9ucy5lbmREYXRlO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSAmJiBzdGFydERhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWUgPSBzdGFydERhdGUuZm9ybWF0KHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5zaW5nbGVNb2RlICYmIHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGFydFZhbHVlID0gc3RhcnREYXRlLmZvcm1hdCh0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XHJcbiAgICAgICAgICAgIHZhciBlbmRWYWx1ZSA9IGVuZERhdGUuZm9ybWF0KHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50RW5kIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWUgPSBzdGFydFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnRFbmQudmFsdWUgPSBlbmRWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlID0gXCJcIiArIHN0YXJ0VmFsdWUgKyB0aGlzLm9wdGlvbnMuZGVsaW1pdGVyICsgZW5kVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzdGFydERhdGUgJiYgIWVuZERhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50RW5kIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnRFbmQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5pc1NhbWVQaWNrZXIgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICB2YXIgcGlja2VyID0gZWwuY2xvc2VzdChcIi5cIiArIHN0eWxlLmxpdGVwaWNrZXIpO1xyXG4gICAgICAgIHJldHVybiBwaWNrZXIgPT09IHRoaXMudWk7XHJcbiAgICB9O1xyXG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuc2hvdWxkU2hvd24gPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICByZXR1cm4gIWVsLmRpc2FibGVkICYmIChlbCA9PT0gdGhpcy5vcHRpb25zLmVsZW1lbnRcclxuICAgICAgICAgICAgfHwgKHRoaXMub3B0aW9ucy5lbGVtZW50RW5kICYmIGVsID09PSB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCkpO1xyXG4gICAgfTtcclxuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLnNob3VsZFJlc2V0RGF0ZVBpY2tlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNpbmdsZU1vZGUgfHwgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMjtcclxuICAgIH07XHJcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5zaG91bGRTd2FwRGF0ZVBpY2tlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMlxyXG4gICAgICAgICAgICAmJiB0aGlzLmRhdGVQaWNrZWRbMF0uZ2V0VGltZSgpID4gdGhpcy5kYXRlUGlja2VkWzFdLmdldFRpbWUoKTtcclxuICAgIH07XHJcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5zaG91bGRDaGVja0xvY2tEYXlzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZGlzYWxsb3dMb2NrRGF5c0luUmFuZ2VcclxuICAgICAgICAgICAgJiYgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMjtcclxuICAgIH07XHJcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5vbkNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgaWYgKCF0YXJnZXQgfHwgIXRoaXMudWkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDbGljayBvbiBlbGVtZW50XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkU2hvd24odGFyZ2V0KSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3codGFyZ2V0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDbGljayBvdXRzaWRlIHBpY2tlclxyXG4gICAgICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QoXCIuXCIgKyBzdHlsZS5saXRlcGlja2VyKSAmJiB0aGlzLmlzU2hvd25pbmcoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuaXNTYW1lUGlja2VyKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVtaXQoJ2JlZm9yZTpjbGljaycsIHRhcmdldCk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJldmVudENsaWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmVudENsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2xpY2sgb24gZGF0ZVxyXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlLmRheUl0ZW0pKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGUuaXNMb2NrZWQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvdWxkUmVzZXREYXRlUGlja2VkKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlZFt0aGlzLmRhdGVQaWNrZWQubGVuZ3RoXSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHRhcmdldC5kYXRhc2V0LnRpbWUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaG91bGRTd2FwRGF0ZVBpY2tlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcERhdGUgPSB0aGlzLmRhdGVQaWNrZWRbMV0uY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlZFsxXSA9IHRoaXMuZGF0ZVBpY2tlZFswXS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlUGlja2VkWzBdID0gdGVtcERhdGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zaG91bGRDaGVja0xvY2tEYXlzKCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBsb2NrZWQgPSB1dGlsc18xLnJhbmdlSXNMb2NrZWQodGhpcy5kYXRlUGlja2VkLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3I6cmFuZ2UnLCB0aGlzLmRhdGVQaWNrZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBfX3NwcmVhZEFycmF5cyhbJ3ByZXNlbGVjdCddLCBfX3NwcmVhZEFycmF5cyh0aGlzLmRhdGVQaWNrZWQpLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5jbG9uZSgpOyB9KSkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9BcHBseSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlICYmIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGUodGhpcy5kYXRlUGlja2VkWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICghdGhpcy5vcHRpb25zLnNpbmdsZU1vZGUgJiYgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0ZVJhbmdlKHRoaXMuZGF0ZVBpY2tlZFswXSwgdGhpcy5kYXRlUGlja2VkWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENsaWNrIG9uIGJ1dHRvbiBwcmV2aW91cyBtb250aFxyXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlLmJ1dHRvblByZXZpb3VzTW9udGgpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIGlkeCA9IDA7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZk1vbnRocyA9IHRoaXMub3B0aW9ucy5zd2l0Y2hpbmdNb250aHMgfHwgdGhpcy5vcHRpb25zLm51bWJlck9mTW9udGhzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNwbGl0Vmlldykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1vbnRoSXRlbSA9IHRhcmdldC5jbG9zZXN0KFwiLlwiICsgc3R5bGUubW9udGhJdGVtKTtcclxuICAgICAgICAgICAgICAgIGlkeCA9IHV0aWxzXzEuZmluZE5lc3RlZE1vbnRoSXRlbShtb250aEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZNb250aHMgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJzW2lkeF0uc2V0TW9udGgodGhpcy5jYWxlbmRhcnNbaWR4XS5nZXRNb250aCgpIC0gbnVtYmVyT2ZNb250aHMpO1xyXG4gICAgICAgICAgICB0aGlzLmdvdG9EYXRlKHRoaXMuY2FsZW5kYXJzW2lkeF0sIGlkeCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOm1vbnRoJywgdGhpcy5jYWxlbmRhcnNbaWR4XSwgaWR4KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDbGljayBvbiBidXR0b24gbmV4dCBtb250aFxyXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlLmJ1dHRvbk5leHRNb250aCkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgaWR4ID0gMDtcclxuICAgICAgICAgICAgdmFyIG51bWJlck9mTW9udGhzID0gdGhpcy5vcHRpb25zLnN3aXRjaGluZ01vbnRocyB8fCB0aGlzLm9wdGlvbnMubnVtYmVyT2ZNb250aHM7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3BsaXRWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbW9udGhJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoXCIuXCIgKyBzdHlsZS5tb250aEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgaWR4ID0gdXRpbHNfMS5maW5kTmVzdGVkTW9udGhJdGVtKG1vbnRoSXRlbSk7XHJcbiAgICAgICAgICAgICAgICBudW1iZXJPZk1vbnRocyA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jYWxlbmRhcnNbaWR4XS5zZXRNb250aCh0aGlzLmNhbGVuZGFyc1tpZHhdLmdldE1vbnRoKCkgKyBudW1iZXJPZk1vbnRocyk7XHJcbiAgICAgICAgICAgIHRoaXMuZ290b0RhdGUodGhpcy5jYWxlbmRhcnNbaWR4XSwgaWR4KTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdjaGFuZ2U6bW9udGgnLCB0aGlzLmNhbGVuZGFyc1tpZHhdLCBpZHgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENsaWNrIG9uIGJ1dHRvbiBjYW5jZWxcclxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhzdHlsZS5idXR0b25DYW5jZWwpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnYnV0dG9uOmNhbmNlbCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDbGljayBvbiBidXR0b24gYXBwbHlcclxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhzdHlsZS5idXR0b25BcHBseSkpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNpbmdsZU1vZGUgJiYgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRlKHRoaXMuZGF0ZVBpY2tlZFswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5zaW5nbGVNb2RlICYmIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0ZVJhbmdlKHRoaXMuZGF0ZVBpY2tlZFswXSwgdGhpcy5kYXRlUGlja2VkWzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdidXR0b246YXBwbHknLCB0aGlzLm9wdGlvbnMuc3RhcnREYXRlLCB0aGlzLm9wdGlvbnMuZW5kRGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLnNob3dUb29sdGlwID0gZnVuY3Rpb24gKGVsZW1lbnQsIHRleHQpIHtcclxuICAgICAgICB2YXIgdG9vbHRpcCA9IHRoaXMudWkucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlLmNvbnRhaW5lclRvb2x0aXApO1xyXG4gICAgICAgIHRvb2x0aXAuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICB0b29sdGlwLmlubmVySFRNTCA9IHRleHQ7XHJcbiAgICAgICAgdmFyIHBpY2tlckJDUiA9IHRoaXMudWkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgdmFyIHRvb2x0aXBCQ1IgPSB0b29sdGlwLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHZhciBkYXlCQ1IgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHZhciB0b3AgPSBkYXlCQ1IudG9wO1xyXG4gICAgICAgIHZhciBsZWZ0ID0gZGF5QkNSLmxlZnQ7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbmxpbmVNb2RlICYmIHRoaXMub3B0aW9ucy5wYXJlbnRFbCkge1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50QkNSID0gdGhpcy51aS5wYXJlbnROb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICB0b3AgLT0gcGFyZW50QkNSLnRvcDtcclxuICAgICAgICAgICAgbGVmdCAtPSBwYXJlbnRCQ1IubGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvcCAtPSBwaWNrZXJCQ1IudG9wO1xyXG4gICAgICAgICAgICBsZWZ0IC09IHBpY2tlckJDUi5sZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b3AgLT0gdG9vbHRpcEJDUi5oZWlnaHQ7XHJcbiAgICAgICAgbGVmdCAtPSB0b29sdGlwQkNSLndpZHRoIC8gMjtcclxuICAgICAgICBsZWZ0ICs9IGRheUJDUi53aWR0aCAvIDI7XHJcbiAgICAgICAgdG9vbHRpcC5zdHlsZS50b3AgPSB0b3AgKyBcInB4XCI7XHJcbiAgICAgICAgdG9vbHRpcC5zdHlsZS5sZWZ0ID0gbGVmdCArIFwicHhcIjtcclxuICAgICAgICB0aGlzLmVtaXQoJ3Rvb2x0aXAnLCB0b29sdGlwLCBlbGVtZW50KTtcclxuICAgIH07XHJcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5oaWRlVG9vbHRpcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdG9vbHRpcCA9IHRoaXMudWkucXVlcnlTZWxlY3RvcihcIi5cIiArIHN0eWxlLmNvbnRhaW5lclRvb2x0aXApO1xyXG4gICAgICAgIHRvb2x0aXAuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgfTtcclxuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLnNob3VsZEFsbG93TW91c2VFbnRlciA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5vcHRpb25zLnNpbmdsZU1vZGVcclxuICAgICAgICAgICAgJiYgIWVsLmNsYXNzTGlzdC5jb250YWlucyhzdHlsZS5pc0xvY2tlZCk7XHJcbiAgICB9O1xyXG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuc2hvdWxkQWxsb3dSZXBpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5lbGVtZW50RW5kXHJcbiAgICAgICAgICAgICYmIHRoaXMub3B0aW9ucy5hbGxvd1JlcGlja1xyXG4gICAgICAgICAgICAmJiB0aGlzLm9wdGlvbnMuc3RhcnREYXRlXHJcbiAgICAgICAgICAgICYmIHRoaXMub3B0aW9ucy5lbmREYXRlO1xyXG4gICAgfTtcclxuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLmlzRGF5SXRlbSA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGUuZGF5SXRlbSk7XHJcbiAgICB9O1xyXG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUub25Nb3VzZUVudGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGlmICghdGhpcy5pc0RheUl0ZW0odGFyZ2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNob3VsZEFsbG93TW91c2VFbnRlcih0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZEFsbG93UmVwaWNrKCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyaWdnZXJFbGVtZW50ID09PSB0aGlzLm9wdGlvbnMuZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlZFswXSA9IHRoaXMub3B0aW9ucy5lbmREYXRlLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnRyaWdnZXJFbGVtZW50ID09PSB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlZFswXSA9IHRoaXMub3B0aW9ucy5zdGFydERhdGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRlUGlja2VkLmxlbmd0aCAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBzdGFydERhdGVFbGVtZW50ID0gdGhpcy51aVxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZS5kYXlJdGVtICsgXCJbZGF0YS10aW1lPVxcXCJcIiArIHRoaXMuZGF0ZVBpY2tlZFswXS5nZXRUaW1lKCkgKyBcIlxcXCJdXCIpO1xyXG4gICAgICAgICAgICB2YXIgZGF0ZTFfMSA9IHRoaXMuZGF0ZVBpY2tlZFswXS5jbG9uZSgpO1xyXG4gICAgICAgICAgICB2YXIgZGF0ZTJfMSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHRhcmdldC5kYXRhc2V0LnRpbWUpO1xyXG4gICAgICAgICAgICB2YXIgaXNGbGlwcGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChkYXRlMV8xLmdldFRpbWUoKSA+IGRhdGUyXzEuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcERhdGUgPSBkYXRlMV8xLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICBkYXRlMV8xID0gZGF0ZTJfMS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZTJfMSA9IHRlbXBEYXRlLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICBpc0ZsaXBwZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBhbGxEYXlJdGVtcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMudWkucXVlcnlTZWxlY3RvckFsbChcIi5cIiArIHN0eWxlLmRheUl0ZW0pKTtcclxuICAgICAgICAgICAgYWxsRGF5SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShkLmRhdGFzZXQudGltZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF5ID0gX3RoaXMucmVuZGVyRGF5KGRhdGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGUuaXNCZXR3ZWVuKGRhdGUxXzEsIGRhdGUyXzEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNJblJhbmdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGQuY2xhc3NOYW1lID0gZGF5LmNsYXNzTmFtZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzRW5kRGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChpc0ZsaXBwZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFydERhdGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzRmxpcHBlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0ZsaXBwZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0RGF0ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydERhdGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUuaXNGbGlwcGVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlLmlzRmxpcHBlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93VG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRheXMgPSBkYXRlMl8xLmRpZmYoZGF0ZTFfMSwgJ2RheScpICsgMTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnRvb2x0aXBOdW1iZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXlzID0gdGhpcy5vcHRpb25zLnRvb2x0aXBOdW1iZXIuY2FsbCh0aGlzLCBkYXlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXlzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwbHVyYWxOYW1lID0gdGhpcy5wbHVyYWxTZWxlY3RvcihkYXlzKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGx1cmFsVGV4dCA9IHRoaXMub3B0aW9ucy50b29sdGlwVGV4dFtwbHVyYWxOYW1lXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy50b29sdGlwVGV4dFtwbHVyYWxOYW1lXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiW1wiICsgcGx1cmFsTmFtZSArIFwiXVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gZGF5cyArIFwiIFwiICsgcGx1cmFsVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb29sdGlwKHRhcmdldCwgdGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZml4IGJ1ZyBpT1MgMTAtMTIgLSBodHRwczovL2dpdGh1Yi5jb20vd2FraXJpbi9MaXRlcGlja2VyL2lzc3Vlcy8xMjRcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaURldmljZSA9IC8oaXBob25lfGlwYWQpL2kudGVzdCh1YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlPUzExb3IxMiA9IC9PUyAxKFswLTJdKS9pLnRlc3QodWEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpRGV2aWNlICYmIGlPUzExb3IxMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZVRvb2x0aXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5vbk1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmFsbG93UmVwaWNrXHJcbiAgICAgICAgICAgIHx8ICh0aGlzLm9wdGlvbnMuYWxsb3dSZXBpY2sgJiYgIXRoaXMub3B0aW9ucy5zdGFydERhdGUgJiYgIXRoaXMub3B0aW9ucy5lbmREYXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9O1xyXG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUub25JbnB1dCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMucGFyc2VJbnB1dCgpLCBzdGFydFZhbHVlID0gX2FbMF0sIGVuZFZhbHVlID0gX2FbMV07XHJcbiAgICAgICAgdmFyIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB2YXIgZGF0ZUZvcm1hdCA9IHRoaXMub3B0aW9ucy5mb3JtYXQ7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50RW5kKSB7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSBzdGFydFZhbHVlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZVxyXG4gICAgICAgICAgICAgICAgJiYgZW5kVmFsdWUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lXHJcbiAgICAgICAgICAgICAgICAmJiBzdGFydFZhbHVlLmZvcm1hdChkYXRlRm9ybWF0KSA9PT0gdGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWVcclxuICAgICAgICAgICAgICAgICYmIGVuZFZhbHVlLmZvcm1hdChkYXRlRm9ybWF0KSA9PT0gdGhpcy5vcHRpb25zLmVsZW1lbnRFbmQudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlKSB7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSBzdGFydFZhbHVlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZVxyXG4gICAgICAgICAgICAgICAgJiYgc3RhcnRWYWx1ZS5mb3JtYXQoZGF0ZUZvcm1hdCkgPT09IHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaXNWYWxpZCA9IHN0YXJ0VmFsdWUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lXHJcbiAgICAgICAgICAgICAgICAmJiBlbmRWYWx1ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWVcclxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAmJiBcIlwiICsgc3RhcnRWYWx1ZS5mb3JtYXQoZGF0ZUZvcm1hdCkgKyB0aGlzLm9wdGlvbnMuZGVsaW1pdGVyICsgZW5kVmFsdWUuZm9ybWF0KGRhdGVGb3JtYXQpID09PSB0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgICAgICAgaWYgKGVuZFZhbHVlICYmIHN0YXJ0VmFsdWUuZ2V0VGltZSgpID4gZW5kVmFsdWUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcERhdGUgPSBzdGFydFZhbHVlLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICBzdGFydFZhbHVlID0gZW5kVmFsdWUuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIGVuZFZhbHVlID0gdGVtcERhdGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc3RhcnREYXRlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoc3RhcnRWYWx1ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xyXG4gICAgICAgICAgICBpZiAoZW5kVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbmREYXRlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZW5kVmFsdWUsIHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUlucHV0KCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHZhciBkYXRlR28gPSBzdGFydFZhbHVlLmNsb25lKCk7XHJcbiAgICAgICAgICAgIHZhciBtb250aElkeCA9IDA7XHJcbiAgICAgICAgICAgIHZhciBpc1N0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50RW5kKSB7XHJcbiAgICAgICAgICAgICAgICBpc1N0YXJ0ID0gc3RhcnRWYWx1ZS5mb3JtYXQoZGF0ZUZvcm1hdCkgPT09IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlzU3RhcnQgPSBldmVudC50YXJnZXQudmFsdWUuc3RhcnRzV2l0aChzdGFydFZhbHVlLmZvcm1hdChkYXRlRm9ybWF0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpc1N0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlR28gPSBlbmRWYWx1ZS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgbW9udGhJZHggPSB0aGlzLm9wdGlvbnMubnVtYmVyT2ZNb250aHMgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnc2VsZWN0ZWQnLCB0aGlzLmdldFN0YXJ0RGF0ZSgpLCB0aGlzLmdldEVuZERhdGUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ290b0RhdGUoZGF0ZUdvLCBtb250aElkeCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBMaXRlcGlja2VyO1xyXG59KGNhbGVuZGFyXzEuQ2FsZW5kYXIpKTtcclxuZXhwb3J0cy5MaXRlcGlja2VyID0gTGl0ZXBpY2tlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZGF0ZXRpbWVfMSA9IHJlcXVpcmUoXCIuL2RhdGV0aW1lXCIpO1xyXG52YXIgbGl0ZXBpY2tlcl8xID0gcmVxdWlyZShcIi4vbGl0ZXBpY2tlclwiKTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgIGlmIChlbCA9PT0gdm9pZCAwKSB7IGVsID0gbnVsbDsgfVxyXG4gICAgdGhpcy5lbWl0KCdiZWZvcmU6c2hvdycsIGVsKTtcclxuICAgIGNvbnNvbGUubG9nKCdhc2QnKTtcclxuICAgIHZhciBlbGVtZW50ID0gZWwgPyBlbCA6IHRoaXMub3B0aW9ucy5lbGVtZW50O1xyXG4gICAgdGhpcy50cmlnZ2VyRWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICBpZiAodGhpcy5pc1Nob3duaW5nKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmlubGluZU1vZGUpIHtcclxuICAgICAgICB0aGlzLnVpLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgICAgICB0aGlzLnVpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuICAgICAgICB0aGlzLnVpLnN0eWxlLnRvcCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy51aS5zdHlsZS5sZWZ0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVpLnN0eWxlLmJvdHRvbSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy51aS5zdHlsZS5yaWdodCA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zY3JvbGxUb0RhdGUoZWwpO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIHRoaXMudWkuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgdGhpcy51aS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHRoaXMudWkuc3R5bGUuekluZGV4ID0gdGhpcy5vcHRpb25zLnpJbmRleDtcclxuICAgIHZhciBwb3NpdGlvbiA9IHRoaXMuZmluZFBvc2l0aW9uKGVsZW1lbnQpO1xyXG4gICAgdGhpcy51aS5zdHlsZS50b3AgPSBwb3NpdGlvbi50b3AgKyBcInB4XCI7XHJcbiAgICB0aGlzLnVpLnN0eWxlLmxlZnQgPSBwb3NpdGlvbi5sZWZ0ICsgXCJweFwiO1xyXG4gICAgdGhpcy51aS5zdHlsZS5yaWdodCA9IG51bGw7XHJcbiAgICB0aGlzLnVpLnN0eWxlLmJvdHRvbSA9IG51bGw7XHJcbiAgICB0aGlzLmVtaXQoJ3Nob3cnLCBlbCk7XHJcbn07XHJcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzU2hvd25pbmcoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy51cGRhdGVJbnB1dCgpO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pbmxpbmVNb2RlKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnVpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB0aGlzLmVtaXQoJ2hpZGUnKTtcclxufTtcclxubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLmdldERhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRTdGFydERhdGUoKTtcclxufTtcclxubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLmdldFN0YXJ0RGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhcnREYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zdGFydERhdGUuY2xvbmUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59O1xyXG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuZ2V0RW5kRGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZW5kRGF0ZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW5kRGF0ZS5jbG9uZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5zZXREYXRlID0gZnVuY3Rpb24gKGRhdGUsIGZvcmNlKSB7XHJcbiAgICBpZiAoZm9yY2UgPT09IHZvaWQgMCkgeyBmb3JjZSA9IGZhbHNlOyB9XHJcbiAgICB2YXIgZCA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGRhdGUsIHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcclxuICAgIHZhciBpc0xvY2tlZCA9IHV0aWxzXzEuZGF0ZUlzTG9ja2VkKGQsIHRoaXMub3B0aW9ucywgW2RdKTtcclxuICAgIGlmIChpc0xvY2tlZCAmJiAhZm9yY2UpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOmRhdGUnLCBkKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhcnREYXRlKGRhdGUpO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW5saW5lTW9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVtaXQoJ3NlbGVjdGVkJywgdGhpcy5nZXREYXRlKCkpO1xyXG4gICAgfVxyXG59O1xyXG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuc2V0U3RhcnREYXRlID0gZnVuY3Rpb24gKGRhdGUpIHtcclxuICAgIGlmICghZGF0ZSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB0aGlzLm9wdGlvbnMuc3RhcnREYXRlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZGF0ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xyXG4gICAgdGhpcy51cGRhdGVJbnB1dCgpO1xyXG59O1xyXG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuc2V0RW5kRGF0ZSA9IGZ1bmN0aW9uIChkYXRlKSB7XHJcbiAgICBpZiAoIWRhdGUpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgdGhpcy5vcHRpb25zLmVuZERhdGUgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShkYXRlLCB0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnN0YXJ0RGF0ZS5nZXRUaW1lKCkgPiB0aGlzLm9wdGlvbnMuZW5kRGF0ZS5nZXRUaW1lKCkpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuZW5kRGF0ZSA9IHRoaXMub3B0aW9ucy5zdGFydERhdGUuY2xvbmUoKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuc3RhcnREYXRlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZGF0ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVJbnB1dCgpO1xyXG59O1xyXG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuc2V0RGF0ZVJhbmdlID0gZnVuY3Rpb24gKGRhdGUxLCBkYXRlMiwgZm9yY2UpIHtcclxuICAgIGlmIChmb3JjZSA9PT0gdm9pZCAwKSB7IGZvcmNlID0gZmFsc2U7IH1cclxuICAgIC8vIHN0b3AgcmVwaWNraW5nIGJ5IHJlc2V0dGluZyB0aGUgdHJpZ2dlciBlbGVtZW50XHJcbiAgICB0aGlzLnRyaWdnZXJFbGVtZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgdmFyIGQxID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZGF0ZTEsIHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcclxuICAgIHZhciBkMiA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGRhdGUyLCB0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XHJcbiAgICB2YXIgaXNMb2NrZWQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWxsb3dMb2NrRGF5c0luUmFuZ2UpIHtcclxuICAgICAgICBpc0xvY2tlZCA9IHV0aWxzXzEucmFuZ2VJc0xvY2tlZChbZDEsIGQyXSwgdGhpcy5vcHRpb25zKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlzTG9ja2VkID0gdXRpbHNfMS5kYXRlSXNMb2NrZWQoZDEsIHRoaXMub3B0aW9ucywgW2QxLCBkMl0pXHJcbiAgICAgICAgICAgIHx8IHV0aWxzXzEuZGF0ZUlzTG9ja2VkKGQyLCB0aGlzLm9wdGlvbnMsIFtkMSwgZDJdKTtcclxuICAgIH1cclxuICAgIGlmIChpc0xvY2tlZCAmJiAhZm9yY2UpIHtcclxuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOnJhbmdlJywgW2QxLCBkMl0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGFydERhdGUoZDEpO1xyXG4gICAgICAgIHRoaXMuc2V0RW5kRGF0ZShkMik7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbmxpbmVNb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXQoKTtcclxuICAgICAgICB0aGlzLmVtaXQoJ3NlbGVjdGVkJywgdGhpcy5nZXRTdGFydERhdGUoKSwgdGhpcy5nZXRFbmREYXRlKCkpO1xyXG4gICAgfVxyXG59O1xyXG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuZ290b0RhdGUgPSBmdW5jdGlvbiAoZGF0ZSwgaWR4KSB7XHJcbiAgICBpZiAoaWR4ID09PSB2b2lkIDApIHsgaWR4ID0gMDsgfVxyXG4gICAgdmFyIHRvRGF0ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGRhdGUpO1xyXG4gICAgdG9EYXRlLnNldERhdGUoMSk7XHJcbiAgICB0aGlzLmNhbGVuZGFyc1tpZHhdID0gdG9EYXRlLmNsb25lKCk7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG59O1xyXG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuc2V0TG9ja0RheXMgPSBmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgIHRoaXMub3B0aW9ucy5sb2NrRGF5cyA9IGRhdGV0aW1lXzEuRGF0ZVRpbWUuY29udmVydEFycmF5KGFycmF5LCB0aGlzLm9wdGlvbnMubG9ja0RheXNGb3JtYXQpO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxufTtcclxubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLnNldEhpZ2hsaWdodGVkRGF5cyA9IGZ1bmN0aW9uIChhcnJheSkge1xyXG4gICAgdGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5cyA9IGRhdGV0aW1lXzEuRGF0ZVRpbWUuY29udmVydEFycmF5KGFycmF5LCB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzRm9ybWF0KTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbn07XHJcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5zZXRPcHRpb25zID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIGRlbGV0ZSBvcHRpb25zLmVsZW1lbnQ7XHJcbiAgICBkZWxldGUgb3B0aW9ucy5lbGVtZW50RW5kO1xyXG4gICAgZGVsZXRlIG9wdGlvbnMucGFyZW50RWw7XHJcbiAgICBpZiAob3B0aW9ucy5zdGFydERhdGUpIHtcclxuICAgICAgICBvcHRpb25zLnN0YXJ0RGF0ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKG9wdGlvbnMuc3RhcnREYXRlLCB0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9ucy5lbmREYXRlKSB7XHJcbiAgICAgICAgb3B0aW9ucy5lbmREYXRlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUob3B0aW9ucy5lbmREYXRlLCB0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XHJcbiAgICB9XHJcbiAgICB2YXIgZHJvcGRvd25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucy5kcm9wZG93bnMpLCBvcHRpb25zLmRyb3Bkb3ducyk7XHJcbiAgICB2YXIgYnV0dG9uVGV4dCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMuYnV0dG9uVGV4dCksIG9wdGlvbnMuYnV0dG9uVGV4dCk7XHJcbiAgICB2YXIgdG9vbHRpcFRleHQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zLnRvb2x0aXBUZXh0KSwgb3B0aW9ucy50b29sdGlwVGV4dCk7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zKSwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLm9wdGlvbnMuZHJvcGRvd25zID0gX19hc3NpZ24oe30sIGRyb3Bkb3ducyk7XHJcbiAgICB0aGlzLm9wdGlvbnMuYnV0dG9uVGV4dCA9IF9fYXNzaWduKHt9LCBidXR0b25UZXh0KTtcclxuICAgIHRoaXMub3B0aW9ucy50b29sdGlwVGV4dCA9IF9fYXNzaWduKHt9LCB0b29sdGlwVGV4dCk7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnNpbmdsZU1vZGUgJiYgISh0aGlzLm9wdGlvbnMuc3RhcnREYXRlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZSkpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuc3RhcnREYXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuZW5kRGF0ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5zaW5nbGVNb2RlXHJcbiAgICAgICAgJiYgKCEodGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWUpXHJcbiAgICAgICAgICAgIHx8ICEodGhpcy5vcHRpb25zLmVuZERhdGUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lKSkpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuc3RhcnREYXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuZW5kRGF0ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCB0aGlzLm9wdGlvbnMubnVtYmVyT2ZNb250aHM7IGlkeCArPSAxKSB7XHJcbiAgICAgICAgdmFyIGRhdGUgPSB0aGlzLm9wdGlvbnMuc3RhcnREYXRlXHJcbiAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZS5jbG9uZSgpXHJcbiAgICAgICAgICAgIDogbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoKTtcclxuICAgICAgICBkYXRlLnNldERhdGUoMSk7XHJcbiAgICAgICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyBpZHgpO1xyXG4gICAgICAgIHRoaXMuY2FsZW5kYXJzW2lkeF0gPSBkYXRlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5sb2NrRGF5cy5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMubG9ja0RheXMgPSBkYXRldGltZV8xLkRhdGVUaW1lLmNvbnZlcnRBcnJheSh0aGlzLm9wdGlvbnMubG9ja0RheXMsIHRoaXMub3B0aW9ucy5sb2NrRGF5c0Zvcm1hdCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5cy5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzID0gZGF0ZXRpbWVfMS5EYXRlVGltZS5jb252ZXJ0QXJyYXkodGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5cywgdGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5c0Zvcm1hdCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pbmxpbmVNb2RlKSB7XHJcbiAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZUlucHV0KCk7XHJcbn07XHJcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5jbGVhclNlbGVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMub3B0aW9ucy5zdGFydERhdGUgPSBudWxsO1xyXG4gICAgdGhpcy5vcHRpb25zLmVuZERhdGUgPSBudWxsO1xyXG4gICAgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLnVwZGF0ZUlucHV0KCk7XHJcbiAgICBpZiAodGhpcy5pc1Nob3duaW5nKCkpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCdjbGVhcjpzZWxlY3Rpb24nKTtcclxufTtcclxubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy51aSAmJiB0aGlzLnVpLnBhcmVudE5vZGUpIHtcclxuICAgICAgICB0aGlzLnVpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy51aSk7XHJcbiAgICAgICAgdGhpcy51aSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoJ2Rlc3Ryb3knKTtcclxufTtcclxuIiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvZHRzLWNzcy1tb2R1bGVzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS0zIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnRBdFRvcChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgICAgICAgICAgICB2YXIgbGFzdEluc2VydGVkRWxlbWVudCA9IHdpbmRvdy5fbGFzdEVsZW1lbnRJbnNlcnRlZEJ5U3R5bGVMb2FkZXI7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5kaXNhYmxlTGl0ZXBpY2tlclN0eWxlcykge1xuICAgICAgICAgICAgICAgICAgaWYgKCFsYXN0SW5zZXJ0ZWRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoZWxlbWVudCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsYXN0SW5zZXJ0ZWRFbGVtZW50Lm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoZWxlbWVudCwgbGFzdEluc2VydGVkRWxlbWVudC5uZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgICAgICAgICAgICAgICAgd2luZG93Ll9sYXN0RWxlbWVudEluc2VydGVkQnlTdHlsZUxvYWRlciA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIGZpbmROZXN0ZWRNb250aEl0ZW0obW9udGhJdGVtKSB7XHJcbiAgICB2YXIgY2hpbGRyZW4gPSBtb250aEl0ZW0ucGFyZW50Tm9kZS5jaGlsZE5vZGVzO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkgPSBpICsgMSkge1xyXG4gICAgICAgIHZhciBjdXJOb2RlID0gY2hpbGRyZW4uaXRlbShpKTtcclxuICAgICAgICBpZiAoY3VyTm9kZSA9PT0gbW9udGhJdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG59XHJcbmV4cG9ydHMuZmluZE5lc3RlZE1vbnRoSXRlbSA9IGZpbmROZXN0ZWRNb250aEl0ZW07XHJcbmZ1bmN0aW9uIGRhdGVJc0xvY2tlZChkYXRlLCBvcHRpb25zLCBwaWNrZWREYXRlcykge1xyXG4gICAgdmFyIGlzTG9ja2VkID0gZmFsc2U7XHJcbiAgICBpZiAob3B0aW9ucy5sb2NrRGF5cy5sZW5ndGgpIHtcclxuICAgICAgICBpc0xvY2tlZCA9IG9wdGlvbnMubG9ja0RheXNcclxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgICBpZiAoZCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0ZS5pc0JldHdlZW4oZFswXSwgZFsxXSwgb3B0aW9ucy5sb2NrRGF5c0luY2x1c2l2aXR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZC5pc1NhbWUoZGF0ZSwgJ2RheScpO1xyXG4gICAgICAgIH0pLmxlbmd0aDtcclxuICAgIH1cclxuICAgIGlmICghaXNMb2NrZWQgJiYgdHlwZW9mIG9wdGlvbnMubG9ja0RheXNGaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBpc0xvY2tlZCA9IG9wdGlvbnMubG9ja0RheXNGaWx0ZXIuY2FsbCh0aGlzLCBkYXRlLmNsb25lKCksIG51bGwsIHBpY2tlZERhdGVzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc0xvY2tlZDtcclxufVxyXG5leHBvcnRzLmRhdGVJc0xvY2tlZCA9IGRhdGVJc0xvY2tlZDtcclxuZnVuY3Rpb24gcmFuZ2VJc0xvY2tlZChkYXlzLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgaXNMb2NrZWQgPSBmYWxzZTtcclxuICAgIGlmIChvcHRpb25zLmxvY2tEYXlzLmxlbmd0aCkge1xyXG4gICAgICAgIGlzTG9ja2VkID0gb3B0aW9ucy5sb2NrRGF5c1xyXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgIGlmIChkIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpc0VxdWFsVG9SYW5nZSA9IGRheXNbMF0udG9EYXRlU3RyaW5nKCkgPT09IGRbMF0udG9EYXRlU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICAmJiBkYXlzWzFdLnRvRGF0ZVN0cmluZygpID09PSBkWzFdLnRvRGF0ZVN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRbMF0uaXNCZXR3ZWVuKGRheXNbMF0sIGRheXNbMV0sIG9wdGlvbnMubG9ja0RheXNJbmNsdXNpdml0eSlcclxuICAgICAgICAgICAgICAgICAgICB8fCBkWzFdLmlzQmV0d2VlbihkYXlzWzBdLCBkYXlzWzFdLCBvcHRpb25zLmxvY2tEYXlzSW5jbHVzaXZpdHkpXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgaXNFcXVhbFRvUmFuZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGQuaXNCZXR3ZWVuKGRheXNbMF0sIGRheXNbMV0sIG9wdGlvbnMubG9ja0RheXNJbmNsdXNpdml0eSk7XHJcbiAgICAgICAgfSkubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc0xvY2tlZCAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NrRGF5c0ZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGlzTG9ja2VkID0gb3B0aW9ucy5sb2NrRGF5c0ZpbHRlci5jYWxsKHRoaXMsIGRheXNbMF0uY2xvbmUoKSwgZGF5c1sxXS5jbG9uZSgpLCBkYXlzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc0xvY2tlZDtcclxufVxyXG5leHBvcnRzLnJhbmdlSXNMb2NrZWQgPSByYW5nZUlzTG9ja2VkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9