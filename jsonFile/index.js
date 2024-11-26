const fs= require('fs')

const bioData={
     name:"bishal",
     age:23,
     gender:"male",

}
// const jsonData=JSON.stringify(bioData)//convert into json

// console.log(jsonData)

// const objData=JSON.parse(jsonData)//convert into object
// console.log(objData)

const jsonData=JSON.stringify(bioData);
fs.writeFile("json1.json",jsonData,(err)=>{
    console.log(err)
})


fs.readFile("json1.json","utf8",(err,data)=>{
  const objData=JSON.parse(data)
  console.log(data)
  console.log(objData)
})