

// let timer = setInterval(()=>{
//   count++;
//   if(count>=5){
//     clearInterval(timer)
//   }
//   console.log(1)
// },1000)
//
var count = 0;
function interval(fn,t) {
    fn()
    if(count<=5){
      setTimeout(arguments.callee(fn,t),t)
    }
}
interval(()=>{
  count++;
console.log(count)},1000)