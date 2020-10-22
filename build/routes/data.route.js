"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _data = require("../controllers/data.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var route = _express["default"].Router();

route.get('/users', function (req, res) {
  return (0, _data.getUsers)(req, res);
});
route.get('/routes', function (req, res) {
  return (0, _data.getRoutes)(req, res);
});
route.get('/buses', function (req, res) {
  return (0, _data.getBuses)(req, res);
});
route.get('/bus_stops', function (req, res) {
  return (0, _data.getBusStops)(req, res);
});
var _default = route;
exports["default"] = _default;