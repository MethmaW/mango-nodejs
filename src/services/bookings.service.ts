import { Booking } from '@interfaces/bookings.interface';
import bookingModel from '@models/bookings.model';
import userModel from '@models/users.model';
import nodemailer from "nodemailer";

class BookingService {
    public bookings = bookingModel;
    public users = userModel

    public async findAllBooking(): Promise<Booking[]> {
        const bookings: Booking[] = await this.bookings.find();
        return bookings;
    }

    public async createBooking(bookingData: Booking): Promise<Booking> {

        const createBookingData: Booking = await this.bookings.create(bookingData);
        const user: any = await this.users.findOne({ _id: bookingData.userId})

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.APP_EMAIL,
                pass: process.env.APP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.APP_EMAIL,
            to: user.email,
            subject: "[no-reply] Mango Holidays Booking Confirmation",
            html: `<p>Hello ${user.firstName},</p>
                <p>Thank you for booking with us. Please find the booking details below. 
                <p>Check in Date & Time: ${bookingData.checkin.slice(0, 15)}</p>
                <p>Checkout Date & Time: ${bookingData.checkout.slice(0, 15)}</p>
                <p>Price: ${bookingData.price}</p>
                <p>Thank you,</p>
                <p>Mango Holidays</p>`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });

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