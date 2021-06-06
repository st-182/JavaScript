class Movie {
  constructor(name, director, year, actors) {
    this.name = name;
    this.director = director;
    this.year = year;
    this.actors = actors;
  }
}
let titanic = new Movie("Titanic", "James Cameron", 1997, [
  "Leonardo DiCaprio",
  "Kate Winslet",
]);
let cars = new Movie("Cars", "John Lasseter", 2006, [
  "Owen Wilson",
  "Paul Newman",
]);
let batman = new Movie("Batman Begins", "Christopher Nolan", 2005, [
  "Christian Bale",
  "Michael Caine",
]);

let moviesArray = [titanic, cars, batman];

let moviesWithPropertyNmae = moviesArray.map((movie, index, arr) => {
  for (let item in movie) {
    return { ...movie, director: `Director: ${movie.director}` };
  }
});
console.log(moviesWithPropertyNmae);
