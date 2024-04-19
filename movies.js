
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












