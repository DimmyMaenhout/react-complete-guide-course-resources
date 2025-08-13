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
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n// We will define functions which contains server-side code in the files that are in the api folder because API routes will only run on the server never on the client, the code in these files will never be exposed to the client\n// These functions are simply triggered whenever a request is sent to this route so to /api/new-meetup for example\n// the file names will act as path segments in the URL\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        // this is code we never want to run on the client side because it would expose our credentials to visitors which isn't a problem in this API route,\n        // to connect to the db insert the password <db_password> \n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://dimmymaenhout:CtjEf0B6VLx2Da74@cluster0.2szefvn.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0\"); // meetups is the name of our database, if it doensn't exist yet it will be created on the fly\n        const db = client.db();\n        const meetupsCollection = db.collection(\"meetups\"); // the collection can have any name of our choice, if it doesn't exist yet it will be created on the fly like the db\n        const result = await meetupsCollection.insertOne(data);\n        console.log(result);\n        client.close();\n        res.status(201).json({\n            message: \"Meetup inserted!\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsbU9BQW1PO0FBQ25PLGtIQUFrSDtBQUNsSCxzREFBc0Q7QUFFdkMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsTUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUk7UUFFckIsb0pBQW9KO1FBQ3BKLDBEQUEwRDtRQUMxRCxNQUFNQyxNQUFNLEdBQUcsTUFBTVAsd0RBQW1CLENBQ3RDLGdJQUFnSSxDQUNqSSxFQUFFLDhGQUE4RjtRQUNqRyxNQUFNUyxFQUFFLEdBQUdGLE1BQU0sQ0FBQ0UsRUFBRSxFQUFFO1FBQ3RCLE1BQU1DLGlCQUFpQixHQUFHRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxvSEFBb0g7UUFFeEssTUFBTUMsTUFBTSxHQUFHLE1BQU1GLGlCQUFpQixDQUFDRyxTQUFTLENBQUNSLElBQUksQ0FBQztRQUV0RFMsT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU0sQ0FBQyxDQUFDO1FBRXBCTCxNQUFNLENBQUNTLEtBQUssRUFBRSxDQUFDO1FBRWZiLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLGtCQUFrQjtTQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz83Mzk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuLy8gV2Ugd2lsbCBkZWZpbmUgZnVuY3Rpb25zIHdoaWNoIGNvbnRhaW5zIHNlcnZlci1zaWRlIGNvZGUgaW4gdGhlIGZpbGVzIHRoYXQgYXJlIGluIHRoZSBhcGkgZm9sZGVyIGJlY2F1c2UgQVBJIHJvdXRlcyB3aWxsIG9ubHkgcnVuIG9uIHRoZSBzZXJ2ZXIgbmV2ZXIgb24gdGhlIGNsaWVudCwgdGhlIGNvZGUgaW4gdGhlc2UgZmlsZXMgd2lsbCBuZXZlciBiZSBleHBvc2VkIHRvIHRoZSBjbGllbnRcbi8vIFRoZXNlIGZ1bmN0aW9ucyBhcmUgc2ltcGx5IHRyaWdnZXJlZCB3aGVuZXZlciBhIHJlcXVlc3QgaXMgc2VudCB0byB0aGlzIHJvdXRlIHNvIHRvIC9hcGkvbmV3LW1lZXR1cCBmb3IgZXhhbXBsZVxuLy8gdGhlIGZpbGUgbmFtZXMgd2lsbCBhY3QgYXMgcGF0aCBzZWdtZW50cyBpbiB0aGUgVVJMXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuXG4gICAgLy8gdGhpcyBpcyBjb2RlIHdlIG5ldmVyIHdhbnQgdG8gcnVuIG9uIHRoZSBjbGllbnQgc2lkZSBiZWNhdXNlIGl0IHdvdWxkIGV4cG9zZSBvdXIgY3JlZGVudGlhbHMgdG8gdmlzaXRvcnMgd2hpY2ggaXNuJ3QgYSBwcm9ibGVtIGluIHRoaXMgQVBJIHJvdXRlLFxuICAgIC8vIHRvIGNvbm5lY3QgdG8gdGhlIGRiIGluc2VydCB0aGUgcGFzc3dvcmQgPGRiX3Bhc3N3b3JkPiBcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgICAgXCJtb25nb2RiK3NydjovL2RpbW15bWFlbmhvdXQ6Q3RqRWYwQjZWTHgyRGE3NEBjbHVzdGVyMC4yc3plZnZuLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JmFwcE5hbWU9Q2x1c3RlcjBcIlxuICAgICk7IC8vIG1lZXR1cHMgaXMgdGhlIG5hbWUgb2Ygb3VyIGRhdGFiYXNlLCBpZiBpdCBkb2Vuc24ndCBleGlzdCB5ZXQgaXQgd2lsbCBiZSBjcmVhdGVkIG9uIHRoZSBmbHlcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7IC8vIHRoZSBjb2xsZWN0aW9uIGNhbiBoYXZlIGFueSBuYW1lIG9mIG91ciBjaG9pY2UsIGlmIGl0IGRvZXNuJ3QgZXhpc3QgeWV0IGl0IHdpbGwgYmUgY3JlYXRlZCBvbiB0aGUgZmx5IGxpa2UgdGhlIGRiXG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSk7XG5cbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgY2xpZW50LmNsb3NlKCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwiTWVldHVwIGluc2VydGVkIVwiIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();