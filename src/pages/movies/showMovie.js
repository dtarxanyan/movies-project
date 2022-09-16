const main = document.getElementById("movieContainer");
const footer = document.getElementById("movieFooter");
let usp = new URLSearchParams(window.location.search);
let uspID = usp.get("id");
console.log(uspID);
window.addEventListener("DOMContentLoaded", () => {
  fetch("../../data/movies.json")
    .then((res) => res.json())
    .then((res) => res.filter((movie) => movie.id == uspID))
    .then((res) => {
      const img = document.createElement("img");
      img.setAttribute("src", res[0].imageUrl);
      img.setAttribute("class", "imgVideo");
      const video = document.createElement("video");
      video.setAttribute("class", "videoMovie");
      video.setAttribute("controls", "controls");
      video.setAttribute("autoplay", "autoplay");
      video.setAttribute("loop", "loop");
      video.setAttribute("src", res[0].videoURL);
      main.append(img, video);
      const directedPart = document.createElement("h3");
      directedPart.innerHTML =
        "<span>Directed by |</span> " + `${res[0].director}`;
      const writtenPart = document.createElement("h3");
      writtenPart.innerHTML = "<span>Written by |</span> " + `${res[0].writer}`;
      footer.append(directedPart, writtenPart);
    });
});
