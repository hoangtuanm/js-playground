var nameVar = 'Andrew';
var nameVar = 'Jen';
console.log('nameVar', nameVar);

let nameLet = 'John';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Tuan Hoang';

let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);