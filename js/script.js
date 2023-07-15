// const productsList = {
//   wholeProduct: [
//     {
//       id: 1,
//       imgUrl: "./img/shop/1.jpg",
//       star: 4,
//       productName: "T-shirt",
//       price: "$42.00",
//     },
//     {
//       id: 2,
//       imgUrl: "./img/shop/2.jpg",
//       star: 3,
//       productName: "Sport Boots",
//       price: "$92.00",
//     },
//     {
//       id: 3,
//       imgUrl: "./img/shop/3.jpg",
//       star: 5,
//       productName: "Barset",
//       price: "$12.00",
//     },
//     {
//       id: 4,
//       imgUrl: "./img/shop/4.jpg",
//       star: 5,
//       productName: "Sneakers",
//       price: "$120.00",
//     },
//     {
//         id: 5,
//         imgUrl: "./img/shop/5.jpg",
//         star: 5,
//         productName: "Cap",
//         price: "$10.00",
//       },
//   ],
// };
// const productsEl = document.querySelector("#shop__products");

// for (let i = 0; i < productsList.wholeProduct.length; i++) {
//   let productInfo = productsList.wholeProduct[i];
//   let { id, imgUrl, productName, price, star } = productInfo;

//   let productEl = document.createElement("div");
//   let productImgEl = document.createElement("img");
//   let productScoreEl = document.createElement("div");
//   let productStarEl = document.createElement("i");
//   let productNameEl = document.createElement("h5");
//   let productPriceEl = document.createElement("h4");
//   let productButtonEl = document.createElement("button");

//   productEl.classList.add(
//     "product",
//     "text-center",
//     "col-lg-3",
//     "col-md-4",
//     "col-12"
//   );
//   productEl.dataset.id = id;
//   productImgEl.src = imgUrl;
//   productImgEl.classList.add("img-fluid", "mb-3");
//   productNameEl.classList.add("p-name");
//   productNameEl.textContent = productName;
//   productPriceEl.classList.add('p-price');
//   productPriceEl.textContent = price;
//   productButtonEl.classList.add('buy-btn');
//   productButtonEl.textContent = 'Buy Now'

//   productEl.appendChild(productImgEl);
//   productEl.appendChild(productScoreEl);
//   productEl.appendChild(productNameEl);
//   productEl.appendChild(productPriceEl);
//   productEl.appendChild(productButtonEl);

//   //   switch (productInfo.star) {
//   //     case 1:
//   //       productScoreEl.appendChild(productStarEl);
//   //       break;
//   //     case 2:
//   //       productScoreEl.appendChild(productStarEl);
//   //       productScoreEl.appendChild(productStarEl);
//   //       break;
//   //     case 3:
//   //       productScoreEl.appendChild(productStarEl);
//   //       productScoreEl.appendChild(productStarEl);
//   //       productScoreEl.appendChild(productStarEl);
//   //       break;
//   //     case 4:
//   //       productScoreEl.appendChild(productStarEl);
//   //       productScoreEl.appendChild(productStarEl);
//   //       productScoreEl.appendChild(productStarEl);
//   //       productScoreEl.appendChild(productStarEl);
//   //       break;
//   //     case 5:
//   //       productScoreEl.appendChild(productStarEl);
//   //       productScoreEl.appendChild(productStarEl);
//   //       productScoreEl.appendChild(productStarEl);
//   //       productScoreEl.appendChild(productStarEl);
//   //       productScoreEl.appendChild(productStarEl);
//   //       break;
//   //     default:
//   //     // code block
//   //   }

//     productsEl.appendChild(productEl);

const productList = {
  featuredProduct: [
    {
      id: 1,
      imgUrl: "./img/featured/1.jpg",
      alt: "featured product img",
      productName: "Sport Boots",
      productPrice: "$92.00",
    },
    {
      id: 2,
      imgUrl: "./img/featured/2.jpg",
      alt: "featured product img",
      productName: "Sport Boots",
      productPrice: "$92.00",
    },
    {
      id: 3,
      imgUrl: "./img/featured/3.jpg",
      alt: "featured product img",
      productName: "Bag",
      productPrice: "$92.00",
    },
    {
      id: 4,
      imgUrl: "./img/featured/4.jpg",
      alt: "featured product img",
      productName: "Cap",
      productPrice: "$92.00",
    },
  ],
};
const featuredEl = document.getElementById("featured__list");

for (let i = 0; i < productList.featuredProduct.length; i++) {
  let { id, imgUrl, alt, productName, productPrice } =
    productList.featuredProduct[i];

  let featuredDivEl = document.createElement("div");
  let featuredPictureEl = document.createElement("img");
  let featuredNameEl = document.createElement("h5");
  let featuredPriceEl = document.createElement("h4");
  let featuredButtonEl = document.createElement("button");

  featuredDivEl.classList.add(
    "product",
    "text-center",
    "col-lg-3",
    "col-md-4",
    "col-12"
  );
  featuredPictureEl.classList.add("img-fluid", "mb-3");
  featuredNameEl.classList.add("p-name");
  featuredPriceEl.classList.add("p-price");
  featuredButtonEl.classList.add("buy-btn");

  // featuredEl.dataset.id = id;
  featuredPictureEl.src = imgUrl;
  featuredPictureEl.alt = alt;
  featuredNameEl.textContent = productName;
  featuredPriceEl.textContent = productPrice;
  featuredButtonEl.textContent = "Buy Now";

  featuredDivEl.appendChild(featuredPictureEl);
  featuredDivEl.appendChild(featuredNameEl);
  featuredDivEl.appendChild(featuredPriceEl);
  featuredDivEl.appendChild(featuredButtonEl);

  featuredEl.appendChild(featuredDivEl);

  console.log(featuredEl);
  console.log(featuredDivEl);
}





const dressesList = {
  allDresses: [
    {
      id: 1,
      imgUrl: "./img/clothes/1.jpg",
      alt: "featured product img",
      dressesName:"Sport Boots",
      dressesPrice:"$92.00"
    },
    {
      id: 2,
      imgUrl: "./img/clothes/2.jpg",
      alt: "featured product img",
      dressesName:"Sport Boots",
      dressesPrice:"$92.00"
    },
    {
      id: 3,
      imgUrl: "./img/clothes/3.jpg",
      alt: "featured product img",
      dressesName:"Sport Boots",
      dressesPrice:"$92.00"
    },
    {
      id: 4,
      imgUrl: "./img/clothes/4.jpg",
      alt: "featured product img",
      dressesName:"Sport Boots",
      dressesPrice:"$92.00"
    }
  ]
}
const dressesEl = document.querySelector("#dresses__list")
for (let i = 0; i < dressesList.allDresses.length; i++) {
  let { id, imgUrl, alt, dressesName, dressesPrice } = dressesList.allDresses[i];
  let dressesDivEl = document.createElement("div");
  let dressesPictureEl = document.createElement("img");
  let dressesNameEl = document.createElement("h5");
  let dressesPriceEl = document.createElement("h4");
  let dressesButtonEl = document.createElement("button");

  dressesDivEl.classList.add(
    "product",
    "text-center",
    "col-lg-3",
    "col-md-4",
    "col-12"
  );
  dressesPictureEl.classList.add("img-fluid", "mb-3");
  dressesNameEl.classList.add("p-name");
  dressesPriceEl.classList.add("p-price");
  dressesButtonEl.classList.add("buy-btn");


  dressesPictureEl.src = imgUrl;
  dressesPictureEl.alt = alt;
  dressesNameEl.textContent = dressesName;
  dressesPriceEl.textContent = dressesPrice;
  dressesButtonEl.textContent = "Buy Now";

  dressesDivEl.appendChild(dressesPictureEl);
  dressesDivEl.appendChild(dressesNameEl);
  dressesDivEl.appendChild(dressesPriceEl);
  dressesDivEl.appendChild(dressesButtonEl);

  dressesEl.appendChild(dressesDivEl);


}


const watchesList = {
  watchesProduct: [
    {
      id: 1,
      imgUrl: "./img/watches/1.jpg",
      alt: "featured product img",
      watchesName: "Watch",
      watchesPrice: "$92.00",
    },
    {
      id: 2,
      imgUrl: "./img/watches/2.jpg",
      alt: "featured product img",
      watchesName: "Watch",
      watchesPrice: "$900.00",
    },
    {
      id: 3,
      imgUrl: "./img/watches/3.jpg",
      alt: "featured product img",
      watchesName: "Watch",
      watchesPrice: "$900.00",
    },
    {
      id: 4,
      imgUrl: "./img/watches/4.jpg",
      alt: "featured product img",
     watchesName: "Watch",
     watchesPrice: "$920.00",
    },
  ],
};
const watchesEl = document.getElementById("watches__list");

for (let i = 0; i < watchesList.watchesProduct.length; i++) {
  let { id, imgUrl, alt, watchesName, watchesPrice } =
    watchesList.watchesProduct[i];

  let watchesDivEl = document.createElement("div");
  let watchesPictureEl = document.createElement("img");
  let watchesNameEl = document.createElement("h5");
  let watchesPriceEl = document.createElement("h4");
  let watchesButtonEl = document.createElement("button");

  watchesDivEl.classList.add(
    "product",
    "text-center",
    "col-lg-3",
    "col-md-4",
    "col-12"
  );
  watchesPictureEl.classList.add("img-fluid", "mb-3");
  watchesNameEl.classList.add("p-name");
  watchesPriceEl.classList.add("p-price");
  watchesButtonEl.classList.add("buy-btn");

  // watchesEl.dataset.id = id;
  watchesPictureEl.src = imgUrl;
  watchesPictureEl.alt = alt;
  watchesNameEl.textContent = watchesName;
  watchesPriceEl.textContent = watchesPrice;
  watchesButtonEl.textContent = "Buy Now";

  watchesDivEl.appendChild(watchesPictureEl);
  watchesDivEl.appendChild(watchesNameEl);
  watchesDivEl.appendChild(watchesPriceEl);
  watchesDivEl.appendChild(watchesButtonEl);

  watchesEl.appendChild(watchesDivEl);

  console.log(watchesEl);
  console.log(watchesDivEl);
} 


const shoesList = {
  shoesProduct: [
    {
      id: 1,
      imgUrl: "./img/shoes/8.jpg",
      alt: "featured product img",
      shoesName: "Shoe",
      shoesPrice: "$92.00",
    },
    {
      id: 2,
      imgUrl: "./img/shoes/7.jpg",
      alt: "featured product img",
      shoesName: "Shoe",
      shoesPrice: "$900.00",
    },
    {
      id: 3,
      imgUrl: "./img/shoes/6.jpg",
      alt: "featured product img",
      shoesName: "Shoe",
      shoesPrice: "$900.00",
    },
    {
      id: 4,
      imgUrl: "./img/shoes/5.jpg",
      alt: "featured product img",
     shoesName: "Shoe",
     shoesPrice: "$920.00",
    },
  ],
};
const shoesEl = document.getElementById("shoes__list");

for (let i = 0; i < shoesList.shoesProduct.length; i++) {
  let { id, imgUrl, alt, shoesName, shoesPrice } =
    shoesList.shoesProduct[i];

  let shoesDivEl = document.createElement("div");
  let shoesPictureEl = document.createElement("img");
  let shoesNameEl = document.createElement("h5");
  let shoesPriceEl = document.createElement("h4");
  let shoesButtonEl = document.createElement("button");

  shoesDivEl.classList.add(
    "product",
    "text-center",
    "col-lg-3",
    "col-md-4",
    "col-12"
  );
  shoesPictureEl.classList.add("img-fluid", "mb-3");
  shoesNameEl.classList.add("p-name");
  shoesPriceEl.classList.add("p-price");
  shoesButtonEl.classList.add("buy-btn");

  // shoesEl.dataset.id = id;
  shoesPictureEl.src = imgUrl;
  shoesPictureEl.alt = alt;
  shoesNameEl.textContent = shoesName;
  shoesPriceEl.textContent = shoesPrice;
  shoesButtonEl.textContent = "Buy Now";

  shoesDivEl.appendChild(shoesPictureEl);
  shoesDivEl.appendChild(shoesNameEl);
  shoesDivEl.appendChild(shoesPriceEl);
  shoesDivEl.appendChild(shoesButtonEl);

  shoesEl.appendChild(shoesDivEl);

  console.log(shoesEl);
  console.log(shoesDivEl);
} 


// let { id, imgUrl, alt, dressesName, dressesPrice } = dressesList.allDresses[i]; ------- destruktura usuli