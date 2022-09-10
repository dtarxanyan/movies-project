import {getMovies} from '../../api/movie.js';
import getMoviesListHTML from '../../renders/getMoviesListHTML.js';
import getFilteredMovies from '../../renders/getFilteredMovies.js';

getMovies().then((movies) => {
    const mooviesHTML = getMoviesListHTML(movies);
    const container = document.getElementById('movie-container');
    container.innerHTML = mooviesHTML;
})


document.querySelector('.d-flex').addEventListener('submit', (e) => {
    e.preventDefault();
    getMovies().then((movies) => {
        const mooviesHTML = getFilteredMovies(movies);
        const container = document.getElementById('movie-container');
        container.innerHTML = mooviesHTML;
    })
    setTimeout(() => {
        document.querySelector('.input1').value = ''
    },100) 
})

