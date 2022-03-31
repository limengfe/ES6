//1.引入模块
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

// fs.readFile('./01.let.html',(err,data1)=>{
//   fs.readFile('./01.let.html',(err,data2)=>{
//     fs.readFile('./01.let.html',(err,data3)=>{
//        let result = data1 + data2 + data3;
//        console.log(result);
//     });
//   });
// });

//promise实现

const p = new Promise((resolve,reject)=>{
  fs.readFile('/ES6复习/01.let.html',(err,data)=>{
    resolve(data);
  })
})

p.then(value=>{
  return new Promise((resolve,reject)=>{
    fs.readFile('./02.let-实践练习.html',(err,data)=>{
      resolve([value,data]);
  });
})
}).then(value=>{
  return new Promise((resolve,reject)=>{
    fs.readFile('./03.const.html',(err,data)=>{
      value.push(data);
      resolve(value)
    })
  })
}).then(value=>{
  console.log(value.toString())
})
 