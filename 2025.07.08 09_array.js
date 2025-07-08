/* Array */

// [대괄호] 리터럴
const arr = ['포도', '복숭아', '자두'];
console.log(arr);
console.table(arr);

// new Array 배열 생성자 함수
const arr2 = new Array('바나나', '자두', '키위');
console.log(arr2);

const arr3 = new Array(5);  // 전달인자가 1개 -> 10개의 배열 칸이 생성됨
console.log(arr3);  // [ <5 empty items> ]

const arr4 = new Array(5,10);   // 전달인자 2개 이상 -> 그대로 5, 10 요소로 들어감
console.log(arr4);  // [ 5, 10 ]

// Array.of 메서드
console.log(Array.of(5));   // 5라는 요소 그대로 들어감
console.log(Array.of('hi', 7, {}, function() {}));  // 다른타입끼리도 가능


const arr5 = ['바나나', '복숭아', '키위'];

console.log(arr5[0]);    // 바나나
console.log(arr5[1]);    // 복숭아
console.log(arr5[2]);    // 키위


// length : 배열의 요소의 개수
console.log(arr.length);  // 3개

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 배열 = 객체(object) 타입
console.log(typeof arr);    //object


console.log([].length);     // 0 : [] 요소 안에 아무것도 안 들어서
const arr7 = [1, 2, 3, 4, 5];
console.log(arr.length);    // 5    // 몇개가 들어있는지 확인


arr7.push(9);    // push : 인자로 전달한 요소 추가해주는 메서드
console.log(arr7.length);    // 7

// length 프로퍼티 값은 배열에 요소를 추가하거나 삭제하면 자동 갱신된다.
arr7.push(8);    // push : 인자로 전달한 요소 추가해주는 메서드
console.log(arr7.length);    // 8
console.log(arr7);

arr7.pop();
console.log(arr7);

arr7.length = 10;
console.log(arr7);
console.log(arr7.length);


const front = [1, 2, 3, 4, 5, 6, 7];

console.log(front.splice(1, 3)); 
// [2, 3, 4]  ← index 1부터 3개 삭제

console.log(front); 
//  [1, 5, 6, 7]  ← 원본 배열에서 요소가 삭제됨

console.log('고차함수');

const types = [true, 1, 'text'].map(item => typeof item);
console.log(types);



const lengths = ['apple', 'banana', 'cat', 'dog', 'egg'].map(item => item.length);
console.log(lengths);
