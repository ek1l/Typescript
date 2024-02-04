// Union

let age: string | number = 20;
age = '33';
age = 33;

const sumStringOrNumber = (num1: string | number, num2: string | number) =>
  Number(num1) + Number(num2);
