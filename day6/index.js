import express from "express";
import booksRouter from "./routes/books.route.js"
import validateToken from "./middlewares/validateToken.js";
import rateLimit from "express-rate-limit";

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const limiter=rateLimit({
    windowMs:15*60*1000,
    max:5,
    standardHeaders:true,
    legacyHeaders:false,
})
app.use(limiter)
app.use((req,res,next)=>{
   validateToken(req,res,next);
})

app.get("/",validateToken, (req, res) => {
  res.status(200).send("okey cha ta");
});
app.use("/book",booksRouter);
app.listen(8000, () => {
  console.log("server running...");
});
 