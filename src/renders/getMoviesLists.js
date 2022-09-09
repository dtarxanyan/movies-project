import getSingleMovieHtml from "./getSingleMovieHTML.js";

const getMoviesLists = (movies) => {
  let html = '<div class="moviesSection">';

  movies.forEach((movie) => {
    html += `<div class="singleMovieHTMLCol">${getSingleMovieHtml(
      movie
    )}</div>`;
  });

  html += "</div>";

  return html;
};

export default getMoviesLists;
