# A performance benchmark of Express, Express with Bun and Elysia with Bun

1. Make sure you have node and bun installed
2. Make sure you have k6 installed
For windows, you can install it through choco
```ps
choco install k6
```
For Mac, you can install through brew
```sh
brew install k6
```
For linux, you can install it through snap or apt
```sh
sudo apt install k6
```
3. Start all the servers
```sh
# in express-app directory
node index.ts
# in express-with-bun directory
bun run index.ts
# in elysia-app directory
bun run src/index.ts
```
4. Run the following command to run the benchmark
```sh
node script.js
```
After the tests have been run you can view the results in the `results` directory
