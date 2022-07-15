// 1.
// 정상적으로 동작한다.

// 2.
function checkAge(age) {
    return (age > 18) ? true : confirm('보호자의 동의를 받으셨나요?');
}

function checkAge(age) {
    return (age > 18) || confirm('보호자의 동의를 받으셨나요?');
}

// 3.
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// 4.
function pow(x, n) {
    if (n >= 1 && Number.isInteger(n)) {
        alert("자연수를 입력해주세요.");
        return;
    }

    return x ** n;

}