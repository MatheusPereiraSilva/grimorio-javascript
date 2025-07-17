const searchBar = document.querySelector(".container");
const magnifier = document.querySelector(".magnifier");

magnifier.addEventListener("click", ()=>{
  searchBar.classList.toggle("active");
})