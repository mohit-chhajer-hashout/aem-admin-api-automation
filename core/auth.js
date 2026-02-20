import { readJSON } from "./configLoader.js";

export function getToken() {
    const cred = readJSON("configs/cred.json");
    return cred["x-auth-token"];
}
