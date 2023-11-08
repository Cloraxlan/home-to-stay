import { Address } from "../model/Clickables/Address";
import { Email } from "../model/Clickables/Email";
import { Phone } from "../model/Clickables/Phone";
import { URL } from "../model/Clickables/URL";
import { Location } from "../model/Location";
import { HousingResouce } from "../model/Resources/HousingResource";
import { SerializedResource } from "../model/Resources/Resource";
import { ResouceState } from "../reducers/resourcesSlice";
import {
	SQLiteDatabase,
	enablePromise,
	openDatabase,
} from "react-native-sqlite-storage";

enablePromise(true);

export const tableName = "Resources";
export const getDBConnection = async () => {
	return openDatabase({ name: "database.db", location: "default" });
};
export const createTable = async (db: SQLiteDatabase) => {
	// create table if not exists
	const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
		  value TEXT NOT NULL
	  );`;
	console.log("oi");
	await db.executeSql(query);
};

export const getResource = async (
	db: SQLiteDatabase,
): Promise<SerializedResource[]> => {
	try {
		const resources: SerializedResource[] = [];
		const results = await db.executeSql(`SELECT * FROM ${tableName}`);
		results.forEach((result) => {
			for (let index = 0; index < result.rows.length; index++) {
				resources.push(result.rows.item(index));
			}
		});
		return resources;
	} catch (error) {
		console.error(error);
		throw Error("Failed to get resources !!!");
	}
};

export const saveResources = async (
	db: SQLiteDatabase,
	resources: SerializedResource[],
) => {
	const insertQuery =
		`INSERT INTO ${tableName}(value) values` +
		resources.map((i) => `('${i.description}')`).join(",");

	return db.executeSql(insertQuery);
};

var Papa = require("papaparse");
const test = `Category,Header,Description,Address,Link,Phone,Email
HOUSING,AIntouch Outreach,A wide-range of services including substance abuse and housing,Beloit,https://intouchprogrambelo.wixsite.com/intouchbeloit,,intouchprogrambeloit@gmail.com
HOUSING,BIntouch Outreach,A wide-range of services including substance abuse and housing,Milwaukee,https://intouchprogrambelo.wixsite.com/intouchbeloit,,intouchprogrambeloit@gmail.com
HOUSING,CIntouch Outreach,A wide-range of services including substance abuse and housing,Green Bay,https://intouchprogrambelo.wixsite.com/intouchbeloit,,intouchprogrambeloit@gmail.com`;
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
			address = new Address(data[i][3], new Location(coords, data[i][3]));
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
	return resources;
};
