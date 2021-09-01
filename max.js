var business = 750;
var minister = 10000;
var sochhib = 900;
var output = Math.max(business, minister, sochhib);
// console.log(output);

/*
if(business > minister){
         if(business < sochhib){
                   console.log("Shochib is bigger");
         }
         else{
                   console.log("Business is bigger");
         }
}
else{
          if(minister > sochhib){
                    console.log("minister is bigger");
          }else{
                    console.log("sochib is bigger");
          }
}*/

var arr = [1, 2,10, 3, 8, 44];
var max = arr.reduce(function(a, b){
          return Math.max(a, b);
});
// console.log(max);
var max2 = Math.max(...arr);
console.log(max2);