function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['Oscar', 'Ana', 'David', 'Ulises', 'Jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
