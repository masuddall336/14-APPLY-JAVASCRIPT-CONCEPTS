function recursive(userInput) {
    if(userInput == 0){
        return 1;
    }else{
        return userInput * recursive(userInput - 1);
    }
}
var rasultt = recursive(5);
console.log(rasultt);