function swap(str){
    let newArr = " ";
    for(let i=0; i<str.length; i++){
        if(str[i] == " "){
            continue;
        }
        if(str[i] == str[i].toUpperCase()){
            newArr = str[i].toLowerCase();
            console.log(newArr);
        }
        if(str[i] == str[i].toLowerCase()){
            newArr = str[i].toUpperCase();
            console.log(newArr); 
        }
    }
}
swap("ToI tEn lA QuAnG");