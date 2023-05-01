/* 

let specialProduct = document.querySelector('.product:nth-child(2)');
let unavailableProduct = document.querySelector('.product:last-child');

specialProduct.classList.add('product--special');
unavailableProduct.classList.add('product--unavailable');
*/

let catalogData = [
  {
    isAvailable: true,
    isSpecial: false,
  },
  {
    isAvailable: false,
    isSpecial: false,
  },
  {
    isAvailable: true,
    isSpecial: true,
  },
  {
    isAvailable: true,
    isSpecial: false,
  },
  {
    isAvailable: false,
    isSpecial: false,
  },
];

let updateCards = function (products) {
  let elements = document.querySelectorAll(".product");
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    console.log(element);
    let product = products[i];
    console.log(product);
    let availabilityClass = "product--available";
    if (!product.isAvailable) {
      element.classList.add("product--unavailable");
    }
    element.classList.add(availabilityClass);
    if (product.isSpecial) {
      element.classList.add("product--special");
    }
  }
};

updateCards(catalogData);
