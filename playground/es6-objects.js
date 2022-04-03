// Object property shorthand

const { log } = require("console");

const name = "Bibhushan"
const useAge = 24

const user={
  name,
  age:useAge,
  location:'Biratnagar'
}
console.log(user);

// Object destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating:4.2
};

// const label = product.label;
// const stock = product.stock;

// const { label:productLabel , stock, rating = 5 } = product;
// console.log(productLabel,stock);
// console.log(rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
}

transaction('order', product); 