import getSingleMovieHtml from './getSingleMovieHTML.js';

const getMovieListHtml = (movies) => {
    const html = document.createElement("div");
    html.classList = "container text-center";
    const row = document.createElement("div");
    row.className = "row";
    movies.forEach((movie, index) => {
        const col = document.createElement("div");
        col.className = "col";
        col.textContent = getSingleMovieHtml(movie);
        html.append(col);
    });
    
    html.append(row);
    return html;
};

export default getMovieListHtml;