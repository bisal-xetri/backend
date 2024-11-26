const path=require('path')

console.log(path.dirname('C:\Users\lenovo\Desktop\New folder\Dhakal\pathModule\index.js'))

console.log(path.extname('C:\Users\lenovo\Desktop\New folder\Dhakal\pathModule\index.js'))

console.log(path.basename('C:\Users\lenovo\Desktop\New folder\Dhakal\pathModule\index.js'))
const myPath=path.parse('C:\Users\lenovo\Desktop\New folder\Dhakal\pathModule\index.js')
console.log(myPath.name)