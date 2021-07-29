import { NextFunction, Request, Response } from 'express';
import { PaymentMethod } from '@interfaces/payment-methods.interface';
import PaymentMethodService from '@services/payment-methods.service';

class PaymentsController {
	public paymentMethodService = new PaymentMethodService();

	public getPaymentMethods = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const findAllPaymentMethodData: PaymentMethod[] = await this.paymentMethodService.findAllPaymentMethods();

			res.status(200).json({ data: findAllPaymentMethodData, message: 'findAllPaymentMethods' });
		} catch (error) {
			next(error);
		}
	};


}

export default PaymentsController;