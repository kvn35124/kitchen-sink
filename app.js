let firstName = "Kevin";

const numberOfStates = 50;


function adding(num1, num2) {
    return num1 + num2;
}

let result = adding(1, 2);

console.log(result);


function sayHello() {
    console.log("Hello World!");
}

console.log(sayHello());


function checkAge(name, age) {
    if (age < 21) {
        return "Sorry " + name + ", you aren't old enough to view this page!";
    }   
}

console.log(checkAge("Charles", 21));
console.log(checkAge("Abby", 27));
console.log(checkAge("James", 18));
console.log(checkAge("John", 17));


let favVeg = ["Squash", "Pepper", "Egg Plant", "Cucumber", "Radish"];

for(let i = 0; i < favVeg.length; i++) {
    console.log(favVeg[i]);
}

let objects = [{Name : "Sam", Age: 21}, {Name : "Meredith", Age: 19}, {Name : "Stanley", Age: 17}, {Name : "Jim", Age: 32}, {Name : "Dwight", Age: 35}];

for(let i = 0; i < objects.length; i++) {
    console.log(objects[i])
    }


function getLength(name) {
    return name.length;
}

let length = getLength('Hello World');
if(length % 2 == 1) {
    console.log("The world is an odd place");
}
else {
    console.log("The world is nice and even!");
}


