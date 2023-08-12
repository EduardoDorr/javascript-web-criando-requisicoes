import { connectApi } from "./connectApi.js";

const form = document.querySelector("[data-form]");

async function createVideo(formEvent) {
  formEvent.preventDefault();

  const title = document.querySelector("[data-title]").value;
  const url = document.querySelector("[data-url]").value;
  const image = document.querySelector("[data-image]").value;
  const description = Math.floor(Math.random() * 10 + 1).toString();
  try {
    await connectApi.postVideo(title, description, url, image);
    window.location.href = "../pages/envio-concluido.html";
  } catch (e) {
    alert(e);
  }
}

form.addEventListener('submit', event => createVideo(event));