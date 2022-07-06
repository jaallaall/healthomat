"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_components_Doctors_Toolbar_MenuXs_tsx";
exports.ids = ["src_components_Doctors_Toolbar_MenuXs_tsx"];
exports.modules = {

/***/ "./src/components/Doctors/Toolbar/MenuXs.tsx":
/*!***************************************************!*\
  !*** ./src/components/Doctors/Toolbar/MenuXs.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"@mui/icons-material/Menu\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst MenuXs = ({ menu  })=>{\n    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();\n    const { 0: anchorElNav , 1: setAnchorElNav  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const handleOpenNavMenu = (event)=>{\n        setAnchorElNav(event.currentTarget);\n    };\n    const handleCloseNavMenu = ()=>{\n        setAnchorElNav(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n                size: \"large\",\n                \"aria-label\": \"account of current user\",\n                \"aria-controls\": \"menu-appbar\",\n                \"aria-haspopup\": \"true\",\n                onClick: handleOpenNavMenu,\n                color: \"inherit\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n                    fileName: \"F:\\\\healthomat\\\\src\\\\components\\\\Doctors\\\\Toolbar\\\\MenuXs.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\healthomat\\\\src\\\\components\\\\Doctors\\\\Toolbar\\\\MenuXs.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n                id: \"menu-appbar\",\n                anchorEl: anchorElNav,\n                anchorOrigin: {\n                    vertical: \"bottom\",\n                    horizontal: \"left\"\n                },\n                keepMounted: true,\n                transformOrigin: {\n                    vertical: \"top\",\n                    horizontal: \"left\"\n                },\n                open: Boolean(anchorElNav),\n                onClose: handleCloseNavMenu,\n                sx: {\n                    display: {\n                        xs: \"block\",\n                        md: \"none\"\n                    },\n                    px: 3\n                },\n                children: menu.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {\n                        onClick: handleCloseNavMenu,\n                        sx: {\n                            py: 0\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            color: \"inherit\",\n                            children: t(item)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\healthomat\\\\src\\\\components\\\\Doctors\\\\Toolbar\\\\MenuXs.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined)\n                    }, item, false, {\n                        fileName: \"F:\\\\healthomat\\\\src\\\\components\\\\Doctors\\\\Toolbar\\\\MenuXs.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"F:\\\\healthomat\\\\src\\\\components\\\\Doctors\\\\Toolbar\\\\MenuXs.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuXs);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Eb2N0b3JzL1Rvb2xiYXIvTWVudVhzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQWdEO0FBQ21CO0FBRXJCO0FBQ2I7QUFNakMsTUFBTU8sTUFBTSxHQUFvQixDQUFDLEVBQUVDLElBQUksR0FBRSxHQUF5QjtJQUNoRSxNQUFNLEVBQUVDLENBQUMsR0FBRSxHQUFHSiw0REFBYyxFQUFFO0lBQzlCLE1BQU0sS0FBQ0ssV0FBVyxNQUFFQyxjQUFjLE1BQUlMLCtDQUFRLENBQXFCLElBQUksQ0FBQztJQUV4RSxNQUFNTSxpQkFBaUIsR0FBRyxDQUFDQyxLQUFvQyxHQUFLO1FBQ2xFRixjQUFjLENBQUNFLEtBQUssQ0FBQ0MsYUFBYSxDQUFDLENBQUM7S0FDckM7SUFDRCxNQUFNQyxrQkFBa0IsR0FBRyxJQUFNO1FBQy9CSixjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdEI7SUFDRCxxQkFDRTs7MEJBQ0UsOERBQUNULHFEQUFVO2dCQUNUYyxJQUFJLEVBQUMsT0FBTztnQkFDWkMsWUFBVSxFQUFDLHlCQUF5QjtnQkFDcENDLGVBQWEsRUFBQyxhQUFhO2dCQUMzQkMsZUFBYSxFQUFDLE1BQU07Z0JBQ3BCQyxPQUFPLEVBQUVSLGlCQUFpQjtnQkFDMUJTLEtBQUssRUFBQyxTQUFTOzBCQUVmLDRFQUFDckIsaUVBQVE7Ozs7NkJBQUc7Ozs7O3lCQUNEOzBCQUNiLDhEQUFDRywrQ0FBSTtnQkFDSG1CLEVBQUUsRUFBQyxhQUFhO2dCQUNoQkMsUUFBUSxFQUFFYixXQUFXO2dCQUNyQmMsWUFBWSxFQUFFO29CQUNaQyxRQUFRLEVBQUUsUUFBUTtvQkFDbEJDLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjtnQkFDREMsV0FBVztnQkFDWEMsZUFBZSxFQUFFO29CQUNmSCxRQUFRLEVBQUUsS0FBSztvQkFDZkMsVUFBVSxFQUFFLE1BQU07aUJBQ25CO2dCQUNERyxJQUFJLEVBQUVDLE9BQU8sQ0FBQ3BCLFdBQVcsQ0FBQztnQkFDMUJxQixPQUFPLEVBQUVoQixrQkFBa0I7Z0JBQzNCaUIsRUFBRSxFQUFFO29CQUNGQyxPQUFPLEVBQUU7d0JBQUVDLEVBQUUsRUFBRSxPQUFPO3dCQUFFQyxFQUFFLEVBQUUsTUFBTTtxQkFBRTtvQkFDcENDLEVBQUUsRUFBRSxDQUFDO2lCQUNOOzBCQUVBNUIsSUFBSSxDQUFDNkIsR0FBRyxDQUFDLENBQUNDLElBQVksaUJBQ3JCLDhEQUFDbEMsbURBQVE7d0JBQVlnQixPQUFPLEVBQUVMLGtCQUFrQjt3QkFBRWlCLEVBQUUsRUFBRTs0QkFBRU8sRUFBRSxFQUFFLENBQUM7eUJBQUU7a0NBQzdELDRFQUFDdEMsaURBQU07NEJBQUNvQixLQUFLLEVBQUMsU0FBUztzQ0FBRVosQ0FBQyxDQUFDNkIsSUFBSSxDQUFTOzs7OztxQ0FBVTt1QkFEckNBLElBQUk7Ozs7aUNBRVIsQ0FDWDs7Ozs7eUJBQ0c7O29CQUNOLENBQ0g7Q0FDSDtBQUVELGlFQUFlL0IsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVhbHRob21hdC8uL3NyYy9jb21wb25lbnRzL0RvY3RvcnMvVG9vbGJhci9NZW51WHMudHN4P2RmOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lbnVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL01lbnVcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBJY29uQnV0dG9uLCBNZW51LCBNZW51SXRlbSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IFRLZXkgfSBmcm9tIFwiaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJuZXh0LWkxOG5leHRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgbWVudTogc3RyaW5nW107XHJcbn1cclxuXHJcbmNvbnN0IE1lbnVYczogUmVhY3QuRkM8UHJvcHM+ID0gKHsgbWVudSB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcbiAgY29uc3QgW2FuY2hvckVsTmF2LCBzZXRBbmNob3JFbE5hdl0gPSB1c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuTmF2TWVudSA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcclxuICAgIHNldEFuY2hvckVsTmF2KGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VOYXZNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWxOYXYobnVsbCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEljb25CdXR0b25cclxuICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJhY2NvdW50IG9mIGN1cnJlbnQgdXNlclwiXHJcbiAgICAgICAgYXJpYS1jb250cm9scz1cIm1lbnUtYXBwYmFyXCJcclxuICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlT3Blbk5hdk1lbnV9XHJcbiAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgaWQ9XCJtZW51LWFwcGJhclwiXHJcbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsTmF2fVxyXG4gICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgdmVydGljYWw6IFwiYm90dG9tXCIsXHJcbiAgICAgICAgICBob3Jpem9udGFsOiBcImxlZnRcIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIGtlZXBNb3VudGVkXHJcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XHJcbiAgICAgICAgICB2ZXJ0aWNhbDogXCJ0b3BcIixcclxuICAgICAgICAgIGhvcml6b250YWw6IFwibGVmdFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbE5hdil9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VOYXZNZW51fVxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiB7IHhzOiBcImJsb2NrXCIsIG1kOiBcIm5vbmVcIiB9LFxyXG4gICAgICAgICAgcHg6IDMsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHttZW51Lm1hcCgoaXRlbTogc3RyaW5nKSA9PiAoXHJcbiAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtpdGVtfSBvbkNsaWNrPXtoYW5kbGVDbG9zZU5hdk1lbnV9IHN4PXt7IHB5OiAwIH19PlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPnt0KGl0ZW0gYXMgVEtleSl9PC9CdXR0b24+XHJcbiAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L01lbnU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudVhzO1xyXG4iXSwibmFtZXMiOlsiTWVudUljb24iLCJCdXR0b24iLCJJY29uQnV0dG9uIiwiTWVudSIsIk1lbnVJdGVtIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VTdGF0ZSIsIk1lbnVYcyIsIm1lbnUiLCJ0IiwiYW5jaG9yRWxOYXYiLCJzZXRBbmNob3JFbE5hdiIsImhhbmRsZU9wZW5OYXZNZW51IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2VOYXZNZW51Iiwic2l6ZSIsImFyaWEtbGFiZWwiLCJhcmlhLWNvbnRyb2xzIiwiYXJpYS1oYXNwb3B1cCIsIm9uQ2xpY2siLCJjb2xvciIsImlkIiwiYW5jaG9yRWwiLCJhbmNob3JPcmlnaW4iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJrZWVwTW91bnRlZCIsInRyYW5zZm9ybU9yaWdpbiIsIm9wZW4iLCJCb29sZWFuIiwib25DbG9zZSIsInN4IiwiZGlzcGxheSIsInhzIiwibWQiLCJweCIsIm1hcCIsIml0ZW0iLCJweSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Doctors/Toolbar/MenuXs.tsx\n");

/***/ })

};
;