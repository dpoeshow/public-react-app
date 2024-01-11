import axios from "axios";
import envStrings from "../assets/strings/env";

const isProd = envStrings.environment_name === 'Production';


export const BASE_URL = "https://397aeejgjc.execute-api.us-east-2.amazonaws.com";
export const URL_ROOT = isProd ? "test" : "test/dev";
export const HTTPS = axios.create({
    baseURL: BASE_URL + "/" + URL_ROOT,
});

export const SUNFOX_API_HOST = `https://api.${envStrings.base_domain}`
export const BUBBLE_NAV_URL_BASE = `https://app.sunfoxsolar.net${envStrings.bubble_environment_path}/results?first=yes&model_id=`
export const sunfoxApiClient = axios.create({
	baseURL: SUNFOX_API_HOST,
	headers: {
	   'Accept': 'application/json',
	   'Content-Type': 'application/json'
	}
});
