

var line=[];
var r;
while(line[0] = read_line()){
  r= 'YES';

  line[1] = read_line();
  line[2] = read_line();

  for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
      if(line[i][j] !== line[2-i][2-j]){
        r = 'NO';
      }
    }
  }

  print(r);
}
