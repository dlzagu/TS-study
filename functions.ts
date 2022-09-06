function square(num: number) {
  return num * num;
}

function greet(person: string) {
  return `Hi there, ${person}!`;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {};

square(3);
greet("dlzagu");
doSomething("ChickenFace", 76, true);

function greet2(person: string = "stranger") {
  return `Hi there, ${person}!`;
}

greet2("hello");

// 인자 뒤에 오는 애너테이션은 리턴값을 알려줌
function square2(num: number): number {
  return num * num;
}

square2(3);

// 반환값 타입이 두개 이상일때 타입스크립트가 알아서 계산함
function rando(num: number) {
  return Math.random() < 0.5 ? num.toString() : num;
}

const colors = ["red", "orange", "yellow"];
// 타입스크립트는 map함수를 쓸 때 타입을 알아서 정해줌
colors.map((color) => {
  return color;
});

function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

// 반환값이 없어야 하거나 함수가 절대 멈추면 안될 때 never 애너테이션을 사용
// void는 반환값이 null이나 undefined지만 never은 절대 반환값을 가지면 안된다.
function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("Game Loop Running!");
  }
}
