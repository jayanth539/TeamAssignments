var Movieclass = /** @class */ (function () {
    function Movieclass(moviename, director, releasedate, budget, musicdirector, review) {
        this.review = "";
        this.moviename = moviename;
        this.review = review;
        this.director = director;
        this.releasedate = releasedate;
        this.budget = budget;
        this.musicdirector = musicdirector;
    }
    Movieclass.prototype.getMovieName = function () {
        return this.moviename;
    };
    Movieclass.prototype.getReview = function () {
        return this.review;
    };
    Movieclass.prototype.getDirector = function () {
        return this.director;
    };
    Movieclass.prototype.getReleaseDate = function () {
        return this.releasedate;
    };
    Movieclass.prototype.getBudget = function () {
        return this.budget;
    };
    Movieclass.prototype.getMusicDirector = function () {
        return this.musicdirector;
    };
    Movieclass.prototype.getMovieMsg = function () {
        return getMovieMessage(this.moviename, this.releasedate, this.budget);
    };
    return Movieclass;
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
var mobj = new Movieclass("saaho", "sujeeth", new Date("08-30-2019"), 30000000, "guru");
console.log(mobj.getBudget());
console.log(mobj.getMovieMsg());
