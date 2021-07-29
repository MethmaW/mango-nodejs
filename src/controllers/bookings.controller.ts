import { NextFunction, Request, Response } from 'express';
import { Booking } from '@interfaces/bookings.interface';
import BookingService from '@services/bookings.service';

class BookingsController {
    public bookingService = new BookingService();

    public getBookings = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllBookingsData: Booking[] = await this.bookingService.findAllBooking();

            res.status(200).json({ data: findAllBookingsData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

    public createBooking = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const bookingData = req.body;
            const createBookingData = await this.bookingService.createBooking(bookingData.bookingData);

            res.status(201).json({ data: createBookingData, message: 'created booking' });
        } catch (error) {
            next(error);
        }
    };

    public getMyBookings = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.params['userid']
            const findMyBookingsData: Booking[] = await this.bookingService.findMyBookings(userId);

            res.status(200).json({ data: findMyBookingsData, message: 'find my bookings' });
        } catch (error) {
            next(error);
        }
    };

    public cancelBooking = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { bookingId } = req.body
            
            const deleteBookingData = await this.bookingService.deleteBooking(bookingId);

            res.status(200).json({ data: deleteBookingData, message: 'deleted booking' });
        } catch (error) {
            next(error);
        }
        
    }


}

export default BookingsController;