pl.view.listMovies = {
    setupUserInterface: function() {
        Movie.loadAll();
        console.log(Movie.allMovies);
    }
}