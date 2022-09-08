import getSingleMovieHtml from './getSingleMovieHTML.js';

const getMovieListHtml = (movies) => {
    let html = '<div class="container text-center">';
    html += '<div class="row">';

    movies.forEach((movie, index) => {
        html +=   `<div class="col">${getSingleMovieHtml(movie)}</div>`;
    })

    html += '</div>';
    html += '</div>';

    return html;
}

export default getMovieListHtml;