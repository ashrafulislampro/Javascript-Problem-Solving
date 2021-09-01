var depth = 17;
var animals = 0;
if(depth <= 10){
          var animals = depth * 50;
}
else if(depth <= 20){
          var firstPart = 10 * 50;
          var remaining = depth - 10;
          var secondPart = remaining * 100;
          var animals = firstPart + secondPart;
}
else{
          var firstPart = 10 * 50;
          var secondPart = 10 * 100;
          var remaining = depth - 20;
          var thirdPart = remaining * 300;
          var animals = firstPart + secondPart + thirdPart;
}
console.log(animals);