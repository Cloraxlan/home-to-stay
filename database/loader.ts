import { Address } from "../model/Clickables/Address";
import { Email } from "../model/Clickables/Email";
import { Phone } from "../model/Clickables/Phone";
import { URL } from "../model/Clickables/URL";
import { Location } from "../model/Location";
import { HousingResouce } from "../model/Resources/HousingResource";
import { ResouceState } from "../reducers/resourcesSlice";

var Papa = require("papaparse");
const test = `Category,Header,Description,Address,Link,Phone,Email
HOUSING,(Mid)Intouch Outreach,A wide-range of services including substance abuse and housing,Beloit,https://intouchprogrambelo.wixsite.com/intouchbeloit,,intouchprogrambeloit@gmail.com
HOUSING,(Cloesest)Intouch Outreach,A wide-range of services including substance abuse and housing,Milwaukee,https://intouchprogrambelo.wixsite.com/intouchbeloit,,intouchprogrambeloit@gmail.com
HOUSING,(far)Intouch Outreach,A wide-range of services including substance abuse and housing,Green Bay,https://intouchprogrambelo.wixsite.com/intouchbeloit,,intouchprogrambeloit@gmail.com`;
export const csvLoader = async () => {
	let csv = Papa.parse(test);
	let data = csv.data;
	const resources: ResouceState = {
		education: [],
		food: [],
		housing: [],
		jobs: [],
		healthcare: [],
		services: [],
	};
	for (let i = 1; i < data.length; i++) {
		let type = data[i][0];
		let header = data[i][1];
		let description = data[i][2];
		let address;
		let link;
		let phone;
		let email;
		if (data[i][3] != "") {
			let coords = await Location.requestCoords(data[i][3]);
			address = new Address(data[i][3], new Location(data[i][3]));
			console.log("oi", coords);
		}
		if (data[i][4] != "") {
			link = new URL(data[i][4]);
		}
		if (data[i][5] != "") {
			phone = new Phone(data[i][5]);
		}
		if (data[i][6] != "") {
			email = new Email(data[i][6]);
		}
		switch (type) {
			case "HOUSING":
				resources.housing.push(
					new HousingResouce(
						header,
						description,
						address,
						link,
						phone,
						email,
					).serialize(),
				);
				break;

			default:
				break;
		}
	}
	console.log(resources);
	return resources;
};
