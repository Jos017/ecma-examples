// Traditional default params
function newUser(name, age, country) {
  var name = name || 'Jose';
  var age = age || 28;
  var country = country || 'BO';
  console.log(name, age, country);
}

newUser();
newUser('David', 15, 'CO');

// ES6 default params
function newAdmin(name = 'Jose', age = 28, country = 'BO') {
  console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 27, 'PE');
