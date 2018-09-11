
/*

 */

function fn(a,b){
  var yushu = a%b;
  var item = a/b;
  if(yushu === 0){
    return a/b
  }else {
    //判断是否是有限的小数。
    var point = item.toString().indexOf('.'); //获取小数点的位置
    var count = item.toString().length-point-1;//获取小数点后的个数
    if(count > 0){
      //说明是有限位置
      return item
    }

  }
  return item;
}

console.log(fn(1,3))

