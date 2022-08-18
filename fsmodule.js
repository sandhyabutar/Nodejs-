const fs = require ('fs');

//fs.readFile('file.txt','utf8',(err, data)=>{
   // console.log(err,data)
// /})
// const a= fs.readFileSync('file.txt')
// console.log(a)
// console.log(a.toString())
// console.log("Finished reading file")
// fs.writeFile("file2.txt","this is second file data", ()=>{
//     console.log("written to the file")
// })
b= fs.writeFileSync('file2.txt',"this is write data with the help of Sync function ")
console.log(b )
console.log("Finished reading file ")
               