import getMoviesListHTML from "./getMoviesListHTML.js";

const renderData = (movies, clear) => {

    const moviesHTML = getMoviesListHTML(movies, 3);
    const container = document.getElementById('movie-container');
    clear ? container.innerHTML = '' : true;
    container.appendChild(moviesHTML);

    return movies;
}

export default renderData;