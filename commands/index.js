import { createIndexes } from "../apis/createIndexes.js";

export async function runIndex(site) {
    const res = await createIndexes(site);
    console.log("Status:", res.status);
    console.log(await res.text());
}
