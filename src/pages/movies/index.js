import { getMovies } from '../../api/movie.js'
import getMoviesListHTML from '../../renders/getMoviesListHTML.js'

getMovies().then((movies) => {
    const mooviesHTML = getMoviesListHTML(movies);
    const container = document.getElementById('movie-container');
    
    container.innerHTML = mooviesHTML;

    const input = document.querySelector('#input');
    const button = document.querySelector('#button');
    
    button.addEventListener("click", () => {
        const filteredMovies =  movies.filter((movie) => {
            return movie.name.includes(input.value)
        });

        container.innerHTML = getMoviesListHTML(filteredMovies);
    });    
});