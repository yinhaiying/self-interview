

var A = [{
  _id :'1',
  parent:null,
  children:[
    {_id:'2',parent:'1',children:[{_id:'3',parent:'2'}]},
    {_id:'4',parent:'1',children:[{_id:'5',parent:'2'}]}
  ]
}];

/*
将A转换成B的形式：
   B = [
     {_id:'1'},
     {_id:'2',parent:'1'},
     {_id:'3',parent:'1'},
     {_id:'4',parent:'2'},
     {_id:'5',parent:'2'},
   ]

 */

function fn(arr){
  var obj =arr[0];
  var result = [];
  function deepclone(obj,result){
    var temp = {};
    for(var attr in obj){
      if(typeof obj[attr] !== 'object'){
        if(obj[attr]){
          temp[attr] = obj[attr];
        }
        if(attr === 'parent'){
          result.push(temp);
        }
      }else if(typeof obj[attr] ==='object' && obj[attr] !==null){
        arguments.callee(obj[attr],result)
      }else if(typeof obj[attr] ==='object' && obj[attr] ===null){
        result.push(temp);
      }

    }

    return result;
  }
  return deepclone(obj,result)
}
console.log(fn(A))
