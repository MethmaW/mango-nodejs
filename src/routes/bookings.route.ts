import { Router } from 'express';
import BookingsController from '@controllers/bookings.controller';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';

class RoomsRoute implements Routes {
    public path = '/bookings';
    public router = Router();
    public bookingsController = new BookingsController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, authMiddleware, this.bookingsController.getBookings);
    }
}

export default RoomsRoute;