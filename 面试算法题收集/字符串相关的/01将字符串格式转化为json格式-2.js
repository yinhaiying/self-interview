/*
将json字符串'{"a": 1, "b": "str", "c":[2, 3], "d":{"e": 4}}'
转化为如下格式：
{
    "a": 1,
    "b": "str",
    "c": [
        2,
        3
    ],
    "d": {
        "e": 4
    }
}
 */

let obj = JSON.parse('{"a": 1, "b": "str", "c":[2, 3], "d":{"e": 4}}');
let s="";
s +="{\n"+solve(obj,1)+"\n}"


function solve(obj,tab){
  var temp = "";
  //需要首先判断是不是数组，数组的遍历和对象的额遍历不太一样，需要分开进行操作
  if(Array.isArray(obj)){
    for(let i in obj){
      temp+="    "+i+",\n";
    }
  }else{
    for(let attr in obj){
      temp += addEmpty(tab);
      if(typeof obj[attr] !== 'object'){
        //之所以要咬断是否是string类型，是因为string类型的值待有缘双引号
        if(typeof obj[attr] === 'string'){
          temp +='\"'+attr+'\":'+'\"'+obj[attr]+'\"' +',\n';
        }else{
          temp +='\"'+attr+'\":'+obj[attr]+',\n';
        }
      }else if(Array.isArray(obj[attr])){
        //如果它不是对象，需要判断是不是数组，因为数组里面可以有新的对象
        temp+='\"'+attr+'\":'+"[\n"+solve(obj[attr],tab)+addEmpty(tab)+"],\n";
      }else{
        temp+='\"'+attr+'\":'+"{\n"+addEmpty(tab)+solve(obj[attr],tab)+addEmpty(tab)+"}";
      }
    }
  }
  return temp
}

//由于不同级别的空格个数不同，比如第一层只是两个空格，第二层有四个空格，因此需要进行控制
function addEmpty(tab){
  //tab一开始的个数应该是1个
  let space ='';
  for(var i = 0;i < tab;i++){
    space+=' '
  }
  return space
}
console.log(s)

