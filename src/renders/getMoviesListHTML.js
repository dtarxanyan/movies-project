import getSingleMovieHTML from './getSingleMovieHTML.js';

const getMovieListHtml = (movies) => {
    const container = document.createElement('div')
    container.classList.add('container','text-center')

    const row = document.createElement('div')
    row.classList.add('row')

    movies.forEach((movie, index) => {
        const movieContainer = document.createElement('div')
        movieContainer.classList.add('col')
        movieContainer.append(getSingleMovieHTML(movie))
        row.append(movieContainer)

    })
    container.append(row)
    return container;
}

export default getMovieListHtml;