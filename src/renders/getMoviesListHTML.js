import getSingleMovieHtml from './getSingleMovieHTML.js';

const getMovieListHtml = (movies) => {
    let html = '<div class="container text-center">';
    html += '<div class="row">';

    movies.forEach((movie) => {
        html += `<div class="col" style="padding-top: 12px; padding-bottom: 12px;">${getSingleMovieHtml(movie)}</div>`;
    })

    html += '</div>';
    html += '</div>';

    return html;
}

export default getMovieListHtml;