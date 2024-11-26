const http=require("http")

const server=http.createServer((req,res)=>{
   if(req.url==="/"){
    res.end("hello from another universe.")
   }else if(req.url==="/about"){
    res.end("hello from about")
   }
   else if(req.url==="/whatsapp"){
    res.end("hello from what's app");
   }else{
    res.writeHead(404,{"Content-type":"text/html"})

    res.end("ERROR 404 NOT FOUND");
   }
})
server.listen(8000,()=>{
    console.log("Listening to port 8000")
})