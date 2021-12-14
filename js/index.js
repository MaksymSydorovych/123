import { bannerUrl } from "./setting/api.js";
import { productsUrl } from "./setting/api.js";
import { createBanner } from "./components/heroBanner.js";
import { fetchApi } from "./setting/fetchApi.js";
import { createFeaturedProducts } from "./components/featuredProducts.js";
fetchApi(createBanner, bannerUrl);
fetchApi(createFeaturedProducts, productsUrl);
