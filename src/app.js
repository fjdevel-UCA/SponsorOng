import express,{json} from 'express';
import morgan from 'morgan';
import session from 'express-session';

//importing routes

import securityRoutes from './routes/security';

//initialization
const app = express();
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//middlewares
app.use(morgan('dev'));
app.use(json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));


//Routes
app.use("/api/security",securityRoutes);

export default app;