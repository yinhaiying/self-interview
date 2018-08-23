
//将数组进行排序，排序规则是进行比较 比如10，2那么就比较102 和210
var largestNumber = function(nums) {
  if(nums.every((item)=>{return item===0})){
    return 0;
  }
  nums = nums.sort(compare)
  var result = '';
  for(var i = 0;i<nums.length;i++){
    result += nums[i]
  }
  return result;
};

function compare(a,b){
  var num1 = parseInt( a.toString()+b.toString()+'' );//102
  var num2 = parseInt( b.toString()+a.toString()+'' );//210
  if(num1>num2){
    return -1
  }else if(num1<num2){
    return 1
  }else{
    return 0;
  }
}
var nums = [3,30,34,5,9];
console.log( largestNumber(nums) );
