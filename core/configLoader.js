import fs from "fs";

export function readJSON(file) {
    return JSON.parse(fs.readFileSync(file, "utf8"));
}

export function readFile(file) {
    return fs.readFileSync(file, "utf8");
}
