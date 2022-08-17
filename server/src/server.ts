import { App } from "./app";

const { app } = new App();
app.listen(8090, () => {
  console.log(`🛡️  Server listening on port: 8080🛡️`);
});
