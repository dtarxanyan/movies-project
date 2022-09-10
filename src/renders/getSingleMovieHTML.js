const getSingleMovieHTML = (movie) => {
    const divCard = document.createElement('div');
    divCard.classList.add('card','mb-3');
    divCard.style.width = '18rem';

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = movie.imageUrl;

    const divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body');

    const movieTitle = document.createElement('h5');
    movieTitle.classList.add('card-title', 'text-truncate');
    movieTitle.innerText = movie.name;

    const movieText = document.createElement('p');
    movieText.classList.add('card-text');
    movieText.innerHTML = 'Some quick example text to build on the card title and make up the bulk of the cards content.';

    const movieGenres = document.createElement('a');
    movieGenres.classList.add('btn', 'btn-primary');
    movieGenres.innerText = movie.genres;

    divCard.append(img, divCardBody);
    divCardBody.append(movieTitle, movieText, movieGenres);

    return divCard;
}

export default getSingleMovieHTML;