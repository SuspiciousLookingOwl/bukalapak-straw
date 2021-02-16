# Bukalapak Straw

Simple API Wrapper for Bukalapak. Intended for usage in Node environment.

---

## Installation

```
npm i bukalapak-straw
```

---

## Example

```js
const Bukalapak = require("bukalapak-straw");

const bl = new Bukalapak();

async function run() {
	const products = await bl.search({
		query: "RTX 2080",
		page: 1,
		orderBy: Bukalapak.SEARCH.ORDER_BY.HIGHEST_RATING,
		priceRange: "10000000:30000000",
		ratingRange: "4:5",
		couriers: ["SiCepat REG", "JNE REG"],
	});
	console.log(products[0]);
}

run();
```

[Check out product output example](example/product.json)

## API

#### `new Bukalapak()`

Creates new Bukalapak instance.

#### `.search(parameters)`

Searches for products, it's async so it returns a `Promise` of products.

`parameters` is an object that can have following keys:

| Key           | Description                                       | Value                                                                                                                                   |
| ------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `condition`   | Product condition                                 | string (`"new"` \| `"used"`)                                                                                                            |
| `orderBy`     | Order search result                               | string (`"price"` \| `"-price"` \| `"bestratingratio"` \| `"bestselling"` \| `""` \| `"date"`)<br>Enum from `Bukalapak.SEARCH.ORDER_BY` |
| `query`       | Search keyword                                    | string                                                                                                                                  |
| `priceRange`  | Product price range                               | string<br>format: `priceMin:priceMax`<br>e.g: `"10000:50000"`                                                                           |
| `superSeller` | Only shows results from super seller store        | boolean                                                                                                                                 |
| `bukaMall`    | Only shows results from mall store                | boolean                                                                                                                                 |
| `page`        | Page duh                                          | integer                                                                                                                                 |
| `ratingRange` | Product rating range                              | string<br>format: `ratingMin:ratingMax`<br>e.g: `"3:5"`                                                                                 |
| `couriers`    | List of allowed shipping couriers of the products | string[]                                                                                                                                |

---

### Todo

-   [ ] Improve typings in `Product` interface
-   [ ] More test coverage
-   [ ] Improve documentation
-   [ ] Implement more API endpoint (such as: get product information, get shop information, etc.)
