var testLepaer = 2056;
var testLepaer2 = 3088;


console.log(testLepaer / 4);
console.log(testLepaer % 4);

var rasult = testLepaer2 / 4;
var rasult2 = testLepaer2 % 4;
console.log(rasult);
console.log(rasult2);

function leaperTest(){
    var modulus = 5688 / 4;
    var modulus2 = 5688 % 4;
    console.log(modulus);
    console.log(modulus2);
}
leaperTest();

function leap(userInput, userinput2){
    var ras = userInput / 4;
    var rass = userInput % 4;

    let ras2 = userinput2 % 4;
    var reads = ras2 == 0;


    console.log(ras);
    console.log(rass);

    console.log(ras2);
    console.log(reads);
}
leap(4544, 3588);


var testleapers = 2000;
let rasss = testleapers % 4;
console.log(rasss);
if(rasss == 0){
    console.log("This year is leaper");
}else{
    console.log("Not leaper");
}


function leapTest(inputt) {
    var a = inputt / 4;
    return a;
}
var rasuu = leapTest(2001);
var rasuu2 = leapTest(4660);
console.log(rasuu);
console.log(rasuu2);


function ifElse(userin) {
    var rasul = userin % 4;
    if(rasul == 0){
        return true; 
    }else{
        return false;
    }
}
var test = ifElse(2000);
var secondTest = ifElse(2001);
console.log(test);
console.log(secondTest); 