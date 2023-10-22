import { Resource } from "./Resource";
import { Phone } from "../Clickables/Phone";
import { Address } from "../Clickables/Address";
import { URL } from "../Clickables/URL";

export class HousingResouce extends Resource {
	constructor(
		header: string,
		description: string,
		address?: Address,
		link?: URL,
		phone?: Phone,
	) {
		super(header, description, address, link, phone);
		this._icon = require("./icons/housing.png");
	}
}
