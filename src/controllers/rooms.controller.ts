import { NextFunction, Request, Response } from 'express';
import { Room } from '@interfaces/rooms.interface';
import roomService from '@services/rooms.service';

class RoomsController {
    public roomService = new roomService();

    public getRooms = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const findAllRoomsData: Room[] = await this.roomService.findAllRoom();

            res.status(200).json({ data: findAllRoomsData, message: 'findAll' });
        } catch (error) {
            next(error);
        }
    };

   
}

export default RoomsController;
