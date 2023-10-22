import { Resource } from "./Resource";
import { Phone } from "../Phone";
import { Address } from "../Address";
import { URL } from "../URL";

export class JobResource extends Resource {
	constructor(
		header: string,
		description: string,
		address?: Address,
		link?: URL,
		phone?: Phone,
	) {
		super(header, description, address, link, phone);
		this._icon = require("./icons/jobs.png");
	}
}
