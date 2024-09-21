const fs = require('fs');

// Async
// fs.writeFile('nodejs_architecture.txt','This is written text',(err)=>{
//     if(err){
//         console.log("Unable to write");
//     }
//     console.log("Written succesfully");
// })

// Sync
// fs.writeFileSync('nodejs_architecture.txt','Second updated text');

// reading and printing the content if file
// const buff = new Buffer(1024);
// fs.open('nodejs_architecture.txt','r+',(err,fd)=>{
//     if(err){
//         console.log("Error opening file");
//     }

//     fs.read(fd,buff,0,buff.length,0,function(err,bytes){
//         if(err){
//             console.log("Error reading file");
//         }
//         console.log(buff.slice(0,bytes).toString());
//     })

// })

// appending additional information
// const newData = 'One of the advantages of Node.js is that it allows you to work on both the front-end and back-end of your application. And you use one programming language JavaScript to do so.This is good news for front-end developers who work with JavaScript. If you want to start working on the server side, its easier compared to learning a new back-end language from scratch.'
// fs.appendFile('nodejs_architecture.txt',newData,(err)=>{
//     if(err){
//         console.log("Error appending data");
//     }
// });

// deleting the file
// fs.unlink('nodejs_architecture.txt',(err)=>{
//     if(err){
//         console.log("Error deleting file");
//     }
//     console.log("File deleted successfully"); 
// });

