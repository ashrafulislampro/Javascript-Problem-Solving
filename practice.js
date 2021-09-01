var rivers = ["Mississippi","Delaware","Ohio","Sangamon","Black","Current","Chattahochee","fkdsa;fjkdsalafjdfsdaf","jf","adflkdsfda"];
// var longest_length = -1;
// var longest_length_Name = [];
// for (var i = 0; i < rivers.length; i++) {
//           var element = rivers[i];
//     if (element.length > longest_length) {
//         longest_length = element.length;
//         longest_length_Name.push(longest_length);
//         console.log(longest_length_Name);
//     }
// }
//  console.log(rivers[longest_index] + " " + longest_length + " letters");

var index = 0;
var length = 0;
var names = [];
for(var i = 0; i < rivers.length; i++){
    if(rivers[i].length > length){
        length = rivers[i].length;
        index = i;
        
//         var name = rivers[i];
//         names.push(name);

    }
}

console.log(index)
// console.log(names);