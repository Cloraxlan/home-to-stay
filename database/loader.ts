import { Address } from "../model/Clickables/Address";
import { Email } from "../model/Clickables/Email";
import { Phone } from "../model/Clickables/Phone";
import { URL } from "../model/Clickables/URL";
import { Location } from "../model/Location";
import { EducationResouce } from "../model/Resources/EducationResouce";
import { FoodResouce } from "../model/Resources/FoodResouce";
import { HealthcareResource } from "../model/Resources/HealthcareResource";
import { HousingResouce } from "../model/Resources/HousingResource";
import { JobResource } from "../model/Resources/JobResouce";
import { Resource, SerializedResource } from "../model/Resources/Resource";
import { ServiceResource } from "../model/Resources/ServiceResource";
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
	const query = `
	CREATE TABLE IF NOT EXISTS ${tableName}(
		  header TEXT primary key,
		  description TEXT,
		  type int NOT NULL,
		  address TEXT,
		  url TEXT,
		  phone TEXT,
		  email TEXT
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
	for (let index = 0; index < resources.length; index++) {
		const resource = resources[index];

		let newEntry =
			(
				await db.executeSql(
					`SELECT header FROM ${tableName} WHERE header = '${resource.header}'`,
				)
			).pop()?.rows.length == (undefined || 0);

		if (resource.address && newEntry) {
			resources[index].address = new Address(
				resource.address.address,
				new Location(
					await Location.requestCoords(resource.address.address),
					resource.address.address,
				),
			).serialize();
			console.log("new location entry");
		}
	}
	const insertQuery =
		`INSERT OR REPLACE INTO ${tableName}(header, description, type, address, url, phone, email) values` +
		resources
			.map(
				(i) =>
					`('${i.header}', '${i.description}', ${i.type},  '${JSON.stringify(
						i.address,
					)}',  '${JSON.stringify(i.link)}', '${JSON.stringify(
						i.phone,
					)}' ,  '${JSON.stringify(i.email)}')`,
			)
			.join(",");

	return db.executeSql(insertQuery);
};
