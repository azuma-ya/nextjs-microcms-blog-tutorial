import { createClient } from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: "5d997iujj0", // service-domain は XXXX.microcms.io の XXXX 部分
	apiKey: process.env.CMS_API_KEY,
});
