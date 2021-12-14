import { getShoppingCart } from "./storage/localStorage.js";
export function createShoppingCart() {
  const shoppingCart = getShoppingCart();
  const cartContainer = document.querySelector(".cart__products");
  cartContainer.innerHTML = "";

  /* Display products from the localStorage() */
  shoppingCart.forEach(function (product) {
    cartContainer.innerHTML += `
            <div class="cart__product-card col-12 row">
                <img src="${product.image}" alt="${product.title}" class="col cart__image">
                <div class="cart__content col ">
                    <h5 class="cart__title col">${product.title}</h5>
                    <p class="cart__price col-sm-12 col-md-12 col-lg">
                        ${product.price} NOK
                    </p>
                    <a href="${product.url}" class="cart__link link">
                        View Product
                    </a>
                </div>
                
            </div>
        `;
  });

  /* Total Price: */
  const totalPriceContainer = document.querySelector(".cart__total__price");

  let totalPrice = 0;

  for (let i = 0; i < shoppingCart.length; i++) {
    let price = parseFloat(shoppingCart[i].price);

    totalPrice += price;
  }

  totalPriceContainer.innerHTML = totalPrice + " NOK";

  console.log(shoppingCart);
}
