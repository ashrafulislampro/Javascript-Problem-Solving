function factorial(num){
          var fact = 1;
          for (let i = 1; i <= num; i++) {
                    fact = fact * i;
          }
          return fact;
}
// var result = factorial(10);
// console.log(result);

function factorialRecursive(num){
          if(num === 0){
                    return 1;
          }
          else{
                    return num*factorialRecursive(num-1);
          }
}
var result2 = factorialRecursive(10);
console.log(result2);