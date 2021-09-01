// correct code 

function vowelsAndConsonants(s){
    let vowelList = 'aeiou';
    let consonantList = '';
    for(let letter of s){
        vowelList.includes(letter)? console.log(letter) : consonantList += letter + '\n';
    }
    console.log(consonantList.trim());
}
var result = vowelsAndConsonants('javascriptloops');
console.log(result);







// function vowelsAndConsonants(s) {
   
//           // const vowels = ['a', 'e', 'i', 'o', 'u'];
//           const arr = s.split('');
//           var vowelsFound = [];
//           var consonantFound = [];
//           for(var i = 0; i <= arr.length; i++){
//               if(arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u'){
//                   vowelsFound.push(arr[i])
//               }else{
//                   consonantFound.push(arr[i]);
//               }
//           }
          
//           console.log(vowelsFound.join('\n')+'\n'+consonantFound.join('\n'));
         
//       }
//       vowelsAndConsonants('javascriptloops');

    //   function vowelsAndConsonants(s) {
   
    //       const vowels = ['a', 'e', 'i', 'o', 'u'];
    //       const arr = s.split('');
    //       var vowelsFound = [];
    //       var consonantFound = [];
    //       for(var i = 0; i <= arr.length; i++){
    //           if(vowels.includes(arr[i])){
    //               vowelsFound.push(arr[i])
    //           }else{
    //               consonantFound.push(arr[i]);
    //           }
    //       }
          
    //       console.log(vowelsFound.join('\n')+'\n'+consonantFound.join('\n'));
         
    //   }
//       vowelsAndConsonants('javascriptloops');

    //   function vowelsAndConsonants(s){
    //             var strC = '';
    //             for(var i = 0; i < s.length; i++){
    //                 if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u'){
    //                           console.log(s[i]);
    //                 }   
    //                 else{
    //                           strC = strC.concat(s[i]).concat('\n');
    //                 } 
    //             }
    //             console.log(strC);
    //   }

//       vowelsAndConsonants('javascriptloops');
      

// function vowelsAndConsonants(s) {
//     let vowels = ["a", "e", "i", "o", "u"];

//     for(let v of s) {
//         if(vowels.includes(v))
//             console.log(v);
//     }
    
//     for(let v of s) {
//         if(!vowels.includes(v))
//             console.log(v);
//     }
// }
// var result = vowelsAndConsonants('javascriptloops');
// console.log(result);

