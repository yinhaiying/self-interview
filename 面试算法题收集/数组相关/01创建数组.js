/*
 * 给定一个数组a和一个长度值l，生成一个指定长度值为l的新数组b，
 * 要求b中的每一个元素都是从a中随机获取的，且数组元素不可重复
 *
 */

function newArray(a,l){
  a = a.filter((item,index) => {
    return a.indexOf(item) === index
  })
  if(a.length < l){
    console.log('数组长度不够')
    return ''
  }
  var b = [];
  var i = 0;
  while(i<l){
    var random =Math.floor(Math.random()*a.length);
    console.log(random)
    if(b.indexOf(a[random]) === -1){
      b.push(a[random]);
      i++;
    }
    if(b.length === l){
      return b;
    }
  }
}
var a = [1,2,1,3,2,5,4,7,9,11,13,14];
var l = 3;


