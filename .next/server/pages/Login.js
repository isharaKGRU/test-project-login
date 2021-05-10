module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/Login.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/firebase.js":
/*!************************************!*\
  !*** ./src/components/firebase.js ***!
  \************************************/
/*! exports provided: auth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"auth\", function() { return auth; });\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n\nvar firebaseConfig = {\n  apiKey: \"AIzaSyA384wefks7NkXKZ4HIS0DW3PzJ3zydSLo\",\n  authDomain: \"fir-login-925a5.firebaseapp.com\",\n  projectId: \"fir-login-925a5\",\n  storageBucket: \"fir-login-925a5.appspot.com\",\n  messagingSenderId: \"273581573478\",\n  appId: \"1:273581573478:web:a9e16be7376abba797f4a7\",\n  measurementId: \"G-C2EECCVSRF\"\n}; // Initialize Firebase\n\nconst firebaseApp = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);\nconst db = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();\nconst auth = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (db);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9maXJlYmFzZS5qcz85NWFjIl0sIm5hbWVzIjpbImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlQXBwIiwiZmlyZWJhc2UiLCJpbml0aWFsaXplQXBwIiwiZGIiLCJmaXJlc3RvcmUiLCJhdXRoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsSUFBSUEsY0FBYyxHQUFHO0FBQ25CQyxRQUFNLEVBQUUseUNBRFc7QUFFbkJDLFlBQVUsRUFBRSxpQ0FGTztBQUduQkMsV0FBUyxFQUFFLGlCQUhRO0FBSW5CQyxlQUFhLEVBQUUsNkJBSkk7QUFLbkJDLG1CQUFpQixFQUFFLGNBTEE7QUFNbkJDLE9BQUssRUFBRSwyQ0FOWTtBQU9uQkMsZUFBYSxFQUFFO0FBUEksQ0FBckIsQyxDQVNBOztBQUNBLE1BQU1DLFdBQVcsR0FBR0MsK0NBQVEsQ0FBQ0MsYUFBVCxDQUF1QlYsY0FBdkIsQ0FBcEI7QUFDQSxNQUFNVyxFQUFFLEdBQUdGLCtDQUFRLENBQUNHLFNBQVQsRUFBWDtBQUNBLE1BQU1DLElBQUksR0FBR0osK0NBQVEsQ0FBQ0ksSUFBVCxFQUFiO0FBQ0E7QUFDZUYsaUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9maXJlYmFzZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcbnZhciBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUEzODR3ZWZrczdOa1hLWjRISVMwRFczUHpKM3p5ZFNMb1wiLFxuICBhdXRoRG9tYWluOiBcImZpci1sb2dpbi05MjVhNS5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcImZpci1sb2dpbi05MjVhNVwiLFxuICBzdG9yYWdlQnVja2V0OiBcImZpci1sb2dpbi05MjVhNS5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIyNzM1ODE1NzM0NzhcIixcbiAgYXBwSWQ6IFwiMToyNzM1ODE1NzM0Nzg6d2ViOmE5ZTE2YmU3Mzc2YWJiYTc5N2Y0YTdcIixcbiAgbWVhc3VyZW1lbnRJZDogXCJHLUMyRUVDQ1ZTUkZcIixcbn07XG4vLyBJbml0aWFsaXplIEZpcmViYXNlXG5jb25zdCBmaXJlYmFzZUFwcCA9IGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcbmNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XG5leHBvcnQgeyBhdXRoIH07XG5leHBvcnQgZGVmYXVsdCBkYjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/firebase.js\n");

/***/ }),

/***/ "./src/context/AuthContext.tsx":
/*!*************************************!*\
  !*** ./src/context/AuthContext.tsx ***!
  \*************************************/
/*! exports provided: useAuth, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuth\", function() { return useAuth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/firebase */ \"./src/components/firebase.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/dkodagoda/Desktop/test-project-login/src/context/AuthContext.tsx\";\n\n\n // Types -->\n\n// Auth Context Default values -->\nconst authContextDefaultValues = {\n  user: false,\n  log_in: () => {},\n  log_out: () => {},\n  sign_up: () => {}\n}; // Auth Context -->\n\nconst AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(authContextDefaultValues); // Auth hook -->\n\nfunction useAuth() {\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(AuthContext);\n} // Auth Provider -->\n\nfunction AuthProvider({\n  children\n}) {\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  const log_in = (email, password) => {\n    _components_firebase__WEBPACK_IMPORTED_MODULE_2__[\"auth\"].signInWithEmailAndPassword(email, password).then(data => {\n      setUser(true);\n      console.log(data);\n      router.push(\"/\");\n    }).catch(err => {\n      console.log(err);\n    });\n  };\n\n  const log_out = () => {\n    setUser(false);\n  };\n\n  const sign_up = (email, password) => {\n    _components_firebase__WEBPACK_IMPORTED_MODULE_2__[\"auth\"].createUserWithEmailAndPassword(email, password).then(data => {\n      console.log(data);\n      router.push(\"/\");\n    }).catch(err => {\n      console.log(err);\n    });\n  };\n\n  const value = {\n    user,\n    log_in,\n    log_out,\n    sign_up\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AuthContext.Provider, {\n      value: value,\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9BdXRoQ29udGV4dC50c3g/MWIwMSJdLCJuYW1lcyI6WyJhdXRoQ29udGV4dERlZmF1bHRWYWx1ZXMiLCJ1c2VyIiwibG9nX2luIiwibG9nX291dCIsInNpZ25fdXAiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwic2V0VXNlciIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiZW1haWwiLCJwYXNzd29yZCIsImF1dGgiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJjYXRjaCIsImVyciIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQVlBO0FBQ0EsTUFBTUEsd0JBQXNDLEdBQUc7QUFDN0NDLE1BQUksRUFBRSxLQUR1QztBQUU3Q0MsUUFBTSxFQUFFLE1BQU0sQ0FBRSxDQUY2QjtBQUc3Q0MsU0FBTyxFQUFFLE1BQU0sQ0FBRSxDQUg0QjtBQUk3Q0MsU0FBTyxFQUFFLE1BQU0sQ0FBRTtBQUo0QixDQUEvQyxDLENBT0E7O0FBQ0EsTUFBTUMsV0FBVyxnQkFBR0MsMkRBQWEsQ0FBZU4sd0JBQWYsQ0FBakMsQyxDQUVBOztBQUNPLFNBQVNPLE9BQVQsR0FBbUI7QUFDeEIsU0FBT0Msd0RBQVUsQ0FBQ0gsV0FBRCxDQUFqQjtBQUNELEMsQ0FFRDs7QUFDTyxTQUFTSSxZQUFULENBQXNCO0FBQUVDO0FBQUYsQ0FBdEIsRUFBNEM7QUFDakQsUUFBTTtBQUFBLE9BQUNULElBQUQ7QUFBQSxPQUFPVTtBQUFQLE1BQWtCQyxzREFBUSxDQUFVLEtBQVYsQ0FBaEM7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLFFBQU1aLE1BQU0sR0FBRyxDQUFDYSxLQUFELEVBQWdCQyxRQUFoQixLQUFxQztBQUNsREMsNkRBQUksQ0FDREMsMEJBREgsQ0FDOEJILEtBRDlCLEVBQ3FDQyxRQURyQyxFQUVHRyxJQUZILENBRVNDLElBQUQsSUFBZTtBQUNuQlQsYUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNBVSxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBUCxZQUFNLENBQUNVLElBQVAsQ0FBWSxHQUFaO0FBQ0QsS0FOSCxFQU9HQyxLQVBILENBT1VDLEdBQUQsSUFBYztBQUNuQkosYUFBTyxDQUFDQyxHQUFSLENBQVlHLEdBQVo7QUFDRCxLQVRIO0FBVUQsR0FYRDs7QUFhQSxRQUFNdEIsT0FBTyxHQUFHLE1BQU07QUFDcEJRLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDRCxHQUZEOztBQUlBLFFBQU1QLE9BQU8sR0FBRyxDQUFDVyxLQUFELEVBQWdCQyxRQUFoQixLQUFxQztBQUNuREMsNkRBQUksQ0FDRFMsOEJBREgsQ0FDa0NYLEtBRGxDLEVBQ3lDQyxRQUR6QyxFQUVHRyxJQUZILENBRVNDLElBQUQsSUFBZTtBQUNuQkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQVAsWUFBTSxDQUFDVSxJQUFQLENBQVksR0FBWjtBQUNELEtBTEgsRUFNR0MsS0FOSCxDQU1VQyxHQUFELElBQWM7QUFDbkJKLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRyxHQUFaO0FBQ0QsS0FSSDtBQVNELEdBVkQ7O0FBWUEsUUFBTUUsS0FBSyxHQUFHO0FBQ1oxQixRQURZO0FBRVpDLFVBRlk7QUFHWkMsV0FIWTtBQUlaQztBQUpZLEdBQWQ7QUFPQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFdBQUssRUFBRXVCLEtBQTdCO0FBQUEsZ0JBQXFDakI7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBS0QiLCJmaWxlIjoiLi9zcmMvY29udGV4dC9BdXRoQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZmlyZWJhc2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG4vLyBUeXBlcyAtLT5cbnR5cGUgVEF1dGhDb250ZXh0ID0ge1xuICB1c2VyOiBib29sZWFuO1xuICBsb2dfaW46IChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB2b2lkO1xuICBsb2dfb3V0OiAoKSA9PiB2b2lkO1xuICBzaWduX3VwOiAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4gdm9pZDtcbn07XG5cbnR5cGUgVFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufTtcblxuLy8gQXV0aCBDb250ZXh0IERlZmF1bHQgdmFsdWVzIC0tPlxuY29uc3QgYXV0aENvbnRleHREZWZhdWx0VmFsdWVzOiBUQXV0aENvbnRleHQgPSB7XG4gIHVzZXI6IGZhbHNlLFxuICBsb2dfaW46ICgpID0+IHt9LFxuICBsb2dfb3V0OiAoKSA9PiB7fSxcbiAgc2lnbl91cDogKCkgPT4ge30sXG59O1xuXG4vLyBBdXRoIENvbnRleHQgLS0+XG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8VEF1dGhDb250ZXh0PihhdXRoQ29udGV4dERlZmF1bHRWYWx1ZXMpO1xuXG4vLyBBdXRoIGhvb2sgLS0+XG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xufVxuXG4vLyBBdXRoIFByb3ZpZGVyIC0tPlxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH06IFRQcm9wcykge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGxvZ19pbiA9IChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gICAgYXV0aFxuICAgICAgLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgc2V0VXNlcih0cnVlKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBsb2dfb3V0ID0gKCkgPT4ge1xuICAgIHNldFVzZXIoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHNpZ25fdXAgPSAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAgIGF1dGhcbiAgICAgIC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgICAgLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHZhbHVlID0ge1xuICAgIHVzZXIsXG4gICAgbG9nX2luLFxuICAgIGxvZ19vdXQsXG4gICAgc2lnbl91cCxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/AuthContext.tsx\n");

/***/ }),

/***/ "./src/pages/Login.tsx":
/*!*****************************!*\
  !*** ./src/pages/Login.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ \"./src/context/AuthContext.tsx\");\n\nvar _jsxFileName = \"/Users/dkodagoda/Desktop/test-project-login/src/pages/Login.tsx\";\n\n\n\n\nconst Login = () => {\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const {\n    0: password,\n    1: setPassword\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const {\n    log_in,\n    sign_up\n  } = Object(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__[\"useAuth\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      action: \"\",\n      className: \"form\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"sign-in\",\n        children: \"Sign in to E-Meetings\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        className: \"form-input\",\n        type: \"email\",\n        placeholder: \"Email\",\n        value: email,\n        onChange: ele => {\n          setEmail(ele.currentTarget.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        className: \"form-input\",\n        type: \"password\",\n        placeholder: \"Password\",\n        value: password,\n        onChange: ele => {\n          setPassword(ele.currentTarget.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: \"form-sign-in\",\n        onClick: () => log_in(email, password),\n        children: [\"Sign in\", \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"sign-link-cover\",\n        children: [\"Not yet register?\\xA0\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"sign-link\",\n          onClick: () => sign_up(email, password),\n          children: \"Sign up\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100%;\n  background: #f1f1f1;\n\n  .form {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n  }\n\n  .sign-in {\n    font-size: 2rem;\n  }\n\n  .form-input {\n    margin-bottom: 5px;\n    border-radius: 60px;\n    padding: 0.5em 1em;\n    border: 1px solid #333;\n    outline: none;\n    &::placeholder {\n      text-align: center;\n    }\n  }\n\n  .form-sign-in {\n    background: #fff;\n    border: 1px solid #333;\n    border-radius: 50px;\n    padding: 0.5em 1.5em;\n    margin: 1rem 0;\n  }\n\n  .sign-link {\n    text-decoration: underline;\n  }\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTG9naW4udHN4Pzc4OTQiXSwibmFtZXMiOlsiTG9naW4iLCJlbWFpbCIsInNldEVtYWlsIiwidXNlU3RhdGUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwibG9nX2luIiwic2lnbl91cCIsInVzZUF1dGgiLCJlbGUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLE1BQW1CO0FBQy9CLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCRixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUVHLFVBQUY7QUFBVUM7QUFBVixNQUFzQkMsb0VBQU8sRUFBbkM7QUFDQSxzQkFDRSxxRUFBQyxTQUFEO0FBQUEsMkJBQ0U7QUFBTSxZQUFNLEVBQUMsRUFBYjtBQUFnQixlQUFTLEVBQUMsTUFBMUI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQ0UsaUJBQVMsRUFBQyxZQURaO0FBRUUsWUFBSSxFQUFDLE9BRlA7QUFHRSxtQkFBVyxFQUFDLE9BSGQ7QUFJRSxhQUFLLEVBQUVQLEtBSlQ7QUFLRSxnQkFBUSxFQUFHUSxHQUFELElBQVM7QUFDakJQLGtCQUFRLENBQUNPLEdBQUcsQ0FBQ0MsYUFBSixDQUFrQkMsS0FBbkIsQ0FBUjtBQUNEO0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQVdFO0FBQ0UsaUJBQVMsRUFBQyxZQURaO0FBRUUsWUFBSSxFQUFDLFVBRlA7QUFHRSxtQkFBVyxFQUFDLFVBSGQ7QUFJRSxhQUFLLEVBQUVQLFFBSlQ7QUFLRSxnQkFBUSxFQUFHSyxHQUFELElBQVM7QUFDakJKLHFCQUFXLENBQUNJLEdBQUcsQ0FBQ0MsYUFBSixDQUFrQkMsS0FBbkIsQ0FBWDtBQUNEO0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRixlQW9CRTtBQUNFLGlCQUFTLEVBQUMsY0FEWjtBQUVFLGVBQU8sRUFBRSxNQUFNTCxNQUFNLENBQUNMLEtBQUQsRUFBUUcsUUFBUixDQUZ2QjtBQUFBLDhCQUlVLEdBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXBCRixlQTBCRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSx5REFFRTtBQUFNLG1CQUFTLEVBQUMsV0FBaEI7QUFBNEIsaUJBQU8sRUFBRSxNQUFNRyxPQUFPLENBQUNOLEtBQUQsRUFBUUcsUUFBUixDQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXFDRCxDQXpDRDs7QUEyQ0EsTUFBTVEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0F6Q0E7QUEyQ2VkLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL0xvZ2luLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xuXG5jb25zdCBMb2dpbiA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHsgbG9nX2luLCBzaWduX3VwIH0gPSB1c2VBdXRoKCk7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLWluXCI+U2lnbiBpbiB0byBFLU1lZXRpbmdzPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZWxlKSA9PiB7XG4gICAgICAgICAgICBzZXRFbWFpbChlbGUuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlbGUpID0+IHtcbiAgICAgICAgICAgIHNldFBhc3N3b3JkKGVsZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zaWduLWluXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBsb2dfaW4oZW1haWwsIHBhc3N3b3JkKX1cbiAgICAgICAgPlxuICAgICAgICAgIFNpZ24gaW57XCIgXCJ9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24tbGluay1jb3ZlclwiPlxuICAgICAgICAgIE5vdCB5ZXQgcmVnaXN0ZXI/Jm5ic3A7XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2lnbi1saW5rXCIgb25DbGljaz17KCkgPT4gc2lnbl91cChlbWFpbCwgcGFzc3dvcmQpfT5cbiAgICAgICAgICAgIFNpZ24gdXBcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuXG4gIC5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5zaWduLWluIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cblxuICAuZm9ybS1pbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tc2lnbi1pbiB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgcGFkZGluZzogMC41ZW0gMS41ZW07XG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gIH1cblxuICAuc2lnbi1saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Login.tsx\n");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiPzYyNDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });