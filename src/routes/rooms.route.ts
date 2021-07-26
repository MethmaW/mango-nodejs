import { Router } from 'express';
import RoomsController from '@controllers/rooms.controller';
import { Routes } from '@interfaces/routes.interface';

class RoomsRoute implements Routes {
    public path = '/rooms';
    public router = Router();
    public roomsController = new RoomsController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.roomsController.getRooms);
    }
}

export default RoomsRoute;