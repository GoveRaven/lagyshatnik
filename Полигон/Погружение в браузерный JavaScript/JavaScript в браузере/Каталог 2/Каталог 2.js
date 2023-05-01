let cardsData = [
  {
    isAvailable: true,
    imgUrl: "заглушка.jpg",
    text: "Селфи-палка для начинающих",
    price: 200,
    isSpecial: false,
  },
  {
    isAvailable: false,
    imgUrl: "заглушка.jpg",
    text: "Профессиональная селфи-палка",
    price: 1500,
    isSpecial: false,
  },
  {
    isAvailable: true,
    imgUrl: "заглушка.jpg",
    text: "Непотопляемая селфи-палка",
    price: 2500,
    isSpecial: false,
  },
  {
    isAvailable: true,
    imgUrl: "заглушка.jpg",
    text: "Селфи-палка Следуй за мной",
    price: 4900,
    isSpecial: true,
    specailPrice: 100,
  },
];

let makeElement = function (tagName, className, text) {
  let element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

let createCard = function (product) {
  let listItem = makeElement("li", "product");

  let picture = makeElement("img", "product_image");
  picture.src = product.imgUrl;
  picture.alt = product.text;
  listItem.appendChild(picture);

  let title = makeElement("h2", "product_title", product.text);
  listItem.appendChild(title);

  let price = makeElement("p", "product_price", product.price);
  listItem.appendChild(price);

  let availabilityClass = "product--available";
  if (!product.isAvailable) {
    availabilityClass = "product--unavailable";
  }
  listItem.classList.add(availabilityClass);

  if (product.isSpecial) {
    listItem.classList.add("product--special");
    let specailPrice = makeElement(
      "p",
      "product_special-price",
      product.specailPrice
    );
    listItem.appendChild(specailPrice);
  }
  return listItem;
};

let cardList = document.querySelector(".products");

for (let i = 0; i < cardsData.length; i++) {
  let cardItem = createCard(cardsData[i]);
  cardList.appendChild(cardItem);
}
