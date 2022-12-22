const myPromise = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Async !!'), 2000)
      : reject(new Error('Error!'));
  });
};

const asyncFn = async () => {
  const something = await myPromise();
  console.log(something);
  console.log('Hello!');
}

console.log('before');
asyncFn();
console.log('After');
