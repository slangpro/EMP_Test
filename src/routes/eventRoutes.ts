import { Router } from "express";
import { addEvent, deleteEvent, getEventById, listEvents, updateEvent } from "../controllers/eventController";

const router = Router();


//api endpoints
router.post('/', addEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);
router.get('/:id', getEventById);
router.get('/', listEvents);


export default router;
