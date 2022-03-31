//1.引入fs模块
const fs = require('fs');

// 2.调用方法读取文件  Node读取文件方式
// fs.readFile('./01.let.html',(err,data)=>{
//   //读取失败
//   if(err) throw err;
//   //成功
//   console.log(data.toString());
// })

// Promise读取
const test = new Promise(function(resolve,reject){
  fs.readFile('./01.let.html',(err,data)=>{
    //失败
    if(err) reject (err);
    //成功
    resolve(data)
  })
})
 test.then(function(value){
   console.log(value.toString())
 },function(reason){
   console.log('读取失败')
 })