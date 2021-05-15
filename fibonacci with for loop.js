var arry  =[0,1];
for(var i = 2; i <=10; i++){
    arry[i] = arry[i-1] + arry[i-2];
   
}



 function testarryFiboncci(userInput) {
     var take = [0, 1];
     for(var i = 2; i <= userInput; i++){
        take[i] = take[i-1] + take[i-2];
     }
     return take;
 }
 var rasult = testarryFiboncci(5);
  console.log(arry);
 console.log(rasult);
