import { runIndex } from "./commands/index.js";
import { runPublish } from "./commands/publish.js";

const args = process.argv.slice(2);

const command = args[0];
const site = args[1];

async function main() {
    switch(command) {
        case "index":
            await runIndex(site);
            break;
        case "publish":
            await runPublish(site, args[2]);
            break;
        default:
            console.log("Available Commands:");
            console.log("node cli.js index <site>");
            console.log("node cli.js publish <site> <path>");
    }
}

main();
