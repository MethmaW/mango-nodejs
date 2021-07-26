export interface Booking {
    _id: string;
    userId: string
    roomId: string
    checkin: string
    checkout: string
    bookedTime: string
    paymentMethodId: string
    parkingSpot: boolean
    requiredAmenities: string[]
    plannedArrivalTime: string
    notes: string
}