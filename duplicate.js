var arr = [1, 1, 2, 3, 2, 4, 3, 5, 6, 7, 8,12, 11, 7, 8, 10, 7, 9, 8, 10, 11, 10, 12, 13, 14, 15, 13];
var uniqueNumber = [];
for(var i = 0; i < arr.length; i++){
          var element = arr[i];
          var index = uniqueNumber.indexOf(element);
          if(index == -1){
                    uniqueNumber.push(element);
          }
}
// console.log(uniqueNumber);
function add(a, b){
          return a+b;
}
console.log(add("adam"+"even"));