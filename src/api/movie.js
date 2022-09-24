const URL = '/src/data/movies.json';

 const getMovies = async () => {
    const response = await fetch(URL);
    const responseObj = await response.json();
    return responseObj;
}
export default getMovies