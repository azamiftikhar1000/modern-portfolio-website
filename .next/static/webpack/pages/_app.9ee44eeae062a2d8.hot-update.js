"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./config/colors.ts":
/*!**************************!*\
  !*** ./config/colors.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Colors\": function() { return /* binding */ Colors; }\n/* harmony export */ });\nvar Colors = {\n    // Languages\n    go: \"#00ADD8\",\n    python: \"#4B8BBE\",\n    typescript: \"#234A84\",\n    javascript: \"#F7DF1E\",\n    pinescript: \"#764ABC\",\n    //Data science \n    ML: \"#FFDD00\",\n    RL: \"#0C76E2\",\n    // Frontend\n    web: \"#2D2D2D\",\n    react: \"#61DAF6\",\n    nextjs: \"#000000\",\n    // Backend\n    graphql: \"#E535AB\",\n    node: \"#68A063\",\n    django: \"#092E20\",\n    // Tools, Libs\n    webpack: \"#8DD6F9\",\n    babel: \"#F5DB53\",\n    redux: \"#764ABC\",\n    // Mobile\n    reactnative: \"#2D2D2D\",\n    android: \"#56A036\",\n    ios: \"#0C76E2\",\n    // Databases\n    arangodb: \"#68A063\",\n    postgres: \"#336791\",\n    mongo: \"#4DB33D\",\n    redis: \"#D82C20\",\n    // Cloud\n    aws: \"#FF9900\",\n    gcp: \"#4285F4\",\n    docker: \"#0DB7Ed\",\n    kubernetes: \"#326CE5\",\n    terraform: \"#7B42BC\",\n    // Messaging\n    nats: \"#199bfc\",\n    kafka: \"#000000\",\n    // Social\n    linkedin: \"#0077B5\",\n    twitter: \"#1DA1F2\",\n    youtube: \"#FF0000\",\n    email: \"#D44638\",\n    buymeacoffee: \"#FFDD00\",\n    reddit: \"#ff4500\",\n    facebook: \"#1877f2\",\n    // Misc.\n    git: \"#F1502F\",\n    microservices: \"#1890ff\",\n    distributedsystems: \"#404040\",\n    discuss: \"#404040\",\n    testing: \"#049C64\",\n    backend: \"#404040\",\n    devops: \"#059F00\",\n    serverless: \"#000000\",\n    resume: \"#EEEBFF\",\n    opensource: \"#26BE00\",\n    tutorial: \"#4dd0e1\"\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvY29sb3JzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxJQUFNQSxNQUFNLEdBQUc7SUFDcEIsWUFBWTtJQUNaQyxFQUFFLEVBQUUsU0FBUztJQUNiQyxNQUFNLEVBQUUsU0FBUztJQUNqQkMsVUFBVSxFQUFFLFNBQVM7SUFDckJDLFVBQVUsRUFBRSxTQUFTO0lBQ3JCQyxVQUFVLEVBQUUsU0FBUztJQUNyQixlQUFlO0lBQ2ZDLEVBQUUsRUFBRSxTQUFTO0lBQ2JDLEVBQUUsRUFBRSxTQUFTO0lBQ2IsV0FBVztJQUNYQyxHQUFHLEVBQUUsU0FBUztJQUNkQyxLQUFLLEVBQUUsU0FBUztJQUNoQkMsTUFBTSxFQUFFLFNBQVM7SUFFakIsVUFBVTtJQUNWQyxPQUFPLEVBQUUsU0FBUztJQUNsQkMsSUFBSSxFQUFFLFNBQVM7SUFDZkMsTUFBTSxFQUFFLFNBQVM7SUFFakIsY0FBYztJQUNkQyxPQUFPLEVBQUUsU0FBUztJQUNsQkMsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLEtBQUssRUFBRSxTQUFTO0lBR2hCLFNBQVM7SUFDVEMsV0FBVyxFQUFFLFNBQVM7SUFDdEJDLE9BQU8sRUFBRSxTQUFTO0lBQ2xCQyxHQUFHLEVBQUUsU0FBUztJQUVkLFlBQVk7SUFDWkMsUUFBUSxFQUFFLFNBQVM7SUFDbkJDLFFBQVEsRUFBRSxTQUFTO0lBQ25CQyxLQUFLLEVBQUUsU0FBUztJQUNoQkMsS0FBSyxFQUFFLFNBQVM7SUFFaEIsUUFBUTtJQUNSQyxHQUFHLEVBQUUsU0FBUztJQUNkQyxHQUFHLEVBQUUsU0FBUztJQUNkQyxNQUFNLEVBQUUsU0FBUztJQUNqQkMsVUFBVSxFQUFFLFNBQVM7SUFDckJDLFNBQVMsRUFBRSxTQUFTO0lBRXBCLFlBQVk7SUFDWkMsSUFBSSxFQUFFLFNBQVM7SUFDZkMsS0FBSyxFQUFFLFNBQVM7SUFFaEIsU0FBUztJQUNUQyxRQUFRLEVBQUUsU0FBUztJQUNuQkMsT0FBTyxFQUFFLFNBQVM7SUFDbEJDLE9BQU8sRUFBRSxTQUFTO0lBQ2xCQyxLQUFLLEVBQUUsU0FBUztJQUNoQkMsWUFBWSxFQUFFLFNBQVM7SUFDdkJDLE1BQU0sRUFBRSxTQUFTO0lBQ2pCQyxRQUFRLEVBQUUsU0FBUztJQUVuQixRQUFRO0lBQ1JDLEdBQUcsRUFBRSxTQUFTO0lBQ2RDLGFBQWEsRUFBRSxTQUFTO0lBQ3hCQyxrQkFBa0IsRUFBRSxTQUFTO0lBQzdCQyxPQUFPLEVBQUUsU0FBUztJQUNsQkMsT0FBTyxFQUFFLFNBQVM7SUFDbEJDLE9BQU8sRUFBRSxTQUFTO0lBQ2xCQyxNQUFNLEVBQUUsU0FBUztJQUNqQkMsVUFBVSxFQUFFLFNBQVM7SUFDckJDLE1BQU0sRUFBRSxTQUFTO0lBQ2pCQyxVQUFVLEVBQUUsU0FBUztJQUNyQkMsUUFBUSxFQUFFLFNBQVM7Q0FDcEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb25maWcvY29sb3JzLnRzP2YyNWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IENvbG9ycyA9IHtcbiAgLy8gTGFuZ3VhZ2VzXG4gIGdvOiAnIzAwQUREOCcsXG4gIHB5dGhvbjogJyM0QjhCQkUnLFxuICB0eXBlc2NyaXB0OiAnIzIzNEE4NCcsXG4gIGphdmFzY3JpcHQ6ICcjRjdERjFFJyxcbiAgcGluZXNjcmlwdDogJyM3NjRBQkMnLFxuICAvL0RhdGEgc2NpZW5jZSBcbiAgTUw6ICcjRkZERDAwJyxcbiAgUkw6ICcjMEM3NkUyJyxcbiAgLy8gRnJvbnRlbmRcbiAgd2ViOiAnIzJEMkQyRCcsXG4gIHJlYWN0OiAnIzYxREFGNicsXG4gIG5leHRqczogJyMwMDAwMDAnLFxuXG4gIC8vIEJhY2tlbmRcbiAgZ3JhcGhxbDogJyNFNTM1QUInLFxuICBub2RlOiAnIzY4QTA2MycsXG4gIGRqYW5nbzogJyMwOTJFMjAnLFxuXG4gIC8vIFRvb2xzLCBMaWJzXG4gIHdlYnBhY2s6ICcjOERENkY5JyxcbiAgYmFiZWw6ICcjRjVEQjUzJyxcbiAgcmVkdXg6ICcjNzY0QUJDJyxcbiAgXG5cbiAgLy8gTW9iaWxlXG4gIHJlYWN0bmF0aXZlOiAnIzJEMkQyRCcsXG4gIGFuZHJvaWQ6ICcjNTZBMDM2JyxcbiAgaW9zOiAnIzBDNzZFMicsXG5cbiAgLy8gRGF0YWJhc2VzXG4gIGFyYW5nb2RiOiAnIzY4QTA2MycsXG4gIHBvc3RncmVzOiAnIzMzNjc5MScsXG4gIG1vbmdvOiAnIzREQjMzRCcsXG4gIHJlZGlzOiAnI0Q4MkMyMCcsXG5cbiAgLy8gQ2xvdWRcbiAgYXdzOiAnI0ZGOTkwMCcsXG4gIGdjcDogJyM0Mjg1RjQnLFxuICBkb2NrZXI6ICcjMERCN0VkJyxcbiAga3ViZXJuZXRlczogJyMzMjZDRTUnLFxuICB0ZXJyYWZvcm06ICcjN0I0MkJDJyxcblxuICAvLyBNZXNzYWdpbmdcbiAgbmF0czogJyMxOTliZmMnLFxuICBrYWZrYTogJyMwMDAwMDAnLFxuXG4gIC8vIFNvY2lhbFxuICBsaW5rZWRpbjogJyMwMDc3QjUnLFxuICB0d2l0dGVyOiAnIzFEQTFGMicsXG4gIHlvdXR1YmU6ICcjRkYwMDAwJyxcbiAgZW1haWw6ICcjRDQ0NjM4JyxcbiAgYnV5bWVhY29mZmVlOiAnI0ZGREQwMCcsXG4gIHJlZGRpdDogJyNmZjQ1MDAnLFxuICBmYWNlYm9vazogJyMxODc3ZjInLFxuXG4gIC8vIE1pc2MuXG4gIGdpdDogJyNGMTUwMkYnLFxuICBtaWNyb3NlcnZpY2VzOiAnIzE4OTBmZicsXG4gIGRpc3RyaWJ1dGVkc3lzdGVtczogJyM0MDQwNDAnLFxuICBkaXNjdXNzOiAnIzQwNDA0MCcsXG4gIHRlc3Rpbmc6ICcjMDQ5QzY0JyxcbiAgYmFja2VuZDogJyM0MDQwNDAnLFxuICBkZXZvcHM6ICcjMDU5RjAwJyxcbiAgc2VydmVybGVzczogJyMwMDAwMDAnLFxuICByZXN1bWU6ICcjRUVFQkZGJyxcbiAgb3BlbnNvdXJjZTogJyMyNkJFMDAnLFxuICB0dXRvcmlhbDogJyM0ZGQwZTEnLFxufTtcbiJdLCJuYW1lcyI6WyJDb2xvcnMiLCJnbyIsInB5dGhvbiIsInR5cGVzY3JpcHQiLCJqYXZhc2NyaXB0IiwicGluZXNjcmlwdCIsIk1MIiwiUkwiLCJ3ZWIiLCJyZWFjdCIsIm5leHRqcyIsImdyYXBocWwiLCJub2RlIiwiZGphbmdvIiwid2VicGFjayIsImJhYmVsIiwicmVkdXgiLCJyZWFjdG5hdGl2ZSIsImFuZHJvaWQiLCJpb3MiLCJhcmFuZ29kYiIsInBvc3RncmVzIiwibW9uZ28iLCJyZWRpcyIsImF3cyIsImdjcCIsImRvY2tlciIsImt1YmVybmV0ZXMiLCJ0ZXJyYWZvcm0iLCJuYXRzIiwia2Fma2EiLCJsaW5rZWRpbiIsInR3aXR0ZXIiLCJ5b3V0dWJlIiwiZW1haWwiLCJidXltZWFjb2ZmZWUiLCJyZWRkaXQiLCJmYWNlYm9vayIsImdpdCIsIm1pY3Jvc2VydmljZXMiLCJkaXN0cmlidXRlZHN5c3RlbXMiLCJkaXNjdXNzIiwidGVzdGluZyIsImJhY2tlbmQiLCJkZXZvcHMiLCJzZXJ2ZXJsZXNzIiwicmVzdW1lIiwib3BlbnNvdXJjZSIsInR1dG9yaWFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/colors.ts\n");

/***/ })

});