import { ImageSourcePropType } from "react-native";
import { Address, SerialiedAddress } from "../Clickables/Address";
import { Phone, SerializedPhone } from "../../model/Clickables/Phone";
import { SerializedURL, URL } from "../../model/Clickables/URL";
import { Email, SerializedEmail } from "../Clickables/Email";
import { SearchResult } from "../Searchable";

export enum ResourceType {
	ADVOCACY,
	CLOTHING,
	EDUCATION,
	EMPLOYMENT,
	FAITH,
	FAMILY,
	FINANCE,
	FOOD,
	HEALTHCARE,
	HOUSING,
	IDENTIFICATION,
	LEGAL,
	LEISURE,
	SUPERVISION,
	SUPPORT_GROUP,
	TRANSPORTATION,
}

export const ResourceMap = {
	Advocacy: ResourceType.ADVOCACY,
	Clothing: ResourceType.CLOTHING,
	Education: ResourceType.EDUCATION,
	Employment: ResourceType.EMPLOYMENT,
	Faith: ResourceType.FAITH,
	Family: ResourceType.FAMILY,
	Finance: ResourceType.FINANCE,
	Food: ResourceType.FOOD,
	Healthcare: ResourceType.HEALTHCARE,
	Housing: ResourceType.HOUSING,
	Identification: ResourceType.IDENTIFICATION,
	Legal: ResourceType.LEGAL,
	Leisure: ResourceType.LEISURE,
	Supervision: ResourceType.SUPERVISION,
	"Support Group": ResourceType.SUPPORT_GROUP,
	Transportation: ResourceType.TRANSPORTATION,
};

export interface SerializedResource {
	header: string;
	description: string;
	address: SerialiedAddress | undefined;
	link: SerializedURL | undefined;
	phone: SerializedPhone | undefined;
	icon?: ImageSourcePropType | undefined;
	email: SerializedEmail | undefined;
	type: ResourceType;
}

export class Resource {
	private _header: string;
	private _description: string;
	private _address: Address | undefined;
	private _link: URL | undefined;
	private _phone: Phone | undefined;
	protected _icon: ImageSourcePropType;
	private _email: Email | undefined;
	private _type: ResourceType;
	constructor(
		header: string,
		description: string,
		type: ResourceType,
		icon: ImageSourcePropType,
		address?: Address,
		link?: URL,
		phone?: Phone,
		email?: Email,
	) {
		this._header = header;
		this._description = description;
		this._icon = icon;
		this._address = address;
		this._link = link;
		this._phone = phone;
		this._email = email;
		this._type = type;
	}
	public static clean(text: string) {
		text = text.replace('"', '\\"');
		text = text.replace("'", "\\'");
		return text;
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
	public get type(): ResourceType {
		return this._type;
	}
	public get searchResult(): SearchResult {
		return {
			header: this._header,
			description: this._description,
			icon: this._icon,
		};
	}
	public static of(serialize: SerializedResource): Resource {
		let defaultIcon = require("./icons/square.png");
		switch (serialize.type) {
			case ResourceType.EDUCATION:
				defaultIcon = require("./icons/education.png");
				break;

			case ResourceType.FOOD:
				defaultIcon = require("./icons/foodIcon.png");
				break;

			case ResourceType.HOUSING:
				defaultIcon = require("./icons/housing.png");
				break;

			case ResourceType.EMPLOYMENT:
				defaultIcon = require("./icons/jobs.png");
				break;

			case ResourceType.HEALTHCARE:
				defaultIcon = require("./icons/healthcare.png");
				break;
		}
		return new Resource(
			serialize.header,
			serialize.description,
			serialize.type,
			defaultIcon,
			Address.of(serialize.address),
			URL.of(serialize.link),
			Phone.of(serialize.phone),
			Email.of(serialize.email),
		);
	}

	public serialize(): SerializedResource {
		return {
			address: this._address?.serialize(),
			description: this._description,
			email: this._email?.serialize(),
			header: this._header,
			icon: this._icon,
			link: this._link?.serialize(),
			phone: this._phone?.serialize(),
			type: this._type,
		};
	}
}
