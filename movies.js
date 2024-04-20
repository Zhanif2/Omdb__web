
//API KEY: http://www.omdbapi.com/?i=tt3896198&apikey=598682cb


async function onSearchChange(event) {
    const movieSearch = event.target.value
    const searchDataEl = document.querySelector('.movie__container')

    showLoadingState();

    await delay (800);

    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=598682cb&s=${movieSearch}`);
    const searchData = await response.json();

    if (searchData.Search){
        searchDataEl.innerHTML = searchData.Search.map(movie => searchHTML(movie)).join("");
    }
    else{
        console.error('no movies found')
        searchDataEl.innerHTML = '<p class="error">No movies found</p>';
    }

        hideLoadingState();
}



function showLoadingState(){
    const loader = document.querySelector('.loader')
    loader.style.display = 'block';
}

function hideLoadingState(){
    const loader = document.querySelector('.loader')
    loader.style.display = 'none'
}

function searchHTML(movie){
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


function delay(ms){
    return new Promise(resolve => setTimeout (resolve, ms));
}








