var movies = [
    { title: "Movie 1", genre: "adventure" },
    { title: "Movie 2", genre: "action" },
    { title: "Movie 3", genre: "animation" },
    { title: "Movie 4", genre: "comedy" },
    { title: "Movie 5", genre: "science" },
    { title: "Movie 6", genre: "thriller" },
    { title: "Movie 7", genre: "history" },
    { title: "Movie 8", genre: "documentary" },
    { title: "Movie 9", genre: "fantasy" },
    
    
  ];
  
  function filterMovies() {
    var genre = document.getElementById("genre").value;
    var filteredMovies = genre === "all" ? movies : movies.filter(function(movie) {
      return movie.genre === genre;
    });
  
    var moviesContainer = document.getElementById("movies-container");
    moviesContainer.innerHTML = ""; 
    filteredMovies.forEach(function(movie) {
      var movieElement = document.createElement("div");
      movieElement.textContent = movie.title;
      moviesContainer.appendChild(movieElement);
    });
  }
  
  
  filterMovies();
  