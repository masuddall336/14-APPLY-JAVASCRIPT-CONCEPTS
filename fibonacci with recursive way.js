function fibonacci(userInput) {
    if(userInput == 0){
        return 0;
    }if(userInput == 1){
        return 1;
    }else{
        return fibonacci(userInput - 1) + fibonacci(userInput -2);
    }
}
var rasult = fibonacci(10);
console.log(rasult);