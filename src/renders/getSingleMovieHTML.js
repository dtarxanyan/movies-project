const getSingleMovieHTML = (movie) => {
   const div = document.createElement('div');
   div.classList.add('card', 'mb-3');
   div.style.width = "18rem";


   const img = document.createElement('img');
   img.classList.add('card-img-top');
   img.src = movie.imageUrl;


   const divChild = document.createElement('div');
   divChild.classList.add('card-body');

   const movName = document.createElement('h5');
   movName.classList.add('card-title', "text-truncate");
   movName.innerText = movie.name;

   const paragraph = document.createElement('p');
   paragraph.classList.add('card-text');
   paragraph.innerHTML = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';

   const link = document.createElement('a');
   link.classList.add('btn', 'btn-primary');
   link.innerText = movie.genres;

   div.append(img, divChild);

   divChild.append(movName, paragraph, link);




   return div;
}


export default getSingleMovieHTML;