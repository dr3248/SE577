export interface TripApiInterface {
    destination: string,
    duration: string,
    price: string
}

export interface WeatherApiInterface {
    temp: string
    desc: string,
    icon: string,
    imgURL: string
}

export interface ApiErrorInterface {
    isError: boolean,
    errorCode: number,
    errorMessage: string
}