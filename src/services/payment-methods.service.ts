import { PaymentMethod } from '@interfaces/payment-methods.interface';
import paymentMethodModel from '@models/payment-methods.model';

class PaymentMethodService {
	public paymentMethods = paymentMethodModel;

	public async findAllPaymentMethods(): Promise<PaymentMethod[]> {
		const PaymentMethod: PaymentMethod[] = await this.paymentMethods.find();
		return PaymentMethod;
	}

}

export default PaymentMethodService;