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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/upstash-redis-adapter":
/*!***************************************************!*\
  !*** external "@next-auth/upstash-redis-adapter" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@next-auth/upstash-redis-adapter");

/***/ }),

/***/ "@upstash/redis":
/*!*********************************!*\
  !*** external "@upstash/redis" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@upstash/redis");

/***/ }),

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Cauth%5C%5B...nextauth%5D.ts&middlewareConfigBase64=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Cauth%5C%5B...nextauth%5D.ts&middlewareConfigBase64=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _src_pages_api_auth_nextauth_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src\\pages\\api\\auth\\[...nextauth].ts */ \"(api)/./src/pages/api/auth/[...nextauth].ts\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_auth_nextauth_ts__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_auth_nextauth_ts__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/[...nextauth]\",\n        pathname: \"/api/auth/[...nextauth]\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _src_pages_api_auth_nextauth_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnNyYyU1Q3BhZ2VzJTVDYXBpJTVDYXV0aCU1QyU1Qi4uLm5leHRhdXRoJTVELnRzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQ3NFO0FBQ3RFO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyw0REFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsNERBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVzc2FuZ2VyLz80YTcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9zcmNcXFxccGFnZXNcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXS50c1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCBcImRlZmF1bHRcIik7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCBcImNvbmZpZ1wiKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Cauth%5C%5B...nextauth%5D.ts&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./src/helpers/redis.ts":
/*!******************************!*\
  !*** ./src/helpers/redis.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchRedis: () => (/* binding */ fetchRedis)\n/* harmony export */ });\nconst upstashRedisRestUrl = process.env.UPSTASH_REDIS_REST_URL;\nconst authToken = process.env.UPSTASH_REDIS_REST_TOKEN;\nasync function fetchRedis(command, ...args) {\n    const commandUrl = `${upstashRedisRestUrl}/${command}/${args.join(\"/\")}`;\n    const response = await fetch(commandUrl, {\n        headers: {\n            Authorization: `Bearer ${authToken}`\n        },\n        cache: \"no-store\"\n    });\n    if (!response.ok) {\n        throw new Error(`Error executing Redis command: ${response.statusText}`);\n    }\n    const data = await response.json();\n    return data.result;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvaGVscGVycy9yZWRpcy50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsc0JBQXNCQyxRQUFRQyxHQUFHLENBQUNDLHNCQUFzQjtBQUM5RCxNQUFNQyxZQUFZSCxRQUFRQyxHQUFHLENBQUNHLHdCQUF3QjtBQUkvQyxlQUFlQyxXQUNsQkMsT0FBaUIsRUFDakIsR0FBR0MsSUFBMEI7SUFFN0IsTUFBTUMsYUFBYSxDQUFDLEVBQUVULG9CQUFvQixDQUFDLEVBQUVPLFFBQVEsQ0FBQyxFQUFFQyxLQUFLRSxJQUFJLENBQUMsS0FBSyxDQUFDO0lBRXhFLE1BQU1DLFdBQVcsTUFBTUMsTUFBTUgsWUFBWTtRQUNyQ0ksU0FBUztZQUNMQyxlQUFlLENBQUMsT0FBTyxFQUFFVixVQUFVLENBQUM7UUFDeEM7UUFDQVcsT0FBTztJQUNYO0lBRUEsSUFBRyxDQUFDSixTQUFTSyxFQUFFLEVBQUM7UUFDWixNQUFNLElBQUlDLE1BQU0sQ0FBQywrQkFBK0IsRUFBRU4sU0FBU08sVUFBVSxDQUFDLENBQUM7SUFDM0U7SUFFQSxNQUFNQyxPQUFPLE1BQU1SLFNBQVNTLElBQUk7SUFDaEMsT0FBT0QsS0FBS0UsTUFBTTtBQUN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL21lc3Nhbmdlci8uL3NyYy9oZWxwZXJzL3JlZGlzLnRzPzU2YTkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdXBzdGFzaFJlZGlzUmVzdFVybCA9IHByb2Nlc3MuZW52LlVQU1RBU0hfUkVESVNfUkVTVF9VUkxcclxuY29uc3QgYXV0aFRva2VuID0gcHJvY2Vzcy5lbnYuVVBTVEFTSF9SRURJU19SRVNUX1RPS0VOXHJcblxyXG50eXBlIENvbW1hbmQgPSAnenJhbmdlJyB8ICdzaXNtZW1iZXInIHwgJ2dldCcgfCAnc21lbWJlcnMnXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hSZWRpcyhcclxuICAgIGNvbW1hbmQgOiBDb21tYW5kLFxyXG4gICAgLi4uYXJncyA6IChzdHJpbmcgfCBudW1iZXIpW11cclxuKSB7XHJcbiAgICBjb25zdCBjb21tYW5kVXJsID0gYCR7dXBzdGFzaFJlZGlzUmVzdFVybH0vJHtjb21tYW5kfS8ke2FyZ3Muam9pbignLycpfWBcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGNvbW1hbmRVcmwsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRoVG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhY2hlOiAnbm8tc3RvcmUnXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKCFyZXNwb25zZS5vayl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBleGVjdXRpbmcgUmVkaXMgY29tbWFuZDogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgcmV0dXJuIGRhdGEucmVzdWx0XHJcbn0iXSwibmFtZXMiOlsidXBzdGFzaFJlZGlzUmVzdFVybCIsInByb2Nlc3MiLCJlbnYiLCJVUFNUQVNIX1JFRElTX1JFU1RfVVJMIiwiYXV0aFRva2VuIiwiVVBTVEFTSF9SRURJU19SRVNUX1RPS0VOIiwiZmV0Y2hSZWRpcyIsImNvbW1hbmQiLCJhcmdzIiwiY29tbWFuZFVybCIsImpvaW4iLCJyZXNwb25zZSIsImZldGNoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjYWNoZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiZGF0YSIsImpzb24iLCJyZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/helpers/redis.ts\n");

/***/ }),

/***/ "(api)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _next_auth_upstash_redis_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @next-auth/upstash-redis-adapter */ \"@next-auth/upstash-redis-adapter\");\n/* harmony import */ var _next_auth_upstash_redis_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_auth_upstash_redis_adapter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ \"(api)/./src/lib/db.ts\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_redis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/redis */ \"(api)/./src/helpers/redis.ts\");\n\n\n\n\nfunction getGoogleCredentials() {\n    const clientId = process.env.GOOGLE_CLIENT_ID;\n    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;\n    if (!clientId || clientId.length === 0) {\n        throw new Error(\"Missing GOOGLE_CLIENT_ID\");\n    }\n    if (!clientSecret || clientSecret.length === 0) {\n        throw new Error(\"Missing GOOGLE_CLIENT_SECRET\");\n    }\n    return {\n        clientId,\n        clientSecret\n    };\n}\nconst authOptions = {\n    adapter: (0,_next_auth_upstash_redis_adapter__WEBPACK_IMPORTED_MODULE_0__.UpstashRedisAdapter)(_db__WEBPACK_IMPORTED_MODULE_1__.db),\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: getGoogleCredentials().clientId,\n            clientSecret: getGoogleCredentials().clientSecret\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            const dbUserResult = await (0,_helpers_redis__WEBPACK_IMPORTED_MODULE_3__.fetchRedis)(\"get\", `user:${token.id}`);\n            if (!dbUserResult) {\n                token.id = user.id;\n                return token;\n            }\n            const dbUser = JSON.parse(dbUserResult);\n            return {\n                id: dbUser.id,\n                name: dbUser.name,\n                email: dbUser.email,\n                picture: dbUser.image\n            };\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user.id = token.id;\n                session.user.name = token.name;\n                session.user.email = token.email;\n                session.user.image = token.picture;\n            }\n            return session;\n        },\n        redirect () {\n            return \"/dashboard\";\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNzRTtBQUM3QztBQUM4QjtBQUNYO0FBRTVDLFNBQVNJO0lBQ0wsTUFBTUMsV0FBV0MsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7SUFDN0MsTUFBTUMsZUFBZUgsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7SUFFckQsSUFBRyxDQUFDTCxZQUFZQSxTQUFTTSxNQUFNLEtBQUssR0FBRTtRQUNsQyxNQUFNLElBQUlDLE1BQU07SUFDcEI7SUFFQSxJQUFHLENBQUNILGdCQUFnQkEsYUFBYUUsTUFBTSxLQUFLLEdBQUU7UUFDMUMsTUFBTSxJQUFJQyxNQUFNO0lBQ3BCO0lBQ0EsT0FBTztRQUFDUDtRQUFVSTtJQUFZO0FBQ2xDO0FBRU8sTUFBTUksY0FBK0I7SUFDeENDLFNBQVNkLHFGQUFtQkEsQ0FBQ0MsbUNBQUVBO0lBQy9CYyxTQUFTO1FBQ0xDLFVBQVU7SUFDZDtJQUNBQyxPQUFPO1FBQ0hDLFFBQVE7SUFDWjtJQUNBQyxXQUFXO1FBQ1BqQixpRUFBY0EsQ0FBQztZQUNYRyxVQUFVRCx1QkFBdUJDLFFBQVE7WUFDekNJLGNBQWNMLHVCQUF1QkssWUFBWTtRQUNyRDtLQUNIO0lBQ0RXLFdBQVc7UUFDUCxNQUFNQyxLQUFJLEVBQUNDLEtBQUssRUFBRUMsSUFBSSxFQUFDO1lBQ25CLE1BQU1DLGVBQWdCLE1BQU1yQiwwREFBVUEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFbUIsTUFBTUcsRUFBRSxDQUFDLENBQUM7WUFFaEUsSUFBRyxDQUFDRCxjQUFhO2dCQUNiRixNQUFNRyxFQUFFLEdBQUdGLEtBQU1FLEVBQUU7Z0JBQ25CLE9BQU9IO1lBQ1g7WUFFQSxNQUFNSSxTQUFTQyxLQUFLQyxLQUFLLENBQUNKO1lBRTFCLE9BQU87Z0JBQ0hDLElBQUlDLE9BQU9ELEVBQUU7Z0JBQ2JJLE1BQU1ILE9BQU9HLElBQUk7Z0JBQ2pCQyxPQUFPSixPQUFPSSxLQUFLO2dCQUNuQkMsU0FBU0wsT0FBT00sS0FBSztZQUN6QjtRQUNKO1FBQ0EsTUFBTWpCLFNBQVEsRUFBQ0EsT0FBTyxFQUFFTyxLQUFLLEVBQUM7WUFDMUIsSUFBR0EsT0FBTTtnQkFDTFAsUUFBUVEsSUFBSSxDQUFDRSxFQUFFLEdBQUdILE1BQU1HLEVBQUU7Z0JBQzFCVixRQUFRUSxJQUFJLENBQUNNLElBQUksR0FBR1AsTUFBTU8sSUFBSTtnQkFDOUJkLFFBQVFRLElBQUksQ0FBQ08sS0FBSyxHQUFHUixNQUFNUSxLQUFLO2dCQUNoQ2YsUUFBUVEsSUFBSSxDQUFDUyxLQUFLLEdBQUdWLE1BQU1TLE9BQU87WUFDdEM7WUFDQSxPQUFPaEI7UUFDWDtRQUNBa0I7WUFDSSxPQUFPO1FBQ1g7SUFDSjtBQUNKLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXNzYW5nZXIvLi9zcmMvbGliL2F1dGgudHM/NjY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnXHJcbmltcG9ydCB7IFVwc3Rhc2hSZWRpc0FkYXB0ZXIgfSBmcm9tICdAbmV4dC1hdXRoL3Vwc3Rhc2gtcmVkaXMtYWRhcHRlcidcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuL2RiJ1xyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUnXHJcbmltcG9ydCB7IGZldGNoUmVkaXMgfSBmcm9tICdAL2hlbHBlcnMvcmVkaXMnXHJcblxyXG5mdW5jdGlvbiBnZXRHb29nbGVDcmVkZW50aWFscygpe1xyXG4gICAgY29uc3QgY2xpZW50SWQgPSBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEXHJcbiAgICBjb25zdCBjbGllbnRTZWNyZXQgPSBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVFxyXG5cclxuICAgIGlmKCFjbGllbnRJZCB8fCBjbGllbnRJZC5sZW5ndGggPT09IDApe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBHT09HTEVfQ0xJRU5UX0lEJylcclxuICAgIH1cclxuXHJcbiAgICBpZighY2xpZW50U2VjcmV0IHx8IGNsaWVudFNlY3JldC5sZW5ndGggPT09IDApe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBHT09HTEVfQ0xJRU5UX1NFQ1JFVCcpXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge2NsaWVudElkLCBjbGllbnRTZWNyZXR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xyXG4gICAgYWRhcHRlcjogVXBzdGFzaFJlZGlzQWRhcHRlcihkYiksXHJcbiAgICBzZXNzaW9uOiB7XHJcbiAgICAgICAgc3RyYXRlZ3k6ICdqd3QnXHJcbiAgICB9LFxyXG4gICAgcGFnZXM6IHtcclxuICAgICAgICBzaWduSW46ICcvbG9naW4nXHJcbiAgICB9LCBcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgICAgICAgY2xpZW50SWQ6IGdldEdvb2dsZUNyZWRlbnRpYWxzKCkuY2xpZW50SWQsXHJcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogZ2V0R29vZ2xlQ3JlZGVudGlhbHMoKS5jbGllbnRTZWNyZXQsXHJcbiAgICAgICAgfSlcclxuICAgIF0sXHJcbiAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICBhc3luYyBqd3Qoe3Rva2VuLCB1c2VyfSl7XHJcbiAgICAgICAgICAgIGNvbnN0IGRiVXNlclJlc3VsdCA9IChhd2FpdCBmZXRjaFJlZGlzKCdnZXQnLCBgdXNlcjoke3Rva2VuLmlkfWApKSBhcyB8IHN0cmluZyB8IG51bGxcclxuXHJcbiAgICAgICAgICAgIGlmKCFkYlVzZXJSZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgdG9rZW4uaWQgPSB1c2VyIS5pZFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRiVXNlciA9IEpTT04ucGFyc2UoZGJVc2VyUmVzdWx0KSBhcyBVc2VyXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGRiVXNlci5pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGRiVXNlci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IGRiVXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgIHBpY3R1cmU6IGRiVXNlci5pbWFnZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgc2Vzc2lvbih7c2Vzc2lvbiwgdG9rZW59KXtcclxuICAgICAgICAgICAgaWYodG9rZW4pe1xyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWRcclxuICAgICAgICAgICAgICAgIHNlc3Npb24udXNlci5uYW1lID0gdG9rZW4ubmFtZVxyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmVtYWlsID0gdG9rZW4uZW1haWxcclxuICAgICAgICAgICAgICAgIHNlc3Npb24udXNlci5pbWFnZSA9IHRva2VuLnBpY3R1cmVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVkaXJlY3QoKXtcclxuICAgICAgICAgICAgcmV0dXJuICcvZGFzaGJvYXJkJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiVXBzdGFzaFJlZGlzQWRhcHRlciIsImRiIiwiR29vZ2xlUHJvdmlkZXIiLCJmZXRjaFJlZGlzIiwiZ2V0R29vZ2xlQ3JlZGVudGlhbHMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJsZW5ndGgiLCJFcnJvciIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInNlc3Npb24iLCJzdHJhdGVneSIsInBhZ2VzIiwic2lnbkluIiwicHJvdmlkZXJzIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJ1c2VyIiwiZGJVc2VyUmVzdWx0IiwiaWQiLCJkYlVzZXIiLCJKU09OIiwicGFyc2UiLCJuYW1lIiwiZW1haWwiLCJwaWN0dXJlIiwiaW1hZ2UiLCJyZWRpcmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(api)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _upstash_redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @upstash/redis */ \"@upstash/redis\");\n/* harmony import */ var _upstash_redis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_upstash_redis__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = new _upstash_redis__WEBPACK_IMPORTED_MODULE_0__.Redis({\n    url: process.env.UPSTASH_REDIS_REST_URL,\n    token: process.env.UPSTASH_REDIS_REST_TOKEN\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRDtBQUUxQyxNQUFNQyxLQUFLLElBQUlELGlEQUFLQSxDQUFDO0lBQ3hCRSxLQUFLQyxRQUFRQyxHQUFHLENBQUNDLHNCQUFzQjtJQUN2Q0MsT0FBT0gsUUFBUUMsR0FBRyxDQUFDRyx3QkFBd0I7QUFDL0MsR0FBMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXNzYW5nZXIvLi9zcmMvbGliL2RiLnRzPzllNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVkaXMsIFJlcXVlc3RlciB9IGZyb20gJ0B1cHN0YXNoL3JlZGlzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGRiID0gbmV3IFJlZGlzKHtcclxuICAgIHVybDogcHJvY2Vzcy5lbnYuVVBTVEFTSF9SRURJU19SRVNUX1VSTCxcclxuICAgIHRva2VuOiBwcm9jZXNzLmVudi5VUFNUQVNIX1JFRElTX1JFU1RfVE9LRU4sXHJcbn0gYXMgdW5rbm93biBhcyBSZXF1ZXN0ZXIgKSJdLCJuYW1lcyI6WyJSZWRpcyIsImRiIiwidXJsIiwicHJvY2VzcyIsImVudiIsIlVQU1RBU0hfUkVESVNfUkVTVF9VUkwiLCJ0b2tlbiIsIlVQU1RBU0hfUkVESVNfUkVTVF9UT0tFTiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/lib/db.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/auth */ \"(api)/./src/lib/auth.ts\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_1___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_0__.authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlDO0FBQ0g7QUFHdEMsaUVBQWVDLHFEQUFRQSxDQUFDRCxrREFBV0EsQ0FBQ0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21lc3Nhbmdlci8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzUwYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xyXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aC9uZXh0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpIl0sIm5hbWVzIjpbImF1dGhPcHRpb25zIiwiTmV4dEF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5Cauth%5C%5B...nextauth%5D.ts&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();