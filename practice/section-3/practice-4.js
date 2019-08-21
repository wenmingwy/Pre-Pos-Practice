'use strict';

function createUpdatedCollection(collectionA, objectB) {
// 采用section2-2代码的思路
  var result = [];
  var map = new Map();
  for (var i=0;i<collectionA.length;i++){
    if(collectionA[i].length>1){
      map.set(collectionA[i].charAt(0),collectionA[i].charAt(2));
    }
    else if (map.get(collectionA[i])==null){
      map.set(collectionA[i],1);
    }else{
      map.set(collectionA[i],map.get(collectionA[i])+1);
    }
  }
// 遍历获取结果
   map.forEach(function(key,value){
    result.push({key:value,count:key})
  });
 
// 采用section2-3代码
  var  collectionB = objectB.value;
  for (var i = 0;i < result.length;i++)  {
    for (var j = 0;j<collectionB.length;j++){    
      if (result[i].key == collectionB[j]){  
        var temp = parseInt(result[i].count / 3) ;
         result[i].count = result[i].count - temp;
      }
    }
  }
  return result;
}
