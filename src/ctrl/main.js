function getRandomMovie()
{
    var _length = Object.keys(Movie.instances).length;
    var index = Math.floor((Math.random() * _length) + 1);
    var randMovie = Movie.instances[index];
    console.log(randMovie);
    document.getElementById("p_movie").innerHTML = randMovie.title;
}