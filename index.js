
//navigation to home when click logo


function navigateHome() {
    window.location.href = 'index.html';
}

//navigate to browse movies when click enter and button
function navigateToBrowseMovies() {
    window.location.href = 'movies.html';
}


//burger menu
function openMenu(){
    document.body.classList += " menu--open"
    }
    
    function closeMenu(){
        document.body.classList.remove('menu--open')  
    }