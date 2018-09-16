




var str = '3 4 2';
var str1 = '5 3 1';
var str2 ='B 1';
var str3 ='A 2';
var str4 ='A 2';
var str5 ='A 3';
  line0 =str.split(' ');
  line1 = str1.split(' ');
  var i = 0;
  // while(i < parseInt(line0[1])){
  //   var line = str2.split(' ');
  //   if(line[0] == 'A'){
  //     line1[parseInt(line[1])]++;
  //   }
  //   if(line[0] == 'B'){
  //     line1[parseInt(line[1])]--;
  //   }
  // }
  // print(line1[parseInt(line0[2])])
var line = line1.sort((a,b) => {return b-a})
console.log(line)
