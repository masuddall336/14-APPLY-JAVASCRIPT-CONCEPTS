var gun = 1;
for(var i = 1; i <=10; i++){
    gun = gun * i;
    console.log(gun, i);
}


function testFactorial(factoInput) {
    var ca = 1;
    for(var i = 1; i <= factoInput; i++){
        var ca = ca * i;
    }
    return ca;
}
var rasult = testFactorial(6);
console.log(rasult);