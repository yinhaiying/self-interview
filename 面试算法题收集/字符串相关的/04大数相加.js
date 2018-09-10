
/*
在js中如果两个很大的数相加，不能直接进行相加，因为可能超出范围，而且可能减小精度
因此需要把它转化为字符串进行处理
 */
var num1 = 444;
var num2 = 28;

function sum(num1,num2){
  //第一步首先要转化成字符串，并且进行反转
  num1 = num1.toString().split('').reverse().join('');
  num2 = num2.toString().split('').reverse().join('');
  let len1 = num1.length;
  let len2 = num2.length;
  let len = len1>len2?len1:len2;

  //进行补0；
  if(len1 > len2){
    for(var i = 0;i < len1 - len2;i++){
      num2 += '0';
    }
  }else if(len1 < len2){
    for(var i = 0;i < len2-len1;i++){
      num1 += '0';
    }
  }
  var result = [];
  var count = 0;//进位
  //进行相加
  // debugger
  for(var i = 0;i < len;i++){
    var temp = parseInt( num1[i]) + parseInt(num2[i]) + count;
    [temp,count] = temp >= 10? [temp-10,1]:[temp,0];
    result.push(temp);
  }
  result.push(count)
  return parseInt( result.reverse().join('') );
}
console.log( sum(num1,num2) );