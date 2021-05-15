var num = 25;
for(i = 2; i < num; i++){
    console.log(i, num % i);
    if(num%i == 0){
        console.log("not prime number");
    }
}


function checkPrime(input) {
   
    for(i = 2; i <= 10; i++){
        if(input%i == 0){
           return "it's not prime";
        }if(input%i != 0){
           return "it's prime number";
        }
    }
}
var rs = checkPrime(18);
console.log(rs);