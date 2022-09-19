import { app } from "./app";
import "dotenv/config";

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening port on ${PORT}`);
  console.log(`default location : http://localhost:${PORT}/`);
});
