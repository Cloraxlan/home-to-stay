import openMap from "react-native-open-maps";
import { Clickable } from "./Clickable";

export class Address implements Clickable {
	private _address: string;
	private _fullAddress: string;

	constructor(displayAddress: string, fullAddress: string) {
		this._address = displayAddress;
		this._fullAddress = fullAddress;
	}

	public display(): string {
		return this._address;
	}

	public open() {
		openMap({ query: this._fullAddress });
	}
}
