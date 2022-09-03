import getSingleMovieHtml from './getSingleMovieHTML.js';

const getMovieListHtml = (movies) => {
    let html = '<ul>';

    movies.forEach((movie) => {
        html +=   `<li>${getSingleMovieHtml(movie)}</li>`;
    })

    html += '</ul>';

    return html;
}

export default getMovieListHtml;