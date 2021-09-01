
function arraySum(numbers) {
          var sum = 0;
          for (var i = 0; i < numbers.length; i++) {
                    var element = numbers[i];
                    sum = sum + element;
          }
          return sum;
}
var num = [12, 45, 67, 89, 98, 65, 21, 345];
var result = arraySum(num);
// console.log("This is the first result = ",result);
// console.log("This is the second result = ",arraySum([12, 45, 67, 89]));


var friends = ['Masud', 'Emran', 'Sium', 'Shova', 'Joniad'];
var allNames = "";
for (var i = 0; i < friends.length; i++) {
          var element = friends[i];
          allNames =allNames+element;
}
console.log(allNames);