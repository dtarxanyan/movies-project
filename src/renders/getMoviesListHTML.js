import getSingleMovieHtml from './getSingleMovieHTML.js';

const getMovieListHtml = (movies, separator) => {
    let html = document.createElement('div');
    html.classList.add('container');

    let row = document.createElement('div');
    row.classList.add('row');

    movies.forEach((movie, index) => {
        let div = document.createElement('div');
        div.classList.add('col');
        div.append(getSingleMovieHtml(movie));
        row.append(div);

        if (separator && row.childElementCount  % separator === 0) {
            let temp = row.cloneNode(true);
            row.innerHTML = '';
            html.appendChild(temp);
        } else if (!separator || movies.length - index < separator) {
            html.appendChild(row);
        }
    })

    return html;
}

export default getMovieListHtml;