/* See http://marak.github.io/faker.js/ for more information on faker */
var faker = require("faker");

let product, amount;

console.log(`===================
WELCOME TO MY SHOP!
===================`);

for (let i = 0; i < 10; i++) {
  product = faker.commerce.productName();
  amount = faker.finance.amount();
  console.log(product + " - $" + amount);
  console.log(faker.image.animals());
}
