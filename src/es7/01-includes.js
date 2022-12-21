const phrase = 'Hola mundo';
console.log(phrase.includes('Hola')); // true
console.log(phrase.includes('Hola', 1));  // false
console.log(phrase.includes('ola', 1));  // true


const numbers = [1, 3, 4, 6, 7, 8];
console.log(numbers.includes(9));  // true

const list = ['oscar', 'david', 'ana'];
console.log(list.includes('Oscar'));  // false
console.log(list.includes('oscar'));  // true