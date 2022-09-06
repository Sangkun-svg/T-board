import { app } from "./app";

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server listening port on ${PORT}`);
  console.log(`default location : http://localhost:${PORT}/`);
});
