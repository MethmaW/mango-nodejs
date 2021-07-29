import { Router } from 'express';
import BookingsController from '@controllers/bookings.controller';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';

class BookingsRoute implements Routes {
    public path = '/bookings';
    public router = Router();
    public bookingsController = new BookingsController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, authMiddleware, this.bookingsController.getBookings);
        this.router.post(`${this.path}/create-booking`, authMiddleware, this.bookingsController.createBooking);
        this.router.get(`${this.path}/:userid`, authMiddleware, this.bookingsController.getMyBookings);
        this.router.post(`${this.path}/cancel-booking`, authMiddleware, this.bookingsController.cancelBooking);
    }
}

export default BookingsRoute;