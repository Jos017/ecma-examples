const regex = /\b(Apple)+\b/g;
const fruit = 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.';

// Transformación del iterable retornado a array
const array = [...fruit.matchAll(regex)];
console.log(array);