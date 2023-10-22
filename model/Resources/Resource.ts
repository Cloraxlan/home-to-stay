import { ImageSourcePropType } from "react-native";
import { Address } from "../Address";
import { Phone } from "../Phone";
import { URL } from "../URL";

export class Resource {
	private _header: string;
	private _description: string;
	private _address: Address | null;
	private _link: URL | null;
	private _phone: Phone | null;
	protected _icon: ImageSourcePropType;
	constructor(
		header: string,
		description: string,
		address?: Address,
		link?: URL,
		phone?: Phone,
	) {
		this._header = header;
		this._description = description;
		if (address) {
			this._address = address;
		} else {
			this._address = null;
		}
		if (link) {
			this._link = link;
		} else {
			this._link = null;
		}
		if (phone) {
			this._phone = phone;
		} else {
			this._phone = null;
		}
		this._icon = require("./icons/square.png");
	}

	public get header(): string {
		return this._header;
	}

	public get description(): string {
		return this._description;
	}
	public get link(): URL | null {
		return this._link;
	}
	public get phone(): Phone | null {
		return this._phone;
	}

	public get address(): Address | null {
		return this._address;
	}

	public get icon(): ImageSourcePropType {
		return this._icon;
	}
}
