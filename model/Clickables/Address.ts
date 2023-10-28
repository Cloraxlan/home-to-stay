import openMap from "react-native-open-maps";
import { Clickable } from "./Clickable";
import { Location, SerializedLocation } from "../Location";

export interface SerialiedAddress {
	address: string;
	location: SerializedLocation;
}
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

	public get location() {
		return this._location;
	}

	public serialize(): SerialiedAddress {
		return { address: this._address, location: this.location.serialize() };
	}

	public static of(serialized: SerialiedAddress | undefined) {
		if (!serialized) {
			return undefined;
		}
		return new Address(serialized.address, Location.of(serialized.location));
	}
}
