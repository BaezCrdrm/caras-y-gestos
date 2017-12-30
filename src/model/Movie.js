function Movie(slots)
{
    this.id = slots.id;
    this.title = slots.title;
    this.year = slots.year;
    this.url = slots.info;
};

Movie.allMovies = {};

Movie.usedMovies = [];

Movie.convertRow2Obj = function (row) {
    var movie = new Movie(row);
    return movie;
  };

Movie.loadAll = function()
{
    var hd = false;
    var error = false;
    var url = "src/data/movies.json"
    // var url = "https://baezcrdrm.github.io/caras-y-gestos/src/data/movies.json?callback=?";
    //var url = "http://18.221.160.127/caras-y-gestos/src/data/movies.json";

    $.getJSON(url, function(json)
    {
        console.log(json);
        var keys=[];
        if(json != "" && json != null)
        {
            try
            {
                hd = true;
                Movie.allMovies = json;
            } catch (e) 
            {
                alert("Error when writing to Local Storage\n" + e);
                error = true;
            }
        }
        else {
            hd = false;
        }
    });
}