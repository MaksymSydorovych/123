import { clearAdmin } from "../storage/localStorage.js";

export default function logoutButton() {
  const button = document.querySelector("#logout");

  if (button) {
    button.onclick = function () {
      const doLogout = confirm("Logout?");

      if (doLogout) {
        clearAdmin();
        location.href = "../admin";
      }
    };
  }
}
