

var obj = {
  a:1,
  b:2,
  c:{
    name:'hai',
    age:24,
    sex:null
  },
  d:[1,2,3,4,5],
  show:function(){console.log('haha')}
}





function deepClone(obj){


  if(obj === null){
    return obj
  }

  var res = obj instanceof Array?[]:{};
  //先判断类型
  for(var attr in obj){
    if(typeof obj[attr] === 'object'){
      res[attr] = deepClone2(obj[attr])
    }else{
      res[attr] = obj[attr];
    }
  }
  return res;
}


// var obj2 =null;
var res = deepClone(obj);
console.log(res)
