'use strict';
// 把A集合中相同的元素统计出数量
function countSameElements(collection) {
  var result = [];
  var map = new Map();
  var collectionTemp=null;
  //对所给数组进行遍历
  for (var i=0;i<collection.length;i++){
    // 针对非规则值进行转化，获得所有字符段，ex：c:8,
    if (collection[i].length>1){
		collectionTemp=collection[i].substring(0,1);
    }else collectionTemp=collection[i];
    // 当第一次map时：
    if (map.get(collectionTemp)==null){
      // 计算三个字符的数据，ex：‘t-2’
      if (collection[i].length>1&&collection[i].length<=3) {
 			map.set(collection[i].substring(0,1), Number(collection[i].substring(2, collection[i].length)))
      console.log(map.get(collection[i].substring(0,1)))
      // 计算4，5个字符的数据，ex：'h[3]'，'t[10]'
      }else if(collection[i].length>3){
        map.set(collection[i].substring(0,1), Number(collection[i].substring(2, collection[i].length-1)))
      }
      // 计算1个字符的数据，ex：a
      else{
        map.set(collectionTemp,1);
      }
// 当并非第一次map对象时：
    }else{
      // 第一种情况
        if (collection[i].length>1&&collection[i].length<=3) {
        map.set(collection[i].substring(0,1),map.get(collection[i].substring(0,1))+Number(collection[i].substring(2,collection[i].length)))
        // 第二种情况
      }else if (collection[i].length>3) {
          map.set(collection[i].substring(0,1),map.get(collection[i].substring(0,1))+Number(collection[i].substring(2,collection[i].length-1)))
        }
        // 第三种情况
      else{
          map.set(collection[i],map.get(collection[i])+1);
     }

    }
  }
  // 遍历，类似于for循环
  map.forEach(function(key,value){
  result.push({name:value,summary:key})
  });
  return result;
}
