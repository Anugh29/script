const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown()
{
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}

var movies = [
    { title: 'PS 2' },
    { title: 'Kerla Story' },
    { title: 'Tiger 3'},
    
  ];
  
  function searchMovies() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';
  
    for (var i = 0; i < movies.length; i++) {
      var movie = movies[i];
      var title = movie.title.toLowerCase();
  
      if (title.includes(searchTerm)) {
        var movieElement = document.createElement('div');
        movieElement.textContent = movie.title;
        searchResults.appendChild(movieElement);
      }
    }
  
    if (searchResults.innerHTML === '') {
      var noResultsElement = document.createElement('p');
      noResultsElement.textContent = 'No results found.';
      searchResults.appendChild(noResultsElement);
    }
  }
