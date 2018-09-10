
function to(num,decimal){
  //10进制转化为16进制 decimal可以是2，8，16
  return num.toString(decimal)
}

//2，8，16进制转化为10进制

function to10(num,decimal){
  //decimal 可以是2，8，16进制
  return parseInt(num,16)
}

var num=217;
console.log(to(num))  //d9