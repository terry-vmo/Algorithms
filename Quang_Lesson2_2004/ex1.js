function Symmetry(str){
    for(let i=0; i<(str.length/2); i++){
        if(str[i] != str[str.length-1-i]){
            return 0;
        }
    }
    return 1;
}

function main(){
    x = Symmetry('ABCBA');
    if(x == 0){
        console.log("The string is not symmetry");
    }
    if(x == 1){
        console.log("!!! Symmetryy !!!");
    }
}

main()