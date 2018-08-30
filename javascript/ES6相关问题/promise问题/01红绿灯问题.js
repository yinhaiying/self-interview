/*
红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次；如何让三个灯按照这个规律不断交替重复亮灯？
（用Promse实现）三个亮灯函数已经存在：
 */
function red(){
 console.log('red');
}
function green(){
  console.log('green');
}
function yellow(){
  console.log('yellow');
}

var count = 0;
function lamp(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      red();
      resolve()
    },3000)
  }).then(()=>{
    return new Promise((resolve,reject) =>{
      setTimeout(() => {
        green();
        resolve()
      },1000)
    })
  }).then(() => {
    return new Promise((resolve,reject) =>{
      setTimeout(() => {
        yellow();
        count++;
        if(count>5){
          reject();
        }
        resolve()

      },1000)
    })
  })
    .then(() =>{
    lamp();
  }).catch(() => {

    })
}
lamp();