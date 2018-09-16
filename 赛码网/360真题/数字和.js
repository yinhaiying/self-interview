
var str = '000999';
function sum(str){
  var arr = str.split('');
  var sum1= parseInt(arr[0])+parseInt(arr[1])+parseInt(arr[2]);
  var sum2= parseInt(arr[3])+parseInt(arr[4])+parseInt(arr[5]);
  var count = 0;
  if(sum1 < sum2){
    var diff = sum2-sum1;
    var i = 0;
    while(9-parseInt(arr[i]) <= diff){
      count++;

      if(i >= 3){
        break;
      }
      diff = diff -(9-parseInt(arr[i])) ;
      i++;
      if((9-parseInt(arr[i]))-diff >= 0 ){
        count++;
        return count;
      }
    }
  }else if(sum1 > sum2){
    var diff = sum2-sum1;
    var i = 3;
    while(9-parseInt(arr[i]) <= diff){
      count++;
      if(i >= 6){
        break;
      }
      diff = diff -(9-parseInt(arr[i])) ;
      i++;
      if((9-parseInt(arr[i]))-diff >= 0 ){
        count++;
        return count;
      }
    }
  }else{
    return 0;
  }
  return count;

}
console.log(sum(str))
