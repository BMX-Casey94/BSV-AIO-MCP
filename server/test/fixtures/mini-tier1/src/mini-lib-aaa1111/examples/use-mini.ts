import { MiniClient, miniHash } from "../src/index.js";

const client = new MiniClient();
const topics = await client.lookup("tm_example");
console.log(miniHash(topics[0] ?? ""));
