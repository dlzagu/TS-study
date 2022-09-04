let movieTitle: string = "dlzagu";

movieTitle = "Arrival";
movieTitle = 9;
movieTitle.toUpperCase();

let numCatLives: number = 9;
numCatLives += 1;

let gameOver: boolean = false;
gameOver = true;
gameOver = "false";

// Type Infrence

let tvShow = "Olive Kitteridge";
tvShow = "the other two";
tvShow = false;

let isFunny = false;
isFunny = true;
isFunny = "asd";

// the any type
let thing: any = "hello";
thing = 1;
thing = false;
thing = [];
thing();

// 이경우에도 any type => js로 컴파일시 문제가 발생하니 이런경우에 타입 애너 테이션이 필요함.
const movies = ["Arrival", "The Thing", "Aliense"];
// let foundMovie;
let foundMovie: string;

for (let movie of movies) {
  if (movie === "Arrival") {
    foundMovie = "Arrival";
  }
}
// foundMovie();
// foundMovie = 1;
