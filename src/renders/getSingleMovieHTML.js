const getSingleMovieHTML = (movie, onClick) => {
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("card", "imgContainer");
  imgContainer.setAttribute("style", "width: 18rem;");
  const imgAnchor = document.createElement("a");
  imgAnchor.setAttribute(
    "href",
    "../../pages/movies/showMovie.html?id=" + `${movie.id}`
  );
  imgAnchor.setAttribute("target", "blank");
  const img = document.createElement("img");
  img.setAttribute("src", movie.imageUrl);
  img.classList.add("card-img-top");
  img.addEventListener("click", () => onClick(movie));
  imgAnchor.append(img);
  const items = document.createElement("div");
  items.classList.add("card-body", "items");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.innerText = movie.name;

  const paragraph = document.createElement("p");
  paragraph.classList.add("card-text");
  paragraph.innerText =
    "Some quick example text to build on the card title and make up the bulk of the card's content.";

  let link = document.createElement("a");
  link.setAttribute("href", "#");
  link.classList.add("btn", "btn-primary");
  link.innerText = movie.genres;

  items.append(title, paragraph, link);
  imgContainer.append(imgAnchor, items);
  return imgContainer;
};

export default getSingleMovieHTML;
