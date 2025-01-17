import App from "./App.js";

const appElement = document.querySelector("#app");

try {
  new App({ targetElement: appElement });
} catch (error) {
  console.error(error.message);
}
