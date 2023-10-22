import { Linking } from "react-native";
export class URL {
	private _url: string;
	constructor(url: string) {
		this._url = url;
	}

	public get url(): string {
		return this._url;
	}

	public open() {
		Linking.openURL(this._url);
	}
}
