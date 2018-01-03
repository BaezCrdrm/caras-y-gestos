$("document").ready(function()
{
    $("#p_movie").text("");
    $("#h_usedMovies").hide();
    $("#ul_usedMovies").hide();
});

function getRandomMovie()
{
    var _length = Movie.allMovies.length;
    if(_length > 0)
    {
        var randMovie;
        do
        {
            var index = newRandNum(_length);
            randMovie = Movie.allMovies[index];
            console.log(randMovie);
        } while(randMovie == undefined)

        removeByAttr(Movie.allMovies, 'id', randMovie.id);
        Movie.usedMovies[Movie.usedMovies.length] = randMovie;
        $("#p_movie").text(randMovie.title);
        
        $("#ul_usedMovies").append("<li tabindex='1'>" + randMovie.title + "</li>");
        $('li').last().addClass('active-li').focus();

        if($("#h_usedMovies")[0].style.display == "none")
        {
            $("#h_usedMovies").show();
        }
    }
    else {
        alert("Ya no hay más películas en el el registro 😶");
    }
}

function newRandNum(_length) {
    return Math.floor((Math.random() * _length - 1) + 1);
}

var removeByAttr = function(arr, attr, value)
{
    var i = arr.length;
    while(i--){
       if( arr[i] 
           && arr[i].hasOwnProperty(attr) 
           && (arguments.length > 2 && arr[i][attr] === value ) ){ 

           arr.splice(i,1);
       }
    }
    return arr;
}

function newGame()
{
    Movie.instances = {};
    Movie.instances = [];

    Movie.loadAll();
    $("#p_movie").text("");

    $("#ul_usedMovies").empty();
    $("#h_usedMovies").hide();
}

function newGame_conf()
{
    var conf = confirm("¿Iniciar nuevo juego? Olvidará las películas que has visto anteriormente.");
    if(conf == true)
    {
        newGame();
    }
}

function expandRetractList()
{
    var time = 400;
    if($("#ul_usedMovies")[0].style.display == "none")
    {
        $("#ul_usedMovies").show(time)
    }
    else
        $("#ul_usedMovies").hide(time);
}