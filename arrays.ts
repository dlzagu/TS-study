const emtyArray: [] = []; // 단지 빈 배열을 의미

const stringArray: string[] = []; // 단순 문자열을 선언할 때는 타입추론으로 에너테이션을 입력 안해도 되지만 빈 배열일 경우 타입을 모르기 때문에 에너테이션을 입력해줘야 함
stringArray.push("dlzagu");

const bools: boolean[] = [];
// const bools:Array<boolean> = [] 위의 구문과 같음

type arrayPoint = {
  x: number;
  y: number;
};

const coords: arrayPoint[] = [];
coords.push({ x: 23, y: 23 });
// coords.push({ x: 23 }); 오류

const board: string[][] = [["x"], ["x"], ["x", "o"]]; // 2차원 배열일 경우

const demo: number[][][] = []; // 3차원 배열

//exercise

type Product = {
  name: string;
  price: number;
};

function getTotla(products: Product[]): number {
  let total = 0;
  for (let product of products) {
    total += product.price;
  }

  return total;
}
