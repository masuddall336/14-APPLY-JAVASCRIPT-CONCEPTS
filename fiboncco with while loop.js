

var a = [0,1];
var i = 2; 
 while(i <= 10){
     a[i] = a[i-1] + a[i-2];
    i++;
 }
 console.log(a);


 function testit(inputFromUs) {
     var arr = [0,1];
     var takee = 2;
     while(takee <= inputFromUs){
         arr[takee] = arr[takee - 1] + arr[takee - 2];
        takee++;
     }
     return arr;
 }
 var rass = testit(7);
 console.log(rass);