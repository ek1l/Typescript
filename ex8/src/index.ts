import { IProducts } from './interfaces';
const products: Array<IProducts> = [];

const addProduct = (product: IProducts) => {
  products.push(product);
  console.log(`O nome ${product.name} foi adicionado com sucesso`);
};

const readProducts = () => {
  products.forEach((product, idx) => {
    console.log(`O nome ${product.name} está na posição -> ${idx}`);
  });
};

addProduct({ id: 1, name: 'Geladeira', price: 2400 });
addProduct({ id: 2, name: 'Cooktop', price: 1200 });
readProducts();

// let names: Array<string> = [];

// const addNameToList = (name: string) => names.push(String(name));

// const readNames = () => {
//   names.forEach((name, index) =>
//     console.log(`O nome ${name} está na posição -> ${index}`),
//   );
//   console.log('==============================================================');
// };

// addNameToList('Leonardo');
// addNameToList('Bruno');
// addNameToList('Ana');
// addNameToList('Rafaela');
// addNameToList('Ricardo');

// readNames();

// const removeNameList = (name: string) => {
//   const findName = names.indexOf(name);
//   names.splice(findName, 1);
//   console.log(`O nome ${name} foi removido com sucesso`);
// };

// removeNameList('Ana');
// readNames();

// const updateNameToList = (name: string, update: string) => {
//   const findName = names.indexOf(String(name));
//   names.splice(findName, 1, String(update));
// };

// updateNameToList('Leonardo', 'Gonzales');
// readNames();
