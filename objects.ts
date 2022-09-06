function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} + ${person.last}`);
}

printName({ first: "daeun", last: "kim" });

let coordinate: { x: number; y: number } = { x: 32, y: 40 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

// printName({ first: "Mick", last: "Jagger", age: 473 }); // 프로퍼티를 지정해주지 않았기 때문에 오류
const singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
printName(singer); // 새로운 객체를 만들어서 인자로 넣어주면 오류가 나지 않음. 대신 지정된 프로퍼티 외에는 그냥 무시하게 됨.

// type에 에너테이션을 저장하고 사용할 수 있음.
type Point = { x: number; y: number };

function doeblePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSogn(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "sdlkjsd",
  numStreams: 123,
  credits: {
    producer: "12lk3j",
    writer: "alskjdlk",
  },
};

const earnings = calculatePayout(mySong);
console.log(earnings);
printSogn(mySong);

//선택적 프로퍼티 z
type PointTwo = { x: number; y: number; z?: number };

//readonly
type User = {
  readonly id: number; // 읽기 전용 , 객체나 배열은 변경 가능(참조타입), 원시타입은 재할당 불가능
  userName: string;
};

//교차타입
type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "red",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 7,
  breed: "asdasd",
  age: 123,
};
