console.log("hello world");

function add(a, b) {
    return a + b;
}

let x = 100;
if (true) {
    x = 200; // Same variable!
}
console.log(x)

let y
y = null
let z
console.log(y, z)

let greeting = "Hello, world!";
let response = `The time is ${new Date()}`;
console.log (response);

const age = 16

if (age > 18){
    console.log("of age")
} else {
    console.log(`wait ${18-age} years`)
}

let person = {
  name: "John",
  age: 30,
  isStudent: false
};

console.log(person.age)
console.log(typeof(person))

console.log (false == 0)