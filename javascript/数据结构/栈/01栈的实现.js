
function Stack(item = []){
  this.item = item;
  this.push = function (el){
    this.item.push(el)
  };
  this.pop = function(el){
    this.item.pop(el)
  };
  //获取栈顶元素
  this.peek = function(){
    return this.item[this.item.length-1]
  };
  //获取栈的长度
  this.size = function(){
    return this.item.length;
  };
  //栈是否为空
  this.isEmpty = function(){
    return this.item.length === 0;
  }
  //清空栈中的元素
  this.clear = function(){
    this.item = [];
  }
  //获取栈中的元素
  this.print = function(){
    return this.item.toString()
  }
}

var stack = new Stack();
stack.push('3');
var arr1 = [1,2,3,4,5];
var arr2 = [4,5,3,2,1];
//分析：主要是判断栈顶元素

// function check(arr1){
//   var res = []
//   for(var i = 0;i < arr1.length;i++){
//     if(stack.size === 0){
//       stack.push(arr[1])
//     }
//     if(stack.peek === arr[i-1]){
//       stack.push(arr.splice(i,1));
//     }else{
//       res.push(arr.splice(i,1))
//     }
//   }
//   return res.concat(arr1)
// }
// console.log(check())
