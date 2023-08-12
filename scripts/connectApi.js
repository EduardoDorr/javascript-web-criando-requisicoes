const endpoint = "http://localhost:3000/videos";

async function getVideos() {
  const connection = await fetch(endpoint);
  const videos = await connection.json();

  return videos;
}

async function getVideo(toSearch) {
  const connection = await fetch(endpoint + `?q=${toSearch}`);
  const videos = await connection.json();

  return videos;
}

async function postVideo(title, description, url, image) {
  const connection = await fetch(endpoint, {
                                  method: "POST",
                                  headers: {
                                    "Content-type": "application/json"
                                  },
                                  body: JSON.stringify({
                                    titulo: title,
                                    descricao: `${description} mil visualizações`,
                                    url: url,
                                    imagem: image
                                  })
                                });

  if (!connection.ok) {
    throw new Error("Não foi possível enviar o vídeo!");
  }
                                
  const video = await connection.json();

  return video;
}

export const connectApi = {
  getVideos,
  getVideo,
  postVideo
}