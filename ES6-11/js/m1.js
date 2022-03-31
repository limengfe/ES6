// 1.想要被引入到其他的文件 可以在语句前使用export
export  let school ="北大";
  export  function fn(){
    console.log('你好啊！')
}
//2.完全暴漏
   let name = "李孟飞";
    function myName() {
        console.log('我是李孟飞');
    }
    export{name,myName};
//3.默认暴漏 export default 
  export default{
       food:"apple",
       change: function(){
           console.log("坏了");
       }

  }

  export let a = 1;