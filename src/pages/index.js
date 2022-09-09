import { getMovies } from "../api/movie.js";
import getMoviesLists from "../renders/getMoviesLists.js";

const input = document.querySelector(".d-flex input");
const btn = document.querySelector(".btn");

getMovies().then((movies) => {
  const moviesHTML = getMoviesLists(movies);
  const container = document.getElementById("movieContainer");
  container.innerHTML = moviesHTML;
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value) {
    let HTMLSection = document.getElementById("movieContainer");
    let parentDiv = [...document.querySelectorAll(".singleMovieHTMLCol")];
    parentDiv = parentDiv.map((eachCard) => {
      if (
        !eachCard.firstElementChild.lastElementChild.firstElementChild.innerText
          .toLowerCase()
          .includes(input.value.toLowerCase())
      ) {
        eachCard.style.display = "none";
      } else {
        eachCard.style.display = "block";
      }
      return eachCard;
    });
    HTMLSection.innerHTML = "";
    HTMLSection.append(...parentDiv);
    input.value = "";
  }
});
