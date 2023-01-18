"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/registration";
exports.ids = ["pages/registration"];
exports.modules = {

/***/ "./http/index.ts":
/*!***********************!*\
  !*** ./http/index.ts ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$authHost\": () => (/* binding */ $authHost),\n/* harmony export */   \"$host\": () => (/* binding */ $host)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst $host = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"http://localhost:5000/\"\n});\nconst $authHost = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"http://localhost:5000/\"\n});\nconst authInterceptor = (config)=>{\n    if (config && config.headers) {\n        config.headers.authorization = `Bearer ${localStorage.getItem(\"token\")}`;\n    }\n    return config;\n};\n$authHost.interceptors.request.use(authInterceptor);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9odHRwL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrRDtBQUVsRCxNQUFNQyxRQUFRRCxvREFBWSxDQUFDO0lBQzFCRyxTQUFTO0FBQ1Y7QUFFQSxNQUFNQyxZQUFZSixvREFBWSxDQUFDO0lBQzlCRyxTQUFTO0FBQ1Y7QUFFQSxNQUFNRSxrQkFBa0IsQ0FBQ0MsU0FBK0I7SUFDdkQsSUFBSUEsVUFBVUEsT0FBT0MsT0FBTyxFQUFFO1FBQzdCRCxPQUFPQyxPQUFPLENBQUNDLGFBQWEsR0FBRyxDQUFDLE9BQU8sRUFBRUMsYUFBYUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUN6RSxDQUFDO0lBQ0QsT0FBT0o7QUFDUjtBQUVBRixVQUFVTyxZQUFZLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUjtBQUVQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vaHR0cC9pbmRleC50cz9iNDBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcywgeyBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCAkaG9zdCA9IGF4aW9zLmNyZWF0ZSh7XHJcblx0YmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8nLFxyXG59KTtcclxuXHJcbmNvbnN0ICRhdXRoSG9zdCA9IGF4aW9zLmNyZWF0ZSh7XHJcblx0YmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8nLFxyXG59KTtcclxuXHJcbmNvbnN0IGF1dGhJbnRlcmNlcHRvciA9IChjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZykgPT4ge1xyXG5cdGlmIChjb25maWcgJiYgY29uZmlnLmhlYWRlcnMpIHtcclxuXHRcdGNvbmZpZy5oZWFkZXJzLmF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YDtcclxuXHR9XHJcblx0cmV0dXJuIGNvbmZpZztcclxufTtcclxuXHJcbiRhdXRoSG9zdC5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoYXV0aEludGVyY2VwdG9yKTtcclxuXHJcbmV4cG9ydCB7ICRob3N0LCAkYXV0aEhvc3QgfTsiXSwibmFtZXMiOlsiYXhpb3MiLCIkaG9zdCIsImNyZWF0ZSIsImJhc2VVUkwiLCIkYXV0aEhvc3QiLCJhdXRoSW50ZXJjZXB0b3IiLCJjb25maWciLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./http/index.ts\n");

/***/ }),

/***/ "./http/userAPI.ts":
/*!*************************!*\
  !*** ./http/userAPI.ts ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"check\": () => (/* binding */ check),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"registration\": () => (/* binding */ registration)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./http/index.ts\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_0__]);\n_index__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst registration = async (email, password)=>{\n    const { data  } = await _index__WEBPACK_IMPORTED_MODULE_0__.$host.post(\"api/user/registration\", {\n        email,\n        password,\n        role: \"USER\"\n    });\n    return jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(data.token);\n};\nconst login = async (email, password)=>{\n    const { data  } = await _index__WEBPACK_IMPORTED_MODULE_0__.$host.post(\"api/user/login\", {\n        email,\n        password\n    });\n    localStorage.setItem(\"token\", data.token);\n    return jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(data.token);\n};\nconst check = async ()=>{\n    const { data  } = await _index__WEBPACK_IMPORTED_MODULE_0__.$authHost.get(\"api/user/auth\");\n    localStorage.setItem(\"token\", data.token);\n    return jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(data.token);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9odHRwL3VzZXJBUEkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1A7QUFFN0IsTUFBTUcsZUFBZSxPQUFPQyxPQUFlQyxXQUFxQjtJQUN0RSxNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHLE1BQU1MLDhDQUFVLENBQUMseUJBQXlCO1FBQUVHO1FBQU9DO1FBQVVHLE1BQU07SUFBTztJQUMzRixPQUFPTixpREFBVUEsQ0FBQ0ksS0FBS0csS0FBSztBQUM3QixFQUFFO0FBRUssTUFBTUMsUUFBUSxPQUFPTixPQUFlQyxXQUFxQjtJQUMvRCxNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHLE1BQU1MLDhDQUFVLENBQUMsa0JBQWtCO1FBQUVHO1FBQU9DO0lBQVM7SUFDdEVNLGFBQWFDLE9BQU8sQ0FBQyxTQUFTTixLQUFLRyxLQUFLO0lBQ3hDLE9BQU9QLGlEQUFVQSxDQUFDSSxLQUFLRyxLQUFLO0FBQzdCLEVBQUU7QUFFSyxNQUFNSSxRQUFRLFVBQVk7SUFDaEMsTUFBTSxFQUFFUCxLQUFJLEVBQUUsR0FBRyxNQUFNTixpREFBYSxDQUFDO0lBQ3JDVyxhQUFhQyxPQUFPLENBQUMsU0FBU04sS0FBS0csS0FBSztJQUN4QyxPQUFPUCxpREFBVUEsQ0FBQ0ksS0FBS0csS0FBSztBQUM3QixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vaHR0cC91c2VyQVBJLnRzP2QzZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgJGF1dGhIb3N0LCAkaG9zdCB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgand0X2RlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RyYXRpb24gPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xyXG5cdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgJGhvc3QucG9zdCgnYXBpL3VzZXIvcmVnaXN0cmF0aW9uJywgeyBlbWFpbCwgcGFzc3dvcmQsIHJvbGU6ICdVU0VSJyB9KTtcclxuXHRyZXR1cm4gand0X2RlY29kZShkYXRhLnRva2VuKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XHJcblx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCAkaG9zdC5wb3N0KCdhcGkvdXNlci9sb2dpbicsIHsgZW1haWwsIHBhc3N3b3JkIH0pO1xyXG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pO1xyXG5cdHJldHVybiBqd3RfZGVjb2RlKGRhdGEudG9rZW4pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrID0gYXN5bmMgKCkgPT4ge1xyXG5cdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgJGF1dGhIb3N0LmdldCgnYXBpL3VzZXIvYXV0aCcpO1xyXG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pO1xyXG5cdHJldHVybiBqd3RfZGVjb2RlKGRhdGEudG9rZW4pO1xyXG59OyJdLCJuYW1lcyI6WyIkYXV0aEhvc3QiLCIkaG9zdCIsImp3dF9kZWNvZGUiLCJyZWdpc3RyYXRpb24iLCJlbWFpbCIsInBhc3N3b3JkIiwiZGF0YSIsInBvc3QiLCJyb2xlIiwidG9rZW4iLCJsb2dpbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjaGVjayIsImdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./http/userAPI.ts\n");

/***/ }),

/***/ "./pages/registration/index.tsx":
/*!**************************************!*\
  !*** ./pages/registration/index.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _http_userAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../http/userAPI */ \"./http/userAPI.ts\");\n/* harmony import */ var _store_reducers_userSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/reducers/userSlice */ \"./store/reducers/userSlice.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_http_userAPI__WEBPACK_IMPORTED_MODULE_4__]);\n_http_userAPI__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst Registration = ()=>{\n    const [userLogin, setLogin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [userPassword, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const handleRegister = async ()=>{\n        let data;\n        if (userLogin && userPassword) {\n            data = await (0,_http_userAPI__WEBPACK_IMPORTED_MODULE_4__.registration)(userLogin, userPassword);\n            console.log(data);\n            if (data) {\n                dispatch((0,_store_reducers_userSlice__WEBPACK_IMPORTED_MODULE_5__.setUser)(data));\n            }\n            router.replace(\"/\");\n        } else {\n            alert(\"Поля пустые\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-80 w-72 rounded-md border border-gray-300 p-8 drop-shadow-sm flex flex-col gap-4 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \" text-2xl mx-auto\",\n                    children: \"Registration\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vladi\\\\OneDrive\\\\Рабочий стол\\\\unijob\\\\App\\\\pages\\\\registration\\\\index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-2 flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"w-full bg-gray-200 rounded-md p-2\",\n                            type: \"text\",\n                            placeholder: \"login\",\n                            value: userLogin,\n                            onChange: (e)=>setLogin(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\vladi\\\\OneDrive\\\\Рабочий стол\\\\unijob\\\\App\\\\pages\\\\registration\\\\index.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"w-full bg-gray-200 rounded-md p-2\",\n                            type: \"password\",\n                            placeholder: \"password\",\n                            value: userPassword,\n                            onChange: (e)=>setPassword(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\vladi\\\\OneDrive\\\\Рабочий стол\\\\unijob\\\\App\\\\pages\\\\registration\\\\index.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\vladi\\\\OneDrive\\\\Рабочий стол\\\\unijob\\\\App\\\\pages\\\\registration\\\\index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-1 flex-col\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-fuchsia-500 py-2 px-4 rounded-md text-white font-medium hover:bg-fuchsia-600 transition-colors\",\n                        onClick: ()=>handleRegister(),\n                        children: \"Зарегистрироваться\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vladi\\\\OneDrive\\\\Рабочий стол\\\\unijob\\\\App\\\\pages\\\\registration\\\\index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vladi\\\\OneDrive\\\\Рабочий стол\\\\unijob\\\\App\\\\pages\\\\registration\\\\index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\vladi\\\\OneDrive\\\\Рабочий стол\\\\unijob\\\\App\\\\pages\\\\registration\\\\index.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vladi\\\\OneDrive\\\\Рабочий стол\\\\unijob\\\\App\\\\pages\\\\registration\\\\index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Registration);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3RyYXRpb24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDQTtBQUNFO0FBRVE7QUFDTztBQUV6RCxNQUFNTSxlQUFlLElBQU07SUFDekIsTUFBTSxDQUFDQyxXQUFXQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ08sY0FBY0MsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNUyxTQUFTWCxzREFBU0E7SUFDeEIsTUFBTVksV0FBV1Qsd0RBQVdBO0lBRTVCLE1BQU1VLGlCQUFpQixVQUFZO1FBQ2pDLElBQUlDO1FBQ0osSUFBSVAsYUFBYUUsY0FBYztZQUM3QkssT0FBTyxNQUFNViwyREFBWUEsQ0FBQ0csV0FBV0U7WUFDckNNLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWixJQUFJQSxNQUFNO2dCQUNSRixTQUFTUCxrRUFBT0EsQ0FBQ1M7WUFDbkIsQ0FBQztZQUNESCxPQUFPTSxPQUFPLENBQUM7UUFDakIsT0FBTztZQUNMQyxNQUFNO1FBQ1IsQ0FBQztJQUNIO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBb0I7Ozs7Ozs4QkFDbEMsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQ0NGLFdBQVU7NEJBQ1ZHLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pDLE9BQU9sQjs0QkFDUG1CLFVBQVUsQ0FBQ0MsSUFBTW5CLFNBQVNtQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztzQ0FFMUMsOERBQUNIOzRCQUNDRixXQUFVOzRCQUNWRyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaQyxPQUFPaEI7NEJBQ1BpQixVQUFVLENBQUNDLElBQU1qQixZQUFZaUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7Ozs7OEJBRy9DLDhEQUFDTjtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ1M7d0JBQ0NULFdBQVU7d0JBQ1ZVLFNBQVMsSUFBTWpCO2tDQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0FBRUEsaUVBQWVQLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9wYWdlcy9yZWdpc3RyYXRpb24vaW5kZXgudHN4P2EwYzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5pbXBvcnQgeyByZWdpc3RyYXRpb24gfSBmcm9tIFwiLi4vLi4vaHR0cC91c2VyQVBJXCI7XHJcbmltcG9ydCB7IHNldFVzZXIgfSBmcm9tIFwiLi4vLi4vc3RvcmUvcmVkdWNlcnMvdXNlclNsaWNlXCI7XHJcblxyXG5jb25zdCBSZWdpc3RyYXRpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJMb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VzZXJQYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZWdpc3RlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCBkYXRhOiBhbnk7XHJcbiAgICBpZiAodXNlckxvZ2luICYmIHVzZXJQYXNzd29yZCkge1xyXG4gICAgICBkYXRhID0gYXdhaXQgcmVnaXN0cmF0aW9uKHVzZXJMb2dpbiwgdXNlclBhc3N3b3JkKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRVc2VyKGRhdGEpKTtcclxuICAgICAgfVxyXG4gICAgICByb3V0ZXIucmVwbGFjZShcIi9cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcItCf0L7Qu9GPINC/0YPRgdGC0YvQtVwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtODAgdy03MiByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcC04IGRyb3Atc2hhZG93LXNtIGZsZXggZmxleC1jb2wgZ2FwLTQgXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiB0ZXh0LTJ4bCBteC1hdXRvXCI+UmVnaXN0cmF0aW9uPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgZmxleC1jb2xcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS0yMDAgcm91bmRlZC1tZCBwLTJcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibG9naW5cIlxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlckxvZ2lufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExvZ2luKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMjAwIHJvdW5kZWQtbWQgcC0yXCJcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VyUGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTEgZmxleC1jb2xcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZnVjaHNpYS01MDAgcHktMiBweC00IHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBob3ZlcjpiZy1mdWNoc2lhLTYwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlZ2lzdGVyKCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgINCX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRj1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbjtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsInJlZ2lzdHJhdGlvbiIsInNldFVzZXIiLCJSZWdpc3RyYXRpb24iLCJ1c2VyTG9naW4iLCJzZXRMb2dpbiIsInVzZXJQYXNzd29yZCIsInNldFBhc3N3b3JkIiwicm91dGVyIiwiZGlzcGF0Y2giLCJoYW5kbGVSZWdpc3RlciIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZSIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/registration/index.tsx\n");

/***/ }),

/***/ "./store/reducers/userSlice.ts":
/*!*************************************!*\
  !*** ./store/reducers/userSlice.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"setIsAuth\": () => (/* binding */ setIsAuth),\n/* harmony export */   \"setUser\": () => (/* binding */ setUser),\n/* harmony export */   \"userSlice\": () => (/* binding */ userSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    isAuth: false,\n    user: null\n};\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {\n        setIsAuth: (state, action)=>{\n            state.isAuth = action.payload;\n        },\n        setUser: (state, action)=>{\n            state.user = action.payload;\n        }\n    }\n});\nconst { setIsAuth , setUser  } = userSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy91c2VyU2xpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThEO0FBUTlELE1BQU1DLGVBQTBCO0lBQy9CQyxRQUFRLEtBQUs7SUFDYkMsTUFBTSxJQUFJO0FBQ1g7QUFFTyxNQUFNQyxZQUFZSiw2REFBV0EsQ0FBQztJQUNwQ0ssTUFBTTtJQUNOSjtJQUNBSyxVQUFVO1FBQ1RDLFdBQVcsQ0FBQ0MsT0FBT0MsU0FBbUM7WUFDckRELE1BQU1OLE1BQU0sR0FBR08sT0FBT0MsT0FBTztRQUM5QjtRQUNBQyxTQUFTLENBQUNILE9BQU9DLFNBQXdDO1lBQ3hERCxNQUFNTCxJQUFJLEdBQUdNLE9BQU9DLE9BQU87UUFDNUI7SUFDRDtBQUNELEdBQUc7QUFFSSxNQUFNLEVBQUVILFVBQVMsRUFBRUksUUFBTyxFQUFFLEdBQUdQLFVBQVVRLE9BQU8sQ0FBQztBQUV4RCxpRUFBZVIsVUFBVVMsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vc3RvcmUvcmVkdWNlcnMvdXNlclNsaWNlLnRzP2NiYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHsgSVVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvSVVzZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSB1c2VyU3RhdGUge1xyXG5cdGlzQXV0aDogYm9vbGVhbjtcclxuXHR1c2VyOiBJVXNlciB8IG51bGw7XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogdXNlclN0YXRlID0ge1xyXG5cdGlzQXV0aDogZmFsc2UsXHJcblx0dXNlcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcblx0bmFtZTogJ3VzZXInLFxyXG5cdGluaXRpYWxTdGF0ZSxcclxuXHRyZWR1Y2Vyczoge1xyXG5cdFx0c2V0SXNBdXRoOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPikgPT4ge1xyXG5cdFx0XHRzdGF0ZS5pc0F1dGggPSBhY3Rpb24ucGF5bG9hZDtcclxuXHRcdH0sXHJcblx0XHRzZXRVc2VyOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxJVXNlciB8IG51bGw+KSA9PiB7XHJcblx0XHRcdHN0YXRlLnVzZXIgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHRcdH0sXHJcblx0fSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRJc0F1dGgsIHNldFVzZXIgfSA9IHVzZXJTbGljZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwiaXNBdXRoIiwidXNlciIsInVzZXJTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldElzQXV0aCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldFVzZXIiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/reducers/userSlice.ts\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("jwt-decode");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/registration/index.tsx"));
module.exports = __webpack_exports__;

})();