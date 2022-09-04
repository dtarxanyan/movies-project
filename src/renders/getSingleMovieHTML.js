const getSingleMovieHTML = (movie) => {
    return `
    <div class="card" style="width: 18rem; height: 100%; margin: 0 auto;">
        <img src="${movie.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${movie.name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">${movie.genres}</a>
        </div>
    </div>`
}

export default getSingleMovieHTML;