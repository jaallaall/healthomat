"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/context/Drawer/index.tsx":
/*!**************************************!*\
  !*** ./src/context/Drawer/index.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToggleDrawerContext\": function() { return /* binding */ ToggleDrawerContext; },\n/* harmony export */   \"ToggleDrawerProvider\": function() { return /* binding */ ToggleDrawerProvider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar ToggleDrawerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    state: {\n        left: false\n    },\n    toggleDrawer: function(anchor, open) {}\n});\nvar ToggleDrawerProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        left: false\n    }), state = ref[0], setState = ref[1];\n    var toggleDrawerMemo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        return {\n            state: state,\n            toggleDrawer: function(anchor, open) {\n                return function(event) {\n                    if (event.type === \"keydown\" && (event.key === \"Tab\" || event.key === \"Shift\")) {\n                        return;\n                    }\n                    setState((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, state), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, anchor, open)));\n                };\n            }\n        };\n    }, [\n        state\n    ]);\n    // console.log(state);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToggleDrawerContext.Provider, {\n        value: toggleDrawerMemo,\n        children: children\n    }, void 0, false, {\n        fileName: \"F:\\\\healthomat-solution\\\\src\\\\context\\\\Drawer\\\\index.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, _this);\n};\n_s(ToggleDrawerProvider, \"68Bckj1ZATQJIGiidMX35T9g0LE=\");\n_c = ToggleDrawerProvider;\nvar _c;\n$RefreshReg$(_c, \"ToggleDrawerProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9EcmF3ZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUF5RDs7QUFFbEQsSUFBTUcsbUJBQW1CLGlCQUFHSCxvREFBYSxDQUFDO0lBQy9DSSxLQUFLLEVBQUU7UUFBRUMsSUFBSSxFQUFFLEtBQUs7S0FBRTtJQUN0QkMsWUFBWSxFQUFFLFNBQUNDLE1BQWMsRUFBRUMsSUFBYSxFQUFLLEVBQUU7Q0FDcEQsQ0FBQyxDQUFDO0FBRUksSUFBTUMsb0JBQW9CLEdBRTVCLGdCQUFzQztRQUFuQ0MsUUFBUSxTQUFSQSxRQUFROztJQUNkLElBQTBCUixHQUV4QixHQUZ3QkEsK0NBQVEsQ0FBQztRQUNqQ0csSUFBSSxFQUFFLEtBQUs7S0FDWixDQUFDLEVBRktELEtBQUssR0FBY0YsR0FFeEIsR0FGVSxFQUFFUyxRQUFRLEdBQUlULEdBRXhCLEdBRm9CO0lBSXRCLElBQU1VLGdCQUFnQixHQUFHWCw4Q0FBTyxDQUM5QjtlQUFPO1lBQ0xHLEtBQUssRUFBTEEsS0FBSztZQUNMRSxZQUFZLEVBQ1YsU0FBQ0MsTUFBYyxFQUFFQyxJQUFhO3VCQUM5QixTQUFDSyxLQUE2QyxFQUFLO29CQUNqRCxJQUNFQSxLQUFLLENBQUNDLElBQUksS0FBSyxTQUFTLElBQ3hCLENBQUMsS0FBTSxDQUF5QkMsR0FBRyxLQUFLLEtBQUssSUFDM0MsS0FBTSxDQUF5QkEsR0FBRyxLQUFLLE9BQU8sQ0FBQyxFQUNqRDt3QkFDQSxPQUFPO3FCQUNSO29CQUVESixRQUFRLENBQUMsd0tBQUtQLEtBQUssR0FBRSxxRkFBQ0csTUFBTSxFQUFHQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2lCQUN4QzthQUFBO1NBQ0o7S0FBQyxFQUNGO1FBQUNKLEtBQUs7S0FBQyxDQUNSO0lBRUQsc0JBQXNCO0lBRXRCLHFCQUNFLDhEQUFDRCxtQkFBbUIsQ0FBQ2EsUUFBUTtRQUFDQyxLQUFLLEVBQUVMLGdCQUFnQjtrQkFDbERGLFFBQVE7Ozs7O2FBQ29CLENBQy9CO0NBQ0gsQ0FBQztHQWxDV0Qsb0JBQW9CO0FBQXBCQSxLQUFBQSxvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvRHJhd2VyL2luZGV4LnRzeD81NGRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgVG9nZ2xlRHJhd2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xyXG4gIHN0YXRlOiB7IGxlZnQ6IGZhbHNlIH0sXHJcbiAgdG9nZ2xlRHJhd2VyOiAoYW5jaG9yOiBcImxlZnRcIiwgb3BlbjogYm9vbGVhbikgPT4ge30sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvZ2dsZURyYXdlclByb3ZpZGVyOiBSZWFjdC5GQzx7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufT4gPSAoeyBjaGlsZHJlbiB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGxlZnQ6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0b2dnbGVEcmF3ZXJNZW1vID0gdXNlTWVtbyhcclxuICAgICgpID0+ICh7XHJcbiAgICAgIHN0YXRlLFxyXG4gICAgICB0b2dnbGVEcmF3ZXI6XHJcbiAgICAgICAgKGFuY2hvcjogXCJsZWZ0XCIsIG9wZW46IGJvb2xlYW4pID0+XHJcbiAgICAgICAgKGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50IHwgUmVhY3QuTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBldmVudC50eXBlID09PSBcImtleWRvd25cIiAmJlxyXG4gICAgICAgICAgICAoKGV2ZW50IGFzIFJlYWN0LktleWJvYXJkRXZlbnQpLmtleSA9PT0gXCJUYWJcIiB8fFxyXG4gICAgICAgICAgICAgIChldmVudCBhcyBSZWFjdC5LZXlib2FyZEV2ZW50KS5rZXkgPT09IFwiU2hpZnRcIilcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2FuY2hvcl06IG9wZW4gfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgW3N0YXRlXVxyXG4gICk7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUb2dnbGVEcmF3ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0b2dnbGVEcmF3ZXJNZW1vfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Ub2dnbGVEcmF3ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiVG9nZ2xlRHJhd2VyQ29udGV4dCIsInN0YXRlIiwibGVmdCIsInRvZ2dsZURyYXdlciIsImFuY2hvciIsIm9wZW4iLCJUb2dnbGVEcmF3ZXJQcm92aWRlciIsImNoaWxkcmVuIiwic2V0U3RhdGUiLCJ0b2dnbGVEcmF3ZXJNZW1vIiwiZXZlbnQiLCJ0eXBlIiwia2V5IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/Drawer/index.tsx\n"));

/***/ }),

/***/ "./node_modules/@swc/helpers/src/_object_spread_props.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@swc/helpers/src/_object_spread_props.mjs ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _objectSpreadProps; }\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n    if (enumerableOnly) {\n      symbols = symbols.filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n      });\n    }\n    keys.push.apply(keys, symbols);\n  }\n  return keys;\n}\n\nfunction _objectSpreadProps(target, source) {\n  source = source != null ? source : {}\n  if (Object.getOwnPropertyDescriptors) {\n    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n  } else {\n    ownKeys(Object(source)).forEach(function (key) {\n      Object.defineProperty(\n        target,\n        key,\n        Object.getOwnPropertyDescriptor(source, key)\n      );\n    });\n  }\n\n  return target;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL3NyYy9fb2JqZWN0X3NwcmVhZF9wcm9wcy5tanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9zcmMvX29iamVjdF9zcHJlYWRfcHJvcHMubWpzPzE0MTUiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHtcbiAgICAgIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuICByZXR1cm4ga2V5cztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFNwcmVhZFByb3BzKHRhcmdldCwgc291cmNlKSB7XG4gIHNvdXJjZSA9IHNvdXJjZSAhPSBudWxsID8gc291cmNlIDoge31cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgfSBlbHNlIHtcbiAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBrZXksXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/src/_object_spread_props.mjs\n"));

/***/ })

});