import { callAdminAPI } from "../core/apiClient.js";
import { readJSON, readFile } from "../core/configLoader.js";
import { getToken } from "../core/auth.js";
import { log } from "../core/logger.js";

export async function createIndexes(siteConfig) {

    const site = readJSON(`configs/${siteConfig}.json`);
    const body = readFile(site.bodyFile);
    const token = getToken();

    const url = `https://admin.hlx.page/config/${site.org}/sites/${site.site}/${site.endpoint}`;

    log("Calling API: " + url);

    return callAdminAPI({ url, token, body });
}
