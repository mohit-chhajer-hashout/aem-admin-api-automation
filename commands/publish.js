import { publishContent } from "../apis/publishContent.js";

export async function runPublish(site, path) {
    await publishContent(site, path);
}
