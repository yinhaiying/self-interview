
//辗转相除
function fn(num,n){
  var result = num ;
  var count = 0;
  while(result >= 2){
    result = result/2;
    count++;
  }
  if(result === 1 && count ===n){
    return true;
  }else{
   return false;
}
}

//toString 2^0=1 2^1=10 2^2 =100 2^3 1000
 function fn1(num,n){
  //首先把num转化为2进制3
   num = num.toString(2);
   console.log(num)
   if(num[0] === '1' &&num.length-1 === n ){
     return true
   }else{
     return false;
   }
 }

