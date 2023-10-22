import { Linking } from "react-native";
export class Email {
	private _email: string;
	private _contact: string | undefined;
	constructor(email: string, contact?: string) {
		this._email = email;
		this._contact = contact;
	}

	public get email(): string | undefined {
		return this._email;
	}

	public get contact(): string | undefined {
		return this._contact;
	}

	public open() {
		Linking.openURL(`mailto:${this._email}`);
	}
}
