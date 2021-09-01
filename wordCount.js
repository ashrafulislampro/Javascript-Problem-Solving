var speech = "I am     a good person.    And I    am also a creative person.";
var count = 0;
for (let i = 0; i < speech.length; i++) {
          const character = speech[i];
          if(character == " " && speech[i-1] != " "){
                    count++;
          }
}
count++;
console.log(count);