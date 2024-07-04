import { Request, Response, NextFunction } from 'express';
import { Event } from '../models/eventModel';

let events: Event[] = [];
export const addEvent = (req: Request, res: Response, next: NextFunction) => {
    try {

      const newEvent: Event = { ...req.body, createdAt: new Date(), updatedAt: new Date() };
      events.push(newEvent);
      res.status(201).json(newEvent);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  
  export const updateEvent = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const index = events.findIndex(event => event.id === id);
      if (index !== -1) {
        events[index] = { ...events[index], ...req.body, updatedAt: new Date() };
        res.status(200).json(events[index]);
      } else {
        res.status(404).json({ message: 'Event not found' });
      }
    } catch (error) {
      next(error);
    }
  };


  export const deleteEvent = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const index = events.findIndex(event => event.id === id);
      if (index !== -1) {
        const deletedEvent = events.splice(index, 1);
        res.status(200).json(deletedEvent);
      } else {
        res.status(404).json({ message: 'Event not found' });
      }
    } catch (error) {
      next(error);
    }
  };


  export const getEventById = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const event = events.find(event => event.id === id);
      if (event) {
        res.status(200).json(event);
      } else {
        res.status(404).json({ message: 'Event not found' });
      }
    } catch (error) {
      next(error);
    }
  };


  export const listEvents = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { 
     eventName, organizer, eventDate, email, phone, 
        street, city, state, zip 
      } = req.query as {
        id?: string,
        eventName?: string,
        organizer?: string,
        eventDate?: string,
        email?: string,
        phone?: string,
        street?: string,
        city?: string,
        state?: string,
        zip?: string
      };
  
      let filteredEvents = events.filter(event => {
        if (eventName && !event.eventName.toLowerCase().includes(eventName.toLowerCase())) {
          return false;
        }
        if (organizer && !event.organizer.toLowerCase().includes(organizer.toLowerCase())) {
          return false;
        }
        if (eventDate) {
          const eventDateObj = new Date(eventDate);
          if (new Date(event.eventDate).toDateString() !== eventDateObj.toDateString()) {
            return false;
          }
        }
        if (email && !event.email.toLowerCase().includes(email.toLowerCase())) {
          return false;
        }
        if (phone && !event.phone.includes(phone)) {
          return false;
        }
        if (street && !event.location.street.toLowerCase().includes(street.toLowerCase())) {
          return false;
        }
        if (city && !event.location.city.toLowerCase().includes(city.toLowerCase())) {
          return false;
        }
        if (state && !event.location.state.toLowerCase().includes(state.toLowerCase())) {
          return false;
        }
        if (zip && !event.location.zip.includes(zip)) {
          return false;
        }
  
        return true;
      });
  
      res.status(200).json(filteredEvents);
    } catch (error) {
      next(error);
    }
  };