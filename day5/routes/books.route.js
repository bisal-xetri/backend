import express from "express"
const router=express.Router()

router.get("/", (req, res) => {
    res.status(200).send("book bata hai hami");
  });
  
  router.get("/name", (req, res) => {
    res.status(200).send("book bhitra ko name tab hai ta");
  });
  router.get("/delete/:id",(req,res)=>{
    console.log(req.params)
    // console.log(req.query)
    // const {id}=req.query;
    // console.log(id)
      res.status(200).send({delete:true})
  })

  export default router;