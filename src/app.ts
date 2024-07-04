import express from "express";
import morgan from 'morgan';

import { errorHandler } from "./middleware/errorHandler";
import indexRoutes from "./routes/indexRoutes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use('/api/',indexRoutes)

app.use(errorHandler)

export default app;
