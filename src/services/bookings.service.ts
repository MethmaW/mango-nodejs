import { Booking } from '@interfaces/bookings.interface';
import bookingModel from '@models/bookings.model';

class BookingService {
    public bookings = bookingModel;

    public async findAllBooking(): Promise<Booking[]> {
        const bookings: Booking[] = await this.bookings.find();
        return bookings;
    }

    public async createBooking(bookingData: Booking): Promise<Booking> {
        const createBookingData: Booking = await this.bookings.create(bookingData);
        return createBookingData
    }

    public async findMyBookings(userId) {
        const myBookings: Booking[] = await this.bookings.find({ userId: userId })
            .populate({
                path: 'roomId', model: 'Room',
                populate: {
                    path: 'propertyId'
                },
            })
            .populate({
                path: 'paymentMethodId', model: 'PaymentMethod',
            })
        return myBookings;
    }

    public async deleteBooking(bookingId) {
        const cancelBooking = await this.bookings.deleteOne({ _id: bookingId })
        return cancelBooking;
    }

}

export default BookingService;