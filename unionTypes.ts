let age: number | string = 21;

age = 23;
age = "24";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };

coordinates = { lat: 321.123, long: 123.123 };

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

//타입좁히기
function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }

  return price * tax;
}

//배열

// const nums: number[] = [1, 2, 3, 4];
// const stuff: any[] = [1, 2, 3, 4, true, "asdasd", []];

const stuff: (number | string)[] = [123, "asdas"];

const coordsArray: (Point | Loc)[] = [
  { lat: 123.123, long: 12312 },
  { x: 12, y: 23 },
];

//Literal Types

let zero: 0 = 0; // 숫자 0으로만 선언할 수 있음
let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "weds";
