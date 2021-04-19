function sortArray(arr){
    for(let i =0; i<arr.length; i++){
        for(let j=i+1; j < arr.length; j++){
            if(arr[i]>arr[j]){
                [arr[i],arr[j]] = [arr[j],arr[i]];
            }
        }
    }
    let newArr = [...new Set(arr)];
    console.log("Sorted array:", newArr);
}

sortArray([10,10,9,9,8,9,7,6,6,5,5,4,1,3,2,2,1]);