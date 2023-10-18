import openMap from "react-native-open-maps";

class Address {
	private _display: string;
	private _fullAddress: string;

	constructor(display: string, fullAddress: string) {
		this._display = display;
		this._fullAddress = fullAddress;
	}

	public get display(): string {
		return this._display;
	}

	public open() {
		openMap({ query: this._fullAddress });
	}
}
