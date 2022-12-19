// Re-declaring and Re-initializing
var lastName = 'Jose';
lastName = 'Oscar';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat'; // Error can't redefine const variables
console.log(animal);

// Scope
const fruits = () => {
  if (true) {
    var fruit = 'Apple'; // Function scope
    let fruit2 = 'Banana'; // Block scope
    const fruit3 = 'Grapes'; // Bock scope
  }
  console.log(fruit);
  console.log(fruit2);
  console.log(fruit3);
};

fruits();
