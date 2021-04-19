function CountDown(n){
    if(n>10||n < 5){
        console.log('n is not suitable, n must be 5<=n<=10')
    }
    else{
        myInterval=setInterval(function(){
            if (n == 0) {
                clearInterval(myInterval);
            }
            else {
                setTimeout(function(){console.log(n+1)},1000);
                n--;
            }
        },1000);
    }
}
CountDown(4);