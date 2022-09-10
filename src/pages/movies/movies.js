import  getMovies from '/src/api/movie.js'

async function getMovieFromQuery() {
   let queryString = window.location.search
   let urlParams = new URLSearchParams(queryString)
   let movieImgUrl = urlParams.get('id')
   
   let data = await getMovies()
   let currMovie = data.find(movie => movie.imageUrl === movieImgUrl)
   return currMovie
}

      async  function drawPage() {
   let currMovie = await getMovieFromQuery()
   let body = document.getElementsByTagName('body')
   let movieImg = document.createElement('img')
   movieImg.setAttribute('src',currMovie.imageUrl)
   movieImg.style.maxHeight = '475px'
   body[0].prepend(movieImg)
   changeAccordeon(currMovie)
}
   
function changeAccordeon(currMovie) {
   let filmNameContainer = document.querySelector('#flush-headingOne')
   console.log(filmNameContainer)
   filmNameContainer.firstChild.innerHtml = currMovie.name
}
drawPage()