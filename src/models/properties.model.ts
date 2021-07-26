import { model, Schema, Document } from 'mongoose';
import { Property } from '@interfaces/properties.interface';

const propertySchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    }
});

const propertyModel = model<Property & Document>('Property', propertySchema);

export default propertyModel;