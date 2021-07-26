import { NextFunction, Request, Response } from 'express';
import { Booking } from '@interfaces/bookings.interface';
import bookingService from '@services/bookings.service';

class BookingsController {
    public bookingService = new bookingService();

    public getBookings = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllBookingsData: Booking[] = await this.bookingService.findAllBooking();

            res.status(200).json({ data: findAllBookingsData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };


}

export default BookingsController;