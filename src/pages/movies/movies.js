import  getMovies from '/src/api/movie.js'
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const movieId = urlParams.get('id')
const views = urlParams.get('views')


async function getMovieFromQuery() {
   let data = await getMovies()
   let currMovie = data.find(movie => movie.id == movieId)
   return currMovie
}

async  function drawPage() {
   let currMovie = await getMovieFromQuery()
   drawQuickDescription(currMovie)
   drawMovieImage(currMovie)
   drawMovieTrailer(currMovie)
   drawDescription(currMovie)
}
drawPage() 

function drawQuickDescription({name,release,ageRestriction,duration,rating}) {
   document.getElementById('movieTitle').innerText = name
   document.getElementById('releaseYear').innerText = release
   document.getElementById('ageRestriction').innerText = ageRestriction
   document.getElementById('duration').innerText = duration
   document.getElementById('movieRating').innerText = rating
   document.getElementById('views').innerText = views
}

function drawMovieImage({imageUrl}) {
   const imgContainer = document.getElementById('movieImage')
   imgContainer.firstElementChild.setAttribute('src',imageUrl)
}

function drawMovieTrailer({movieTrailerUrl}) {
   const trailerContainer = document.getElementById('movieTrailer')
   trailerContainer.firstElementChild.setAttribute('src',movieTrailerUrl)
}

function drawDescription(currMovie) {
   drawGenres(currMovie)
   drawDescriptionItem('Director',currMovie.director)
   drawDescriptionItem('Writers',currMovie.writers)
   drawDescriptionItem('Stars',currMovie.stars)
}


function drawGenres({genres}) {
   genres = genres.split(',')
   const genreContainer = document.getElementById('genreList')
   genres.forEach(genre => {
      let genreBox = document.createElement('div')
      genreBox.innerText = genre
      genreBox.classList.add('genre')
      genreContainer.append(genreBox)
   })
}

function drawDescriptionItem(itemName,items) {
   if(!items) {
      return
   }
   let container = document.getElementsByClassName('description')[0]

   let descriptionItem = document.createElement('div')
   descriptionItem.classList.add('descriptionItem')

   let heading = document.createElement('b')
   heading.classList.add('descriptionTitle')
   heading.innerText = itemName
   
   descriptionItem.append(heading)
   items = items.split(',')
   items.forEach(item => {
      let itemBox = document.createElement('a')
      itemBox.innerText = item
      itemBox.classList.add('descriptionTitleContent')
      descriptionItem.append(itemBox)
   })

   container.append(descriptionItem)
}
