// AND 연산자

alert(null && 5); // null

// false가 나오는 부분을 return 하고 모두 true라면 마지막의 값을 return 한다.

// OR 연산자

alert(null || 2 || 0); // 2

// 처음으로 true가 나오는 부분을 return 하고 모두 false라면 마지막 값을 return 한다.

// 1.

alert( null || 2 || undefined ); // 2

// 2.
alert( alert(1) || 2 || alert(3) );
// alert(1)이 실행되고 undefined를 반환하므로 2가 정답이다.

// 3.

alert( 1 && null && 2 ); // null

// 4.
alert( alert(1) && alert(2) ); // undefined

// 5.
alert( null || 2 && 3 || 4 ); // 3

// 6.
const age = prompt("나이를 입력해주세요.");
if (age >= 14 && age <= 90);

// 7.
if (age < 14 || age > 90);

if (!(age >= 14 && age <= 90));

// 8.
if (-1 || 0) alert( 'first' ); // 실행됨
if (-1 && 0) alert( 'second' ); // 실행안됨
if (null || -1 && 1) alert( 'third' ); // 실행됨

// 9.
const name = prompt("이름을 입력해주세요.");

if (name === 'Admin') {
    const password = prompt("비밀번호를 입력해주세요.");

    if (password === 'TheMaster') {
        alert("환영합니다.");
    } else if (password === '' || password === null) {
        alert("취소되었습니다.");
    } else {
        alert("인증에 실패했습니다.");
    }

} else if (name === null || name === '') {
    alert("취소되었습니다.");
} else {
    alert("인증되지 않은 사용자 입니다.");
}

