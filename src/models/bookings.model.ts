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
        required: true
    },
    paymentMethodId: {
        type: String,
        required: true
    },
    //TODO: Assumption: selecting if a parking spot is needed - required
    parkingSpot: {
        type: Boolean,
        required: true
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