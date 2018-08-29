
function fib(n){

  let db =[0,1];
  for(var i = 2;i <= n;i++){
    db[i] = db[i-1] +db[i-2]
  }

  return db[n]
}


console.log( fib(3) );
