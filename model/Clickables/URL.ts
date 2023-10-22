import { Linking } from "react-native";
import { Clickable } from "./Clickable";
export class URL implements Clickable {
	private _url: string;
	constructor(url: string) {
		this._url = url;
	}
	type: string = "Website";

	public display(): string {
		return this._url;
	}

	public open() {
		Linking.openURL(this._url);
	}
}
