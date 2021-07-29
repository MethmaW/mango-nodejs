import { Router } from 'express';
import PaymentMethodsController from '@controllers/payments.controller';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';

class PaymentsRoute implements Routes {
	public path = '/payment-methods';
	public router = Router();
	public paymentMethodsController = new PaymentMethodsController();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.get(`${this.path}`, authMiddleware, this.paymentMethodsController.getPaymentMethods);
	}
}

export default PaymentsRoute;