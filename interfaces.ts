// type과 동일한 기능을 함

interface myPoint {
  x: number;
  y: number;
}

const pt: myPoint = { x: 123, y: 123 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string; //메서드의 타입을 정의
  //   sayHi():string 위와 같은 문장
}
const thomas: Person = {
  first: "Thomas",
  last: "Hardy",
  id: 234,
  sayHi: () => "Hello",
};

thomas.first = "asdj";
// thomas.id = 23244;오류

interface myProduct {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const product: myProduct = {
  name: "dlzagu",
  price: 123,
  applyDiscount(discount: number) {
    const newPrice = this.price * (1 - discount);
    this.price = newPrice;
    return this.price;
  },
};

//인터페이스 다시열기 => type과 다르게 다시 열어서 추가 작성할 수 있음

interface MyDog {
  name: string;
  age: number;
}

interface MyDog {
  breed: string;
  bark(): string;
}

const elton: MyDog = {
  name: "dlasd",
  age: 213,
  breed: "asdasd",
  bark() {
    return "sdads";
  },
};

//인터페이스 확장
interface ServiceDog extends MyDog {
  job: "drug sniffer" | "bomb";
}

const chewy: ServiceDog = {
  name: "dlasd",
  age: 213,
  breed: "asdasd",
  job: "drug sniffer",
  bark() {
    return "sdads";
  },
};

//인터페이스 다중상속

interface Human {
  name: string;
}
interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: "Pierre",
  id: 123123,
  email: "eodnsdlekd@naver.com",
  level: "s",
  languages: ["js", "python"],
};

//객체 형태가 아니라면 type을 사용해야 함
// type은 다시 열어서 추가 할 수 없음
// type은 extends가 불가능하고 &를 사용해야함
