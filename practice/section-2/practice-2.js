'use strict';

function countSameElements(collection) {
  let newCollection=[];
  for(let i=0; i<collection.length; i++){
    let keyValue = collection[i];
    let countValue = 1;
    if(keyValue.indexOf("-")===-1){
      for(let j=i+1; j<collection.length; j++){
        if(keyValue === collection[j]){
          collection.splice(j,1);
          j--;
          countValue++;
        }
      }
    }else {
      let splitKeyValue = keyValue.split("-");
	   keyValue = splitKeyValue[0];
	   countValue= parseInt(splitKeyValue[1]);
    }
    newCollection.push({key:keyValue,count:countValue})
  }
  return newCollection;
}















 