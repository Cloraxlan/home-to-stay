import { Linking } from "react-native";
import { Clickable } from "./Clickable";
export interface SerializedURL {
	url: string;
}
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

	public serialize(): SerializedURL {
		return { url: this._url };
	}
	public static of(serialized: SerializedURL | undefined) {
		if (!serialized) {
			return undefined;
		}
		return new URL(serialized.url);
	}
}
