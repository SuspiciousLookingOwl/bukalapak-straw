import { SearchParameters } from "./types";
import * as c from "./constants";

export const parameterToSearchQuery = async (obj: Partial<SearchParameters>): Promise<string> => {
	let query: string[] = [];
	for (let [key, value] of Object.entries(obj)) {
		key =
			key in c.NORMALIZED_SEARCH_PARAMETER_KEY ? c.NORMALIZED_SEARCH_PARAMETER_KEY[key] : key;
		if (value && value.constructor === Array) {
			if (key in c.PARAMETER_DELIMITER) value = value.join(c.PARAMETER_DELIMITER[key]);
			else {
				query = [
					...query,
					...(value as string[]).map((v: string) => {
						return `${key}[]=${encodeURIComponent(v)}`;
					}),
				];
				continue;
			}
		}
		query.push(`${key}=${encodeURIComponent(value as string)}`);
	}
	return query.join("&");
};
