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
    $.getJSON("src/data/movies.json", function(json)
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