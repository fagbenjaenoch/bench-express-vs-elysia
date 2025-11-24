import { execSync } from "child_process";
import fs from "node:fs";

const apis = {
	elysia: "http://localhost:3000",
	expressWithBun: "http://localhost:3001",
	express: "http://localhost:3002",
};

// create results directory
fs.mkdir("./results", (err) => {
	console.error(`An error occurred while creating the directory: ${err}`);
});

for (const [name, url] of Object.entries(apis)) {
	console.log(`Running tests for ${url}...`);

	execSync(`BASE_URL=${url} k6 run test.js > results/result_${name}.txt`, {
		stdio: "inherit",
	});
}

console.log("All tests complete");
