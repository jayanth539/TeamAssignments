class Movie{
    moviename:string;
    review:string="";
    director:string;
    releasedate:Date;
    budget:number;
    musicdirector:String;
    constructor(moviename:string,director:string,releasedate:Date,budget:number,musicdirector:string,review?:string){
    this.moviename=moviename;
    this.review = review;
    this.director = director;
    this.releasedate = releasedate;
    this.budget = budget;
    this.musicdirector = musicdirector;
    }
    getMovieName(): String{
    return this.moviename;
    }
    getReview(): String{
    return this.review;
    }
    getDirector(): String{
    return this.director;
    }
    getReleaseDate(): Date {
    return this.releasedate;
    }
    getBudget(): number{
    return this.budget;
    }
    getMusicDirector(): String{
    return this.musicdirector;
    }
    getMovieMsg():String{
    return getMovieMessage(this.moviename,this.releasedate,this.budget);
    }
    }
    function getMovieMessage(movie:string,releasedate:Date,budget:number): string{
    var currdate = new Date();
    let str:string="";
    if(releasedate>currdate){
    str = "A "+budget+" flim named "+movie+" is going to release on "+releasedate.toLocaleDateString()+" please book your tickets";
    }
    else
    str = "A "+budget+" flim named "+movie+" is going to release on "+releasedate.toLocaleDateString()+" please watch movie in thearters";
    return str;
    }
    var mobj:Movie=new Movie("Avengers","Nolan",new Date("08-30-2020"),5000000,"David");
    console.log(mobj.getBudget());
    console.log(mobj.getMovieMsg());