import { Booking } from '@interfaces/bookings.interface';
import bookingModel from '@models/bookings.model';

class BookingService {
    public bookings = bookingModel;

    public async findAllBooking(): Promise<Booking[]> {
        const bookings: Booking[] = await this.bookings.find();
        return bookings;
    }

}

export default BookingService;