import Bukalapak from "../dist/Bukalapak";

const bl = new Bukalapak();

test("search", async function () {
	const products = await bl.search({
		query: "RTX 2080",
	});

	expect(products.length).toBeGreaterThanOrEqual(30);
});
