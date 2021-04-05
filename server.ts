import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Application, send } from "https://deno.land/x/oak/mod.ts";
config();

const app = new Application();

app.use(async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/public`,
    index: "index.html",
  });
});

const port = +(Deno.env.get('PORT') || 3333);
app.addEventListener('listen', () => {
  console.log(`Listening on port:${port}`);
});
await app.listen({ port });
