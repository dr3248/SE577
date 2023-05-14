export interface TripApiInterface {
    destination: string,
    duration: string,
    price: string
}

export interface ApiErrorInterface {
    isError: boolean,
    errorCode: number,
    errorMessage: string
}