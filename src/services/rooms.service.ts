import { Room } from '@interfaces/rooms.interface';
import roomModel from '@models/rooms.model';

class RoomService {
    public rooms = roomModel;

    public async findAllRoom(): Promise<Room[]> {
        const rooms: Room[] = await this.rooms.find();
        return rooms;
    }

}

export default RoomService;
