import { model, Schema, Document } from 'mongoose';
import { PaymentMethod } from '@interfaces/payment-methods';

const paymentMethodSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    }
});

const paymentMethodModel = model<PaymentMethod & Document>('PaymentMethod', paymentMethodSchema);

export default paymentMethodModel;