// class declaration
class MyClass {}
// creating an instance
const newInstance = new MyClass();

class User {
  // constructor
  constructor(name, age) {
    console.log('Nuevo Usuario');
    this.name = name;
    this.age = age;
  }
  // methods
  #speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age
  }
  set uAge(n) {
    this.age = n;
  }
}

const jbr = new User('Jose', 28);
console.log(jbr.greeting());
console.log(jbr.uAge);
console.log(jbr.uAge = 20);
