import { Product, SearchParameters } from "./types";
import * as c from "./constants";
import { parameterToSearchQuery } from "./helper";
import Bukalapak from "../../Bukalapak";

export async function search(this: Bukalapak, parameters: Partial<SearchParameters> = {}): Promise<Product[]> {
	parameters = {
		facet: true,
		filter_non_popular_section: true,
		page: 1,
		limit: 50,
		condition: "",
		superSeller: false,
		brand: false,
		...parameters
	};

	const response = await this.axios.get(`${c.ENDPOINT}?${await parameterToSearchQuery(parameters)}`, {
		params: {}
	});

	return await response.data.data;
}