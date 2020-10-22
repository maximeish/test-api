import express from 'express';
import * as bodyParser from 'body-parser';
import createError from 'http-errors';
import data from './routes/data.route';
import dotEnv from 'dotenv';

dotEnv.config();

const app = express();
const port = process.env.PORT || 3000;

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).json({
    	status: 'success',
        message: "Welcome to the data provider API for phantom application"
    });
});

app.use('/', data);

app.use((req, res, next) => {
    next(createError(404, "Resource Not Found"));
});

app.use((err, req, res, next) => {
    res.status(err.status || 404).json({
        message: err.message
    });
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

export default app;