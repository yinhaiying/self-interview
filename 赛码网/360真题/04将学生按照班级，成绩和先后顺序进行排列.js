

var str = `[{"class":4,"score":45},{"class":2,"score":88},
            {"class":2,"score":21},{"class":1,"score":99},
            {"class":3,"score":55},{"class":1,"score":99}]`;

var arr = JSON.parse(str);
arr.forEach((item,index) => {
  item.index = index;
})

function compare(a,b){
  if(a.class<b.class){
    return -1;
  }else if(a.class === b.class){
    //同一班级按照分数从大到小排名
    if(a.score > b.score){
      return -1;
    }else if(a.score < b.score){
      return 1;
    }else {
      if(a.index < b.index){
        return -1;
      }else if(a.index ===b.index){
        return 0;
      }else {
        return 1;
      }
    }
  }else{
    return 1;
  }
}
arr.sort(compare);
console.log(arr)
arr.forEach((item) => {
  delete item.index
})
console.log(arr)



