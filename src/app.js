import express,{json} from 'express';
import morgan from 'morgan';

//importing routes

import securityRoutes from './routes/security';

//initialization
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//Routes
app.use("/api/security",securityRoutes);

export default app;