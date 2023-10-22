import { ImageSourcePropType } from "react-native";
import { Address } from "../Clickables/Address";
import { Phone } from "../../model/Clickables/Phone";
import { URL } from "../../model/Clickables/URL";
import { Email } from "../Clickables/Email";

export enum ResourceType {
	EDUCATION,
	FOOD,
	HOUSING,
	JOB,
}

export class Resource {
	private _header: string;
	private _description: string;
	private _address: Address | undefined;
	private _link: URL | undefined;
	private _phone: Phone | undefined;
	protected _icon: ImageSourcePropType;
	private _email: Email | undefined;
	constructor(
		header: string,
		description: string,
		address?: Address,
		link?: URL,
		phone?: Phone,
		email?: Email,
	) {
		this._header = header;
		this._description = description;
		this._address = address;
		this._link = link;
		this._phone = phone;
		this._email = email;

		this._icon = require("./icons/square.png");
	}

	public get header(): string {
		return this._header;
	}

	public get description(): string {
		return this._description;
	}
	public get link(): URL | undefined {
		return this._link;
	}
	public get phone(): Phone | undefined {
		return this._phone;
	}

	public get address(): Address | undefined {
		return this._address;
	}

	public get icon(): ImageSourcePropType {
		return this._icon;
	}
	public get email(): Email | undefined {
		return this._email;
	}
}
