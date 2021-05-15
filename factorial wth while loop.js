var i = 1;
var withgun = 1;
while (i <= 10) {
     withgun = withgun * i;
    console.log(withgun,i);
    i++;
} 


function tstrecursiv(inputUser) {
    var a =1;
    var b = 1;
    while(a <= inputUser){
        b = b * a;
        a++;
    }
    return b;
}
var rasult = tstrecursiv(4);
console.log(rasult);