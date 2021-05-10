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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_common_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/common/normalize.css */ \"./src/styles/common/normalize.css\");\n/* harmony import */ var _styles_common_normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_common_normalize_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_common_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/common/global.css */ \"./src/styles/common/global.css\");\n/* harmony import */ var _styles_common_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_common_global_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/AuthContext */ \"./src/context/AuthContext.tsx\");\n\n\nvar _jsxFileName = \"/Users/dkodagoda/Desktop/test-project-login/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        charSet: \"UTF-8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, maximum-scale=1.0, initial-scale=1.0, user-scalable=no, shrink-to-fit=no\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"author\",\n        content: \"SLIIT\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"keywords\",\n        content: \"audio video conferencing\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"4th year research\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"theme-color\",\n        content: \"#000\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"apple-mobile-web-app-status-bar-style\",\n        content: \"#000\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Abel&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Galada&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.gstatic.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://fonts.googleapis.com/css?family=Arima+Madurai&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://fonts.googleapis.com/css?family=Montserrat:600&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__[\"AuthProvider\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInByb2Nlc3MiLCJhcHBOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF1RTtBQUNyRSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBTSxlQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGtCQUFRQyxLQUFtQkM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFDRSxZQUFJLEVBQUMsVUFEUDtBQUVFLGVBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQU9FO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBb0IsZUFBTyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVFFO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQVNFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURixlQVVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRixlQVdFO0FBQU0sWUFBSSxFQUFDLHVDQUFYO0FBQW1ELGVBQU8sRUFBQztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEYsZUFZRTtBQUNFLFdBQUcsRUFBQyxZQUROO0FBRUUsWUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGLGVBZ0JFO0FBQ0UsWUFBSSxFQUFDLDREQURQO0FBRUUsV0FBRyxFQUFDO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCRixlQW9CRTtBQUNFLFlBQUksRUFBQyw4REFEUDtBQUVFLFdBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQkYsZUF3QkU7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhCRixlQXlCRTtBQUNFLFlBQUksRUFBQyw4RUFEUDtBQUVFLFdBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6QkYsZUE2QkU7QUFDRSxZQUFJLEVBQUMsb0VBRFA7QUFFRSxXQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0JGLGVBaUNFO0FBQ0UsWUFBSSxFQUFDLHFFQURQO0FBRUUsV0FBRyxFQUFDO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQXVDRSxxRUFBQyxpRUFBRDtBQUFBLDZCQUNFLHFFQUFDLFNBQUQsb0JBQWVGLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2Q0Y7QUFBQSxrQkFERjtBQTZDRDs7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvY29tbW9uL25vcm1hbGl6ZS5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9jb21tb24vZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgPHRpdGxlPntwcm9jZXNzLmVudi5hcHBOYW1lfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBtYXhpbXVtLXNjYWxlPTEuMCwgaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm8sIHNocmluay10by1maXQ9bm9cIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIlNMSUlUXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cImF1ZGlvIHZpZGVvIGNvbmZlcmVuY2luZ1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCI0dGggeWVhciByZXNlYXJjaFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMDAwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXN0YXR1cy1iYXItc3R5bGVcIiBjb250ZW50PVwiIzAwMFwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFiZWwmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HYWxhZGEmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1RdWlja3NhbmQ6d2dodEA0MDA7NjAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BcmltYStNYWR1cmFpJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjYwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEF1dGhQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/common/global.css":
/*!**************************************!*\
  !*** ./src/styles/common/global.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvY29tbW9uL2dsb2JhbC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/common/global.css\n");

/***/ }),

/***/ "./src/styles/common/normalize.css":
/*!*****************************************!*\
  !*** ./src/styles/common/normalize.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvY29tbW9uL25vcm1hbGl6ZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/common/normalize.css\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiPzYyNDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

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

/***/ })

/******/ });