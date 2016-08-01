"use strict";

var sum = 0;

for(var i=0; i< 1000; i++){
    
    if(i % 3 == 0){
        console.log(i);
        sum = sum + i;
    }else if(i % 5 == 0){
        console.log(i);
        sum = sum + i;
    }
}
console.log(sum);