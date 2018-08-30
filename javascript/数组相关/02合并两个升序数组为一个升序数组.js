
let arr1 = [1,3,4,5,7,8,9];
let arr2 = [1,2,4,5,6,7,8,9,10];


function concat(arr1,arr2){
  var len1 = arr1.length;
  var len2 = arr2.length
  if(len1 < len2){
    var temp = arr1;
        arr1 = arr2;
        arr2 = temp;
  }
  //首先必须确保arr1的长度大于arr2;
  for(let i = 0; i < arr1.length;i++){
    for(let j = 0; j < arr2.length;j++){
      if(arr2[j] > arr1[i]){
        break;
      }else{
        arr1.splice(i,0,arr2[j])
        arr2.splice(j,1)
      }
    }
  }
  return arr1;
}
console.log(concat(arr1,arr2))






