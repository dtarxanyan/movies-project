import {getMovies} from '../../api/movie.js'
import getMoviesListHTML from '../../renders/getMoviesListHTML.js'

const searchInput = document.querySelector('#searchInput')
const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const container = document.getElementById('movie-container');
    if(searchInput.value) {
       getMovies().then((movies) => {
       let searched = movies.filter(el => String(el.name).toLowerCase().includes(searchInput.value.toLowerCase()))

       if(emptySearchResult(searched,container)) return 
       
       const mooviesHTML = getMoviesListHTML(searched)
       container.innerHTML = ''
       container.append(mooviesHTML)
       }) 
    } else {
        container.innerHTML = ''
        draw()
       }
})
// searchBtn.addEventListener('click', () => {
    // const container = document.getElementById('movie-container');
    // if(searchInput.value) {
    //    getMovies().then((movies) => {
    //    let searched = movies.filter(el => String(el.name).toLowerCase().includes(searchInput.value.toLowerCase()))

    //    if(emptySearchResult(searched,container)) return 
       
    //    const mooviesHTML = getMoviesListHTML(searched)
    //    container.innerHTML = ''
    //    container.append(mooviesHTML)
    //    }) 
    // } else {
    //     container.innerHTML = ''
    //     draw()
    //    }
// })

 function draw() { 
    getMovies().then((movies) => {
    const mooviesHTML = getMoviesListHTML(movies);
    const container = document.getElementById('movie-container');
    container.append(mooviesHTML)
})
}

draw()


function emptySearchResult(searched,container) {
    if(!searched.length) {
        const notFound = document.createElement('div')
        notFound.innerText = 'Nothing found'
        notFound.classList.add('notFound')
        container.innerHTML= ''
        container.append(notFound)
        return 1
       }
    return 0
}



