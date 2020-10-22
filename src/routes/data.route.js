import express from 'express';
import { getRoutes, getBuses, getBusStops, getUsers } from '../controllers/data.controller';

const route = express.Router();

route.get('/users', (req, res) => getUsers(req, res));
route.get('/routes', (req, res) => getRoutes(req, res));
route.get('/buses', (req, res) => getBuses(req, res));
route.get('/bus_stops', (req, res) => getBusStops(req, res));

export default route;