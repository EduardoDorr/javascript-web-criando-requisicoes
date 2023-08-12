import { connectApi } from "./connectApi.js";
import { insertVideos } from "./showVideos.js";
import { videoList } from "./showVideos.js";

const buttonSearch = document.querySelector("[data-search-button]");
buttonSearch.addEventListener("click", event => searchVideo(event));

async function searchVideo(event) {
  event.preventDefault();

  const toSearch = document.querySelector("[data-search]").value;
  const videos = await connectApi.getVideo(toSearch);

  if (videos.length > 0) {
    insertVideos(videos);
  }
  else {
    videoList.innerHTML = `<h2 class="mensagem__titulo">Não foi encontrado nenhum vídeo</h2>`;
  }
}