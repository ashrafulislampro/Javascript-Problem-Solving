var array = [12, 34, 45, 56, 67, 68];
var ami = {
          name: 'Ashraul Islam',
          age: 36,
          height: 66,
          sex : 'male'

}
var ami2 = ami.age;
ami.age = 56;
ami['age'] = 670;
ami['sex'] = 'Female';
array[4]  = 21;
var result = array.indexOf(68);
console.log(result);