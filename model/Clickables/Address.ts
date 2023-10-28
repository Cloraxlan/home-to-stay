import openMap from "react-native-open-maps";
import { Clickable } from "./Clickable";
import { Location } from "../Location";

export class Address implements Clickable {
	private _address: string;
	private _location: Location;

	constructor(displayAddress: string, location: Location) {
		this._address = displayAddress;
		this._location = location;
	}
	type: string = "Address";

	public display(): string {
		return this._address;
	}

	public open() {
		openMap({ query: this._location.address });
	}
}
