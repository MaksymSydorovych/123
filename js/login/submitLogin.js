import { doLogin } from "./doLogin.js";
import displayMessage from "../components/displayMessage.js";
export function submitLogin(event) {
  event.preventDefault();
  const loginFeedback = document.querySelector(".login__feedback");

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length === 0 || passwordValue.length === 0) {
    return displayMessage(
      "feedback login__feedback--error",
      "Please insert  password and  username",
      ".login__feedback"
    );
  }

  doLogin(usernameValue, passwordValue);
}
