/*
atob

a

b

aaacaaa

aca

aa


 */
// var str = 'atobatob';
// var str1 = 'atob';
// var str2 = 'o';

var str = 'astalavista';
var str1 = 'astla';
var str2 = 'lavista';


//不一定需要是连续的，只要是在数组中存在就行。因此实际上就是检测子串的存在



function fn(str,str1,str2){
  var item1 = check(str,str1);


  var forward = false;
  var backward = false;
  if(item1){
     forward = check(str.slice(1),str2);
  }
  str = str.split('').reverse().join('');
  var item2 = check(str,str1);
  if(item2){
    backward = check(str.slice(1),str2);
  }
  if(forward && !backward){
    return 'forward';
  }else if(!forward && backward){
    return 'backward';
  }else if(forward && backward){
    return 'both';
  }else{
    return 'invalid';
  }


}

//检测str中是否有str1这个子串
function check(str1,str2){
  var i = 0;
  var index;
  while(i < str2.length){
    index = str1.indexOf(str2[i]);
    if(index > -1){
      str1 = str1.slice(index);
      i++;
    }else{
      return false;
    }

  }
  return true;
}
console.log(fn(str,str1,str2))
// console.log(check(str,str1))


