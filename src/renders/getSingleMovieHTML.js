const getSingleMovieHTML = (movie) => {
  return `
    <div class="singleMovieHead">
        <img src="${movie.imageUrl}">
        <div class="singleMovieBody">
            <h5>${movie.name}</h5>
            <a href="#">${movie.genres}</a>
        </div>
    </div>`;
};

export default getSingleMovieHTML;
