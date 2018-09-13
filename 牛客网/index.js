/*


题目描述：实现一个 memoize 方法，接收一个函数 A 并返回一个新函数 B，使得新函数 B 缓存了 A 的返回值、但是执行多次 B 而只执行了一次原函数 A。其中，
A = function() {console.log(‘executing’); return ‘output’},
B = memoize(A);
 */

var A = function(){
  console.log('executing');
  return ('output')
};
function memoize(fn){
    var x = (A)();
    return function(){
      return x;
    }
}
var B = memoize(A)
console.log( B());
console.log( B());
console.log( B());

