import storageAmount from "./components/storage/storageAmount.js";
import { createShoppingCart } from "./components/createCart.js";
import { createFeaturedProducts } from "./components/featuredProducts.js";
import { productsUrl } from "./setting/api.js";
import { fetchApi } from "./setting/fetchApi.js";

createShoppingCart();
storageAmount();

const clearLocalStorageContainer = document.querySelector(
  ".clear-local-storage"
);

const clearLocalStorage = () => {
  const windowConfirm = window.confirm("Do you whant emptyed shoping cart?");

  if (windowConfirm) {
    localStorage.clear("shopping-cart");
    setTimeout(location.reload(), 1000);
  }
};
clearLocalStorageContainer.addEventListener("click", clearLocalStorage);
