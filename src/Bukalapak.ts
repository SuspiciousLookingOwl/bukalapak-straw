import axios, { AxiosInstance } from "axios";
import applyCaseMiddleware from "axios-case-converter";
import { search, constants as searchConstants } from "./api/search";

class Bukalapak {
	private accessToken: {
		token: string;
		expiresAt: number;
	};

	protected axios: AxiosInstance;
	static SEARCH = searchConstants;

	constructor(axiosInstance: AxiosInstance = applyCaseMiddleware(axios.create())) {
		this.axios = axiosInstance;
		this.accessToken = {
			token: "",
			expiresAt: 0,
		};

		this.axios.interceptors.request.use(async (config) => {
			if (!this.accessToken || Date.now() >= this.accessToken.expiresAt) {
				await this.fetchAccessToken();
			}
			config.params["access_token"] = this.accessToken.token;
			return config;
		});
	}

	private async fetchAccessToken() {
		const html = (await axios.get("https://bukalapak.com")).data as string;
		const accessToken = html.split('access_token":"')[1].split('"')[0];
		const expiresAt = +html.split('expires_at":')[1].split(",")[0];
		this.accessToken = {
			token: accessToken,
			expiresAt,
		};
	}

	search = search;
}

export default Bukalapak;
