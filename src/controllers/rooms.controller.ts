import { NextFunction, Request, Response } from 'express';
import { Room } from '@interfaces/rooms.interface';
import RoomService from '@services/rooms.service';

class RoomsController {
    public roomService = new RoomService();

    public getRooms = async (req: Request, res: Response, next: NextFunction) => {
        const { selectedCheckin, selectedCheckout } = req.body
        
        try {
            const findAllRoomsData: Room[] = await this.roomService.findAllRoom(selectedCheckin, selectedCheckout);
      

            res.status(200).json({ data: findAllRoomsData, message: 'GET Available- Rooms' });
        } catch (error) {
            next(error);
        }
    };

   
}

export default RoomsController;
