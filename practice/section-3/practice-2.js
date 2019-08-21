'use strict';
 
// // 选出A集合中元素的key属性跟B对象中value属性中的元素
// // 相同的元素,把他们的count，满3减1，输出减过之后的新A集

function createUpdatedCollection(collectionA, collectionB) {
  var result = new Array();
  for(var i=0;i<collectionA.length;i++){
	    for(var j=0;j<collectionB.value.length;j++){
        // 同时满足条件则进行满3减1
			if(collectionA[i].key===collectionB.value[j] && collectionA[i].count>=3){
        var temp;
        temp = parseInt(collectionA[i].count / 3) ;
        console.log(temp);
				collectionA[i].count = collectionA[i].count - temp;
 			}
		}
  }
  
return collectionA;
}


 












 

 