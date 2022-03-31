const fs = require('fs');


//读取文件1
function read1 (){
  return new Promise((resolve,reject)=>{
    fs.readFile('./01.let.html',(err,data)=>{
    //如果失败
    if(err) reject(err);
    //如果成功
    resolve(data)
  })
})
} 
//读取文件2
function read2 (){
  return new Promise((resolve,reject)=>{
    fs.readFile('./02.let-实践练习.html',(err,data)=>{
    //如果失败
    if(err) reject(err);
    //如果成功
    resolve(data)
  })
})
}
//读取文件3
function read3 (){
  return new Promise((resolve,reject)=>{
    fs.readFile('./03.const.html',(err,data)=>{
    //如果失败
    if(err) reject(err);
    //如果成功
    resolve(data)
  })
})
}

  async function main(){
    let r1 =    await read1();
    let r2 =    await read2();
    let r3 =    await read3();
    console.log(r1.toString())
    console.log(r2.toString())
    console.log(r3.toString())
  }
  main();
