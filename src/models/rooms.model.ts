import { model, Schema, Document } from 'mongoose';
import { Room } from '@interfaces/rooms.interface';
import propertyModel from '@/models/properties.model';

const rateSchema = new Schema({
    _id: false,
    bookingType: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    }
})

const roomSchema: Schema = new Schema({
    propertyId: {
        type: Schema.Types.ObjectId,
        ref: propertyModel,
        required: true
    },
    occupancy: {
        type: String,
        required: true,
    },
    amenities: [{
        type: String
    }],
    rates: [rateSchema],
    defaultCheckin: {
        type: Number,
        required: true,
    },
    defaultCheckout: {
        type: Number,
        required: true,
    },
});

const roomModel = model<Room & Document>('Room', roomSchema);

export default roomModel;