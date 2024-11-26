import express from "express";
import booksRouter from "./routes/books.route.js"

const app = express();


app.get("/", (req, res) => {
  res.status(200).send("okey cha ta");
});
app.use("/book",booksRouter);
app.listen(8000, () => {
  console.log("server running...");
});
 