export interface Bus{
    class: string,
    coachType: string,
    totalSeats: number;
    id: number,
    name: string,
    fare: number,
    departureTime: any
    imageUrl: string[],
    availableSeats: number,
    seatsTaken: number[],
    selectedSeats: number[],
    busFromId: number,
    busToId: number
}

export interface Seats{
    seatNumber: string,
    fare: number,
    class: string
}

export interface User{
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

export interface Reserve{
    id: number,
    ticketNumber:string,
    busId: number,
    passengerId: number,
    seatsTaken:number[]
}