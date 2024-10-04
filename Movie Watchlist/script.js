let movies = [];

function addMovie(){
    const movie = document.getElementById("movie-name").value.trim();
   
   if(movie !== ""){
    movies.push(movie)
    document.getElementById("movie-name").value = "";
    displayMovies();
   }
   else {
    alert("enter movie name");
   }
}

function removeMovie(index){
    movies.splice(index, 1);
    displayMovies();
}



//loop through movies, add movies to html
function displayMovies(){
    let movieList = document.getElementById("movie-list");
    movieList.innerHTML = "";

    movies.forEach((item, index) => {
        const li = document.createElement("li")
        li.innerHTML = `${item} <button class="material-icons remove-btn" onclick="removeMovie(${index})">remove</button>`;
       
        movieList.appendChild(li);
    })
}



//make 
document.getElementById("add-movie-btn").addEventListener("click", function () {
    addMovie();
})