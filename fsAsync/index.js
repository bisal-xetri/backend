const fs= require('fs');

// fs.writeFile('read.txt',"today is awesome day :)",(err)=>{
//    console.log(`Fill has been created ${err}`)
// });

// fs.appendFile("read.txt",".Yeah I Know",(err)=>{
//     console.log("task completed.")
// })

fs.readFile("read.txt","utf8",(err,data)=>{
    console.log("ok cha ta read vyo ni la hera ta:> ")
    console.log(data)
})