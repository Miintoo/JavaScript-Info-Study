// length 프로퍼티는 배열의 갯수가 아닌 배열의 마지막 인덱스에서 +1을 해준값이다.
let fruits = [];
fruits[123] = "사과";

alert( fruits.length ); // 124

// 1.
let fruits = ["사과", "배", "오렌지"];

// 배열을 '복사'한 후, push 메서드를 이용해 새로운 값을 추가합니다.
let shoppingCart = fruits;
shoppingCart.push("바나나");

// fruits에 어떤 값이 들어 있을까요?
alert( fruits.length ); // 4

// 2.
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[1] = "Classics";
console.log(styles.shift());
styles.unshift("Rap", Reggae);

// 3.
let arr = ["a", "b"];

arr.push(function() {
    alert( this );
})

arr[2](); // a, b, function()

// push 할 때 배열 객체의 메서드로 들어가게 되고 이를 호출하면 this인 arr 배열을 그대로 출력한다.

// 4.
function sumInput() {
    let result = [];
    while (true) {
        let n = +prompt("숫자를 입력해주세요");
        if (typeof n !== "number" || n === '' || n === null) {
            return result;
        } else {
            result.push(n);
        }
    }
}

// 5.
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
    for (let i = 0; i < arr.length; i++) {
        partialSum += arr[i];
        maxSum = Math.max(maxSum, partialSum);
        if (maxSum < 0) maxSum = 0;
    }
    return maxSum;
}