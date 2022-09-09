import getSingleMovieHtml from './getSingleMovieHTML.js';

const getMovieListHtml = (movies, displaySize) => {
    let html = document.createElement('div');
    html.classList.add('container');


    let rowHTML = document.createElement('div');
    rowHTML.classList.add('row');


    movies.forEach((movie, index) => {
       let newBlock = document.createElement('div');
       newBlock.classList.add('col');
       newBlock.append(getSingleMovieHtml(movie));
       rowHTML.append(newBlock);

       if(displaySize && rowHTML.childElementCount % displaySize === 0) {
           let elem = rowHTML.cloneNode(true);
           rowHTML.innerHTML = '';
           html.appendChild(elem);

       } else if (!displaySize || movies.length - index < displaySize) {
           html.appendChild(rowHTML);
       }
    })

    return html;
}

export default getMovieListHtml;