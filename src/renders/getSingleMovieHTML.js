const getSingleMovieHTML = (movie) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.style.cssText = "width: 18rem;";
    const movieImg = document.createElement("img");
    movieImg.src = movie.imageUrl;
    movieImg.className = "card-img-top";
    movieImg.alt = "...";
    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";
    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerText = movie.name;
    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerHTML = `Some quick example text to build 
    on the card title and make up the bulk of the card's content.`;
    const btnPrimary = document.createElement("a");
    btnPrimary.classList = "btn btn-primary";
    btnPrimary.innerText = movie.genres;
    cardBodyDiv.append(cardTitle,cardText,btnPrimary);
    cardDiv.append(movieImg,cardBodyDiv);
    return cardDiv;
};

export default getSingleMovieHTML;