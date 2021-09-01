var string = "I am an Alien come from Mangalgraha.How are you everyone.";
var  reverse = "";
for (let i = 0; i < string.length; i++) {
          const char = string[i];
          reverse = char + reverse;
}
// console.log(reverse);

function reverseString(str){
          if(str === ""){
                    return "";
          }else{
                    return reverseString(str.substr(1))+str.charAt(0);
          }

}
var result =  reverseString("hello");
// console.log(result);

function reverseString(str){
          return (str === "")? "" : reverseString(str.substr(1)) + str.charAt(0);


}
var result = reverseString("Kamal");
console.log(result);
