$("document").ready(function()
{
    
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
        document.getElementById("p_movie").innerHTML = randMovie.title;
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