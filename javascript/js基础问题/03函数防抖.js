/*
函数防抖：是在事件多次触发时，事件函数每一次都要执行，如果事件函数中设计到DOM操作的
话，就会对性能有较大的影响。
比如监听onscroll 事件
 */
// window.onscroll = function(){
//   let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
//   console.log('滚动条位置：' + scrollTop);
// }


//函数防抖

// let timer;
// window.onscroll = function (){
//   if(timer){
//     clearTimeout(timer)
//   }
//
//    timer = setTimeout(function(){
//
//     let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
//     console.log('滚动条位置：' + scrollTop);
//     // timer = undefined;
//   },500)
// }

//函数节流

let startTime = Date.now();
let diff = 500;
let timer;
window.onscroll = function(){
  var nowTime = Date.now();
  // debugger
      if(nowTime - startTime > diff){
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        console.log('滚动条位置：' + scrollTop);
        startTime = nowTime;
      }else{
        clearTimeout(timer);
        timer = setTimeout(function () {

        }, 50);
      }
}

