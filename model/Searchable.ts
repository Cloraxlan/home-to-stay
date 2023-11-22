export interface SearchResult {
	header: string;
	description: string;
}
export class Searchable {
	private _result: SearchResult;
	private _action: (dependancies: any) => void;
	private _dependancies: any;
	public constructor(
		result: SearchResult,
		action: (dependancies: any) => void,
		dependancies: any,
	) {
		this._result = result;
		this._action = action;
		this._dependancies = dependancies;
	}

	public get result(): SearchResult {
		return this._result;
	}

	public open() {
		this._action(this._dependancies);
	}
}
