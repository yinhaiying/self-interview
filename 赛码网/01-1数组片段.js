function  hasPiece(array1) {
  var t = 0,  //t=1表示已经找到了片段的起点
    n = 0,
    len = array1.length - 1,
    top,                       //片段前一个数
    bottom,           //片段后一个数
    start,       //片段起点
    end;        //片段终点

  for (var i = 0;i < len;i ++) {

    if (array1[i] > array1[i + 1]) {

      if (t == 0) {
        start = array1[i];
        top = array1[i - 1] || -9999999999;
        t = 1;
        n ++;
        if (n > 1) {
          return "no";
        }
      }

    }else {

      if (t == 1) {
        end = array1[i];
        bottom =array1[i + 1];

        if (end < top || start > bottom ) {
          return "no";
        }
        t = 0;
      }

    }
  }

  if (n == 1 ) {
    return "yes";
  }else {
    return "no";
  }
}
var num = 46;
var arr = [51,52,56,87,86,81,79,74,71,69,67,66,65,60,59,57,89,91];
console.log(hasPiece(arr))
