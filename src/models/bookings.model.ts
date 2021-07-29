import { model, Schema, Document } from 'mongoose';
import { Booking } from '@interfaces/bookings.interface';

const bookingSchema: Schema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    roomId: {
        type: Schema.Types.ObjectId,
        ref: "Room", required: true
    },
    price: {
        type: Number,
        required: true
    },
    checkin: {
        type: Date,
        required: true
    },
    checkout: {
        type: Date,
        required: true
    },
    bookedTime: {
        type: Date,
        default: Date.now
    },
    //TODO: Assumption: parkingSpot is optional
    parkingSpot: {
        type: Boolean,
        required: false
    },
    //TODO: Assumption: plannedArrivalTime is optional
    plannedArrivalTime: {
        type: String,
        required: false
    },
    //TODO: Assumption: notes is optional
    notes: {
        type: String,
        required: false
    },
    paymentMethodId: {
        type: Schema.Types.ObjectId,
        ref: "PaymentMethod",
        required: true
    },
});

const bookingModel = model<Booking & Document>('Booking', bookingSchema);

export default bookingModel;