export const ENDPOINT = "https://api.bukalapak.com/multistrategy-products/";

export const NORMALIZED_SEARCH_PARAMETER_KEY = {
	orderBy: "sort",
	superSeller: "top_seller",
	bukaMall: "brand",
	query: "keywords",
	priceRange: "price_range",
	ratingRange: "rating",
	start: "offset",
} as Record<string, string>;

export const PARAMETER_DELIMITER = {
	condition: "#",
	shipping: "#",
} as Record<string, string>;

export const ORDER_BY = {
	LOWEST_PRICE: "price",
	HIGHEST_PRICE: "-price",
	HIGHEST_RATING: "bestratingratio",
	BEST_SELLING: "bestselling",
	MOST_RELEVANT: "",
	NEWEST: "date",
} as const;

export const CONDITION = {
	NEW: "new",
	USED: "used",
} as const;
