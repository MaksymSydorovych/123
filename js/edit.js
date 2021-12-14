import { url, productsUrl } from "./setting/api.js";
import { token } from "./components/storage/localStorage.js";
import deleteButton from "./components/buttons/deleteButton.js";
import { fetchApi } from "./setting/fetchApi.js";
import logoutButton from "./components/buttons/logout.js";
import { submitForm } from "./components/form/submitForm.js";
import {
  form,
  title,
  price,
  description,
  idInput,
  loading,
  image,
  featured,
  labelFalse,
  labelTrue,
} from "./components/form/containerVariables.js";

// Redirecting to homepage if they are not logged in
if (!token) {
  location.href = "../admin";
}

// Display Product Menu and Logout button
fetchApi(productMenu, productsUrl);
logoutButton();

// Looking for id in URL
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// Redirect to product with id = 1 if url has no id
if (!id) {
  location.href = "?id=1";
}

// URL
const editUrl = url + "/products/" + id;

// Fetch API
(async function () {
  try {
    const response = await fetch(editUrl);
    const details = await response.json();

    image.value = details.image_url;
    title.value = details.title;
    price.value = details.price;
    description.value = details.description;
    featured.value = details.featured;
    idInput.value = details.id;

    deleteButton(details.id);

    if (details.featured == true) {
      labelTrue.classList.add("active");
    } else {
      labelFalse.classList.add("active");
    }
  } catch (error) {
    console.log(error);
  } finally {
    loading.style.display = "none";
    form.style.display = "block";
  }
})();

// Listen for button
form.addEventListener("submit", submitForm);
