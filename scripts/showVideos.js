import { connectApi } from "./connectApi.js";

export const videoList = document.querySelector("[data-list]");

function createCard(videoData) {
  const videoCard = document.createElement("li");
  videoCard.className = "videos__item";
  videoCard.innerHTML = `
  <iframe width="100%" height="72%" src="${videoData.url}"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  <div class="descricao-video">
      <img src="${videoData.imagem}" alt="logo canal alura">
      <h3>${videoData.titulo}</h3>
      <p>${videoData.descricao}</p>
  </div>
  `;

  return videoCard;
}

async function getVideos() {
  try {
    const videos = await connectApi.getVideos();
    insertVideos(videos);
  } catch {
    videoList.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h2>`;
  }
}

export function insertVideos(videos) {
  videoList.innerHTML = '';
  videos.forEach(video => videoList.appendChild(createCard(video)));
}

getVideos();






// "video":
//   {
//     "id": 1,
//     "titulo": "Conhecendo a linguagem Go | Hipsters.Talks",
//     "descricao": "3 mil visualizações",
//     "url": "https://www.youtube.com/embed/y8FeZMv37WU",
//     "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true"
//   }