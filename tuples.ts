const color: [number, number, number] = [255, 0, 0];

type HTTPResponse = [number, string];
const goodRes: HTTPResponse = [200, "OK"];
// goodRes[0] ='200' 오류
// goodRes.push(123) 정상 작동 튜플의 한계
// goodRes.push(123)
// goodRes.pop()

//Enums
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

enum ArrrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

//자바스크립트로 컴파일 할 때 enum은 자바스크립트 함수를 생성함
// 자바스크립트 함수를 생성하기 싫으면 enum 앞에 const를 붙이면 됨

// const enum ArrrowKeys {
//     UP = "up",
//     DOWN = "down",
//     LEFT = "left",
//     RIGHT = "right",
//   }
