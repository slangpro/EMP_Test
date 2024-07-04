import {Router} from "express";

import eventRoutes from "./eventRoutes"; 
const router = Router();


//routes
router.use('/event', eventRoutes);


export default router