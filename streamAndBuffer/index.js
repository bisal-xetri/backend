const fs=require('fs')
const http =require("http");
const server=http.createServer();
server.on("request",(req,res)=>{
//     let fs=require('fs');
//     fs.readFile("input.txt","utf8",(err,data)=>{
//     if(err) return console.error(err);
//     res.end(data.toString())
// })
  //create readable steam
//   const rstream=fs.createReadStream("inpu.txt");
//   rstream.on('data',(chunkdata)=>{
//    res.write(chunkdata)
//   })
//   rstream.on('end',()=>{
// res.end()
//   })
//   rstream.on('error',(err)=>{
// console.log(`file not found ${err}`)
//   }
//   )

//3rd way
const rstream=fs.createReadStream("input.txt");
rstream.pipe(res)
})
server.listen(8000);