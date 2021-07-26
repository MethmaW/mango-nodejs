process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import validateEnv from '@utils/validateEnv';

import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import RoomsRoute from './routes/rooms.route';
import BookingsRoute from './routes/bookings.route';

validateEnv();

const app = new App([
    new AuthRoute(),
    new IndexRoute(),
    new UsersRoute(),
    new RoomsRoute(),
    new BookingsRoute(),
]);


app.listen();
