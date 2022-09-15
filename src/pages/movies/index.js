import getMovies from '../../api/movie.js'
import getMoviesListHTML from '../../renders/getMoviesListHTML.js'

const searchInput = document.querySelector('#searchInput')
const form = document.querySelector('#form')
form.addEventListener('submit', handleSearchSubmit);

getMovies().then((movies) => {
    draw(movies);
})

function collectClickStats(movie) {
    let currentValue = localStorage.getItem('clickStats');

    if(!currentValue) {
        currentValue = {[movie.id]: 1};
    } else {
        currentValue = JSON.parse(currentValue);
        const prevCount = currentValue[movie.id] || 0
        currentValue[movie.id] = prevCount + 1;
    }

    localStorage.setItem('clickStats', JSON.stringify(currentValue));
}

function handleSearchSubmit(e) {
    e.preventDefault()
    const container = document.getElementById('movie-container')
    getMovies().then((movies) => {
        let filtered = movies;

        if (searchInput.value) {
            filtered = movies.filter(el => String(el.name).toLowerCase().includes(searchInput.value.toLowerCase()))
        }

        draw(filtered);
    })
}

function draw(movies) {
    if (!movies.length) {
        showEmptyResultText();
        return;
    }

    const mooviesHTML = getMoviesListHTML(movies, (movie) => {
        openSinglePage(movie)
        collectClickStats(movie);
    });

    const container = document.getElementById('movie-container');
    container.append(mooviesHTML)
}

function showEmptyResultText(container) {
    const notFound = document.createElement('div')
    notFound.innerText = 'Nothing found'
    notFound.classList.add('notFound')
    container.innerHTML = ''
    container.append(notFound);
}



function openSinglePage(movie) {
    let views = getLocalStorageItem(movie)
    window.open(`/src/pages/movies/movies.html?id=${movie.id}&views=${views}`, '_blank')
}

function getLocalStorageItem({id}) {
   let stat =  JSON.parse(localStorage.getItem('clickStats'))
   return stat[id]
}