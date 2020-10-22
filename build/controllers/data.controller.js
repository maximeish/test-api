"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBusStops = exports.getBuses = exports.getRoutes = exports.getUsers = void 0;

var getUsers = function getUsers(req, res) {};

exports.getUsers = getUsers;

var getRoutes = function getRoutes(req, res) {
  return res.status(200).json([{
    id: 1,
    routeName: "Remera - Down Town",
    shortCode: "RDT",
    busStops: 12
  }, {
    id: 2,
    routeName: "Nyabugogo - Kacyiru",
    shortCode: "NYK",
    busStops: 24
  }, {
    id: 3,
    routeName: "Remera - Town",
    shortCode: "RTN",
    busStops: 10
  }, {
    id: 4,
    routeName: "Remera - Town",
    shortCode: "RTN",
    busStops: 10
  }, {
    id: 5,
    routeName: "Remera - Town",
    shortCode: "RTN",
    busStops: 10
  }, {
    id: 6,
    routeName: "Remera - Town",
    shortCode: "RTN",
    busStops: 10
  }, {
    id: 7,
    routeName: "Remera - Town",
    shortCode: "RTN",
    busStops: 10
  }, {
    id: 8,
    routeName: "Remera - Town",
    shortCode: "RTN",
    busStops: 10
  }, {
    id: 9,
    routeName: "Remera - Town",
    shortCode: "RTN",
    busStops: 10
  }, {
    id: 10,
    routeName: "Remera - Town",
    shortCode: "RTN",
    busStops: 10
  }, {
    id: 11,
    routeName: "Remera - Town",
    shortCode: "RTN",
    busStops: 10
  }, {
    id: 12,
    routeName: "Remera - Town",
    shortCode: "RTN",
    busStops: 10
  }, {
    id: 13,
    routeName: "Remera - Town",
    shortCode: "RTN",
    busStops: 10
  }, {
    id: 14,
    routeName: "LAST",
    shortCode: "RTN",
    busStops: 10
  }, {
    id: 15,
    routeName: "LAST",
    shortCode: "RTN",
    busStops: 10
  }, {
    id: 16,
    routeName: "LAST",
    shortCode: "RTN",
    busStops: 10
  }, {
    id: 17,
    routeName: "LAST",
    shortCode: "RTN",
    busStops: 10
  }, {
    id: 18,
    routeName: "LAST",
    shortCode: "RTN",
    busStops: 10
  }, {
    id: 19,
    routeName: "LAST",
    shortCode: "RTN",
    busStops: 10
  }, {
    id: 20,
    routeName: "LAST",
    shortCode: "RTN",
    busStops: 10
  }, {
    id: 21,
    routeName: "LAST",
    shortCode: "RTN",
    busStops: 10
  }, {
    id: 22,
    routeName: "LAST",
    shortCode: "RTN",
    busStops: 10
  }, {
    id: 23,
    routeName: "LAST",
    shortCode: "RTN",
    busStops: 10
  }, {
    id: 24,
    routeName: "LASTONE",
    shortCode: "RTN",
    busStops: 10
  }]);
};

exports.getRoutes = getRoutes;

var getBuses = function getBuses(req, res) {};

exports.getBuses = getBuses;

var getBusStops = function getBusStops(req, res) {};

exports.getBusStops = getBusStops;