interface Rate {
    bookingType: string;
    rate: number
}

export interface Room {
    _id: string;
    propertyId: string;
    occupancy: string;
    amenities: string[];
    rates: Rate[]
    defaultCheckin: number;
    defaultCheckout: number;
    availability: boolean;
}