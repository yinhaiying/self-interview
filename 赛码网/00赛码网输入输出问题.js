//读取输入
var line = read_line();、
print(typeof line);
var arr = line.split(' ');//分割后得到数组
var N = parseInt(arr[0]); //获取元素需要使用parseInt
var M = parseInt(arr[1]);
print(N);
print(M)


//读取一行输入的方法，
//方法1：如果输入数据较小， 可以通过readInt()或者readFloat()来逐个进行获取。
//比如输入为 2 3
var N = readInt()

//read_line()直接读取一行数字
let params = read_line().split(" ");
let n = parseInt(params[0],10);
let m = parseInt(params[1],10);



let task1 = [],

  task2 = [];
// 先通过gets来读取一行进行操作
let input = gets(30000).split(" ");
task1 = input.map((item) => parseInt(item, 10));

for(let i=0;i <m; i++) {
  task2.push(parseInt(read_line(),10));
}

for(let i=0; i< m; i++) {
  let temp = task2[i];
  //一直自增，知道在task任务中不存在为止，这个值就是工作时间
  while (task1.indexOf(temp) !== -1) {
    temp++;
  }
  print(temp);
}

let task1 = []，//表示任务队列
task2 = [];
for(let i=0;i <m; i++) {
  task2.push(parseInt(read_line(),10));
}
