import {getMovies} from '../../api/movie.js'
import getMoviesListHTML from '../../renders/getMoviesListHTML.js'

getMovies().then((movies) => {
    const mooviesHTML = getMoviesListHTML(movies);
    const container = document.getElementById('movie-container');
    container.innerHTML = mooviesHTML;
})