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

## Results
After making 10 runs with a configuration of 10 virtual users in k6, I had the following results.

System specs: 16GB DDR4 RAM, Intel i5-6440HQ @ 2.60GHz, LITEON SSD 128GB


<img width="868" height="463" alt="Screenshot 2025-12-07 195715" src="https://github.com/user-attachments/assets/ddb834dc-3974-4d18-a1a6-e5fce6cef8c3" />

## Contributions
I don't think I have the best implementation as I still had to manually collate the results. I think there's a much better way to automate the benchmarks and if you think you have an idea, I will love to see them.
