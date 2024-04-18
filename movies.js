//API KEY: http://www.omdbapi.com/?i=tt3896198&apikey=598682cb

/* Function to search movies based on user input
async function searchMovies() {
    const searchInput = document.getElementById('movie__search').value;

    // Fetch movie data from an API (example using OMDB API)
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=598682cb
    &s=${movie__search}`);
    const data = await response.json();

    // Get the first 6 movies from the search results
    const movies = data.Search.slice(0, 6);

    // Clear previous search results
    const resultsContainer = document.getElementById('result__container');
    result__container.innerHTML = '';

    // Display movie posters
    movies.forEach(movie => {
        const posterUrl = movie.Poster;
        const moviePoster = document.createElement('img');
        moviePoster.src = posterUrl;
        moviePoster.alt = movie.Title;
        moviePoster.classList.add('movie__poster');
        resultsContainer.appendChild(moviePoster);
    });
}
*/
/*
function searchMovies() {
    const apiKey = 'http://www.omdbapi.com/?i=tt3896198&apikey=598682cb';
    const searchInput = document.getElementById('movie__search').value.trim(); // Use your custom input ID

    if (searchInput === '') {
        alert('Please enter a movie title');
        return;
    }

    const apiUrl = `https://www.omdbapi.com/?apikey=598682cb&type=movie&s=${encodeURIComponent(searchInput)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                displayMovies(data.Search);
            } else {
                alert('No movies found!');
            }
        })
        .catch(error => {
            console.log('Error fetching data:', error);
            alert('Error fetching data. Please try again.');
        });
}

function displayMovies(movies) {
    const moviesContainer = document.getElementById('result__container'); // Use your custom container ID
    moviesContainer.innerHTML = ''; // Clear previous results

    // Display up to 6 movies
    for (let i = 0; i < Math.min(movies.length, 6); i++) {
        const movie = movies[i];
        const posterUrl = movie.Poster === 'N/A' ? 'placeholder.jpg' : movie.Poster;

        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        movieElement.innerHTML = `
            <img src="${posterUrl}" alt="${movie.Title} Poster">
            <p>${movie.Title} (${movie.Year})</p>
        `;

        moviesContainer.appendChild(movieElement);
    }
}
*/


async function searchMovies(){
    const searchInput = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=598682cb")
    const input = await searchInput.json();
    console.log(input)
}

searchMovies();