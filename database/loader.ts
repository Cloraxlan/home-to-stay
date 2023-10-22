import { Address } from "../model/Clickables/Address";
import { Email } from "../model/Clickables/Email";
import { Phone } from "../model/Clickables/Phone";
import { URL } from "../model/Clickables/URL";
import { EducationResouce } from "../model/Resources/EducationResouce";
import { HousingResouce } from "../model/Resources/HousingResource";
import { ResourceType } from "../model/Resources/Resource";
import { ResouceState } from "../reducers/resourcesSlice";

var Papa = require("papaparse");
const test = `Category,Header,Description,Address,Link,Phone,Email
HOUSING,Intouch Outreach,A wide-range of services including substance abuse and housing,Beloit,https://intouchprogrambelo.wixsite.com/intouchbeloit,,intouchprogrambeloit@gmail.com
HEALTHCARE,We Adapt,Healing from trauma using outdoor activites,https://www.ccweadapt.com/,,(715)456-0252,weadaptpeers@gmail.com`;
export const csvLoader = () => {
	let csv = Papa.parse(test);
	let data = csv.data;
	const resources: ResouceState = {
		education: [],
		food: [],
		housing: [],
		jobs: [],
	};
	for (let i = 1; i < data.length; i++) {
		let type = data[i][0];
		let header = data[i][1];
		let description = data[i][2];
		let address = new Address(data[i][3], data[i][3]);
		let link = new URL(data[i][4]);
		let phone = new Phone(data[i][5]);
		let email = new Email(data[i][6]);
		switch (type) {
			case "HOUSING":
				resources.housing.push(
					new HousingResouce(header, description, address, link, phone, email),
				);
				break;

			default:
				break;
		}
	}
	console.log(resources);
	return resources;
};
