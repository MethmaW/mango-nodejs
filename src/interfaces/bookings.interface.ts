export interface Booking {
    _id: string;
    userId: string
    roomId: string
    price: number
    checkin: string
    checkout: string
    bookedTime: string
    paymentMethodId: string
    parkingSpot: boolean
    plannedArrivalTime: string
    notes: string
}