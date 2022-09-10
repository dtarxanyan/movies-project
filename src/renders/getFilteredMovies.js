import getSingleMovieHtml from './getSingleMovieHTML.js';

function getFilteredMovies (movies) {
    const inputValue = document.querySelector('.input1').value;
    console.log(inputValue);
    let html = '<div class="container text-center">';
    html += '<div class="row">';

    movies.forEach(movie => {
        if(movie.name.includes(inputValue)) {
            html +=   `<div class="col">${getSingleMovieHtml(movie)}</div>`;
        }
    });

    html += '</div>';
    html += '</div>';

    return html; 
} 

export default getFilteredMovies;