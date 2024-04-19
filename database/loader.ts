import { escape } from "sqlstring";
import { Address } from "../model/Clickables/Address";
import { Email } from "../model/Clickables/Email";
import { Phone } from "../model/Clickables/Phone";
import { URL } from "../model/Clickables/URL";
import { Location } from "../model/Location";
const papa = require("papaparse");
import {
	Resource,
	ResourceMap,
	ResourceType,
	SerializedResource,
} from "../model/Resources/Resource";

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
	const query = `
	CREATE TABLE IF NOT EXISTS ${tableName}(
		  header TEXT,
		  description TEXT,
		  type int NOT NULL,
		  address TEXT,
		  url TEXT,
		  phone TEXT,
		  email TEXT,
		  PRIMARY KEY (header, type)
	  );`;
	await db.executeSql(query);
};

const parseEntry: any = (entry: string) => {
	try {
		return JSON.parse(entry);
	} catch {
		return undefined;
	}
};
export const getResource = async (
	db: SQLiteDatabase,
): Promise<SerializedResource[]> => {
	try {
		const resources: any[] = [];
		const results = await db.executeSql(`SELECT * FROM ${tableName}`);
		results.forEach((result: any) => {
			for (let index = 0; index < result.rows.length; index++) {
				let row = result.rows.item(index);
				let header = row.header;
				let description = row.description;
				let type = row.type;
				let address = parseEntry(row.address);
				let url = parseEntry(row.url);
				let phone = parseEntry(row.phone);
				let email = parseEntry(row.email);
				resources.push({
					header: header,
					description: description,
					type: type,
					address: address,
					link: url,
					phone: phone,
					email: email,
					icon: undefined,
				});
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
	/*for (let index = 0; index < resources.length; index++) {
		const resource = resources[index];
		let address = (
			await db.executeSql(
				`SELECT address FROM ${tableName} WHERE header = '${escape(
					resource.header,
				)}'`,
			)
		)
			.pop()
			?.rows.item(0);

		if (resource.address && !address) {
			resources[index].address = new Address(
				resource.address.address,
				new Location(
					await Location.requestCoords(resource.address.address),
					resource.address.address,
				),
			).serialize();
			console.log("new location entry", resource);
		} else if (resource.address && address) {
			console.log(address);
			resources[index].address = JSON.parse(address.address);
		}
	}*/

	resources.map((resource) => {
		db.transaction((t) => {
			t.executeSql(
				`INSERT OR REPLACE INTO ${tableName}(header, description, type, address, url, phone, email) values(? , ? , ?, ? , ? , ?, ?)`,
				[
					resource.header,
					resource.description,
					resource.type,
					JSON.stringify(resource.address),
					JSON.stringify(resource.link),
					JSON.stringify(resource.phone),
					JSON.stringify(resource.email),
				],
			);
		});
	});
};

export const reset = async () => {
	let db = await getDBConnection();
	let drop = `DROP TABLE ${tableName}`;
	db.executeSql(drop);
	createTable(db);
};

export const readCSV: (csv: string) => Promise<SerializedResource[]> = async (
	csvString: string,
) => {
	/*let unformattedResources: any[] = papa.parse(csv, {
		header: true,
	}).data;
	return unformattedResources.map((unformattedResource) => {
		let type: ResourceType;
		switch (unformattedResource.Category) {
			case 'HOUSING':
				type = ResourceType.HOUSING;
				break;
			case 'HEALTHCARE':
				type = ResourceType.HEALTHCARE;
				break;
			default:
				type = ResourceType.SERVICE;
		}
		let header = unformattedResource.Header;
		let description = unformattedResource.Description;
		let address =
			unformattedResource.Address == ''
				? undefined
				: unformattedResource.Address;
		let email =
			unformattedResource.Email == '' ? undefined : unformattedResource.Email;
		let link =
			unformattedResource.Link == '' ? undefined : unformattedResource.Link;
		let phone =
			unformattedResource.Phone == '' ? undefined : unformattedResource.Phone;
		return {
			header: header,
			description: description,
			type: type,
			address: address,
			email: email,
			link: link,
			phone: phone,
		};
	});*/

	let csv = papa.parse(csvString);
	let data = csv.data;
	let resources: SerializedResource[] = [];
	for (let i = 1; i < data.length; i++) {
		let typeText = data[i][0];
		let header = data[i][2];
		let description = data[i][6];
		if (data[i][8]) {
			description += "\n\nFee or Requirement: " + data[i][8];
		}
		let address;
		let link;
		let phone;
		let email;
		let type: ResourceType;
		//@ts-ignore
		type = ResourceMap[typeText];
		if (type == undefined) {
			continue;
		}

		if (data[i][4] != "") {
			//let coords = await Location.requestCoords(data[i][3]);
			address = new Address(
				data[i][4],
				new Location((address = data[i][4])),
			).serialize();
		}
		if (data[i][3] != "") {
			link = new URL(data[i][3]).serialize();
		}
		if (data[i][5] != "") {
			const phoneRe =
				/(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/;
			const emailRe =
				/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
			let emailString = emailRe.exec(data[i][5]);
			if (emailString && emailString[0]) {
				email = new Email(emailString[0]).serialize();
			}
			let phoneString = phoneRe.exec(data[i][5]);
			if (phoneString && phoneString[0]) {
				phone = new Phone(phoneString[0]).serialize();
			}
		}

		resources.push({
			header: header,
			address: address,
			description: description,
			email: email,
			link: link,
			phone: phone,
			type: type,
		});
	}
	return resources;
};
