import { Linking } from "react-native";
const phoneNumberFormatter = require("phone-number-formats");
export class Phone {
	private _phoneNumber: string;
	constructor(phoneNumber: string) {
		this._phoneNumber = phoneNumber;
	}

	public get phoneNumber(): string {
		return new phoneNumberFormatter(this._phoneNumber)
			.format({ type: "domestic", separator: "-" })
			.toString();
	}

	public call() {
		let clean = phoneNumberFormatter(this._phoneNumber)
			.format({ type: "domestic" })
			.toString();
		Linking.openURL(`tel:${clean}`);
	}
}
