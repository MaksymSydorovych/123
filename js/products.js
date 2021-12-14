import { productsUrl } from "./setting/api.js";
import { fetchApi } from "./setting/fetchApi.js";
import { searchProducts } from "./components/searchPropducts.js";
import { createProducts } from "./components/createProducts.js";
fetchApi(createProducts, productsUrl);
fetchApi(searchProducts, productsUrl);
