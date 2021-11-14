let arrayVariable= [60,10,70,20,40];
for (let i=0; i<arrayVariable.length; i++) {
    for (let g=0; g<arrayVariable.length; g++){
       if(arrayVariable[g]>arrayVariable[i]){
        let tmp =arrayVariable[i]
        arrayVariable[i]=arrayVariable[g];
        arrayVariable[g]=tmp;

       }
    }
}
console.log(arrayVariable);