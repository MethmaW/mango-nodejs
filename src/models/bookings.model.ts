import { model, Schema, Document } from 'mongoose';
import { Booking } from '@interfaces/bookings.interface';

const bookingSchema: Schema = new Schema({
    userId: {
        type: String,
        required: true
    },
    roomId: {
        type: Schema.Types.ObjectId,
        ref: "Room", required: true
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
    paymentMethodId: {
        type: String,
        required: true
    },
    //TODO: Assumption: parkingSpot is optional
    parkingSpot: {
        type: Boolean,
        required: false
    },
    //TODO: Assumption: requiredAmenities is optional
    requiredAmenities: [{
        type: String,
        required: false
    }],
    //TODO: Assumption: plannedArrivalTime is optional
    plannedArrivalTime: {
        type: Number,
        required: false
    },
    //TODO: Assumption: notes is optional
    notes: {
        type: String,
        required: false
    }
});

const bookingModel = model<Booking & Document>('Booking', bookingSchema);

export default bookingModel;