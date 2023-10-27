export interface Coordinates {
	latitude: number;
	longitude: number;
}
export class Location {
	private _latitude: number;
	private _longitude: number;
	private _address: string;
	private static defaultAddress: string = "Milwaukee, WI";
	private static defaultLatitude: number = 43.0389;
	private static defaultLongitude: number = -87.9065;

	constructor(coordinates: Coordinates, address = Location.defaultAddress) {
		this._address = address;
		this._latitude = coordinates.latitude;
		this._longitude = coordinates.longitude;
	}

	//distance in km
	public distance(location2: Location) {
		const R = 6371; // km
		let lat1 = this._latitude;
		let lat2 = location2.latitude;
		let lon1 = this._longitude;
		let lon2 = location2.longitude;
		let dLat = this.toRad(lat2 - lat1);
		let dLon = this.toRad(lon2 - lon1);
		lat1 = this.toRad(lat1);
		lat2 = this.toRad(lat2);
		let a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
		let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		let d = R * c;
		return d;
	}

	public get latitude(): number {
		return this._latitude;
	}

	public get longitude(): number {
		return this._longitude;
	}
	public get address(): string {
		return this._address;
	}
	public get coordinates(): Coordinates {
		return { latitude: this.latitude, longitude: this.longitude };
	}
	private toRad(distance: number) {
		return (distance * Math.PI) / 180;
	}
	public static async requestCoords(address?: string): Promise<Coordinates> {
		if (!address) {
			return {
				latitude: Location.defaultLatitude,
				longitude: Location.defaultLongitude,
			};
		}
		try {
			let req = await fetch("https://geocode.maps.co/search?q=" + address);
			let json = await req.json();
			return {
				latitude: json[0].lat,
				longitude: json[0].lon,
			};
		} catch {
			return {
				latitude: Location.defaultLatitude,
				longitude: Location.defaultLongitude,
			};
		}
	}
}
