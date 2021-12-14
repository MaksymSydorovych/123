import { createProducts } from "./createProducts.js";
export function searchProducts(products) {
  const search = document.querySelector(".search__placeholder");

  search.onkeyup = function (event) {
    const searchValue = event.target.value;

    const filteredProducts = products.filter(function (product) {
      if (
        product.title.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue)
      ) {
        return true;
      }
    });

    createProducts(filteredProducts);
  };
}
