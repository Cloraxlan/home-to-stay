import { Resource } from "./Resource";
import { Phone } from "../Clickables/Phone";
import { Address } from "../Clickables/Address";
import { URL } from "../Clickables/URL";
import { Email } from "../Clickables/Email";

export class HealthcareResource extends Resource {
	constructor(
		header: string,
		description: string,
		address?: Address,
		link?: URL,
		phone?: Phone,
		email?: Email,
	) {
		super(header, description, address, link, phone, email);
		this._icon = require("./icons/healthcare.png");
	}
}
