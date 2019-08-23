var Movie = /** @class */ (function () {
    function Movie(moviename, director, releasedate, budget, musicdirector, review) {
        this.review = "";
        this.moviename = moviename;
        this.review = review;
        this.director = director;
        this.releasedate = releasedate;
        this.budget = budget;
        this.musicdirector = musicdirector;
    }
    Movie.prototype.getMovieName = function () {
        return this.moviename;
    };
    Movie.prototype.getReview = function () {
        return this.review;
    };
    Movie.prototype.getDirector = function () {
        return this.director;
    };
    Movie.prototype.getReleaseDate = function () {
        return this.releasedate;
    };
    Movie.prototype.getBudget = function () {
        return this.budget;
    };
    Movie.prototype.getMusicDirector = function () {
        return this.musicdirector;
    };
    Movie.prototype.getMovieMsg = function () {
        return getMovieMessage(this.moviename, this.releasedate, this.budget);
    };
    return Movie;
}());
function getMovieMessage(movie, releasedate, budget) {
    var currdate = new Date();
    var str = "";
    if (releasedate > currdate) {
        str = "A " + budget + " flim named " + movie + " is going to release on " + releasedate.toLocaleDateString() + " please book your tickets";
    }
    else
        str = "A " + budget + " flim named " + movie + " is going to release on " + releasedate.toLocaleDateString() + " please watch movie in thearters";
    return str;
}
var mobj = new Movie("Avengers", "Nolan", new Date("08-30-2020"), 5000000, "David");
console.log(mobj.getBudget());
console.log(mobj.getMovieMsg());
