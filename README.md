# A performance benchmark of Express, Express with Bun and Elysia with Bun

## Prerequisites
Make sure you have [node](https://nodejs.org) and [bun](https://bun.com) installed

Make sure you have [k6](https://k6.io/) installed

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

## Setup servers
Start all the servers using the following command (open three different terminal sessions for them)
```sh
# in apps/express-app directory
node index.ts
# in apps/bun-express-app directory
bun run index.ts
# in apps/elysia-app directory
bun run src/index.ts
```

## Run benchmark
Run the following command to run the benchmark
```sh
node script.js
```

After the tests have been run you can view the results in the `results` directory
