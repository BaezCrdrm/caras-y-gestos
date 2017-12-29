function Movie(slots)
{
    this.id = slots.id;
    this.title = slots.title;
    this.year = slots.year;
    this.url = slots.info;
};

Movie.instances = {};

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
        var movies = {};
        var keys=[];
        if(json != "" && json != null)
        {
            try
            {
                hd = true;
                movies = json;
                keys = Object.keys(movies);
                console.log(keys.length + " movies loaded");
                for(i = 0; i < keys.length; i++)
                {
                    Movie.instances[keys[i]] = Movie.convertRow2Obj(movies[keys[i]]);
                }
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