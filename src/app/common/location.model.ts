export interface Coordinates {
    lat: number;
    lng: number;
}

export interface FieldLocation extends Coordinates {
    address: string;
    staticMapUrl: string;
    zoom: number;
}
