import { Elysia} from "elysia";

const app = new Elysia().get("/", (ctx) => {
  return {message: "Hello from Bun with Elysia!"};
}).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
