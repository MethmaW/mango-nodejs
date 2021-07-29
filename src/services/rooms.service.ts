import { Room } from '@interfaces/rooms.interface';
import { Booking } from '@/interfaces/bookings.interface';
import roomModel from '@models/rooms.model';
import bookingModel from '@/models/bookings.model';
class RoomService {
    public rooms = roomModel;
    public bookings = bookingModel


    public async findAllRoom(selectedCheckin, selectedCheckout): Promise<Room[]> {

        const userCheckin: string = this.convertDateFormat(selectedCheckin)
        const userCheckout: string = this.convertDateFormat(selectedCheckout)

        const rooms: Room[] = await this.rooms.find().populate({ path: 'propertyId', model: 'Property' });
        const bookedRooms: Booking[] = await this.findAllBookings()

        const getBookedRoomsList: string[] = this.getBookedRooms(bookedRooms, userCheckin, userCheckout)

        const availableRoomsList: Room[] = this.getAvailableRoomsList(rooms, getBookedRoomsList)

        console.log("availableRoomsList", availableRoomsList);
        

        return availableRoomsList;
    }


    private async findAllBookings(): Promise<any> {
        const bookedRooms: Booking[] = await this.bookings.find();
        return bookedRooms;
    }

    private convertDateFormat(str: string): string {
        const date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }

    private between(type: string, time: string, bookedCheckin: string, bookedCheckout: string): boolean {
        if (type === "checkin") {
            return time >= bookedCheckin && time < bookedCheckout;
        }
        if (type === "checkout") {
            return time > bookedCheckin && time <= bookedCheckout;
        }
    }

    private getBookedRooms(bookedRooms: Booking[], userCheckin: string, userCheckout: string): string[] {
        const bookedRoomIds: string[] = []

        if (bookedRooms) {
            bookedRooms.forEach((room) => {

                const covertedCheckin = this.convertDateFormat(room.checkin);
                const convertedCheckout = this.convertDateFormat(room.checkout)


                if (this.between("checkin", userCheckin, covertedCheckin, convertedCheckout)) {
                    if (!bookedRoomIds.includes(room.roomId)) {
                        bookedRoomIds.push(room.roomId)
                    }
                }

                if (this.between("checkout", userCheckout, covertedCheckin, convertedCheckout)) {
                    if (!bookedRoomIds.includes(room.roomId)) {
                        bookedRoomIds.push(room.roomId)
                    }
                }

                if (this.between("checkin", covertedCheckin, userCheckin, userCheckout)) {
                    if (!bookedRoomIds.includes(room.roomId)) {
                        bookedRoomIds.push(room.roomId)
                    }
                }

                if (this.between("checkout", convertedCheckout, userCheckin, userCheckout)) {
                    if (!bookedRoomIds.includes(room.roomId)) {
                        bookedRoomIds.push(room.roomId)
                    }
                }
            })

        }

        console.log("bookedRoomIds", bookedRoomIds);
        

        return bookedRoomIds;
    }

    private getAvailableRoomsList(allRooms, bookedRooms: string[]): Room[] {

        let availableRooms = allRooms.filter
            (room => !bookedRooms.filter(bookedRoom => bookedRoom === room.id).length);      
        
        return availableRooms;
        
    }

}



export default RoomService;
