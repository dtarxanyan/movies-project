import {getMovies} from '../../api/movie.js'

import renderData from "../../renders/drawMovie";

getMovies().then((movies) => {

    return renderData(movies);
})
   .then(moviesData => {
       const input = document.getElementById('search')
       const searchButton = document.getElementById('search-button')
       searchButton.addEventListener('click', () => {
           const typed = input.value;
           const movies = moviesData.filter(movie => movie.name.includes(typed));

           if (!movies.length) {
               alert('No search result, please try something else');
               input.value = '';
           } else {
               renderData(movies, true);
           }
       })
   })