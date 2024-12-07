
export enum Roles {
    WAITER = "waiter",
    KITCHEN = "kitchen",
    CHECKOUT = "checkout",
    MANAGER = "manager",
}

export interface User {
    id: number,
    no: number,
    fullName: string,
    email: string,
    phoneNumber: string,
    role: Roles,
    lastEntry?: Date
    lastExit?: Date
}