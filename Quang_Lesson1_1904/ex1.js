function findA (arr, a){
    let count = 0;
   if(arr.indexOf(a) == -1){
       console.log('This element does not exist');
   }else{
       for(let i=0; i<arr.length; i++){
           if(arr[i] == a){
               count += 1;
               console.log("All position of a in array is:",i);
           }
       }
   }
   console.log("Number of duplicate is",count)
}

findA([1,2,3,5,6,3], 3);