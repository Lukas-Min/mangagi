//* IMPORT ALL PACKAGE DEPENDENCIES
import express from 'express';
import morgan from 'morgan';
import pkg from 'body-parser';
const { urlencoded, json } = pkg;
//* LIST OF ALL DEPENDENCIES: END



//* IMPORT DATABASE INSTANCE AND SOTRE TO DB
import connectDB from './API/models/con_db.js';



//* IMPORT ALL ROUTERS
// import mangaRouter from './API/routers/manga_router.js';



//* INITIALIZE EXPRESS APP
const app = express();



//* CALL FUNCTION connectDB FOUND IN con_db FILE WHICH CONNECTS TO DB
connectDB();



//* DEPENDENCY MIDDLEWARES: START
//* TO LOG CLIENT REQUEST-RESPONSE DATA IN THE DEV ENVIRONMENT
app.use(morgan('dev'));



//* PARSE DATA THAT ARE ENCODED
//* content-type: application/x-www-form-urlencoded
app.use(urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 })); //? This is commonly configured for images 



//* PARSE DATA THAT ARE IN JSON FORMAT
//* content-type: application/json
app.use(json({ limit: '50mb' }));
//* DEPENDENCY MIDDLEWARES: END



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});



//* DEFINE MODULE ENDPOINT + ROUTER
// app.use('/mangas', mangaRouter);



//* ERROR MIDDLEWARE: START
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
}); //? this code handles requests from unknown endpoints


app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});
//* ERROR MIDDLEWARE: END



export default app;