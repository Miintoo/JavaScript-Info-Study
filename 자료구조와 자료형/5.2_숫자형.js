// js 언어어에서는 소수점을 정확한 2진수로 표현하지 못하기 때문에 정밀도 손실이 발생한다.

// 1.
const a = +prompt("a",0);
const b = +prompt("b",0);

console.log(a + b);

// 2.
alert( 6.35.toFixed(1) ); // 6.3

// 정밀도 이슈 때문에 소수는 우리가 보이는대로 값으로 되어있지 않기 때문이다. 2진수로 나타내면 6.3499999 이런식으로 나오기 때문에 반올림을 하지 못한다.

alert(Math.round(6.35 * 10) / 10);

// 3.
function  readNumber() {
    while (true) {
        let a = +prompt("숫자를 입력해주세요.");
        if (typeof a === number) {
            return a;
        }
        if (!a) {
            return null
        }
    }
}