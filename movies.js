//API KEY: http://www.omdbapi.com/?i=tt3896198&apikey=598682cb
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

//API KEY: http://www.omdbapi.com/?i=tt3896198&apikey=598682cb


async function onSearchChange(event) {
    const movieSearch = event.target.value
    const searchDataEl = document.querySelector('.movie__container')
    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=598682cb&s=${movieSearch}`);
    const searchData = await response.json();
    if (searchData.Search){
        searchDataEl.innerHTML = searchData.Search.map(movie => searchHTML(movie)).join("");
    }
    else{
        console.error('no movies found')
    }
}

function searchHTML(movie){
    return `<div class="movie__poster">
        <figure class="movie__img--wrapper">
            <img src="${movie.Poster}" alt="">
        </figure>
        <span class="${movie.Title}"></span>
    </div>
</div>`;
}


async function navigateToPage(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const movieSearch = document.getElementById('movie__search').value;
    window.location.href = `/inner-page.html?search=${encodeURIComponent(movieSearch)}`;
}








