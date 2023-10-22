import { Linking } from "react-native";
import { Clickable } from "./Clickable";
export class Email implements Clickable {
	private _email: string;
	private _contact: string | undefined;
	constructor(email: string, contact?: string) {
		this._email = email;
		this._contact = contact;
	}
	type: string = "Email";

	public display(): string {
		return this._email;
	}

	public get contact(): string | undefined {
		return this._contact;
	}

	public open() {
		Linking.openURL(`mailto:${this._email}`);
	}
}
