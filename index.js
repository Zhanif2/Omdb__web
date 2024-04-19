
//navigation to other page when searching


function navigateHome() {
    window.location.href = 'index.html';
}



function navigateToBrowseMovies() {
    window.location.href = 'movies.html';
}
function naviagateToPage(event) {
    if (event.key === 'Enter') {
        navigateToBrowseMovies();
    }
}