const path=require('path')
console.log(__dirname);

// console.log(path.dirname('C:\Users\lenovo\Desktop\New folder\Dhakal\pathModule\index.js'))

// console.log(path.extname('C:\Users\lenovo\Desktop\New folder\Dhakal\pathModule\index.js'))

// console.log(path.basename('C:\Users\lenovo\Desktop\New folder\Dhakal\pathModule\index.js'))
// const myPath=path.parse('C:\Users\lenovo\Desktop\New folder\Dhakal\pathModule\index.js')
// console.log(myPath.name)

console.log(__filename)

const filePath=path.join("folder","students","data.txt")
const parseData=path.parse(filePath)
const resolvePath=path.resolve(filePath)
const extname=path.extname(filePath)
const basename=path.basename(filePath)
const dirname=path.dirname(filePath)

console.log({parseData,resolvePath,extname,basename,dirname})