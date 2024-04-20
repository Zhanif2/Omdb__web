
//API KEY: http://www.omdbapi.com/?i=tt3896198&apikey=598682cb
let movies = []; 

async function onSearchChange(event) {
    const movieSearch = event.target.value
    const searchDataEl = document.querySelector('.movie__container');

    showLoadingState();

    await delay(900);

    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=598682cb&s=${movieSearch}`);
    const searchData = await response.json();

    if (searchData.Search) {
        movies = searchData.Search; 
        renderMovies(movies, searchDataEl);
    } else {
        console.error('No movies found');
        searchDataEl.innerHTML = '<p class="error">No movies found</p>';
    }

    hideLoadingState();
}

function filterMovies(event) {
    renderFilteredMovies(event.target.value);
}

function renderFilteredMovies(filter) {
    let filteredMovies = []; 

    if (filter === 'OLD_TO_NEW') {
        filteredMovies = movies.slice().sort((a, b) => (a.Year) - (b.Year));
    } else if (filter === 'NEW_TO_OLD') {
        filteredMovies = movies.slice().sort((a, b) => (b.Year) - (a.Year));
    } else {
        return; 
    }

    renderMovies(filteredMovies, document.querySelector('.movie__container'));
}

function renderMovies(movies, containerEl) {
    containerEl.innerHTML = movies.map(movie => searchHTML(movie)).join("");
}

function searchHTML(movie) {
    return `<div class="movie__poster">
        <figure class="movie__img--wrapper">
            <img src="${movie.Poster}" alt="">
        </figure>
        <div class="movie__info">
            <h3 class="movie__title">${movie.Title}</h3>
            <p class="movie__year">${movie.Year}</p>
        </div>
    </div>`;
}

function showLoadingState() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
}

function hideLoadingState() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}







