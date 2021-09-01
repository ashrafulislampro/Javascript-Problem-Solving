function fibonacciIteration(num){
          var fibo = [0, 1];
          for(var i = 2; i <= num; i++){
                    var nextFibo = fibo[i-1] + fibo[i-2];
                    fibo.push(nextFibo);
          }
          return fibo;
}

var result = fibonacciIteration(1);
// console.log(result);

function fibonacciRecursive(num){
          // stopping condition
          if(num == 0){
                    return [1];
          }
          else if(num == 1){
                    return [0, 1];
          }
          // recursive call 
          var fibo = fibonacciIteration(num - 1);
          var nextFibo = fibo[num - 1] + fibo[num - 2];
          fibo.push(nextFibo);
          return fibo;

}
var result = fibonacciRecursive(5);
console.log(result);