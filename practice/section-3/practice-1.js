'use strict';

// 选出A集合中元素的key属性跟B对象中value属性中的元素
// 相同的元素,把他们的count-1，输出减过之后的新A集合

function createUpdatedCollection(collectionA, collectionB) {
  var result = new Array();
  for(var i=0;i<collectionA.length;i++){
	    for(var j=0;j<collectionB.value.length;j++){
			if(collectionA[i].key===collectionB.value[j]){
				collectionA[i].count--;
				// result.push({key:collectionA[i].key,count:collectionA[i].count})
			}
		}
  }
  
return collectionA;
}
