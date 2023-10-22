import { Linking } from "react-native";
import { Clickable } from "./Clickable";
export class URL implements Clickable {
	private _url: string;
	constructor(url: string) {
		this._url = url;
	}

	public display(): string {
		return this._url;
	}

	public open() {
		console.log(this._url);
		console.log("oi");
		Linking.openURL(this._url);
	}
}
