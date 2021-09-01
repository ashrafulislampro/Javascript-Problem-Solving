var arr = [12, 34, 56, 87, 98, 32, 54];
var smallest = arr[0];
for (var i = 0; i < arr.length; i++){
          var element = arr[i];
          if(element < smallest){
                    smallest = element;
          }
          
}
console.log(smallest);

var largest = arr[0];
for (var i = 0; i < arr.length; i++){
          var element = arr[i];
          if(element > largest){
                    largest = element;
          }
}
// console.log(largest);

var name = ["Kamal", "Jamals", "Jars", "jar", "Abdullah", "Khalid Ben Oalid", "ja"];
var largest = name[0];
for (var i = 0; i < name.length; i++){
          var element = name[i];
          if(element.length > largest){
                    largest = element;
                    
          }
}
// console.log(largest);
