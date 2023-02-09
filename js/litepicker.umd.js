/*!
 * 
 * litepicker.umd.js
 * Litepicker v2.0.11 (https://github.com/wakirin/Litepicker)
 * Package: litepicker (https://www.npmjs.com/package/litepicker)
 * License: MIT (https://github.com/wakirin/Litepicker/blob/master/LICENCE.md)
 * Copyright 2019-2021 Rinat G.
 *     
 * Hash: 4669874fe68cca9bfc46
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Litepicker", [], factory);
	else if(typeof exports === 'object')
		exports["Litepicker"] = factory();
	else
		root["Litepicker"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MaXRlcGlja2VyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9MaXRlcGlja2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uLi9jdXN0b21DYWxlbmRhci9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9MaXRlcGlja2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9zcmMvY2FsZW5kYXIudHMiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uL3NyYy9jb3JlLnRzIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9zcmMvZGF0ZXRpbWUudHMiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9MaXRlcGlja2VyLy4vc3JjL2xpdGVwaWNrZXIudHMiLCJ3ZWJwYWNrOi8vTGl0ZXBpY2tlci8uL3NyYy9tZXRob2RzLnRzIiwid2VicGFjazovL0xpdGVwaWNrZXIvLi9zcmMvc2Nzcy9tYWluLnNjc3M/Y2MxZSIsIndlYnBhY2s6Ly9MaXRlcGlja2VyLy4vc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNM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QVE7QUFDekQsd0NBQXdDLFFBQVE7QUFDaEQsd0RBQXdELFFBQVE7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsaUJBQWlCLG1CQUFPLENBQUMscUNBQVk7QUFDckMsaUJBQWlCLG1CQUFPLENBQUMscUNBQVk7QUFDckMsWUFBWSxtQkFBTyxDQUFDLDhDQUFrQjtBQUN0QyxjQUFjLG1CQUFPLENBQUMsK0JBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtIQUFrSCxrQkFBa0IsRUFBRTtBQUN0STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDMWJhO0FBQ2I7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxpQkFBaUIsbUJBQU8sQ0FBQyxxQ0FBWTtBQUNyQyxtQkFBbUIsbUJBQU8sQ0FBQyx5Q0FBYztBQUN6QyxjQUFjLG1CQUFPLENBQUMsK0JBQVM7QUFDL0I7QUFDQSx3QkFBd0IsV0FBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFNBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4Qyx5Q0FBeUM7QUFDekMsMENBQTBDO0FBQzFDLHVDQUF1QztBQUN2Qyx3Q0FBd0M7QUFDeEMseUNBQXlDO0FBQ3pDLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQ0FBbUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsTkEsY0FBYyxtQkFBTyxDQUFDLHVaQUFvTzs7QUFFMVA7QUFDQSxjQUFjLFFBQVM7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0pBQTJFOztBQUVoRztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQ2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibGl0ZXBpY2tlci51bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkxpdGVwaWNrZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTGl0ZXBpY2tlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJMaXRlcGlja2VyXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWxpdGVwaWNrZXItY29udGFpbmVyLW1vbnRocy1jb2xvci1iZzogI2ZmZjtcXG4gIC0tbGl0ZXBpY2tlci1jb250YWluZXItbW9udGhzLWJveC1zaGFkb3ctY29sb3I6ICNkZGQ7XFxuICAtLWxpdGVwaWNrZXItZm9vdGVyLWNvbG9yLWJnOiAjZmFmYWZhO1xcbiAgLS1saXRlcGlja2VyLWZvb3Rlci1ib3gtc2hhZG93LWNvbG9yOiAjZGRkO1xcbiAgLS1saXRlcGlja2VyLXRvb2x0aXAtY29sb3ItYmc6ICNmZmY7XFxuICAtLWxpdGVwaWNrZXItbW9udGgtaGVhZGVyLWNvbG9yOiAjMzMzO1xcbiAgLS1saXRlcGlja2VyLWJ1dHRvbi1wcmV2LW1vbnRoLWNvbG9yOiAjOWU5ZTllO1xcbiAgLS1saXRlcGlja2VyLWJ1dHRvbi1uZXh0LW1vbnRoLWNvbG9yOiAjOWU5ZTllO1xcbiAgLS1saXRlcGlja2VyLWJ1dHRvbi1wcmV2LW1vbnRoLWNvbG9yLWhvdmVyOiAjMjE5NmYzO1xcbiAgLS1saXRlcGlja2VyLWJ1dHRvbi1uZXh0LW1vbnRoLWNvbG9yLWhvdmVyOiAjMjE5NmYzO1xcbiAgLS1saXRlcGlja2VyLW1vbnRoLXdpZHRoOiBjYWxjKHZhcigtLWxpdGVwaWNrZXItZGF5LXdpZHRoKSAqIDcpO1xcbiAgLS1saXRlcGlja2VyLW1vbnRoLXdlZWtkYXktY29sb3I6ICM5ZTllOWU7XFxuICAtLWxpdGVwaWNrZXItbW9udGgtd2Vlay1udW1iZXItY29sb3I6ICM5ZTllOWU7XFxuICAtLWxpdGVwaWNrZXItZGF5LXdpZHRoOiAzOHB4O1xcbiAgLS1saXRlcGlja2VyLWRheS1jb2xvcjogIzMzMztcXG4gIC0tbGl0ZXBpY2tlci1kYXktY29sb3ItaG92ZXI6ICMyMTk2ZjM7XFxuICAtLWxpdGVwaWNrZXItaXMtdG9kYXktY29sb3I6ICNmNDQzMzY7XFxuICAtLWxpdGVwaWNrZXItaXMtaW4tcmFuZ2UtY29sb3I6ICNiYmRlZmI7XFxuICAtLWxpdGVwaWNrZXItaXMtbG9ja2VkLWNvbG9yOiAjOWU5ZTllO1xcbiAgLS1saXRlcGlja2VyLWlzLXN0YXJ0LWNvbG9yOiAjZmZmO1xcbiAgLS1saXRlcGlja2VyLWlzLXN0YXJ0LWNvbG9yLWJnOiAjMjE5NmYzO1xcbiAgLS1saXRlcGlja2VyLWlzLWVuZC1jb2xvcjogI2ZmZjtcXG4gIC0tbGl0ZXBpY2tlci1pcy1lbmQtY29sb3ItYmc6ICMyMTk2ZjM7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLWNhbmNlbC1jb2xvcjogI2ZmZjtcXG4gIC0tbGl0ZXBpY2tlci1idXR0b24tY2FuY2VsLWNvbG9yLWJnOiAjOWU5ZTllO1xcbiAgLS1saXRlcGlja2VyLWJ1dHRvbi1hcHBseS1jb2xvcjogI2ZmZjtcXG4gIC0tbGl0ZXBpY2tlci1idXR0b24tYXBwbHktY29sb3ItYmc6ICMyMTk2ZjM7XFxuICAtLWxpdGVwaWNrZXItYnV0dG9uLXJlc2V0LWNvbG9yOiAjOTA5MDkwO1xcbiAgLS1saXRlcGlja2VyLWJ1dHRvbi1yZXNldC1jb2xvci1ob3ZlcjogIzIxOTZmMztcXG4gIC0tbGl0ZXBpY2tlci1oaWdobGlnaHRlZC1kYXktY29sb3I6ICMzMzM7XFxuICAtLWxpdGVwaWNrZXItaGlnaGxpZ2h0ZWQtZGF5LWNvbG9yLWJnOiAjZmZlYjNiOyB9XFxuXFxuLnNob3ctd2Vlay1udW1iZXJzIHtcXG4gIC0tbGl0ZXBpY2tlci1tb250aC13aWR0aDogY2FsYyh2YXIoLS1saXRlcGlja2VyLWRheS13aWR0aCkgKiA4KTsgfVxcblxcbi5saXRlcGlja2VyIHtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgZGlzcGxheTogbm9uZTsgfVxcbiAgLmxpdGVwaWNrZXIgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lOyB9XFxuICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tYWluIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpdGVwaWNrZXItY29udGFpbmVyLW1vbnRocy1jb2xvci1iZyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IHZhcigtLWxpdGVwaWNrZXItY29udGFpbmVyLW1vbnRocy1ib3gtc2hhZG93LWNvbG9yKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4IHZhcigtLWxpdGVwaWNrZXItY29udGFpbmVyLW1vbnRocy1ib3gtc2hhZG93LWNvbG9yKTtcXG4gICAgd2lkdGg6IGNhbGModmFyKC0tbGl0ZXBpY2tlci1tb250aC13aWR0aCkgKyAxMHB4KTtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMuY29sdW1ucy0yIHtcXG4gICAgICB3aWR0aDogY2FsYygodmFyKC0tbGl0ZXBpY2tlci1tb250aC13aWR0aCkgKiAyKSArIDIwcHgpOyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocy5jb2x1bW5zLTMge1xcbiAgICAgIHdpZHRoOiBjYWxjKCh2YXIoLS1saXRlcGlja2VyLW1vbnRoLXdpZHRoKSAqIDMpICsgMzBweCk7IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzLmNvbHVtbnMtNCB7XFxuICAgICAgd2lkdGg6IGNhbGMoKHZhcigtLWxpdGVwaWNrZXItbW9udGgtd2lkdGgpICogNCkgKyA0MHB4KTsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMuc3BsaXQtdmlldyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1wcmV2aW91cy1tb250aCxcXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzLnNwbGl0LXZpZXcgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tbmV4dC1tb250aCB7XFxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0ge1xcbiAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICB3aWR0aDogdmFyKC0tbGl0ZXBpY2tlci1tb250aC13aWR0aCk7XFxuICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItbW9udGgtaGVhZGVyLWNvbG9yKTsgfVxcbiAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciBkaXYge1xcbiAgICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgICAgICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgICAgICAgICAgZmxleDogMTsgfVxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIGRpdiA+IC5tb250aC1pdGVtLW5hbWUge1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgZGl2ID4gLm1vbnRoLWl0ZW0teWVhciB7XFxuICAgICAgICAgICAgcGFkZGluZzogMDsgfVxcbiAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAucmVzZXQtYnV0dG9uIHtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLXJlc2V0LWNvbG9yKTsgfVxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5yZXNldC1idXR0b24gPiBzdmcge1xcbiAgICAgICAgICAgIGZpbGw6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLXJlc2V0LWNvbG9yKTsgfVxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5yZXNldC1idXR0b24gKiB7XFxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAucmVzZXQtYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tcmVzZXQtY29sb3ItaG92ZXIpOyB9XFxuICAgICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAucmVzZXQtYnV0dG9uOmhvdmVyID4gc3ZnIHtcXG4gICAgICAgICAgICAgIGZpbGw6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLXJlc2V0LWNvbG9yLWhvdmVyKTsgfVxcbiAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLXByZXZpb3VzLW1vbnRoLFxcbiAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLW5leHQtbW9udGgge1xcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgICAgcGFkZGluZzogM3B4IDVweDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJvcmRlciAwLjNzO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBib3JkZXIgMC4zcztcXG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1wcmV2aW91cy1tb250aCAqLFxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tbmV4dC1tb250aCAqIHtcXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcbiAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLXByZXZpb3VzLW1vbnRoIHtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLXByZXYtbW9udGgtY29sb3IpOyB9XFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1wcmV2aW91cy1tb250aCA+IHN2ZyxcXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLXByZXZpb3VzLW1vbnRoID4gaW1nIHtcXG4gICAgICAgICAgICBmaWxsOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1wcmV2LW1vbnRoLWNvbG9yKTsgfVxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tcHJldmlvdXMtbW9udGg6aG92ZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1wcmV2LW1vbnRoLWNvbG9yLWhvdmVyKTsgfVxcbiAgICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1wcmV2aW91cy1tb250aDpob3ZlciA+IHN2ZyB7XFxuICAgICAgICAgICAgICBmaWxsOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1wcmV2LW1vbnRoLWNvbG9yLWhvdmVyKTsgfVxcbiAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLW5leHQtbW9udGgge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tbmV4dC1tb250aC1jb2xvcik7IH1cXG4gICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLW5leHQtbW9udGggPiBzdmcsXFxuICAgICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS1oZWFkZXIgLmJ1dHRvbi1uZXh0LW1vbnRoID4gaW1nIHtcXG4gICAgICAgICAgICBmaWxsOiB2YXIoLS1saXRlcGlja2VyLWJ1dHRvbi1uZXh0LW1vbnRoLWNvbG9yKTsgfVxcbiAgICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0taGVhZGVyIC5idXR0b24tbmV4dC1tb250aDpob3ZlciB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLW5leHQtbW9udGgtY29sb3ItaG92ZXIpOyB9XFxuICAgICAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtLWhlYWRlciAuYnV0dG9uLW5leHQtbW9udGg6aG92ZXIgPiBzdmcge1xcbiAgICAgICAgICAgICAgZmlsbDogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tbmV4dC1tb250aC1jb2xvci1ob3Zlcik7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0td2Vla2RheXMtcm93IHtcXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXG4gICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItbW9udGgtd2Vla2RheS1jb2xvcik7IH1cXG4gICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX21vbnRocyAubW9udGgtaXRlbS13ZWVrZGF5cy1yb3cgPiBkaXYge1xcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgICAgICAgZm9udC1zaXplOiA4NSU7XFxuICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgICAgICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgICB3aWR0aDogdmFyKC0tbGl0ZXBpY2tlci1kYXktd2lkdGgpO1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW06Zmlyc3QtY2hpbGQgLmJ1dHRvbi1wcmV2aW91cy1tb250aCB7XFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fbW9udGhzIC5tb250aC1pdGVtOmxhc3QtY2hpbGQgLmJ1dHRvbi1uZXh0LW1vbnRoIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0ubm8tcHJldmlvdXMtbW9udGggLmJ1dHRvbi1wcmV2aW91cy1tb250aCB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19tb250aHMgLm1vbnRoLWl0ZW0ubm8tbmV4dC1tb250aCAuYnV0dG9uLW5leHQtbW9udGgge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAgICAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzID4gZGl2LFxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzID4gYSB7XFxuICAgICAgcGFkZGluZzogNXB4IDA7XFxuICAgICAgd2lkdGg6IHZhcigtLWxpdGVwaWNrZXItZGF5LXdpZHRoKTsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbSB7XFxuICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItZGF5LWNvbG9yKTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJvcmRlciAwLjNzO1xcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJvcmRlciAwLjNzO1xcbiAgICAgIGN1cnNvcjogZGVmYXVsdDsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWRheS1jb2xvci1ob3Zlcik7XFxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCB2YXIoLS1saXRlcGlja2VyLWRheS1jb2xvci1ob3Zlcik7XFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCB2YXIoLS1saXRlcGlja2VyLWRheS1jb2xvci1ob3Zlcik7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbS5pcy10b2RheSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1pcy10b2RheS1jb2xvcik7IH1cXG4gICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbS5pcy1sb2NrZWQge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItaXMtbG9ja2VkLWNvbG9yKTsgfVxcbiAgICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0uaXMtbG9ja2VkOmhvdmVyIHtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItaXMtbG9ja2VkLWNvbG9yKTtcXG4gICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtLmlzLWluLXJhbmdlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpdGVwaWNrZXItaXMtaW4tcmFuZ2UtY29sb3IpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtLmlzLXN0YXJ0LWRhdGUge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItaXMtc3RhcnQtY29sb3IpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1pcy1zdGFydC1jb2xvci1iZyk7XFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwOyB9XFxuICAgICAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19kYXlzIC5kYXktaXRlbS5pcy1zdGFydC1kYXRlLmlzLWZsaXBwZWQge1xcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4OyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0uaXMtZW5kLWRhdGUge1xcbiAgICAgICAgY29sb3I6IHZhcigtLWxpdGVwaWNrZXItaXMtZW5kLWNvbG9yKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpdGVwaWNrZXItaXMtZW5kLWNvbG9yLWJnKTtcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7IH1cXG4gICAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtLmlzLWVuZC1kYXRlLmlzLWZsaXBwZWQge1xcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwOyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAuZGF5LWl0ZW0uaXMtc3RhcnQtZGF0ZS5pcy1lbmQtZGF0ZSB7XFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDsgfVxcbiAgICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2RheXMgLmRheS1pdGVtLmlzLWhpZ2hsaWdodGVkIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWhpZ2hsaWdodGVkLWRheS1jb2xvcik7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saXRlcGlja2VyLWhpZ2hsaWdodGVkLWRheS1jb2xvci1iZyk7IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZGF5cyAud2Vlay1udW1iZXIge1xcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1tb250aC13ZWVrLW51bWJlci1jb2xvcik7XFxuICAgICAgZm9udC1zaXplOiA4NSU7IH1cXG4gIC5saXRlcGlja2VyIC5jb250YWluZXJfX2Zvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gICAgbWFyZ2luOiAwIDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1mb290ZXItY29sb3ItYmcpO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAzcHggM3B4IDBweCB2YXIoLS1saXRlcGlja2VyLWZvb3Rlci1ib3gtc2hhZG93LWNvbG9yKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggM3B4IDNweCAwcHggdmFyKC0tbGl0ZXBpY2tlci1mb290ZXItYm94LXNoYWRvdy1jb2xvcik7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDsgfVxcbiAgICAubGl0ZXBpY2tlciAuY29udGFpbmVyX19mb290ZXIgLnByZXZpZXctZGF0ZS1yYW5nZSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogOTAlOyB9XFxuICAgIC5saXRlcGlja2VyIC5jb250YWluZXJfX2Zvb3RlciAuYnV0dG9uLWNhbmNlbCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tY2FuY2VsLWNvbG9yLWJnKTtcXG4gICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tY2FuY2VsLWNvbG9yKTtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgcGFkZGluZzogM3B4IDdweCA0cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4OyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZm9vdGVyIC5idXR0b24tY2FuY2VsICoge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZm9vdGVyIC5idXR0b24tYXBwbHkge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpdGVwaWNrZXItYnV0dG9uLWFwcGx5LWNvbG9yLWJnKTtcXG4gICAgICBjb2xvcjogdmFyKC0tbGl0ZXBpY2tlci1idXR0b24tYXBwbHktY29sb3IpO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBwYWRkaW5nOiAzcHggN3B4IDRweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZm9vdGVyIC5idXR0b24tYXBwbHk6ZGlzYWJsZWQge1xcbiAgICAgICAgb3BhY2l0eTogMC43OyB9XFxuICAgICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fZm9vdGVyIC5idXR0b24tYXBwbHkgKiB7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcbiAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fdG9vbHRpcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLXRvcDogLTRweDtcXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saXRlcGlja2VyLXRvb2x0aXAtY29sb3ItYmcpO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fdG9vbHRpcDpiZWZvcmUge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBib3R0b206IC01cHg7XFxuICAgICAgbGVmdDogY2FsYyg1MCUgLSA1cHgpO1xcbiAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7IH1cXG4gICAgLmxpdGVwaWNrZXIgLmNvbnRhaW5lcl9fdG9vbHRpcDphZnRlciB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogLTRweDtcXG4gICAgICBsZWZ0OiBjYWxjKDUwJSAtIDRweCk7XFxuICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHZhcigtLWxpdGVwaWNrZXItdG9vbHRpcC1jb2xvci1iZyk7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJzaG93V2Vla051bWJlcnNcIjogXCJzaG93LXdlZWstbnVtYmVyc1wiLFxuXHRcImxpdGVwaWNrZXJcIjogXCJsaXRlcGlja2VyXCIsXG5cdFwiY29udGFpbmVyTWFpblwiOiBcImNvbnRhaW5lcl9fbWFpblwiLFxuXHRcImNvbnRhaW5lck1vbnRoc1wiOiBcImNvbnRhaW5lcl9fbW9udGhzXCIsXG5cdFwiY29sdW1uczJcIjogXCJjb2x1bW5zLTJcIixcblx0XCJjb2x1bW5zM1wiOiBcImNvbHVtbnMtM1wiLFxuXHRcImNvbHVtbnM0XCI6IFwiY29sdW1ucy00XCIsXG5cdFwic3BsaXRWaWV3XCI6IFwic3BsaXQtdmlld1wiLFxuXHRcIm1vbnRoSXRlbUhlYWRlclwiOiBcIm1vbnRoLWl0ZW0taGVhZGVyXCIsXG5cdFwiYnV0dG9uUHJldmlvdXNNb250aFwiOiBcImJ1dHRvbi1wcmV2aW91cy1tb250aFwiLFxuXHRcImJ1dHRvbk5leHRNb250aFwiOiBcImJ1dHRvbi1uZXh0LW1vbnRoXCIsXG5cdFwibW9udGhJdGVtXCI6IFwibW9udGgtaXRlbVwiLFxuXHRcIm1vbnRoSXRlbU5hbWVcIjogXCJtb250aC1pdGVtLW5hbWVcIixcblx0XCJtb250aEl0ZW1ZZWFyXCI6IFwibW9udGgtaXRlbS15ZWFyXCIsXG5cdFwicmVzZXRCdXR0b25cIjogXCJyZXNldC1idXR0b25cIixcblx0XCJtb250aEl0ZW1XZWVrZGF5c1Jvd1wiOiBcIm1vbnRoLWl0ZW0td2Vla2RheXMtcm93XCIsXG5cdFwibm9QcmV2aW91c01vbnRoXCI6IFwibm8tcHJldmlvdXMtbW9udGhcIixcblx0XCJub05leHRNb250aFwiOiBcIm5vLW5leHQtbW9udGhcIixcblx0XCJjb250YWluZXJEYXlzXCI6IFwiY29udGFpbmVyX19kYXlzXCIsXG5cdFwiZGF5SXRlbVwiOiBcImRheS1pdGVtXCIsXG5cdFwiaXNUb2RheVwiOiBcImlzLXRvZGF5XCIsXG5cdFwiaXNMb2NrZWRcIjogXCJpcy1sb2NrZWRcIixcblx0XCJpc0luUmFuZ2VcIjogXCJpcy1pbi1yYW5nZVwiLFxuXHRcImlzU3RhcnREYXRlXCI6IFwiaXMtc3RhcnQtZGF0ZVwiLFxuXHRcImlzRmxpcHBlZFwiOiBcImlzLWZsaXBwZWRcIixcblx0XCJpc0VuZERhdGVcIjogXCJpcy1lbmQtZGF0ZVwiLFxuXHRcImlzSGlnaGxpZ2h0ZWRcIjogXCJpcy1oaWdobGlnaHRlZFwiLFxuXHRcIndlZWtOdW1iZXJcIjogXCJ3ZWVrLW51bWJlclwiLFxuXHRcImNvbnRhaW5lckZvb3RlclwiOiBcImNvbnRhaW5lcl9fZm9vdGVyXCIsXG5cdFwicHJldmlld0RhdGVSYW5nZVwiOiBcInByZXZpZXctZGF0ZS1yYW5nZVwiLFxuXHRcImJ1dHRvbkNhbmNlbFwiOiBcImJ1dHRvbi1jYW5jZWxcIixcblx0XCJidXR0b25BcHBseVwiOiBcImJ1dHRvbi1hcHBseVwiLFxuXHRcImNvbnRhaW5lclRvb2x0aXBcIjogXCJjb250YWluZXJfX3Rvb2x0aXBcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiAkZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiAkZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gJGdldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIFJlZmxlY3RBcHBseSh0aGlzLmxpc3RlbmVyLCB0aGlzLnRhcmdldCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlcyA9IFtdO1xuICB2YXIgbmV3U3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjc3MgPSBpdGVtWzFdO1xuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl07XG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfTtcblxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBwYXJ0czogW3BhcnRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuICAgIHZhciBqID0gMDtcblxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrO1xuXG4gICAgICBmb3IgKDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgcmVmczogMSxcbiAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuYXR0cmlidXRlcyA9IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5hdHRyaWJ1dGVzIDoge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cbiAgICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgICBkb21TdHlsZS5yZWZzLS07XG4gICAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgdmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgIGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1heVJlbW92ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfZG9tU3R5bGUgPSBtYXlSZW1vdmVbX2ldO1xuXG4gICAgICBpZiAoX2RvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBfZG9tU3R5bGUucGFydHNbal0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtfZG9tU3R5bGUuaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiLi9jb3JlXCIpO1xyXG52YXIgZGF0ZXRpbWVfMSA9IHJlcXVpcmUoXCIuL2RhdGV0aW1lXCIpO1xyXG52YXIgc3R5bGUgPSByZXF1aXJlKFwiLi9zY3NzL21haW4uc2Nzc1wiKTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxudmFyIENhbGVuZGFyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKENhbGVuZGFyLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQ2FsZW5kYXIob3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKSB8fCB0aGlzO1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcbiAgICBDYWxlbmRhci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdiZWZvcmU6cmVuZGVyJywgdGhpcy51aSk7XHJcbiAgICAgICAgdmFyIG1haW5CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1haW5CbG9jay5jbGFzc05hbWUgPSBzdHlsZS5jb250YWluZXJNYWluO1xyXG4gICAgICAgIHZhciBtb250aHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtb250aHMuY2xhc3NOYW1lID0gc3R5bGUuY29udGFpbmVyTW9udGhzO1xyXG4gICAgICAgIHZhciBkZXNjQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkZXNjQmxvY2suY2xhc3NOYW1lID0gJ2NvbnRhaW5lcl9fZGVzYyc7XHJcbiAgICAgICAgbWFpbkJsb2NrLmFwcGVuZENoaWxkKGRlc2NCbG9jayk7XHJcbiAgICAgICAgaWYgKHN0eWxlW1wiY29sdW1uc1wiICsgdGhpcy5vcHRpb25zLm51bWJlck9mQ29sdW1uc10pIHtcclxuICAgICAgICAgICAgbW9udGhzLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUuY29sdW1uczIsIHN0eWxlLmNvbHVtbnMzLCBzdHlsZS5jb2x1bW5zNCk7XHJcbiAgICAgICAgICAgIG1vbnRocy5jbGFzc0xpc3QuYWRkKHN0eWxlW1wiY29sdW1uc1wiICsgdGhpcy5vcHRpb25zLm51bWJlck9mQ29sdW1uc10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNwbGl0Vmlldykge1xyXG4gICAgICAgICAgICBtb250aHMuY2xhc3NMaXN0LmFkZChzdHlsZS5zcGxpdFZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dXZWVrTnVtYmVycykge1xyXG4gICAgICAgICAgICBtb250aHMuY2xhc3NMaXN0LmFkZChzdHlsZS5zaG93V2Vla051bWJlcnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RhcnREYXRlID0gdGhpcy5jYWxlbmRhcnNbMF0uY2xvbmUoKTtcclxuICAgICAgICB2YXIgc3RhcnRNb250aElkeCA9IHN0YXJ0RGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIHZhciB0b3RhbE1vbnRocyA9IHN0YXJ0RGF0ZS5nZXRNb250aCgpICsgdGhpcy5vcHRpb25zLm51bWJlck9mTW9udGhzO1xyXG4gICAgICAgIHZhciBjYWxlbmRhcklkeCA9IDA7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItZm9yLW9mXHJcbiAgICAgICAgZm9yICh2YXIgaWR4ID0gc3RhcnRNb250aElkeDsgaWR4IDwgdG90YWxNb250aHM7IGlkeCArPSAxKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRlSXRlcmF0b3IgPSBzdGFydERhdGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgZGF0ZUl0ZXJhdG9yLnNldERhdGUoMSk7XHJcbiAgICAgICAgICAgIGRhdGVJdGVyYXRvci5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zcGxpdFZpZXcpIHtcclxuICAgICAgICAgICAgICAgIGRhdGVJdGVyYXRvciA9IHRoaXMuY2FsZW5kYXJzW2NhbGVuZGFySWR4XS5jbG9uZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGF0ZUl0ZXJhdG9yLnNldE1vbnRoKGlkeCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbW9udGhzLmFwcGVuZENoaWxkKHRoaXMucmVuZGVyTW9udGgoZGF0ZUl0ZXJhdG9yLCBjYWxlbmRhcklkeCkpO1xyXG4gICAgICAgICAgICBjYWxlbmRhcklkeCArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIG1haW5CbG9jay5hcHBlbmRDaGlsZChtb250aHMpO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVzZXRCdXR0b24pIHtcclxuICAgICAgICAgICAgdmFyIHJlc2V0QnV0dG9uID0gdm9pZCAwO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5yZXNldEJ1dHRvbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b24gPSB0aGlzLm9wdGlvbnMucmVzZXRCdXR0b24uY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XHJcbiAgICAgICAgICAgICAgICByZXNldEJ1dHRvbi5jbGFzc05hbWUgPSBzdHlsZS5yZXNldEJ1dHRvbjtcclxuICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5idXR0b25UZXh0LnJlc2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tc3RyaW5nLWxpdGVyYWxcclxuICAgICAgICAgICAgICAgIF90aGlzWydjbGVhclNlbGVjdGlvbiddKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBtYWluQmxvY2tcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGUubW9udGhJdGVtICsgXCI6bGFzdC1jaGlsZFwiKVxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZS5tb250aEl0ZW1IZWFkZXIpXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVpLmFwcGVuZENoaWxkKG1haW5CbG9jayk7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuYXV0b0FwcGx5IHx8IHRoaXMub3B0aW9ucy5mb290ZXJIVE1MKSB7XHJcbiAgICAgICAgICAgIHRoaXMudWkuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJGb290ZXIoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1Rvb2x0aXApIHtcclxuICAgICAgICAgICAgdGhpcy51aS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlclRvb2x0aXAoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudWkuZGF0YXNldC5wbHVnaW5zID0gKHRoaXMub3B0aW9ucy5wbHVnaW5zIHx8IFtdKS5qb2luKCd8Jyk7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZW5kZXInLCB0aGlzLnVpKTtcclxuICAgIH07XHJcbiAgICBDYWxlbmRhci5wcm90b3R5cGUucmVuZGVyTW9udGggPSBmdW5jdGlvbiAoZGF0ZSwgY2FsZW5kYXJJZHgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBzdGFydERhdGUgPSBkYXRlLmNsb25lKCk7XHJcbiAgICAgICAgdmFyIHRvdGFsRGF5cyA9IDMyIC0gbmV3IERhdGUoc3RhcnREYXRlLmdldEZ1bGxZZWFyKCksIHN0YXJ0RGF0ZS5nZXRNb250aCgpLCAzMikuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIHZhciBtb250aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1vbnRoLmNsYXNzTmFtZSA9IHN0eWxlLm1vbnRoSXRlbTtcclxuICAgICAgICB2YXIgbW9udGhIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtb250aEhlYWRlci5jbGFzc05hbWUgPSBzdHlsZS5tb250aEl0ZW1IZWFkZXI7XHJcbiAgICAgICAgdmFyIG1vbnRoQW5kWWVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZHJvcGRvd25zLm1vbnRocykge1xyXG4gICAgICAgICAgICB2YXIgc2VsZWN0TW9udGhzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIHNlbGVjdE1vbnRocy5jbGFzc05hbWUgPSBzdHlsZS5tb250aEl0ZW1OYW1lO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IDEyOyB4ICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIC8vIGRheSAyIGJlY2F1c2UgaU9TIGJ1ZyB3aXRoIGB0b0xvY2FsZVN0cmluZ2BcclxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93YWtpcmluL0xpdGVwaWNrZXIvaXNzdWVzLzExM1xyXG4gICAgICAgICAgICAgICAgdmFyIG1vbnRoTmFtZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgeCwgMiwgMCwgMCwgMCkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbk1vbnRoID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUobmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCB4LCAxLCAwLCAwLCAwKSk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBTdHJpbmcoeCk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IG1vbnRoTmFtZS50b0xvY2FsZVN0cmluZyh0aGlzLm9wdGlvbnMubGFuZywgeyBtb250aDogJ2xvbmcnIH0pO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLmRpc2FibGVkID0gKHRoaXMub3B0aW9ucy5taW5EYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgb3B0aW9uTW9udGguaXNCZWZvcmUobmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLm1pbkRhdGUpLCAnbW9udGgnKSlcclxuICAgICAgICAgICAgICAgICAgICB8fCAodGhpcy5vcHRpb25zLm1heERhdGUgJiYgb3B0aW9uTW9udGguaXNBZnRlcihuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMubWF4RGF0ZSksICdtb250aCcpKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IG9wdGlvbk1vbnRoLmdldE1vbnRoKCkgPT09IGRhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdE1vbnRocy5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGVjdE1vbnRocy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkeCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5zcGxpdFZpZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbW9udGhJdGVtID0gdGFyZ2V0LmNsb3Nlc3QoXCIuXCIgKyBzdHlsZS5tb250aEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlkeCA9IHV0aWxzXzEuZmluZE5lc3RlZE1vbnRoSXRlbShtb250aEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2FsZW5kYXJzW2lkeF0uc2V0TW9udGgoTnVtYmVyKHRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdjaGFuZ2U6bW9udGgnLCBfdGhpcy5jYWxlbmRhcnNbaWR4XSwgaWR4LCBlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG1vbnRoQW5kWWVhci5hcHBlbmRDaGlsZChzZWxlY3RNb250aHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIG1vbnRoTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpO1xyXG4gICAgICAgICAgICBtb250aE5hbWUuY2xhc3NOYW1lID0gc3R5bGUubW9udGhJdGVtTmFtZTtcclxuICAgICAgICAgICAgbW9udGhOYW1lLmlubmVySFRNTCA9IGRhdGUudG9Mb2NhbGVTdHJpbmcodGhpcy5vcHRpb25zLmxhbmcsIHsgbW9udGg6ICdsb25nJyB9KTtcclxuICAgICAgICAgICAgbW9udGhBbmRZZWFyLmFwcGVuZENoaWxkKG1vbnRoTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZHJvcGRvd25zLnllYXJzKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3RZZWFyc18xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIHNlbGVjdFllYXJzXzEuY2xhc3NOYW1lID0gc3R5bGUubW9udGhJdGVtWWVhcjtcclxuICAgICAgICAgICAgdmFyIG1pblllYXIgPSB0aGlzLm9wdGlvbnMuZHJvcGRvd25zLm1pblllYXI7XHJcbiAgICAgICAgICAgIHZhciBtYXhZZWFyID0gdGhpcy5vcHRpb25zLmRyb3Bkb3ducy5tYXhZZWFyXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5kcm9wZG93bnMubWF4WWVhclxyXG4gICAgICAgICAgICAgICAgOiAobmV3IERhdGUoKSkuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgaWYgKGRhdGUuZ2V0RnVsbFllYXIoKSA+IG1heFllYXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IFN0cmluZyhkYXRlLmdldEZ1bGxZZWFyKCkpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBTdHJpbmcoZGF0ZS5nZXRGdWxsWWVhcigpKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0WWVhcnNfMS5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIHggPSBtYXhZZWFyOyB4ID49IG1pblllYXI7IHggLT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvblllYXIgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShuZXcgRGF0ZSh4LCAwLCAxLCAwLCAwLCAwKSk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBTdHJpbmcoeCk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IFN0cmluZyh4KTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5kaXNhYmxlZCA9ICh0aGlzLm9wdGlvbnMubWluRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICYmIG9wdGlvblllYXIuaXNCZWZvcmUobmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLm1pbkRhdGUpLCAneWVhcicpKVxyXG4gICAgICAgICAgICAgICAgICAgIHx8ICh0aGlzLm9wdGlvbnMubWF4RGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBvcHRpb25ZZWFyLmlzQWZ0ZXIobmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLm1heERhdGUpLCAneWVhcicpKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGRhdGUuZ2V0RnVsbFllYXIoKSA9PT0geDtcclxuICAgICAgICAgICAgICAgIHNlbGVjdFllYXJzXzEuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0ZS5nZXRGdWxsWWVhcigpIDwgbWluWWVhcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gU3RyaW5nKGRhdGUuZ2V0RnVsbFllYXIoKSk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IFN0cmluZyhkYXRlLmdldEZ1bGxZZWFyKCkpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RZZWFyc18xLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kcm9wZG93bnMueWVhcnMgPT09ICdhc2MnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoc2VsZWN0WWVhcnNfMS5jaGlsZE5vZGVzKTtcclxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gY2hpbGRzLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdFllYXJzXzEuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHkpIHtcclxuICAgICAgICAgICAgICAgICAgICB5LmlubmVySFRNTCA9IHkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0WWVhcnNfMS5hcHBlbmRDaGlsZCh5KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGVjdFllYXJzXzEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgICAgIHZhciBpZHggPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuc3BsaXRWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vbnRoSXRlbSA9IHRhcmdldC5jbG9zZXN0KFwiLlwiICsgc3R5bGUubW9udGhJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBpZHggPSB1dGlsc18xLmZpbmROZXN0ZWRNb250aEl0ZW0obW9udGhJdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF90aGlzLmNhbGVuZGFyc1tpZHhdLnNldEZ1bGxZZWFyKE51bWJlcih0YXJnZXQudmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnY2hhbmdlOnllYXInLCBfdGhpcy5jYWxlbmRhcnNbaWR4XSwgaWR4LCBlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG1vbnRoQW5kWWVhci5hcHBlbmRDaGlsZChzZWxlY3RZZWFyc18xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBtb250aFllYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIG1vbnRoWWVhci5jbGFzc05hbWUgPSBzdHlsZS5tb250aEl0ZW1ZZWFyO1xyXG4gICAgICAgICAgICBtb250aFllYXIuaW5uZXJIVE1MID0gU3RyaW5nKGRhdGUuZ2V0RnVsbFllYXIoKSk7XHJcbiAgICAgICAgICAgIG1vbnRoQW5kWWVhci5hcHBlbmRDaGlsZChtb250aFllYXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcHJldmlvdXNNb250aEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHByZXZpb3VzTW9udGhCdXR0b24udHlwZSA9ICdidXR0b24nO1xyXG4gICAgICAgIHByZXZpb3VzTW9udGhCdXR0b24uY2xhc3NOYW1lID0gc3R5bGUuYnV0dG9uUHJldmlvdXNNb250aDtcclxuICAgICAgICBwcmV2aW91c01vbnRoQnV0dG9uLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5idXR0b25UZXh0LnByZXZpb3VzTW9udGg7XHJcbiAgICAgICAgdmFyIG5leHRNb250aEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIG5leHRNb250aEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XHJcbiAgICAgICAgbmV4dE1vbnRoQnV0dG9uLmNsYXNzTmFtZSA9IHN0eWxlLmJ1dHRvbk5leHRNb250aDtcclxuICAgICAgICBuZXh0TW9udGhCdXR0b24uaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLmJ1dHRvblRleHQubmV4dE1vbnRoO1xyXG4gICAgICAgIG1vbnRoSGVhZGVyLmFwcGVuZENoaWxkKHByZXZpb3VzTW9udGhCdXR0b24pO1xyXG4gICAgICAgIG1vbnRoSGVhZGVyLmFwcGVuZENoaWxkKG1vbnRoQW5kWWVhcik7XHJcbiAgICAgICAgbW9udGhIZWFkZXIuYXBwZW5kQ2hpbGQobmV4dE1vbnRoQnV0dG9uKTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1pbkRhdGVcclxuICAgICAgICAgICAgJiYgc3RhcnREYXRlLmlzU2FtZU9yQmVmb3JlKG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHRoaXMub3B0aW9ucy5taW5EYXRlKSwgJ21vbnRoJykpIHtcclxuICAgICAgICAgICAgbW9udGguY2xhc3NMaXN0LmFkZChzdHlsZS5ub1ByZXZpb3VzTW9udGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1heERhdGVcclxuICAgICAgICAgICAgJiYgc3RhcnREYXRlLmlzU2FtZU9yQWZ0ZXIobmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLm1heERhdGUpLCAnbW9udGgnKSkge1xyXG4gICAgICAgICAgICBtb250aC5jbGFzc0xpc3QuYWRkKHN0eWxlLm5vTmV4dE1vbnRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHdlZWtkYXlzUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgd2Vla2RheXNSb3cuY2xhc3NOYW1lID0gc3R5bGUubW9udGhJdGVtV2Vla2RheXNSb3c7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93V2Vla051bWJlcnMpIHtcclxuICAgICAgICAgICAgd2Vla2RheXNSb3cuaW5uZXJIVE1MID0gJzxkaXY+VzwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIHcgPSAxOyB3IDw9IDc7IHcgKz0gMSkge1xyXG4gICAgICAgICAgICAvLyA3IGRheXMsIDQgaXMgwqtUaHVyc2RhecK7IChuZXcgRGF0ZSgxOTcwLCAwLCAxLCAxMiwgMCwgMCwgMCkpXHJcbiAgICAgICAgICAgIHZhciBkYXlJZHggPSA3IC0gNCArIHRoaXMub3B0aW9ucy5maXJzdERheSArIHc7XHJcbiAgICAgICAgICAgIHZhciB3ZWVrZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHdlZWtkYXkuaW5uZXJIVE1MID0gdGhpcy53ZWVrZGF5TmFtZShkYXlJZHgpO1xyXG4gICAgICAgICAgICB3ZWVrZGF5LnRpdGxlID0gdGhpcy53ZWVrZGF5TmFtZShkYXlJZHgsICdsb25nJyk7XHJcbiAgICAgICAgICAgIHdlZWtkYXlzUm93LmFwcGVuZENoaWxkKHdlZWtkYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRheXMuY2xhc3NOYW1lID0gc3R5bGUuY29udGFpbmVyRGF5cztcclxuICAgICAgICB2YXIgc2tpcERheXMgPSB0aGlzLmNhbGNTa2lwRGF5cyhzdGFydERhdGUpO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1dlZWtOdW1iZXJzICYmIHNraXBEYXlzKSB7XHJcbiAgICAgICAgICAgIGRheXMuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJXZWVrTnVtYmVyKHN0YXJ0RGF0ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBza2lwRGF5czsgaWR4ICs9IDEpIHtcclxuICAgICAgICAgICAgdmFyIGR1bW15ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRheXMuYXBwZW5kQ2hpbGQoZHVtbXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcclxuICAgICAgICBmb3IgKHZhciBpZHggPSAxOyBpZHggPD0gdG90YWxEYXlzOyBpZHggKz0gMSkge1xyXG4gICAgICAgICAgICBzdGFydERhdGUuc2V0RGF0ZShpZHgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dXZWVrTnVtYmVycyAmJiBzdGFydERhdGUuZ2V0RGF5KCkgPT09IHRoaXMub3B0aW9ucy5maXJzdERheSkge1xyXG4gICAgICAgICAgICAgICAgZGF5cy5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcldlZWtOdW1iZXIoc3RhcnREYXRlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGF5cy5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlckRheShzdGFydERhdGUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbW9udGguYXBwZW5kQ2hpbGQobW9udGhIZWFkZXIpO1xyXG4gICAgICAgIG1vbnRoLmFwcGVuZENoaWxkKHdlZWtkYXlzUm93KTtcclxuICAgICAgICBtb250aC5hcHBlbmRDaGlsZChkYXlzKTtcclxuICAgICAgICB0aGlzLmVtaXQoJ3JlbmRlcjptb250aCcsIG1vbnRoLCBkYXRlKTtcclxuICAgICAgICByZXR1cm4gbW9udGg7XHJcbiAgICB9O1xyXG4gICAgQ2FsZW5kYXIucHJvdG90eXBlLnJlbmRlckRheSA9IGZ1bmN0aW9uIChkYXRlKSB7XHJcbiAgICAgICAgZGF0ZS5zZXRIb3VycygpO1xyXG4gICAgICAgIHZhciBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkYXkuY2xhc3NOYW1lID0gc3R5bGUuZGF5SXRlbTtcclxuICAgICAgICBkYXkuaW5uZXJIVE1MID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKTtcclxuICAgICAgICBkYXkuZGF0YXNldC50aW1lID0gU3RyaW5nKGRhdGUuZ2V0VGltZSgpKTtcclxuICAgICAgICBpZiAoZGF0ZS50b0RhdGVTdHJpbmcoKSA9PT0gKG5ldyBEYXRlKCkpLnRvRGF0ZVN0cmluZygpKSB7XHJcbiAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzVG9kYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXRlUGlja2VkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRlUGlja2VkWzBdLnRvRGF0ZVN0cmluZygpID09PSBkYXRlLnRvRGF0ZVN0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc1N0YXJ0RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNpbmdsZU1vZGUgfHwgdGhpcy5pbnB1dFR5cGUgPT09ICdkZXBhcnR1cmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNFbmREYXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMlxyXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5kYXRlUGlja2VkWzFdLnRvRGF0ZVN0cmluZygpID09PSBkYXRlLnRvRGF0ZVN0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0VuZERhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZS5pc0JldHdlZW4odGhpcy5kYXRlUGlja2VkWzBdLCB0aGlzLmRhdGVQaWNrZWRbMV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNJblJhbmdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLm9wdGlvbnMuc3RhcnREYXRlKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGFydERhdGUgPSB0aGlzLm9wdGlvbnMuc3RhcnREYXRlO1xyXG4gICAgICAgICAgICB2YXIgZW5kRGF0ZSA9IHRoaXMub3B0aW9ucy5lbmREYXRlO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnREYXRlLnRvRGF0ZVN0cmluZygpID09PSBkYXRlLnRvRGF0ZVN0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc1N0YXJ0RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNpbmdsZU1vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0VuZERhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbmREYXRlICYmIGVuZERhdGUudG9EYXRlU3RyaW5nKCkgPT09IGRhdGUudG9EYXRlU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzRW5kRGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZS5pc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzSW5SYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5taW5EYXRlICYmIGRhdGUuaXNCZWZvcmUobmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLm1pbkRhdGUpKSkge1xyXG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0xvY2tlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWF4RGF0ZSAmJiBkYXRlLmlzQWZ0ZXIobmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLm1heERhdGUpKSkge1xyXG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0xvY2tlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWluRGF5cyA+IDFcclxuICAgICAgICAgICAgJiYgdGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB2YXIgbWluRGF5cyA9IHRoaXMub3B0aW9ucy5taW5EYXlzIC0gMTsgLy8gc3VidHJhY3Qgc2VsZWN0ZWQgZGF5XHJcbiAgICAgICAgICAgIHZhciBsZWZ0ID0gdGhpcy5kYXRlUGlja2VkWzBdLmNsb25lKCkuc3VidHJhY3QobWluRGF5cywgJ2RheScpO1xyXG4gICAgICAgICAgICB2YXIgcmlnaHQgPSB0aGlzLmRhdGVQaWNrZWRbMF0uY2xvbmUoKS5hZGQobWluRGF5cywgJ2RheScpO1xyXG4gICAgICAgICAgICBpZiAoZGF0ZS5pc0JldHdlZW4obGVmdCwgdGhpcy5kYXRlUGlja2VkWzBdLCAnKF0nKSkge1xyXG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNMb2NrZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYXRlLmlzQmV0d2Vlbih0aGlzLmRhdGVQaWNrZWRbMF0sIHJpZ2h0LCAnWyknKSkge1xyXG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNMb2NrZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWF4RGF5c1xyXG4gICAgICAgICAgICAmJiB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXhEYXlzID0gdGhpcy5vcHRpb25zLm1heERheXM7XHJcbiAgICAgICAgICAgIHZhciBsZWZ0ID0gdGhpcy5kYXRlUGlja2VkWzBdLmNsb25lKCkuc3VidHJhY3QobWF4RGF5cywgJ2RheScpO1xyXG4gICAgICAgICAgICB2YXIgcmlnaHQgPSB0aGlzLmRhdGVQaWNrZWRbMF0uY2xvbmUoKS5hZGQobWF4RGF5cywgJ2RheScpO1xyXG4gICAgICAgICAgICBpZiAoZGF0ZS5pc1NhbWVPckJlZm9yZShsZWZ0KSkge1xyXG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNMb2NrZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYXRlLmlzU2FtZU9yQWZ0ZXIocmlnaHQpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0xvY2tlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3RGb3J3YXJkXHJcbiAgICAgICAgICAgICYmIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDFcclxuICAgICAgICAgICAgJiYgZGF0ZS5pc0JlZm9yZSh0aGlzLmRhdGVQaWNrZWRbMF0pKSB7XHJcbiAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzTG9ja2VkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3RCYWNrd2FyZFxyXG4gICAgICAgICAgICAmJiB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAxXHJcbiAgICAgICAgICAgICYmIGRhdGUuaXNBZnRlcih0aGlzLmRhdGVQaWNrZWRbMF0pKSB7XHJcbiAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzTG9ja2VkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGxvY2tlZCA9IHV0aWxzXzEuZGF0ZUlzTG9ja2VkKGRhdGUsIHRoaXMub3B0aW9ucywgdGhpcy5kYXRlUGlja2VkKTtcclxuICAgICAgICBpZiAobG9ja2VkKSB7XHJcbiAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzTG9ja2VkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBpc0hpZ2hsaWdodGVkID0gdGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5c1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmlzQmV0d2VlbihkWzBdLCBkWzFdLCAnW10nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBkLmlzU2FtZShkYXRlLCAnZGF5Jyk7XHJcbiAgICAgICAgICAgIH0pLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKGlzSGlnaGxpZ2h0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzSGlnaGxpZ2h0ZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZpeCBidWcgaU9TIDEwLTEyIC0gaHR0cHM6Ly9naXRodWIuY29tL3dha2lyaW4vTGl0ZXBpY2tlci9pc3N1ZXMvMTI0XHJcbiAgICAgICAgZGF5LnRhYkluZGV4ID0gIWRheS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWxvY2tlZCcpID8gMCA6IC0xO1xyXG4gICAgICAgIHRoaXMuZW1pdCgncmVuZGVyOmRheScsIGRheSwgZGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIGRheTtcclxuICAgIH07XHJcbiAgICBDYWxlbmRhci5wcm90b3R5cGUucmVuZGVyRm9vdGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmb290ZXIuY2xhc3NOYW1lID0gc3R5bGUuY29udGFpbmVyRm9vdGVyO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZm9vdGVySFRNTCkge1xyXG4gICAgICAgICAgICBmb290ZXIuaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLmZvb3RlckhUTUw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb290ZXIuaW5uZXJIVE1MID0gXCJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiXCIgKyBzdHlsZS5wcmV2aWV3RGF0ZVJhbmdlICsgXCJcXFwiPjwvc3Bhbj5cXG4gICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIlwiICsgc3R5bGUuYnV0dG9uQ2FuY2VsICsgXCJcXFwiPlwiICsgdGhpcy5vcHRpb25zLmJ1dHRvblRleHQuY2FuY2VsICsgXCI8L2J1dHRvbj5cXG4gICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIlwiICsgc3R5bGUuYnV0dG9uQXBwbHkgKyBcIlxcXCI+XCIgKyB0aGlzLm9wdGlvbnMuYnV0dG9uVGV4dC5hcHBseSArIFwiPC9idXR0b24+XFxuICAgICAgXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRlUGlja2VkLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0VmFsdWUgPSB0aGlzLmRhdGVQaWNrZWRbMF0uZm9ybWF0KHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcclxuICAgICAgICAgICAgICAgIGZvb3Rlci5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGUucHJldmlld0RhdGVSYW5nZSkuaW5uZXJIVE1MID0gc3RhcnRWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGZvb3Rlci5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGUuYnV0dG9uQXBwbHkpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGFydFZhbHVlID0gdGhpcy5kYXRlUGlja2VkWzBdLmZvcm1hdCh0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW5kVmFsdWUgPSB0aGlzLmRhdGVQaWNrZWRbMV0uZm9ybWF0KHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcclxuICAgICAgICAgICAgICAgIGZvb3Rlci5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGUucHJldmlld0RhdGVSYW5nZSlcclxuICAgICAgICAgICAgICAgICAgICAuaW5uZXJIVE1MID0gXCJcIiArIHN0YXJ0VmFsdWUgKyB0aGlzLm9wdGlvbnMuZGVsaW1pdGVyICsgZW5kVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbWl0KCdyZW5kZXI6Zm9vdGVyJywgZm9vdGVyKTtcclxuICAgICAgICByZXR1cm4gZm9vdGVyO1xyXG4gICAgfTtcclxuICAgIENhbGVuZGFyLnByb3RvdHlwZS5yZW5kZXJXZWVrTnVtYmVyID0gZnVuY3Rpb24gKGRhdGUpIHtcclxuICAgICAgICB2YXIgd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB2YXIgd2VlayA9IGRhdGUuZ2V0V2Vlayh0aGlzLm9wdGlvbnMuZmlyc3REYXkpO1xyXG4gICAgICAgIHduLmNsYXNzTmFtZSA9IHN0eWxlLndlZWtOdW1iZXI7XHJcbiAgICAgICAgd24uaW5uZXJIVE1MID0gd2VlayA9PT0gNTMgJiYgZGF0ZS5nZXRNb250aCgpID09PSAwID8gJzUzIC8gMScgOiB3ZWVrO1xyXG4gICAgICAgIHJldHVybiB3bjtcclxuICAgIH07XHJcbiAgICBDYWxlbmRhci5wcm90b3R5cGUucmVuZGVyVG9vbHRpcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHQuY2xhc3NOYW1lID0gc3R5bGUuY29udGFpbmVyVG9vbHRpcDtcclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICBDYWxlbmRhci5wcm90b3R5cGUud2Vla2RheU5hbWUgPSBmdW5jdGlvbiAoZGF5LCByZXByZXNlbnRhdGlvbikge1xyXG4gICAgICAgIGlmIChyZXByZXNlbnRhdGlvbiA9PT0gdm9pZCAwKSB7IHJlcHJlc2VudGF0aW9uID0gJ3Nob3J0JzsgfVxyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgxOTcwLCAwLCBkYXksIDEyLCAwLCAwLCAwKVxyXG4gICAgICAgICAgICAudG9Mb2NhbGVTdHJpbmcodGhpcy5vcHRpb25zLmxhbmcsIHsgd2Vla2RheTogcmVwcmVzZW50YXRpb24gfSk7XHJcbiAgICB9O1xyXG4gICAgQ2FsZW5kYXIucHJvdG90eXBlLmNhbGNTa2lwRGF5cyA9IGZ1bmN0aW9uIChkYXRlKSB7XHJcbiAgICAgICAgdmFyIHRvdGFsID0gZGF0ZS5nZXREYXkoKSAtIHRoaXMub3B0aW9ucy5maXJzdERheTtcclxuICAgICAgICBpZiAodG90YWwgPCAwKVxyXG4gICAgICAgICAgICB0b3RhbCArPSA3O1xyXG4gICAgICAgIHJldHVybiB0b3RhbDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2FsZW5kYXI7XHJcbn0oY29yZV8xLkxQQ29yZSkpO1xyXG5leHBvcnRzLkNhbGVuZGFyID0gQ2FsZW5kYXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBldmVudHNfMSA9IHJlcXVpcmUoXCJldmVudHNcIik7XHJcbnZhciBkYXRldGltZV8xID0gcmVxdWlyZShcIi4vZGF0ZXRpbWVcIik7XHJcbnZhciBsaXRlcGlja2VyXzEgPSByZXF1aXJlKFwiLi9saXRlcGlja2VyXCIpO1xyXG52YXIgTFBDb3JlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKExQQ29yZSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIExQQ29yZShvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5kYXRlUGlja2VkID0gW107XHJcbiAgICAgICAgX3RoaXMuY2FsZW5kYXJzID0gW107XHJcbiAgICAgICAgX3RoaXMucGFyZW50VWkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtb3JkZXItZGF0ZScpO1xyXG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IG51bGwsXHJcbiAgICAgICAgICAgIGVsZW1lbnRFbmQ6IG51bGwsXHJcbiAgICAgICAgICAgIHBhcmVudEVsOiBudWxsLFxyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xyXG4gICAgICAgICAgICBmaXJzdERheTogMSxcclxuICAgICAgICAgICAgZm9ybWF0OiAnWVlZWS1NTS1ERCcsXHJcbiAgICAgICAgICAgIGxhbmc6ICdlbi1VUycsXHJcbiAgICAgICAgICAgIGRlbGltaXRlcjogJyAtICcsXHJcbiAgICAgICAgICAgIG51bWJlck9mTW9udGhzOiAxLFxyXG4gICAgICAgICAgICBudW1iZXJPZkNvbHVtbnM6IDEsXHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbnVsbCxcclxuICAgICAgICAgICAgZW5kRGF0ZTogbnVsbCxcclxuICAgICAgICAgICAgekluZGV4OiA5OTk5LFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2F1dG8nLFxyXG4gICAgICAgICAgICBzZWxlY3RGb3J3YXJkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2VsZWN0QmFja3dhcmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzcGxpdFZpZXc6IGZhbHNlLFxyXG4gICAgICAgICAgICBpbmxpbmVNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2luZ2xlTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b0FwcGx5OiB0cnVlLFxyXG4gICAgICAgICAgICBhbGxvd1JlcGljazogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dXZWVrTnVtYmVyczogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dUb29sdGlwOiB0cnVlLFxyXG4gICAgICAgICAgICBzY3JvbGxUb0RhdGU6IHRydWUsXHJcbiAgICAgICAgICAgIG1vYmlsZUZyaWVuZGx5OiB0cnVlLFxyXG4gICAgICAgICAgICByZXNldEJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dG9SZWZyZXNoOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9ja0RheXNGb3JtYXQ6ICdZWVlZLU1NLUREJyxcclxuICAgICAgICAgICAgbG9ja0RheXM6IFtdLFxyXG4gICAgICAgICAgICBkaXNhbGxvd0xvY2tEYXlzSW5SYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvY2tEYXlzSW5jbHVzaXZpdHk6ICdbXScsXHJcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkRGF5c0Zvcm1hdDogJ1lZWVktTU0tREQnLFxyXG4gICAgICAgICAgICBoaWdobGlnaHRlZERheXM6IFtdLFxyXG4gICAgICAgICAgICBkcm9wZG93bnM6IHtcclxuICAgICAgICAgICAgICAgIG1pblllYXI6IDE5OTAsXHJcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xyXG4gICAgICAgICAgICAgICAgbWF4WWVhcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIG1vbnRoczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB5ZWFyczogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IHtcclxuICAgICAgICAgICAgICAgIGFwcGx5OiAnQXBwbHknLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJyxcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzTW9udGg6ICc8c3ZnIHdpZHRoPVwiMTFcIiBoZWlnaHQ9XCIxNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTcuOTE5IDBsMi43NDggMi42NjdMNS4zMzMgOGw1LjMzNCA1LjMzM0w3LjkxOSAxNiAwIDh6XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiLz48L3N2Zz4nLFxyXG4gICAgICAgICAgICAgICAgbmV4dE1vbnRoOiAnPHN2ZyB3aWR0aD1cIjExXCIgaGVpZ2h0PVwiMTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0yLjc0OCAxNkwwIDEzLjMzMyA1LjMzMyA4IDAgMi42NjcgMi43NDggMGw3LjkxOSA4elwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIi8+PC9zdmc+JyxcclxuICAgICAgICAgICAgICAgIHJlc2V0OiBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHdpZHRoPVxcXCIyNFxcXCI+XFxuICAgICAgICA8cGF0aCBkPVxcXCJNMCAwaDI0djI0SDB6XFxcIiBmaWxsPVxcXCJub25lXFxcIi8+XFxuICAgICAgICA8cGF0aCBkPVxcXCJNMTMgM2MtNC45NyAwLTkgNC4wMy05IDlIMWwzLjg5IDMuODkuMDcuMTRMOSAxMkg2YzAtMy44NyAzLjEzLTcgNy03czcgMy4xMyA3IDctMy4xMyA3LTcgN2MtMS45MyAwLTMuNjgtLjc5LTQuOTQtMi4wNmwtMS40MiAxLjQyQzguMjcgMTkuOTkgMTAuNTEgMjEgMTMgMjFjNC45NyAwIDktNC4wMyA5LTlzLTQuMDMtOS05LTl6bS0xIDV2NWw0LjI4IDIuNTQuNzItMS4yMS0zLjUtMi4wOFY4SDEyelxcXCIvPlxcbiAgICAgIDwvc3ZnPlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwVGV4dDoge1xyXG4gICAgICAgICAgICAgICAgb25lOiAnZGF5JyxcclxuICAgICAgICAgICAgICAgIG90aGVyOiAnZGF5cycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgICBfdGhpcy5vcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIF90aGlzLm9wdGlvbnMpLCBvcHRpb25zLmVsZW1lbnQuZGF0YXNldCk7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoX3RoaXMub3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAob3B0KSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zW29wdF0gPT09ICd0cnVlJyB8fCBfdGhpcy5vcHRpb25zW29wdF0gPT09ICdmYWxzZScpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm9wdGlvbnNbb3B0XSA9IF90aGlzLm9wdGlvbnNbb3B0XSA9PT0gJ3RydWUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGRyb3Bkb3ducyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBfdGhpcy5vcHRpb25zLmRyb3Bkb3ducyksIG9wdGlvbnMuZHJvcGRvd25zKTtcclxuICAgICAgICB2YXIgYnV0dG9uVGV4dCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBfdGhpcy5vcHRpb25zLmJ1dHRvblRleHQpLCBvcHRpb25zLmJ1dHRvblRleHQpO1xyXG4gICAgICAgIHZhciB0b29sdGlwVGV4dCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBfdGhpcy5vcHRpb25zLnRvb2x0aXBUZXh0KSwgb3B0aW9ucy50b29sdGlwVGV4dCk7XHJcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBfdGhpcy5vcHRpb25zKSwgb3B0aW9ucyk7XHJcbiAgICAgICAgX3RoaXMub3B0aW9ucy5kcm9wZG93bnMgPSBfX2Fzc2lnbih7fSwgZHJvcGRvd25zKTtcclxuICAgICAgICBfdGhpcy5vcHRpb25zLmJ1dHRvblRleHQgPSBfX2Fzc2lnbih7fSwgYnV0dG9uVGV4dCk7XHJcbiAgICAgICAgX3RoaXMub3B0aW9ucy50b29sdGlwVGV4dCA9IF9fYXNzaWduKHt9LCB0b29sdGlwVGV4dCk7XHJcbiAgICAgICAgaWYgKCFfdGhpcy5vcHRpb25zLmVsZW1lbnRFbmQpIHtcclxuICAgICAgICAgICAgX3RoaXMub3B0aW9ucy5hbGxvd1JlcGljayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5sb2NrRGF5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgX3RoaXMub3B0aW9ucy5sb2NrRGF5cyA9IGRhdGV0aW1lXzEuRGF0ZVRpbWUuY29udmVydEFycmF5KF90aGlzLm9wdGlvbnMubG9ja0RheXMsIF90aGlzLm9wdGlvbnMubG9ja0RheXNGb3JtYXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzID0gZGF0ZXRpbWVfMS5EYXRlVGltZS5jb252ZXJ0QXJyYXkoX3RoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXMsIF90aGlzLm9wdGlvbnMuaGlnaGxpZ2h0ZWREYXlzRm9ybWF0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF9hID0gX3RoaXMucGFyc2VJbnB1dCgpLCBzdGFydFZhbHVlID0gX2FbMF0sIGVuZFZhbHVlID0gX2FbMV07XHJcbiAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuc3RhcnREYXRlKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnNpbmdsZU1vZGUgfHwgX3RoaXMub3B0aW9ucy5lbmREYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydFZhbHVlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoX3RoaXMub3B0aW9ucy5zdGFydERhdGUsIF90aGlzLm9wdGlvbnMuZm9ybWF0LCBfdGhpcy5vcHRpb25zLmxhbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGFydFZhbHVlICYmIF90aGlzLm9wdGlvbnMuZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICBlbmRWYWx1ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKF90aGlzLm9wdGlvbnMuZW5kRGF0ZSwgX3RoaXMub3B0aW9ucy5mb3JtYXQsIF90aGlzLm9wdGlvbnMubGFuZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGFydFZhbHVlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZSAmJiAhaXNOYU4oc3RhcnRWYWx1ZS5nZXRUaW1lKCkpKSB7XHJcbiAgICAgICAgICAgIF90aGlzLm9wdGlvbnMuc3RhcnREYXRlID0gc3RhcnRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuc3RhcnREYXRlICYmIGVuZFZhbHVlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZSAmJiAhaXNOYU4oZW5kVmFsdWUuZ2V0VGltZSgpKSkge1xyXG4gICAgICAgICAgICBfdGhpcy5vcHRpb25zLmVuZERhdGUgPSBlbmRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSAmJiAhKF90aGlzLm9wdGlvbnMuc3RhcnREYXRlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZSkpIHtcclxuICAgICAgICAgICAgX3RoaXMub3B0aW9ucy5zdGFydERhdGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIV90aGlzLm9wdGlvbnMuc2luZ2xlTW9kZVxyXG4gICAgICAgICAgICAmJiAoIShfdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWUpXHJcbiAgICAgICAgICAgICAgICB8fCAhKF90aGlzLm9wdGlvbnMuZW5kRGF0ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWUpKSkge1xyXG4gICAgICAgICAgICBfdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIF90aGlzLm9wdGlvbnMuZW5kRGF0ZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IF90aGlzLm9wdGlvbnMubnVtYmVyT2ZNb250aHM7IGlkeCArPSAxKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRlID0gX3RoaXMub3B0aW9ucy5zdGFydERhdGUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lXHJcbiAgICAgICAgICAgICAgICA/IF90aGlzLm9wdGlvbnMuc3RhcnREYXRlLmNsb25lKClcclxuICAgICAgICAgICAgICAgIDogbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoKTtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSAmJiAoaWR4ID09PSAwIHx8IF90aGlzLm9wdGlvbnMuc3BsaXRWaWV3KSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heERhdGUgPSBfdGhpcy5vcHRpb25zLm1heERhdGUgPyBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShfdGhpcy5vcHRpb25zLm1heERhdGUpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciBtaW5EYXRlID0gX3RoaXMub3B0aW9ucy5taW5EYXRlID8gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoX3RoaXMub3B0aW9ucy5taW5EYXRlKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0TW9udGhzID0gX3RoaXMub3B0aW9ucy5udW1iZXJPZk1vbnRocyAtIDE7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNEYXRlUmFuZ2UgPSBtaW5EYXRlICYmIG1heERhdGUgJiYgZGF0ZS5pc0FmdGVyKG1heERhdGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzRGF0ZVJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IG1pbkRhdGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlLnNldERhdGUoMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICghbWluRGF0ZSAmJiBtYXhEYXRlICYmIGRhdGUuaXNBZnRlcihtYXhEYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGUgPSBtYXhEYXRlLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpIC0gb2Zmc2V0TW9udGhzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkYXRlLnNldERhdGUoMSk7XHJcbiAgICAgICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgaWR4KTtcclxuICAgICAgICAgICAgX3RoaXMuY2FsZW5kYXJzW2lkeF0gPSBkYXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5zaG93VG9vbHRpcCkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy50b29sdGlwUGx1cmFsU2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnBsdXJhbFNlbGVjdG9yID0gX3RoaXMub3B0aW9ucy50b29sdGlwUGx1cmFsU2VsZWN0b3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwbHVyYWxSdWxlcyA9IG5ldyBJbnRsLlBsdXJhbFJ1bGVzKF90aGlzLm9wdGlvbnMubGFuZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucGx1cmFsU2VsZWN0b3IgPSBwbHVyYWxSdWxlcy5zZWxlY3QuYmluZChwbHVyYWxSdWxlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoX2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBsdXJhbFNlbGVjdG9yID0gZnVuY3Rpb24gKGFyZzApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGFyZzApID09PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdvbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ290aGVyJztcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIExQQ29yZS5hZGQgPSBmdW5jdGlvbiAobmFtZSwgZGF0YSkge1xyXG4gICAgICAgIGxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZVtuYW1lXSA9IGRhdGE7XHJcbiAgICB9O1xyXG4gICAgTFBDb3JlLnByb3RvdHlwZS5zZXRTaW5nbGVNb2RlID0gZnVuY3Rpb24gKG1vZGUpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSA9IG1vZGU7XHJcbiAgICB9O1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBmdW5jdGlvbi1uYW1lXHJcbiAgICBMUENvcmUucHJvdG90eXBlLkRhdGVUaW1lID0gZnVuY3Rpb24gKGRhdGUsIGZvcm1hdCkge1xyXG4gICAgICAgIGlmIChkYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShkYXRlLCBmb3JtYXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoKTtcclxuICAgIH07XHJcbiAgICBMUENvcmUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBsdWdpbnMgJiYgdGhpcy5vcHRpb25zLnBsdWdpbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShwbHVnaW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlW3BsdWdpbl0uaW5pdC5jYWxsKF90aGlzLCBfdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJMaXRlcGlja2VyOiBwbHVnaW4gXFx1MDBBQlwiICsgcGx1Z2luICsgXCJcXHUwMEJCIG5vdCBmb3VuZC5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMUENvcmUucHJvdG90eXBlLnBhcnNlSW5wdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGRlbGltaXRlciA9IHRoaXMub3B0aW9ucy5kZWxpbWl0ZXI7XHJcbiAgICAgICAgdmFyIGRlbGltaXRlclJlZ2V4ID0gbmV3IFJlZ0V4cChcIlwiICsgZGVsaW1pdGVyKTtcclxuICAgICAgICB2YXIgc3BsaXR0ZWRWYWx1ZSA9IHRoaXMub3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudFxyXG4gICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlLnNwbGl0KGRlbGltaXRlcilcclxuICAgICAgICAgICAgOiBbXTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnRFbmQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWUubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAmJiB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICAgICAgICAgICAgICYmIHRoaXMub3B0aW9ucy5lbGVtZW50RW5kLnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCksXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLmVsZW1lbnRFbmQudmFsdWUsIHRoaXMub3B0aW9ucy5mb3JtYXQpLFxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAmJiB0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUodGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWUsIHRoaXMub3B0aW9ucy5mb3JtYXQpLFxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICAgICAgICAgJiYgZGVsaW1pdGVyUmVnZXgudGVzdCh0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZSlcclxuICAgICAgICAgICAgJiYgc3BsaXR0ZWRWYWx1ZS5sZW5ndGhcclxuICAgICAgICAgICAgJiYgc3BsaXR0ZWRWYWx1ZS5sZW5ndGggJSAyID09PSAwKSB7XHJcbiAgICAgICAgICAgIHZhciBkMSA9IHNwbGl0dGVkVmFsdWUuc2xpY2UoMCwgc3BsaXR0ZWRWYWx1ZS5sZW5ndGggLyAyKS5qb2luKGRlbGltaXRlcik7XHJcbiAgICAgICAgICAgIHZhciBkMiA9IHNwbGl0dGVkVmFsdWUuc2xpY2Uoc3BsaXR0ZWRWYWx1ZS5sZW5ndGggLyAyKS5qb2luKGRlbGltaXRlcik7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShkMSwgdGhpcy5vcHRpb25zLmZvcm1hdCksXHJcbiAgICAgICAgICAgICAgICBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShkMiwgdGhpcy5vcHRpb25zLmZvcm1hdCksXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH07XHJcbiAgICBMUENvcmUucHJvdG90eXBlLmlzU2hvd25pbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudWkgJiYgdGhpcy51aS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZSc7XHJcbiAgICB9O1xyXG4gICAgTFBDb3JlLnByb3RvdHlwZS5maW5kUG9zaXRpb24gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIC8vIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5wYXJlbnRVaS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB2YXIgY2FsUmVjdCA9IHRoaXMudWkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgdmFyIG9yaWVudGF0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgdmFyIHNjcm9sbFggPSB3aW5kb3cuc2Nyb2xsWCB8fCB3aW5kb3cucGFnZVhPZmZzZXQ7XHJcbiAgICAgICAgdmFyIHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgdmFyIHRvcCA9IDA7XHJcbiAgICAgICAgdmFyIGxlZnQgPSAwO1xyXG4gICAgICAgIGlmIChvcmllbnRhdGlvblswXSA9PT0gJ2F1dG8nIHx8ICEoL3RvcHxib3R0b20vLnRlc3Qob3JpZW50YXRpb25bMF0pKSkge1xyXG4gICAgICAgICAgICB0b3AgPSByZWN0LmJvdHRvbSArIHNjcm9sbFk7XHJcbiAgICAgICAgICAgIHZhciBpc091dEJvdW5kcyA9IHJlY3QuYm90dG9tICsgY2FsUmVjdC5oZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgIHZhciBoYXNUb3BTcGFjZSA9IChyZWN0LnRvcCArIHNjcm9sbFkpIC0gY2FsUmVjdC5oZWlnaHQgPj0gY2FsUmVjdC5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGlmIChpc091dEJvdW5kcyAmJiBoYXNUb3BTcGFjZSkge1xyXG4gICAgICAgICAgICAgICAgdG9wID0gKHJlY3QudG9wICsgc2Nyb2xsWSkgLSBjYWxSZWN0LmhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdG9wID0gcmVjdFtvcmllbnRhdGlvblswXV0gKyBzY3JvbGxZO1xyXG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb25bMF0gPT09ICd0b3AnKSB7XHJcbiAgICAgICAgICAgICAgICB0b3AgLT0gY2FsUmVjdC5oZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEoL2xlZnR8cmlnaHQvLnRlc3Qob3JpZW50YXRpb25bMF0pKSAmJiAoIW9yaWVudGF0aW9uWzFdIHx8IG9yaWVudGF0aW9uWzFdID09PSAnYXV0bycgfHwgISgvbGVmdHxyaWdodC8udGVzdChvcmllbnRhdGlvblsxXSkpKSkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gcmVjdC5sZWZ0ICsgc2Nyb2xsWDtcclxuICAgICAgICAgICAgdmFyIGlzT3V0Qm91bmRzID0gcmVjdC5sZWZ0ICsgY2FsUmVjdC53aWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgICAgICB2YXIgaGFzTGVmdFNwYWNlID0gKHJlY3QucmlnaHQgKyBzY3JvbGxYKSAtIGNhbFJlY3Qud2lkdGggPj0gMDtcclxuICAgICAgICAgICAgaWYgKGlzT3V0Qm91bmRzICYmIGhhc0xlZnRTcGFjZSkge1xyXG4gICAgICAgICAgICAgICAgbGVmdCA9IChyZWN0LnJpZ2h0ICsgc2Nyb2xsWCkgLSBjYWxSZWN0LndpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoL2xlZnR8cmlnaHQvLnRlc3Qob3JpZW50YXRpb25bMF0pKSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0ID0gcmVjdFtvcmllbnRhdGlvblswXV0gKyBzY3JvbGxYO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGVmdCA9IHJlY3Rbb3JpZW50YXRpb25bMV1dICsgc2Nyb2xsWDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb25bMF0gPT09ICdyaWdodCcgfHwgb3JpZW50YXRpb25bMV0gPT09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgIGxlZnQgLT0gY2FsUmVjdC53aWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsZWZ0OiBsZWZ0LFxyXG4gICAgICAgICAgICB0b3A6IHRvcCxcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMUENvcmU7XHJcbn0oZXZlbnRzXzEuRXZlbnRFbWl0dGVyKSk7XHJcbmV4cG9ydHMuTFBDb3JlID0gTFBDb3JlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgRGF0ZVRpbWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEYXRlVGltZShkYXRlLCBmb3JtYXQsIGxhbmcpIHtcclxuICAgICAgICBpZiAoZGF0ZSA9PT0gdm9pZCAwKSB7IGRhdGUgPSBudWxsOyB9XHJcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gdm9pZCAwKSB7IGZvcm1hdCA9IG51bGw7IH1cclxuICAgICAgICBpZiAobGFuZyA9PT0gdm9pZCAwKSB7IGxhbmcgPSAnZW4tVVMnOyB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdvYmplY3QnICYmIGZvcm1hdCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gICAgICAgICAgICB0aGlzLmRhdGVJbnN0YW5jZSA9IGZvcm1hdC5wYXJzZShkYXRlIGluc3RhbmNlb2YgRGF0ZVRpbWUgPyBkYXRlLmNsb25lKCkudG9KU0RhdGUoKSA6IGRhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGVJbnN0YW5jZSA9IChEYXRlVGltZS5wYXJzZURhdGVUaW1lKGRhdGUsIGZvcm1hdCwgbGFuZykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZUluc3RhbmNlID0gKERhdGVUaW1lLnBhcnNlRGF0ZVRpbWUoZGF0ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRlSW5zdGFuY2UgPSAoRGF0ZVRpbWUucGFyc2VEYXRlVGltZShuZXcgRGF0ZSgpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFuZyA9IGxhbmc7XHJcbiAgICB9XHJcbiAgICBEYXRlVGltZS5wYXJzZURhdGVUaW1lID0gZnVuY3Rpb24gKGRhdGUsIGZvcm1hdCwgbGFuZykge1xyXG4gICAgICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkgeyBmb3JtYXQgPSAnWVlZWS1NTS1ERCc7IH1cclxuICAgICAgICBpZiAobGFuZyA9PT0gdm9pZCAwKSB7IGxhbmcgPSAnZW4tVVMnOyB9XHJcbiAgICAgICAgaWYgKCFkYXRlKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcclxuICAgICAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKTtcclxuICAgICAgICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGVUaW1lKVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5jbG9uZSgpLnRvSlNEYXRlKCk7XHJcbiAgICAgICAgaWYgKC9eLT9cXGR7MTAsfSQvLnRlc3QoZGF0ZSkpXHJcbiAgICAgICAgICAgIHJldHVybiBEYXRlVGltZS5nZXREYXRlWmVyb1RpbWUobmV3IERhdGUoTnVtYmVyKGRhdGUpKSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgbSA9IG51bGw7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tY29uZGl0aW9uYWwtYXNzaWdubWVudFxyXG4gICAgICAgICAgICB3aGlsZSAoKG0gPSBEYXRlVGltZS5yZWdleC5leGVjKGZvcm1hdCkpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtWzFdID09PSAnXFxcXCcpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7IC8vIGRlbGV0ZSB3aGVuIHJlZ2V4cCBsb29rYmVoaW5kXHJcbiAgICAgICAgICAgICAgICBtYXRjaGVzLnB1c2gobSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZVBhdHRlcm4gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeWVhcjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBtb250aDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBzaG9ydE1vbnRoOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvbmdNb250aDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBkYXk6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzWzBdLmluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVQYXR0ZXJuLnZhbHVlICs9ICcuKj8nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5lbnRyaWVzKG1hdGNoZXMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfYiA9IF9hW19pXSwgayA9IF9iWzBdLCBtYXRjaCA9IF9iWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBOdW1iZXIoayk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9jID0gRGF0ZVRpbWUuZm9ybWF0UGF0dGVybnMobWF0Y2hbMF0sIGxhbmcpLCBncm91cCA9IF9jLmdyb3VwLCBwYXR0ZXJuID0gX2MucGF0dGVybjtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlUGF0dGVybltncm91cF0gPSBrZXkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVQYXR0ZXJuLnZhbHVlICs9IHBhdHRlcm47XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVBhdHRlcm4udmFsdWUgKz0gJy4qPyc7IC8vIGFueSBkZWxpbWl0ZXJzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZVJlZ2V4ID0gbmV3IFJlZ0V4cChcIl5cIiArIGRhdGVQYXR0ZXJuLnZhbHVlICsgXCIkXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGVSZWdleC50ZXN0KGRhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBkYXRlUmVnZXguZXhlYyhkYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgeWVhciA9IE51bWJlcihkW2RhdGVQYXR0ZXJuLnllYXJdKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbW9udGggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRlUGF0dGVybi5tb250aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aCA9IE51bWJlcihkW2RhdGVQYXR0ZXJuLm1vbnRoXSkgLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXRlUGF0dGVybi5zaG9ydE1vbnRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoID0gRGF0ZVRpbWUuc2hvcnRNb250aHMobGFuZykuaW5kZXhPZihkW2RhdGVQYXR0ZXJuLnNob3J0TW9udGhdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF0ZVBhdHRlcm4ubG9uZ01vbnRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoID0gRGF0ZVRpbWUubG9uZ01vbnRocyhsYW5nKS5pbmRleE9mKGRbZGF0ZVBhdHRlcm4ubG9uZ01vbnRoXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXkgPSBOdW1iZXIoZFtkYXRlUGF0dGVybi5kYXldKSB8fCAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5LCAwLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gRGF0ZVRpbWUuZ2V0RGF0ZVplcm9UaW1lKG5ldyBEYXRlKGRhdGUpKTtcclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5jb252ZXJ0QXJyYXkgPSBmdW5jdGlvbiAoYXJyYXksIGZvcm1hdCkge1xyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgICAgIGlmIChkIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkLm1hcChmdW5jdGlvbiAoZDEpIHsgcmV0dXJuIG5ldyBEYXRlVGltZShkMSwgZm9ybWF0KTsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZShkLCBmb3JtYXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIERhdGVUaW1lLmdldERhdGVaZXJvVGltZSA9IGZ1bmN0aW9uIChkYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgMCwgMCwgMCwgMCk7XHJcbiAgICB9O1xyXG4gICAgRGF0ZVRpbWUuc2hvcnRNb250aHMgPSBmdW5jdGlvbiAobGFuZykge1xyXG4gICAgICAgIHJldHVybiBEYXRlVGltZS5NT05USF9KU1xyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiBuZXcgRGF0ZSgyMDE5LCB4KS50b0xvY2FsZVN0cmluZyhsYW5nLCB7IG1vbnRoOiAnc2hvcnQnIH0pOyB9KTtcclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5sb25nTW9udGhzID0gZnVuY3Rpb24gKGxhbmcpIHtcclxuICAgICAgICByZXR1cm4gRGF0ZVRpbWUuTU9OVEhfSlNcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoeCkgeyByZXR1cm4gbmV3IERhdGUoMjAxOSwgeCkudG9Mb2NhbGVTdHJpbmcobGFuZywgeyBtb250aDogJ2xvbmcnIH0pOyB9KTtcclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5mb3JtYXRQYXR0ZXJucyA9IGZ1bmN0aW9uICh0b2tlbiwgbGFuZykge1xyXG4gICAgICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgICAgICAgY2FzZSAnWVknOlxyXG4gICAgICAgICAgICBjYXNlICdZWVlZJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6ICd5ZWFyJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIihcXFxcZHtcIiArIHRva2VuLmxlbmd0aCArIFwifSlcIixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgJ00nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cDogJ21vbnRoJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAnKFxcXFxkezEsMn0pJyxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgJ01NJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6ICdtb250aCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogJyhcXFxcZHsyfSknLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSAnTU1NJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6ICdzaG9ydE1vbnRoJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIihcIiArIERhdGVUaW1lLnNob3J0TW9udGhzKGxhbmcpLmpvaW4oJ3wnKSArIFwiKVwiLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSAnTU1NTSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwOiAnbG9uZ01vbnRoJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIihcIiArIERhdGVUaW1lLmxvbmdNb250aHMobGFuZykuam9pbignfCcpICsgXCIpXCIsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlICdEJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6ICdkYXknLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm46ICcoXFxcXGR7MSwyfSknLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSAnREQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cDogJ2RheScsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogJyhcXFxcZHsyfSknLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLnRvSlNEYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZTtcclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5wcm90b3R5cGUudG9Mb2NhbGVTdHJpbmcgPSBmdW5jdGlvbiAoYXJnMCwgYXJnMSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS50b0xvY2FsZVN0cmluZyhhcmcwLCBhcmcxKTtcclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5wcm90b3R5cGUudG9EYXRlU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS50b0RhdGVTdHJpbmcoKTtcclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuZ2V0U2Vjb25kcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2UuZ2V0U2Vjb25kcygpO1xyXG4gICAgfTtcclxuICAgIERhdGVUaW1lLnByb3RvdHlwZS5nZXREYXkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLmdldERheSgpO1xyXG4gICAgfTtcclxuICAgIERhdGVUaW1lLnByb3RvdHlwZS5nZXRUaW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS5nZXRUaW1lKCk7XHJcbiAgICB9O1xyXG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmdldERhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLmdldERhdGUoKTtcclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuZ2V0TW9udGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLmdldE1vbnRoKCk7XHJcbiAgICB9O1xyXG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmdldEZ1bGxZZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgfTtcclxuICAgIERhdGVUaW1lLnByb3RvdHlwZS5zZXRNb250aCA9IGZ1bmN0aW9uIChhcmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlSW5zdGFuY2Uuc2V0TW9udGgoYXJnKTtcclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuc2V0SG91cnMgPSBmdW5jdGlvbiAoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIG1zKSB7XHJcbiAgICAgICAgaWYgKGhvdXJzID09PSB2b2lkIDApIHsgaG91cnMgPSAwOyB9XHJcbiAgICAgICAgaWYgKG1pbnV0ZXMgPT09IHZvaWQgMCkgeyBtaW51dGVzID0gMDsgfVxyXG4gICAgICAgIGlmIChzZWNvbmRzID09PSB2b2lkIDApIHsgc2Vjb25kcyA9IDA7IH1cclxuICAgICAgICBpZiAobXMgPT09IHZvaWQgMCkgeyBtcyA9IDA7IH1cclxuICAgICAgICB0aGlzLmRhdGVJbnN0YW5jZS5zZXRIb3Vycyhob3VycywgbWludXRlcywgc2Vjb25kcywgbXMpO1xyXG4gICAgfTtcclxuICAgIERhdGVUaW1lLnByb3RvdHlwZS5zZXRTZWNvbmRzID0gZnVuY3Rpb24gKGFyZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVJbnN0YW5jZS5zZXRTZWNvbmRzKGFyZyk7XHJcbiAgICB9O1xyXG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLnNldERhdGUgPSBmdW5jdGlvbiAoYXJnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLnNldERhdGUoYXJnKTtcclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuc2V0RnVsbFllYXIgPSBmdW5jdGlvbiAoYXJnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZUluc3RhbmNlLnNldEZ1bGxZZWFyKGFyZyk7XHJcbiAgICB9O1xyXG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmdldFdlZWsgPSBmdW5jdGlvbiAoZmlyc3REYXkpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gbmV3IERhdGUodGhpcy50aW1lc3RhbXAoKSk7XHJcbiAgICAgICAgdmFyIGRheU5yID0gKHRoaXMuZ2V0RGF5KCkgKyAoNyAtIGZpcnN0RGF5KSkgJSA3O1xyXG4gICAgICAgIHRhcmdldC5zZXREYXRlKHRhcmdldC5nZXREYXRlKCkgLSBkYXlOcik7XHJcbiAgICAgICAgdmFyIHN0YXJ0V2Vla2RheSA9IHRhcmdldC5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGFyZ2V0LnNldE1vbnRoKDAsIDEpO1xyXG4gICAgICAgIGlmICh0YXJnZXQuZ2V0RGF5KCkgIT09IGZpcnN0RGF5KSB7XHJcbiAgICAgICAgICAgIHRhcmdldC5zZXRNb250aCgwLCAxICsgKCg0IC0gdGFyZ2V0LmdldERheSgpKSArIDcpICUgNyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAxICsgTWF0aC5jZWlsKChzdGFydFdlZWtkYXkgLSB0YXJnZXQuZ2V0VGltZSgpKSAvIDYwNDgwMDAwMCk7XHJcbiAgICB9O1xyXG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUodGhpcy50b0pTRGF0ZSgpKTtcclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuaXNCZXR3ZWVuID0gZnVuY3Rpb24gKGRhdGUxLCBkYXRlMiwgaW5jbHVzaXZpdHkpIHtcclxuICAgICAgICBpZiAoaW5jbHVzaXZpdHkgPT09IHZvaWQgMCkgeyBpbmNsdXNpdml0eSA9ICcoKSc7IH1cclxuICAgICAgICBzd2l0Y2ggKGluY2x1c2l2aXR5KSB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNhc2UgJygpJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWVzdGFtcCgpID4gZGF0ZTEuZ2V0VGltZSgpICYmIHRoaXMudGltZXN0YW1wKCkgPCBkYXRlMi5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ1spJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWVzdGFtcCgpID49IGRhdGUxLmdldFRpbWUoKSAmJiB0aGlzLnRpbWVzdGFtcCgpIDwgZGF0ZTIuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBjYXNlICcoXSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aW1lc3RhbXAoKSA+IGRhdGUxLmdldFRpbWUoKSAmJiB0aGlzLnRpbWVzdGFtcCgpIDw9IGRhdGUyLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgY2FzZSAnW10nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGltZXN0YW1wKCkgPj0gZGF0ZTEuZ2V0VGltZSgpICYmIHRoaXMudGltZXN0YW1wKCkgPD0gZGF0ZTIuZ2V0VGltZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuaXNCZWZvcmUgPSBmdW5jdGlvbiAoZGF0ZSwgdW5pdCkge1xyXG4gICAgICAgIGlmICh1bml0ID09PSB2b2lkIDApIHsgdW5pdCA9ICdzZWNvbmRzJzsgfVxyXG4gICAgICAgIHN3aXRjaCAodW5pdCkge1xyXG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxyXG4gICAgICAgICAgICBjYXNlICdzZWNvbmRzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLmdldFRpbWUoKSA+IHRoaXMuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBjYXNlICdkYXknOlxyXG4gICAgICAgICAgICBjYXNlICdkYXlzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgID4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIHRoaXMuZ2V0RGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcclxuICAgICAgICAgICAgY2FzZSAnbW9udGhzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgMSkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgPiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgMSkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBjYXNlICd5ZWFyJzpcclxuICAgICAgICAgICAgY2FzZSAneWVhcnMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSA+IHRoaXMuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpc0JlZm9yZTogSW52YWxpZCB1bml0IScpO1xyXG4gICAgfTtcclxuICAgIERhdGVUaW1lLnByb3RvdHlwZS5pc1NhbWVPckJlZm9yZSA9IGZ1bmN0aW9uIChkYXRlLCB1bml0KSB7XHJcbiAgICAgICAgaWYgKHVuaXQgPT09IHZvaWQgMCkgeyB1bml0ID0gJ3NlY29uZHMnOyB9XHJcbiAgICAgICAgc3dpdGNoICh1bml0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZHMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpID49IHRoaXMuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBjYXNlICdkYXknOlxyXG4gICAgICAgICAgICBjYXNlICdkYXlzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgID49IG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCB0aGlzLmdldERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBjYXNlICdtb250aCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ21vbnRocyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgID49IG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCAxKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaXNTYW1lT3JCZWZvcmU6IEludmFsaWQgdW5pdCEnKTtcclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuaXNBZnRlciA9IGZ1bmN0aW9uIChkYXRlLCB1bml0KSB7XHJcbiAgICAgICAgaWYgKHVuaXQgPT09IHZvaWQgMCkgeyB1bml0ID0gJ3NlY29uZHMnOyB9XHJcbiAgICAgICAgc3dpdGNoICh1bml0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZHMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGltZSgpID4gZGF0ZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2RheXMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCB0aGlzLmdldERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgPiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICAgICAgICBjYXNlICdtb250aHMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCAxKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICA+IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ3llYXInOlxyXG4gICAgICAgICAgICBjYXNlICd5ZWFycyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGdWxsWWVhcigpID4gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lzQWZ0ZXI6IEludmFsaWQgdW5pdCEnKTtcclxuICAgIH07XHJcbiAgICBEYXRlVGltZS5wcm90b3R5cGUuaXNTYW1lT3JBZnRlciA9IGZ1bmN0aW9uIChkYXRlLCB1bml0KSB7XHJcbiAgICAgICAgaWYgKHVuaXQgPT09IHZvaWQgMCkgeyB1bml0ID0gJ3NlY29uZHMnOyB9XHJcbiAgICAgICAgc3dpdGNoICh1bml0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZHMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGltZSgpID49IGRhdGUuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBjYXNlICdkYXknOlxyXG4gICAgICAgICAgICBjYXNlICdkYXlzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgdGhpcy5nZXREYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgID49IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBjYXNlICdtb250aCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ21vbnRocyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgID49IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCAxKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaXNTYW1lT3JBZnRlcjogSW52YWxpZCB1bml0IScpO1xyXG4gICAgfTtcclxuICAgIERhdGVUaW1lLnByb3RvdHlwZS5pc1NhbWUgPSBmdW5jdGlvbiAoZGF0ZSwgdW5pdCkge1xyXG4gICAgICAgIGlmICh1bml0ID09PSB2b2lkIDApIHsgdW5pdCA9ICdzZWNvbmRzJzsgfVxyXG4gICAgICAgIHN3aXRjaCAodW5pdCkge1xyXG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxyXG4gICAgICAgICAgICBjYXNlICdzZWNvbmRzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRpbWUoKSA9PT0gZGF0ZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2RheXMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCB0aGlzLmdldERhdGUoKSkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgPT09IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBjYXNlICdtb250aCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ21vbnRocyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIDEpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgID09PSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgMSkuZ2V0VGltZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lzU2FtZTogSW52YWxpZCB1bml0IScpO1xyXG4gICAgfTtcclxuICAgIERhdGVUaW1lLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZHVyYXRpb24sIHVuaXQpIHtcclxuICAgICAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7IHVuaXQgPSAnc2Vjb25kcyc7IH1cclxuICAgICAgICBzd2l0Y2ggKHVuaXQpIHtcclxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcclxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kcyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNlY29uZHModGhpcy5nZXRTZWNvbmRzKCkgKyBkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZGF5JzpcclxuICAgICAgICAgICAgY2FzZSAnZGF5cyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGUodGhpcy5nZXREYXRlKCkgKyBkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICAgICAgICBjYXNlICdtb250aHMnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNb250aCh0aGlzLmdldE1vbnRoKCkgKyBkdXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKGR1cmF0aW9uLCB1bml0KSB7XHJcbiAgICAgICAgaWYgKHVuaXQgPT09IHZvaWQgMCkgeyB1bml0ID0gJ3NlY29uZHMnOyB9XHJcbiAgICAgICAgc3dpdGNoICh1bml0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZHMnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTZWNvbmRzKHRoaXMuZ2V0U2Vjb25kcygpIC0gZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2RheXMnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRlKHRoaXMuZ2V0RGF0ZSgpIC0gZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcclxuICAgICAgICAgICAgY2FzZSAnbW9udGhzJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0TW9udGgodGhpcy5nZXRNb250aCgpIC0gZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIERhdGVUaW1lLnByb3RvdHlwZS5kaWZmID0gZnVuY3Rpb24gKGRhdGUsIHVuaXQpIHtcclxuICAgICAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7IHVuaXQgPSAnc2Vjb25kcyc7IH1cclxuICAgICAgICB2YXIgb25lRGF5ID0gMTAwMCAqIDYwICogNjAgKiAyNDtcclxuICAgICAgICBzd2l0Y2ggKHVuaXQpIHtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcclxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kcyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUaW1lKCkgLSBkYXRlLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgY2FzZSAnZGF5JzpcclxuICAgICAgICAgICAgY2FzZSAnZGF5cyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgodGhpcy50aW1lc3RhbXAoKSAtIGRhdGUuZ2V0VGltZSgpKSAvIG9uZURheSk7XHJcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcclxuICAgICAgICAgICAgY2FzZSAnbW9udGhzJzpcclxuICAgICAgICAgICAgLy8gQFRPRE9cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uIChmb3JtYXQsIGxhbmcpIHtcclxuICAgICAgICBpZiAobGFuZyA9PT0gdm9pZCAwKSB7IGxhbmcgPSAnZW4tVVMnOyB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQub3V0cHV0KHRoaXMuY2xvbmUoKS50b0pTRGF0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gJyc7XHJcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBbXTtcclxuICAgICAgICB2YXIgbSA9IG51bGw7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1jb25kaXRpb25hbC1hc3NpZ25tZW50XHJcbiAgICAgICAgd2hpbGUgKChtID0gRGF0ZVRpbWUucmVnZXguZXhlYyhmb3JtYXQpKSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChtWzFdID09PSAnXFxcXCcpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTsgLy8gZGVsZXRlIHdoZW4gcmVnZXhwIGxvb2tiZWhpbmRcclxuICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKG0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gYWRkIHN0YXJ0IGxpbmUgb2YgdG9rZW5zIGFyZSBub3QgYXQgdGhlIGJlZ2lubmluZ1xyXG4gICAgICAgICAgICBpZiAobWF0Y2hlc1swXS5pbmRleCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlICs9IGZvcm1hdC5zdWJzdHJpbmcoMCwgbWF0Y2hlc1swXS5pbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5lbnRyaWVzKG1hdGNoZXMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9iID0gX2FbX2ldLCBrID0gX2JbMF0sIG1hdGNoID0gX2JbMV07XHJcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gTnVtYmVyKGspO1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgKz0gdGhpcy5mb3JtYXRUb2tlbnMobWF0Y2hbMF0sIGxhbmcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZXNba2V5ICsgMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSArPSBmb3JtYXQuc3Vic3RyaW5nKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoLCBtYXRjaGVzW2tleSArIDFdLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGFkZCBlbmQgbGluZSBpZiB0b2tlbnMgYXJlIG5vdCBhdCB0aGUgZW5kaW5nXHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBtYXRjaGVzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSArPSBmb3JtYXQuc3Vic3RyaW5nKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZW1vdmUgZXNjYXBlIGNoYXJhY3RlcnNcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UucmVwbGFjZSgvXFxcXC9nLCAnJyk7XHJcbiAgICB9O1xyXG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLnRpbWVzdGFtcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCB0aGlzLmdldE1vbnRoKCksIHRoaXMuZ2V0RGF0ZSgpLCAwLCAwLCAwLCAwKS5nZXRUaW1lKCk7XHJcbiAgICB9O1xyXG4gICAgRGF0ZVRpbWUucHJvdG90eXBlLmZvcm1hdFRva2VucyA9IGZ1bmN0aW9uICh0b2tlbiwgbGFuZykge1xyXG4gICAgICAgIHN3aXRjaCAodG9rZW4pIHtcclxuICAgICAgICAgICAgY2FzZSAnWVknOiByZXR1cm4gU3RyaW5nKHRoaXMuZ2V0RnVsbFllYXIoKSkuc2xpY2UoLTIpO1xyXG4gICAgICAgICAgICBjYXNlICdZWVlZJzogcmV0dXJuIFN0cmluZyh0aGlzLmdldEZ1bGxZZWFyKCkpO1xyXG4gICAgICAgICAgICBjYXNlICdNJzogcmV0dXJuIFN0cmluZyh0aGlzLmdldE1vbnRoKCkgKyAxKTtcclxuICAgICAgICAgICAgY2FzZSAnTU0nOiByZXR1cm4gKFwiMFwiICsgKHRoaXMuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMik7XHJcbiAgICAgICAgICAgIGNhc2UgJ01NTSc6IHJldHVybiBEYXRlVGltZS5zaG9ydE1vbnRocyhsYW5nKVt0aGlzLmdldE1vbnRoKCldO1xyXG4gICAgICAgICAgICBjYXNlICdNTU1NJzogcmV0dXJuIERhdGVUaW1lLmxvbmdNb250aHMobGFuZylbdGhpcy5nZXRNb250aCgpXTtcclxuICAgICAgICAgICAgY2FzZSAnRCc6IHJldHVybiBTdHJpbmcodGhpcy5nZXREYXRlKCkpO1xyXG4gICAgICAgICAgICBjYXNlICdERCc6IHJldHVybiAoXCIwXCIgKyB0aGlzLmdldERhdGUoKSkuc2xpY2UoLTIpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vIHJlcGxhY2UgdG8gcmVnZXhwIGxvb2tiZWhpbmQgd2hlbiBtb3N0IHBvcHVsYXIgYnJvd3NlcnMgd2lsbCBzdXBwb3J0XHJcbiAgICAvLyBodHRwczovL2Nhbml1c2UuY29tLyNmZWF0PWpzLXJlZ2V4cC1sb29rYmVoaW5kXHJcbiAgICAvLyAvKD88IVxcXFwpKFl7Miw0fXxNezEsNH18RHsxLDJ9fGR7MSw0fV0pL2dcclxuICAgIERhdGVUaW1lLnJlZ2V4ID0gLyhcXFxcKT8oWXsyLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9KS9nO1xyXG4gICAgRGF0ZVRpbWUuTU9OVEhfSlMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExXTtcclxuICAgIHJldHVybiBEYXRlVGltZTtcclxufSgpKTtcclxuZXhwb3J0cy5EYXRlVGltZSA9IERhdGVUaW1lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgbGl0ZXBpY2tlcl8xID0gcmVxdWlyZShcIi4vbGl0ZXBpY2tlclwiKTtcclxuZXhwb3J0cy5MaXRlcGlja2VyID0gbGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXI7XHJcbnJlcXVpcmUoXCIuL21ldGhvZHNcIik7XHJcbndpbmRvdy5MaXRlcGlja2VyID0gbGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXI7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGxpdGVwaWNrZXJfMS5MaXRlcGlja2VyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjYWxlbmRhcl8xID0gcmVxdWlyZShcIi4vY2FsZW5kYXJcIik7XHJcbnZhciBkYXRldGltZV8xID0gcmVxdWlyZShcIi4vZGF0ZXRpbWVcIik7XHJcbnZhciBzdHlsZSA9IHJlcXVpcmUoXCIuL3Njc3MvbWFpbi5zY3NzXCIpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG52YXIgTGl0ZXBpY2tlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhMaXRlcGlja2VyLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTGl0ZXBpY2tlcihvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5wcmV2ZW50Q2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIF90aGlzLmJpbmRFdmVudHMoKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5zY3JvbGxUb0RhdGUgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNjcm9sbFRvRGF0ZSkge1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gICAgICAgICAgICB2YXIgc3RhcnREYXRlID0gdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWUgPyB0aGlzLm9wdGlvbnMuc3RhcnREYXRlLmNsb25lKCkgOiBudWxsO1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gICAgICAgICAgICB2YXIgZW5kRGF0ZSA9IHRoaXMub3B0aW9ucy5lbmREYXRlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZSA/IHRoaXMub3B0aW9ucy5lbmREYXRlLmNsb25lKCkgOiBudWxsO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSAmJiAoIWVsIHx8IGVsID09PSB0aGlzLm9wdGlvbnMuZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZS5zZXREYXRlKDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxlbmRhcnNbMF0gPSBzdGFydERhdGUuY2xvbmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChlbCAmJiB0aGlzLm9wdGlvbnMuZW5kRGF0ZSAmJiBlbCA9PT0gdGhpcy5vcHRpb25zLmVsZW1lbnRFbmQpIHtcclxuICAgICAgICAgICAgICAgIGVuZERhdGUuc2V0RGF0ZSgxKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubnVtYmVyT2ZNb250aHMgPiAxICYmIGVuZERhdGUuaXNBZnRlcihzdGFydERhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZS5zZXRNb250aChlbmREYXRlLmdldE1vbnRoKCkgLSAodGhpcy5vcHRpb25zLm51bWJlck9mTW9udGhzIC0gMSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxlbmRhcnNbMF0gPSBlbmREYXRlLmNsb25lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnVpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy51aS5jbGFzc05hbWUgPSBzdHlsZS5saXRlcGlja2VyO1xyXG4gICAgICAgIHRoaXMudWkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLnVpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLm9uTW91c2VFbnRlci5iaW5kKHRoaXMpLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnVpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvUmVmcmVzaCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uSW5wdXQuYmluZCh0aGlzKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbGVtZW50RW5kIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50RW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5vbklucHV0LmJpbmQodGhpcyksIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbklucHV0LmJpbmQodGhpcyksIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uSW5wdXQuYmluZCh0aGlzKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wYXJlbnRFbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBhcmVudEVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wYXJlbnRFbC5hcHBlbmRDaGlsZCh0aGlzLnVpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLnBhcmVudEVsKS5hcHBlbmRDaGlsZCh0aGlzLnVpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbmxpbmVNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLnVpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMudWkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnVpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUlucHV0KCk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuc2V0dXAgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNldHVwLmNhbGwodGhpcywgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbmxpbmVNb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS51cGRhdGVJbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoISh0aGlzLm9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIHN0YXJ0RGF0ZSA9IHRoaXMub3B0aW9ucy5zdGFydERhdGU7XHJcbiAgICAgICAgdmFyIGVuZERhdGUgPSB0aGlzLm9wdGlvbnMuZW5kRGF0ZTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNpbmdsZU1vZGUgJiYgc3RhcnREYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlID0gc3RhcnREYXRlLmZvcm1hdCh0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSAmJiBzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICB2YXIgc3RhcnRWYWx1ZSA9IHN0YXJ0RGF0ZS5mb3JtYXQodGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xyXG4gICAgICAgICAgICB2YXIgZW5kVmFsdWUgPSBlbmREYXRlLmZvcm1hdCh0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlID0gc3RhcnRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50RW5kLnZhbHVlID0gZW5kVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZSA9IFwiXCIgKyBzdGFydFZhbHVlICsgdGhpcy5vcHRpb25zLmRlbGltaXRlciArIGVuZFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3RhcnREYXRlICYmICFlbmREYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5lbGVtZW50RW5kLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuaXNTYW1lUGlja2VyID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgdmFyIHBpY2tlciA9IGVsLmNsb3Nlc3QoXCIuXCIgKyBzdHlsZS5saXRlcGlja2VyKTtcclxuICAgICAgICByZXR1cm4gcGlja2VyID09PSB0aGlzLnVpO1xyXG4gICAgfTtcclxuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLnNob3VsZFNob3duID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgcmV0dXJuICFlbC5kaXNhYmxlZCAmJiAoZWwgPT09IHRoaXMub3B0aW9ucy5lbGVtZW50XHJcbiAgICAgICAgICAgIHx8ICh0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCAmJiBlbCA9PT0gdGhpcy5vcHRpb25zLmVsZW1lbnRFbmQpKTtcclxuICAgIH07XHJcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5zaG91bGRSZXNldERhdGVQaWNrZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlIHx8IHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDI7XHJcbiAgICB9O1xyXG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuc2hvdWxkU3dhcERhdGVQaWNrZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDJcclxuICAgICAgICAgICAgJiYgdGhpcy5kYXRlUGlja2VkWzBdLmdldFRpbWUoKSA+IHRoaXMuZGF0ZVBpY2tlZFsxXS5nZXRUaW1lKCk7XHJcbiAgICB9O1xyXG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuc2hvdWxkQ2hlY2tMb2NrRGF5cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRpc2FsbG93TG9ja0RheXNJblJhbmdlXHJcbiAgICAgICAgICAgICYmIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDI7XHJcbiAgICB9O1xyXG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUub25DbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGlmICghdGFyZ2V0IHx8ICF0aGlzLnVpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2xpY2sgb24gZWxlbWVudFxyXG4gICAgICAgIGlmICh0aGlzLnNob3VsZFNob3duKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93KHRhcmdldCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2xpY2sgb3V0c2lkZSBwaWNrZXJcclxuICAgICAgICBpZiAoIXRhcmdldC5jbG9zZXN0KFwiLlwiICsgc3R5bGUubGl0ZXBpY2tlcikgJiYgdGhpcy5pc1Nob3duaW5nKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzU2FtZVBpY2tlcih0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbWl0KCdiZWZvcmU6Y2xpY2snLCB0YXJnZXQpO1xyXG4gICAgICAgIGlmICh0aGlzLnByZXZlbnRDbGljaykge1xyXG4gICAgICAgICAgICB0aGlzLnByZXZlbnRDbGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENsaWNrIG9uIGRhdGVcclxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhzdHlsZS5kYXlJdGVtKSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlLmlzTG9ja2VkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZFJlc2V0RGF0ZVBpY2tlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRhdGVQaWNrZWRbdGhpcy5kYXRlUGlja2VkLmxlbmd0aF0gPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0YXJnZXQuZGF0YXNldC50aW1lKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvdWxkU3dhcERhdGVQaWNrZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBEYXRlID0gdGhpcy5kYXRlUGlja2VkWzFdLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVQaWNrZWRbMV0gPSB0aGlzLmRhdGVQaWNrZWRbMF0uY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlZFswXSA9IHRlbXBEYXRlLmNsb25lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvdWxkQ2hlY2tMb2NrRGF5cygpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbG9ja2VkID0gdXRpbHNfMS5yYW5nZUlzTG9ja2VkKHRoaXMuZGF0ZVBpY2tlZCwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIGlmIChsb2NrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yOnJhbmdlJywgdGhpcy5kYXRlUGlja2VkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgX19zcHJlYWRBcnJheXMoWydwcmVzZWxlY3QnXSwgX19zcHJlYWRBcnJheXModGhpcy5kYXRlUGlja2VkKS5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQuY2xvbmUoKTsgfSkpKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvQXBwbHkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSAmJiB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRlKHRoaXMuZGF0ZVBpY2tlZFswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNpbmdsZU1vZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5zaW5nbGVNb2RlICYmIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGVSYW5nZSh0aGlzLmRhdGVQaWNrZWRbMF0sIHRoaXMuZGF0ZVBpY2tlZFsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDbGljayBvbiBidXR0b24gcHJldmlvdXMgbW9udGhcclxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhzdHlsZS5idXR0b25QcmV2aW91c01vbnRoKSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBpZHggPSAwO1xyXG4gICAgICAgICAgICB2YXIgbnVtYmVyT2ZNb250aHMgPSB0aGlzLm9wdGlvbnMuc3dpdGNoaW5nTW9udGhzIHx8IHRoaXMub3B0aW9ucy5udW1iZXJPZk1vbnRocztcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zcGxpdFZpZXcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtb250aEl0ZW0gPSB0YXJnZXQuY2xvc2VzdChcIi5cIiArIHN0eWxlLm1vbnRoSXRlbSk7XHJcbiAgICAgICAgICAgICAgICBpZHggPSB1dGlsc18xLmZpbmROZXN0ZWRNb250aEl0ZW0obW9udGhJdGVtKTtcclxuICAgICAgICAgICAgICAgIG51bWJlck9mTW9udGhzID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyc1tpZHhdLnNldE1vbnRoKHRoaXMuY2FsZW5kYXJzW2lkeF0uZ2V0TW9udGgoKSAtIG51bWJlck9mTW9udGhzKTtcclxuICAgICAgICAgICAgdGhpcy5nb3RvRGF0ZSh0aGlzLmNhbGVuZGFyc1tpZHhdLCBpZHgpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZTptb250aCcsIHRoaXMuY2FsZW5kYXJzW2lkeF0sIGlkeCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2xpY2sgb24gYnV0dG9uIG5leHQgbW9udGhcclxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhzdHlsZS5idXR0b25OZXh0TW9udGgpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIGlkeCA9IDA7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZk1vbnRocyA9IHRoaXMub3B0aW9ucy5zd2l0Y2hpbmdNb250aHMgfHwgdGhpcy5vcHRpb25zLm51bWJlck9mTW9udGhzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNwbGl0Vmlldykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1vbnRoSXRlbSA9IHRhcmdldC5jbG9zZXN0KFwiLlwiICsgc3R5bGUubW9udGhJdGVtKTtcclxuICAgICAgICAgICAgICAgIGlkeCA9IHV0aWxzXzEuZmluZE5lc3RlZE1vbnRoSXRlbShtb250aEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZNb250aHMgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJzW2lkeF0uc2V0TW9udGgodGhpcy5jYWxlbmRhcnNbaWR4XS5nZXRNb250aCgpICsgbnVtYmVyT2ZNb250aHMpO1xyXG4gICAgICAgICAgICB0aGlzLmdvdG9EYXRlKHRoaXMuY2FsZW5kYXJzW2lkeF0sIGlkeCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlOm1vbnRoJywgdGhpcy5jYWxlbmRhcnNbaWR4XSwgaWR4KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDbGljayBvbiBidXR0b24gY2FuY2VsXHJcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGUuYnV0dG9uQ2FuY2VsKSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2J1dHRvbjpjYW5jZWwnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2xpY2sgb24gYnV0dG9uIGFwcGx5XHJcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGUuYnV0dG9uQXBwbHkpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlICYmIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0ZSh0aGlzLmRhdGVQaWNrZWRbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSAmJiB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGVSYW5nZSh0aGlzLmRhdGVQaWNrZWRbMF0sIHRoaXMuZGF0ZVBpY2tlZFsxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnYnV0dG9uOmFwcGx5JywgdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSwgdGhpcy5vcHRpb25zLmVuZERhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5zaG93VG9vbHRpcCA9IGZ1bmN0aW9uIChlbGVtZW50LCB0ZXh0KSB7XHJcbiAgICAgICAgdmFyIHRvb2x0aXAgPSB0aGlzLnVpLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZS5jb250YWluZXJUb29sdGlwKTtcclxuICAgICAgICB0b29sdGlwLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgdG9vbHRpcC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gICAgICAgIHZhciBwaWNrZXJCQ1IgPSB0aGlzLnVpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHZhciB0b29sdGlwQkNSID0gdG9vbHRpcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB2YXIgZGF5QkNSID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB2YXIgdG9wID0gZGF5QkNSLnRvcDtcclxuICAgICAgICB2YXIgbGVmdCA9IGRheUJDUi5sZWZ0O1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW5saW5lTW9kZSAmJiB0aGlzLm9wdGlvbnMucGFyZW50RWwpIHtcclxuICAgICAgICAgICAgdmFyIHBhcmVudEJDUiA9IHRoaXMudWkucGFyZW50Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgdG9wIC09IHBhcmVudEJDUi50b3A7XHJcbiAgICAgICAgICAgIGxlZnQgLT0gcGFyZW50QkNSLmxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0b3AgLT0gcGlja2VyQkNSLnRvcDtcclxuICAgICAgICAgICAgbGVmdCAtPSBwaWNrZXJCQ1IubGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9wIC09IHRvb2x0aXBCQ1IuaGVpZ2h0O1xyXG4gICAgICAgIGxlZnQgLT0gdG9vbHRpcEJDUi53aWR0aCAvIDI7XHJcbiAgICAgICAgbGVmdCArPSBkYXlCQ1Iud2lkdGggLyAyO1xyXG4gICAgICAgIHRvb2x0aXAuc3R5bGUudG9wID0gdG9wICsgXCJweFwiO1xyXG4gICAgICAgIHRvb2x0aXAuc3R5bGUubGVmdCA9IGxlZnQgKyBcInB4XCI7XHJcbiAgICAgICAgdGhpcy5lbWl0KCd0b29sdGlwJywgdG9vbHRpcCwgZWxlbWVudCk7XHJcbiAgICB9O1xyXG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUuaGlkZVRvb2x0aXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRvb2x0aXAgPSB0aGlzLnVpLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZS5jb250YWluZXJUb29sdGlwKTtcclxuICAgICAgICB0b29sdGlwLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgIH07XHJcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5zaG91bGRBbGxvd01vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMub3B0aW9ucy5zaW5nbGVNb2RlXHJcbiAgICAgICAgICAgICYmICFlbC5jbGFzc0xpc3QuY29udGFpbnMoc3R5bGUuaXNMb2NrZWQpO1xyXG4gICAgfTtcclxuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLnNob3VsZEFsbG93UmVwaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZWxlbWVudEVuZFxyXG4gICAgICAgICAgICAmJiB0aGlzLm9wdGlvbnMuYWxsb3dSZXBpY2tcclxuICAgICAgICAgICAgJiYgdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZVxyXG4gICAgICAgICAgICAmJiB0aGlzLm9wdGlvbnMuZW5kRGF0ZTtcclxuICAgIH07XHJcbiAgICBMaXRlcGlja2VyLnByb3RvdHlwZS5pc0RheUl0ZW0gPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHN0eWxlLmRheUl0ZW0pO1xyXG4gICAgfTtcclxuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLm9uTW91c2VFbnRlciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBpZiAoIXRoaXMuaXNEYXlJdGVtKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zaG91bGRBbGxvd01vdXNlRW50ZXIodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaG91bGRBbGxvd1JlcGljaygpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50cmlnZ2VyRWxlbWVudCA9PT0gdGhpcy5vcHRpb25zLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVQaWNrZWRbMF0gPSB0aGlzLm9wdGlvbnMuZW5kRGF0ZS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50cmlnZ2VyRWxlbWVudCA9PT0gdGhpcy5vcHRpb25zLmVsZW1lbnRFbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVQaWNrZWRbMF0gPSB0aGlzLm9wdGlvbnMuc3RhcnREYXRlLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggIT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgc3RhcnREYXRlRWxlbWVudCA9IHRoaXMudWlcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGUuZGF5SXRlbSArIFwiW2RhdGEtdGltZT1cXFwiXCIgKyB0aGlzLmRhdGVQaWNrZWRbMF0uZ2V0VGltZSgpICsgXCJcXFwiXVwiKTtcclxuICAgICAgICAgICAgdmFyIGRhdGUxXzEgPSB0aGlzLmRhdGVQaWNrZWRbMF0uY2xvbmUoKTtcclxuICAgICAgICAgICAgdmFyIGRhdGUyXzEgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZSh0YXJnZXQuZGF0YXNldC50aW1lKTtcclxuICAgICAgICAgICAgdmFyIGlzRmxpcHBlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoZGF0ZTFfMS5nZXRUaW1lKCkgPiBkYXRlMl8xLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBEYXRlID0gZGF0ZTFfMS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZTFfMSA9IGRhdGUyXzEuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIGRhdGUyXzEgPSB0ZW1wRGF0ZS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgaXNGbGlwcGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgYWxsRGF5SXRlbXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLnVpLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIgKyBzdHlsZS5kYXlJdGVtKSk7XHJcbiAgICAgICAgICAgIGFsbERheUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZC5kYXRhc2V0LnRpbWUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRheSA9IF90aGlzLnJlbmRlckRheShkYXRlKTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRlLmlzQmV0d2VlbihkYXRlMV8xLCBkYXRlMl8xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKHN0eWxlLmlzSW5SYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkLmNsYXNzTmFtZSA9IGRheS5jbGFzc05hbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0VuZERhdGUpO1xyXG4gICAgICAgICAgICBpZiAoaXNGbGlwcGVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnREYXRlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChzdHlsZS5pc0ZsaXBwZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoc3R5bGUuaXNGbGlwcGVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFydERhdGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlLmlzRmxpcHBlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShzdHlsZS5pc0ZsaXBwZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1Rvb2x0aXApIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXlzID0gZGF0ZTJfMS5kaWZmKGRhdGUxXzEsICdkYXknKSArIDE7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy50b29sdGlwTnVtYmVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5cyA9IHRoaXMub3B0aW9ucy50b29sdGlwTnVtYmVyLmNhbGwodGhpcywgZGF5cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF5cyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGx1cmFsTmFtZSA9IHRoaXMucGx1cmFsU2VsZWN0b3IoZGF5cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBsdXJhbFRleHQgPSB0aGlzLm9wdGlvbnMudG9vbHRpcFRleHRbcGx1cmFsTmFtZV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMudG9vbHRpcFRleHRbcGx1cmFsTmFtZV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIltcIiArIHBsdXJhbE5hbWUgKyBcIl1cIjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IGRheXMgKyBcIiBcIiArIHBsdXJhbFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9vbHRpcCh0YXJnZXQsIHRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpeCBidWcgaU9TIDEwLTEyIC0gaHR0cHM6Ly9naXRodWIuY29tL3dha2lyaW4vTGl0ZXBpY2tlci9pc3N1ZXMvMTI0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlEZXZpY2UgPSAvKGlwaG9uZXxpcGFkKS9pLnRlc3QodWEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpT1MxMW9yMTIgPSAvT1MgMShbMC0yXSkvaS50ZXN0KHVhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaURldmljZSAmJiBpT1MxMW9yMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVUb29sdGlwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTGl0ZXBpY2tlci5wcm90b3R5cGUub25Nb3VzZUxlYXZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5hbGxvd1JlcGlja1xyXG4gICAgICAgICAgICB8fCAodGhpcy5vcHRpb25zLmFsbG93UmVwaWNrICYmICF0aGlzLm9wdGlvbnMuc3RhcnREYXRlICYmICF0aGlzLm9wdGlvbnMuZW5kRGF0ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfTtcclxuICAgIExpdGVwaWNrZXIucHJvdG90eXBlLm9uSW5wdXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLnBhcnNlSW5wdXQoKSwgc3RhcnRWYWx1ZSA9IF9hWzBdLCBlbmRWYWx1ZSA9IF9hWzFdO1xyXG4gICAgICAgIHZhciBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGRhdGVGb3JtYXQgPSB0aGlzLm9wdGlvbnMuZm9ybWF0O1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCkge1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gc3RhcnRWYWx1ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWVcclxuICAgICAgICAgICAgICAgICYmIGVuZFZhbHVlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZVxyXG4gICAgICAgICAgICAgICAgJiYgc3RhcnRWYWx1ZS5mb3JtYXQoZGF0ZUZvcm1hdCkgPT09IHRoaXMub3B0aW9ucy5lbGVtZW50LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAmJiBlbmRWYWx1ZS5mb3JtYXQoZGF0ZUZvcm1hdCkgPT09IHRoaXMub3B0aW9ucy5lbGVtZW50RW5kLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZSkge1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gc3RhcnRWYWx1ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWVcclxuICAgICAgICAgICAgICAgICYmIHN0YXJ0VmFsdWUuZm9ybWF0KGRhdGVGb3JtYXQpID09PSB0aGlzLm9wdGlvbnMuZWxlbWVudC52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSBzdGFydFZhbHVlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZVxyXG4gICAgICAgICAgICAgICAgJiYgZW5kVmFsdWUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lXHJcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gICAgICAgICAgICAgICAgJiYgXCJcIiArIHN0YXJ0VmFsdWUuZm9ybWF0KGRhdGVGb3JtYXQpICsgdGhpcy5vcHRpb25zLmRlbGltaXRlciArIGVuZFZhbHVlLmZvcm1hdChkYXRlRm9ybWF0KSA9PT0gdGhpcy5vcHRpb25zLmVsZW1lbnQudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGlmIChlbmRWYWx1ZSAmJiBzdGFydFZhbHVlLmdldFRpbWUoKSA+IGVuZFZhbHVlLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBEYXRlID0gc3RhcnRWYWx1ZS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgc3RhcnRWYWx1ZSA9IGVuZFZhbHVlLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICBlbmRWYWx1ZSA9IHRlbXBEYXRlLmNsb25lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKHN0YXJ0VmFsdWUsIHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcclxuICAgICAgICAgICAgaWYgKGVuZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZW5kRGF0ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGVuZFZhbHVlLCB0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVJbnB1dCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB2YXIgZGF0ZUdvID0gc3RhcnRWYWx1ZS5jbG9uZSgpO1xyXG4gICAgICAgICAgICB2YXIgbW9udGhJZHggPSAwO1xyXG4gICAgICAgICAgICB2YXIgaXNTdGFydCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWxlbWVudEVuZCkge1xyXG4gICAgICAgICAgICAgICAgaXNTdGFydCA9IHN0YXJ0VmFsdWUuZm9ybWF0KGRhdGVGb3JtYXQpID09PSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpc1N0YXJ0ID0gZXZlbnQudGFyZ2V0LnZhbHVlLnN0YXJ0c1dpdGgoc3RhcnRWYWx1ZS5mb3JtYXQoZGF0ZUZvcm1hdCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNTdGFydCkge1xyXG4gICAgICAgICAgICAgICAgZGF0ZUdvID0gZW5kVmFsdWUuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIG1vbnRoSWR4ID0gdGhpcy5vcHRpb25zLm51bWJlck9mTW9udGhzIC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3NlbGVjdGVkJywgdGhpcy5nZXRTdGFydERhdGUoKSwgdGhpcy5nZXRFbmREYXRlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmdvdG9EYXRlKGRhdGVHbywgbW9udGhJZHgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gTGl0ZXBpY2tlcjtcclxufShjYWxlbmRhcl8xLkNhbGVuZGFyKSk7XHJcbmV4cG9ydHMuTGl0ZXBpY2tlciA9IExpdGVwaWNrZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGRhdGV0aW1lXzEgPSByZXF1aXJlKFwiLi9kYXRldGltZVwiKTtcclxudmFyIGxpdGVwaWNrZXJfMSA9IHJlcXVpcmUoXCIuL2xpdGVwaWNrZXJcIik7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICBpZiAoZWwgPT09IHZvaWQgMCkgeyBlbCA9IG51bGw7IH1cclxuICAgIHRoaXMuZW1pdCgnYmVmb3JlOnNob3cnLCBlbCk7XHJcbiAgICBjb25zb2xlLmxvZygnYXNkJyk7XHJcbiAgICB2YXIgZWxlbWVudCA9IGVsID8gZWwgOiB0aGlzLm9wdGlvbnMuZWxlbWVudDtcclxuICAgIHRoaXMudHJpZ2dlckVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgaWYgKHRoaXMuaXNTaG93bmluZygpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pbmxpbmVNb2RlKSB7XHJcbiAgICAgICAgdGhpcy51aS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICAgICAgdGhpcy51aS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XHJcbiAgICAgICAgdGhpcy51aS5zdHlsZS50b3AgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudWkuc3R5bGUubGVmdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy51aS5zdHlsZS5ib3R0b20gPSBudWxsO1xyXG4gICAgICAgIHRoaXMudWkuc3R5bGUucmlnaHQgPSBudWxsO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuc2Nyb2xsVG9EYXRlKGVsKTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB0aGlzLnVpLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIHRoaXMudWkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB0aGlzLnVpLnN0eWxlLnpJbmRleCA9IHRoaXMub3B0aW9ucy56SW5kZXg7XHJcbiAgICB2YXIgcG9zaXRpb24gPSB0aGlzLmZpbmRQb3NpdGlvbihlbGVtZW50KTtcclxuICAgIHRoaXMudWkuc3R5bGUudG9wID0gcG9zaXRpb24udG9wICsgXCJweFwiO1xyXG4gICAgdGhpcy51aS5zdHlsZS5sZWZ0ID0gcG9zaXRpb24ubGVmdCArIFwicHhcIjtcclxuICAgIHRoaXMudWkuc3R5bGUucmlnaHQgPSBudWxsO1xyXG4gICAgdGhpcy51aS5zdHlsZS5ib3R0b20gPSBudWxsO1xyXG4gICAgdGhpcy5lbWl0KCdzaG93JywgZWwpO1xyXG59O1xyXG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghdGhpcy5pc1Nob3duaW5nKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmRhdGVQaWNrZWQubGVuZ3RoID0gMDtcclxuICAgIHRoaXMudXBkYXRlSW5wdXQoKTtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuaW5saW5lTW9kZSkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy51aS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgdGhpcy5lbWl0KCdoaWRlJyk7XHJcbn07XHJcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5nZXREYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RhcnREYXRlKCk7XHJcbn07XHJcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5nZXRTdGFydERhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc3RhcnREYXRlLmNsb25lKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufTtcclxubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLmdldEVuZERhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmVuZERhdGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVuZERhdGUuY2xvbmUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59O1xyXG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuc2V0RGF0ZSA9IGZ1bmN0aW9uIChkYXRlLCBmb3JjZSkge1xyXG4gICAgaWYgKGZvcmNlID09PSB2b2lkIDApIHsgZm9yY2UgPSBmYWxzZTsgfVxyXG4gICAgdmFyIGQgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShkYXRlLCB0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XHJcbiAgICB2YXIgaXNMb2NrZWQgPSB1dGlsc18xLmRhdGVJc0xvY2tlZChkLCB0aGlzLm9wdGlvbnMsIFtkXSk7XHJcbiAgICBpZiAoaXNMb2NrZWQgJiYgIWZvcmNlKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpkYXRlJywgZCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXJ0RGF0ZShkYXRlKTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlubGluZU1vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbWl0KCdzZWxlY3RlZCcsIHRoaXMuZ2V0RGF0ZSgpKTtcclxuICAgIH1cclxufTtcclxubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLnNldFN0YXJ0RGF0ZSA9IGZ1bmN0aW9uIChkYXRlKSB7XHJcbiAgICBpZiAoIWRhdGUpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGRhdGUsIHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcclxuICAgIHRoaXMudXBkYXRlSW5wdXQoKTtcclxufTtcclxubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLnNldEVuZERhdGUgPSBmdW5jdGlvbiAoZGF0ZSkge1xyXG4gICAgaWYgKCFkYXRlKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIHRoaXMub3B0aW9ucy5lbmREYXRlID0gbmV3IGRhdGV0aW1lXzEuRGF0ZVRpbWUoZGF0ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5zdGFydERhdGUuZ2V0VGltZSgpID4gdGhpcy5vcHRpb25zLmVuZERhdGUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuZERhdGUgPSB0aGlzLm9wdGlvbnMuc3RhcnREYXRlLmNsb25lKCk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGRhdGUsIHRoaXMub3B0aW9ucy5mb3JtYXQsIHRoaXMub3B0aW9ucy5sYW5nKTtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlSW5wdXQoKTtcclxufTtcclxubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLnNldERhdGVSYW5nZSA9IGZ1bmN0aW9uIChkYXRlMSwgZGF0ZTIsIGZvcmNlKSB7XHJcbiAgICBpZiAoZm9yY2UgPT09IHZvaWQgMCkgeyBmb3JjZSA9IGZhbHNlOyB9XHJcbiAgICAvLyBzdG9wIHJlcGlja2luZyBieSByZXNldHRpbmcgdGhlIHRyaWdnZXIgZWxlbWVudFxyXG4gICAgdGhpcy50cmlnZ2VyRWxlbWVudCA9IHVuZGVmaW5lZDtcclxuICAgIHZhciBkMSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKGRhdGUxLCB0aGlzLm9wdGlvbnMuZm9ybWF0LCB0aGlzLm9wdGlvbnMubGFuZyk7XHJcbiAgICB2YXIgZDIgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShkYXRlMiwgdGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xyXG4gICAgdmFyIGlzTG9ja2VkID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FsbG93TG9ja0RheXNJblJhbmdlKSB7XHJcbiAgICAgICAgaXNMb2NrZWQgPSB1dGlsc18xLnJhbmdlSXNMb2NrZWQoW2QxLCBkMl0sIHRoaXMub3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpc0xvY2tlZCA9IHV0aWxzXzEuZGF0ZUlzTG9ja2VkKGQxLCB0aGlzLm9wdGlvbnMsIFtkMSwgZDJdKVxyXG4gICAgICAgICAgICB8fCB1dGlsc18xLmRhdGVJc0xvY2tlZChkMiwgdGhpcy5vcHRpb25zLCBbZDEsIGQyXSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNMb2NrZWQgJiYgIWZvcmNlKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcjpyYW5nZScsIFtkMSwgZDJdKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhcnREYXRlKGQxKTtcclxuICAgICAgICB0aGlzLnNldEVuZERhdGUoZDIpO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW5saW5lTW9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUlucHV0KCk7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdzZWxlY3RlZCcsIHRoaXMuZ2V0U3RhcnREYXRlKCksIHRoaXMuZ2V0RW5kRGF0ZSgpKTtcclxuICAgIH1cclxufTtcclxubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLmdvdG9EYXRlID0gZnVuY3Rpb24gKGRhdGUsIGlkeCkge1xyXG4gICAgaWYgKGlkeCA9PT0gdm9pZCAwKSB7IGlkeCA9IDA7IH1cclxuICAgIHZhciB0b0RhdGUgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShkYXRlKTtcclxuICAgIHRvRGF0ZS5zZXREYXRlKDEpO1xyXG4gICAgdGhpcy5jYWxlbmRhcnNbaWR4XSA9IHRvRGF0ZS5jbG9uZSgpO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxufTtcclxubGl0ZXBpY2tlcl8xLkxpdGVwaWNrZXIucHJvdG90eXBlLnNldExvY2tEYXlzID0gZnVuY3Rpb24gKGFycmF5KSB7XHJcbiAgICB0aGlzLm9wdGlvbnMubG9ja0RheXMgPSBkYXRldGltZV8xLkRhdGVUaW1lLmNvbnZlcnRBcnJheShhcnJheSwgdGhpcy5vcHRpb25zLmxvY2tEYXlzRm9ybWF0KTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbn07XHJcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5zZXRIaWdobGlnaHRlZERheXMgPSBmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgIHRoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXMgPSBkYXRldGltZV8xLkRhdGVUaW1lLmNvbnZlcnRBcnJheShhcnJheSwgdGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5c0Zvcm1hdCk7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG59O1xyXG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICBkZWxldGUgb3B0aW9ucy5lbGVtZW50O1xyXG4gICAgZGVsZXRlIG9wdGlvbnMuZWxlbWVudEVuZDtcclxuICAgIGRlbGV0ZSBvcHRpb25zLnBhcmVudEVsO1xyXG4gICAgaWYgKG9wdGlvbnMuc3RhcnREYXRlKSB7XHJcbiAgICAgICAgb3B0aW9ucy5zdGFydERhdGUgPSBuZXcgZGF0ZXRpbWVfMS5EYXRlVGltZShvcHRpb25zLnN0YXJ0RGF0ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMuZW5kRGF0ZSkge1xyXG4gICAgICAgIG9wdGlvbnMuZW5kRGF0ZSA9IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKG9wdGlvbnMuZW5kRGF0ZSwgdGhpcy5vcHRpb25zLmZvcm1hdCwgdGhpcy5vcHRpb25zLmxhbmcpO1xyXG4gICAgfVxyXG4gICAgdmFyIGRyb3Bkb3ducyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMuZHJvcGRvd25zKSwgb3B0aW9ucy5kcm9wZG93bnMpO1xyXG4gICAgdmFyIGJ1dHRvblRleHQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zLmJ1dHRvblRleHQpLCBvcHRpb25zLmJ1dHRvblRleHQpO1xyXG4gICAgdmFyIHRvb2x0aXBUZXh0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucy50b29sdGlwVGV4dCksIG9wdGlvbnMudG9vbHRpcFRleHQpO1xyXG4gICAgdGhpcy5vcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMub3B0aW9ucyksIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5vcHRpb25zLmRyb3Bkb3ducyA9IF9fYXNzaWduKHt9LCBkcm9wZG93bnMpO1xyXG4gICAgdGhpcy5vcHRpb25zLmJ1dHRvblRleHQgPSBfX2Fzc2lnbih7fSwgYnV0dG9uVGV4dCk7XHJcbiAgICB0aGlzLm9wdGlvbnMudG9vbHRpcFRleHQgPSBfX2Fzc2lnbih7fSwgdG9vbHRpcFRleHQpO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5zaW5nbGVNb2RlICYmICEodGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSBpbnN0YW5jZW9mIGRhdGV0aW1lXzEuRGF0ZVRpbWUpKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuZERhdGUgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuc2luZ2xlTW9kZVxyXG4gICAgICAgICYmICghKHRoaXMub3B0aW9ucy5zdGFydERhdGUgaW5zdGFuY2VvZiBkYXRldGltZV8xLkRhdGVUaW1lKVxyXG4gICAgICAgICAgICB8fCAhKHRoaXMub3B0aW9ucy5lbmREYXRlIGluc3RhbmNlb2YgZGF0ZXRpbWVfMS5EYXRlVGltZSkpKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuZERhdGUgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgdGhpcy5vcHRpb25zLm51bWJlck9mTW9udGhzOyBpZHggKz0gMSkge1xyXG4gICAgICAgIHZhciBkYXRlID0gdGhpcy5vcHRpb25zLnN0YXJ0RGF0ZVxyXG4gICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5zdGFydERhdGUuY2xvbmUoKVxyXG4gICAgICAgICAgICA6IG5ldyBkYXRldGltZV8xLkRhdGVUaW1lKCk7XHJcbiAgICAgICAgZGF0ZS5zZXREYXRlKDEpO1xyXG4gICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgaWR4KTtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyc1tpZHhdID0gZGF0ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm9wdGlvbnMubG9ja0RheXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmxvY2tEYXlzID0gZGF0ZXRpbWVfMS5EYXRlVGltZS5jb252ZXJ0QXJyYXkodGhpcy5vcHRpb25zLmxvY2tEYXlzLCB0aGlzLm9wdGlvbnMubG9ja0RheXNGb3JtYXQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmhpZ2hsaWdodGVkRGF5cyA9IGRhdGV0aW1lXzEuRGF0ZVRpbWUuY29udmVydEFycmF5KHRoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXMsIHRoaXMub3B0aW9ucy5oaWdobGlnaHRlZERheXNGb3JtYXQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuaW5saW5lTW9kZSkge1xyXG4gICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVJbnB1dCgpO1xyXG59O1xyXG5saXRlcGlja2VyXzEuTGl0ZXBpY2tlci5wcm90b3R5cGUuY2xlYXJTZWxlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMuc3RhcnREYXRlID0gbnVsbDtcclxuICAgIHRoaXMub3B0aW9ucy5lbmREYXRlID0gbnVsbDtcclxuICAgIHRoaXMuZGF0ZVBpY2tlZC5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy51cGRhdGVJbnB1dCgpO1xyXG4gICAgaWYgKHRoaXMuaXNTaG93bmluZygpKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCgnY2xlYXI6c2VsZWN0aW9uJyk7XHJcbn07XHJcbmxpdGVwaWNrZXJfMS5MaXRlcGlja2VyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMudWkgJiYgdGhpcy51aS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgdGhpcy51aS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMudWkpO1xyXG4gICAgICAgIHRoaXMudWkgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCdkZXN0cm95Jyk7XHJcbn07XHJcbiIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2R0cy1jc3MtbW9kdWxlcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtMyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24gaW5zZXJ0QXRUb3AoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgICAgICAgICAgICAgdmFyIGxhc3RJbnNlcnRlZEVsZW1lbnQgPSB3aW5kb3cuX2xhc3RFbGVtZW50SW5zZXJ0ZWRCeVN0eWxlTG9hZGVyO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF3aW5kb3cuZGlzYWJsZUxpdGVwaWNrZXJTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICAgIGlmICghbGFzdEluc2VydGVkRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGFzdEluc2VydGVkRWxlbWVudC5uZXh0U2libGluZykge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGxhc3RJbnNlcnRlZEVsZW1lbnQubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5fbGFzdEVsZW1lbnRJbnNlcnRlZEJ5U3R5bGVMb2FkZXIgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBmaW5kTmVzdGVkTW9udGhJdGVtKG1vbnRoSXRlbSkge1xyXG4gICAgdmFyIGNoaWxkcmVuID0gbW9udGhJdGVtLnBhcmVudE5vZGUuY2hpbGROb2RlcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpID0gaSArIDEpIHtcclxuICAgICAgICB2YXIgY3VyTm9kZSA9IGNoaWxkcmVuLml0ZW0oaSk7XHJcbiAgICAgICAgaWYgKGN1ck5vZGUgPT09IG1vbnRoSXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5leHBvcnRzLmZpbmROZXN0ZWRNb250aEl0ZW0gPSBmaW5kTmVzdGVkTW9udGhJdGVtO1xyXG5mdW5jdGlvbiBkYXRlSXNMb2NrZWQoZGF0ZSwgb3B0aW9ucywgcGlja2VkRGF0ZXMpIHtcclxuICAgIHZhciBpc0xvY2tlZCA9IGZhbHNlO1xyXG4gICAgaWYgKG9wdGlvbnMubG9ja0RheXMubGVuZ3RoKSB7XHJcbiAgICAgICAgaXNMb2NrZWQgPSBvcHRpb25zLmxvY2tEYXlzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICAgICAgaWYgKGQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUuaXNCZXR3ZWVuKGRbMF0sIGRbMV0sIG9wdGlvbnMubG9ja0RheXNJbmNsdXNpdml0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGQuaXNTYW1lKGRhdGUsICdkYXknKTtcclxuICAgICAgICB9KS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzTG9ja2VkICYmIHR5cGVvZiBvcHRpb25zLmxvY2tEYXlzRmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgaXNMb2NrZWQgPSBvcHRpb25zLmxvY2tEYXlzRmlsdGVyLmNhbGwodGhpcywgZGF0ZS5jbG9uZSgpLCBudWxsLCBwaWNrZWREYXRlcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNMb2NrZWQ7XHJcbn1cclxuZXhwb3J0cy5kYXRlSXNMb2NrZWQgPSBkYXRlSXNMb2NrZWQ7XHJcbmZ1bmN0aW9uIHJhbmdlSXNMb2NrZWQoZGF5cywgb3B0aW9ucykge1xyXG4gICAgdmFyIGlzTG9ja2VkID0gZmFsc2U7XHJcbiAgICBpZiAob3B0aW9ucy5sb2NrRGF5cy5sZW5ndGgpIHtcclxuICAgICAgICBpc0xvY2tlZCA9IG9wdGlvbnMubG9ja0RheXNcclxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgICAgICBpZiAoZCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNFcXVhbFRvUmFuZ2UgPSBkYXlzWzBdLnRvRGF0ZVN0cmluZygpID09PSBkWzBdLnRvRGF0ZVN0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgZGF5c1sxXS50b0RhdGVTdHJpbmcoKSA9PT0gZFsxXS50b0RhdGVTdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkWzBdLmlzQmV0d2VlbihkYXlzWzBdLCBkYXlzWzFdLCBvcHRpb25zLmxvY2tEYXlzSW5jbHVzaXZpdHkpXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgZFsxXS5pc0JldHdlZW4oZGF5c1swXSwgZGF5c1sxXSwgb3B0aW9ucy5sb2NrRGF5c0luY2x1c2l2aXR5KVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IGlzRXF1YWxUb1JhbmdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkLmlzQmV0d2VlbihkYXlzWzBdLCBkYXlzWzFdLCBvcHRpb25zLmxvY2tEYXlzSW5jbHVzaXZpdHkpO1xyXG4gICAgICAgIH0pLmxlbmd0aDtcclxuICAgIH1cclxuICAgIGlmICghaXNMb2NrZWQgJiYgdHlwZW9mIG9wdGlvbnMubG9ja0RheXNGaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBpc0xvY2tlZCA9IG9wdGlvbnMubG9ja0RheXNGaWx0ZXIuY2FsbCh0aGlzLCBkYXlzWzBdLmNsb25lKCksIGRheXNbMV0uY2xvbmUoKSwgZGF5cyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNMb2NrZWQ7XHJcbn1cclxuZXhwb3J0cy5yYW5nZUlzTG9ja2VkID0gcmFuZ2VJc0xvY2tlZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==