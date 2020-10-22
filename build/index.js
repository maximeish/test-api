"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var bodyParser = _interopRequireWildcard(require("body-parser"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _data = _interopRequireDefault(require("./routes/data.route"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
var port = process.env.PORT || 3000; // support parsing of application/json type post data

app.use(bodyParser.json()); //support parsing of application/x-www-form-urlencoded post data

app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/', function (req, res) {
  res.status(200).json({
    status: 'success',
    message: "Welcome to the data provider API for phantom application"
  });
});
app.use('/', _data["default"]);
app.use(function (req, res, next) {
  next((0, _httpErrors["default"])(404, "Resource Not Found"));
});
app.use(function (err, req, res, next) {
  res.status(err.status || 404).json({
    message: err.message
  });
});
app.listen(port, function () {
  console.log("Server listening on http://localhost:".concat(port));
});
var _default = app;
exports["default"] = _default;