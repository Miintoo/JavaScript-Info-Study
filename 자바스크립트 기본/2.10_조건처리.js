// 1.
if ("0") {
    alert( 'Hello' );
}

// 실행된다.

// 2.
let name = prompt("자바스크립트의 ‘공식’ 이름은 무엇일까요?";
if (name === "ECMAScript") {
    alert("정답입니다!");
} else {
    alert("정답은 ECMAScript입니다!");
}

// 3.
let number = prompt("숫자를 입력해주세요.");
if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}

// 4.
let result = (a + b < 4) ? '미만' : '이상';

// 5.
let message = (login === '직원') ? '안녕하세요.' :
    (login === '임원') ? '환영합니다.' :
        (login === '') ? '로그인이 필요합니다.' :
            '';
