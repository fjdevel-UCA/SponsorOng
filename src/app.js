import express,{json} from 'express';
import morgan from 'morgan';
import session from 'express-session';

//importing routes

import securityRoutes from './routes/security';

//initialization
const app = express();


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