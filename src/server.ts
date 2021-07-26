process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import RoomsRoute from './routes/rooms.route';
import validateEnv from '@utils/validateEnv';

import roomModel from '@models/rooms.model'
import paymentMethodModel from "@models/payment-methods.model"

validateEnv();

const app = new App([
    new AuthRoute(),
    new IndexRoute(),
    new UsersRoute(),
    new RoomsRoute()
]);

const createRoom = async () => {
    const createUserData = await roomModel.create({
        propertyId: "60fef52e060b9ea27ac4e13e",
        occupancy: "Single",
        amenities: ["Sea view", "Balcony", "Floor area(500m sqft)", "Wifi"],
        rates: [{
            bookingType: "Bed & Breakfast",
            rate: 15.00
        }, {
            bookingType: "Half-Board",
                rate: 24.00
            }, {
            bookingType: "Full-Board",
                rate: 30.00
            }],
        defaultCheckin: 13,
        defaultCheckout: 11,
    });

    console.log("vhhg", createUserData);
    
}

const createPaymentMethod = async () => {
    const createUserData = await paymentMethodModel.create([{ name: "credit card online" }, { name: "credit card at the location" }, { name: "cash payments at the location" }])
}




app.listen();
