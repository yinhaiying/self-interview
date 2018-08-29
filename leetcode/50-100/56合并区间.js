
/*
输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 */

/*
*  * function Interval(start, end) {
        this.start = start;
        this.end = end;
 *   }
*
* */
var merge = function(intervals) {
  for(var i = 0;i < intervals.length-1;i++){
    if(intervals[i][1] >= intervals[i+1][0]){
      intervals[i] = intervals[i].slice(0,1).concat(intervals[i+1].slice(1,2));
      intervals.splice(1,i+1);
      i--;
    }
  }
  return intervals;
};
var intervals = [[1,3],[2,6],[8,10],[15,18]];
// var intervals = [[1,4],[4,5]];

console.log(merge(intervals))