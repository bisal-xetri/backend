import express from "express";

import router from "./routes/userRoute.js";
const app = express();
app.use(express.json());

app.use('/user',router)

app.listen(8000, () => {
  console.log("Server has started...");
});
