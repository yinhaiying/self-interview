		/*
两个有序数组的合并：合并后进行去重。
		*/
    var arr1 = [1,3,5,7,8,11,13,16,19,20];
    var arr2 = [2,5,9,11,13,16];

    function merge(arr1,arr2){
    	var res = [];//空的数组用来保存合并后的数组
    	var i = 0;//i表示数组arr1中的位置
    	var j = 0;//j表示数组arr2的位置

    	while(i < arr1.length&& j<arr2.length){
    		if(arr1[i] <= arr2[j]){
    			res.push(arr1[i]);
    			i++;
    		}else if(arr1[i] > arr2[j]){
    			res.push(arr2[j]);
    			j++;
    		}
    	}
    	//如果数组arr1还剩下长度
    	while(i >= arr1.length){
    		res = res.concat(arr2.slice(j,arr2.length))
    		break;
    	}
    	while(j >= arr2.length){
    		res = res.concat(arr1.slice(i,arr1.length));
    		break;
    	}
        return res;
    }
    console.log( merge(arr1,arr2) );