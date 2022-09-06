import "dotenv/config";
import { App } from "./app";

const { PORT, NODE_ENV } = process.env;
const currentServerState = NODE_ENV === "development" ? "Dev" : "Prod";
const { app } = new App();
app.listen(PORT, () => {
  console.log(`🛡️  ${currentServerState} Server listening on port: ${PORT}`);
});
