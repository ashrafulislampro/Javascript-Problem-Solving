function add(num1, num2, num3){
          var sum = num1 + num2 + num3;
          return sum;
}

function add2(numbers){
          var sum = numbers[0] + numbers[1] + numbers[2];
          return sum;
}

function add3(numbers){
          var sum = 0;
          for (let i = 0; i < numbers.length; i++) {
                 if(numbers[i] > 0){
                    var sum = sum + numbers[i];
                 }
                    
          }
          return sum;
}