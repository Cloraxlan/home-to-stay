import { Linking } from "react-native";
import { Clickable } from "./Clickable";
const phoneNumberFormatter = require("phone-number-formats");
export class Phone implements Clickable {
	private _phoneNumber: string;
	constructor(phoneNumber: string) {
		this._phoneNumber = phoneNumber;
	}

	public display(): string {
		if (this._phoneNumber) {
			return new phoneNumberFormatter(this._phoneNumber)
				.format({ type: "domestic", separator: "-" })
				.toString();
		}
		return "";
	}

	public open() {
		let clean = new phoneNumberFormatter(this._phoneNumber)
			.format({ type: "domestic" })
			.toString();
		Linking.openURL(`tel:${clean}`);
	}
}
