// 1,
const user = {
    name: "John",
    surname: "Smith",
}
user.name = 'Pete';
delete user.name;

// 2.
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

// 3.
const user = {
    name: "John"
};
// 아래 코드는 에러 없이 실행될까요?
user.name = "Pete";

// 정상적으로 변경된다. 객체는 ref 로 한번 더 감싸져 있기 때문에 이 ref 값을 바꾸는거면 변경이 불가능하지만
// ref가 가리키는 주소의 메모리는 변경이 마음대로 가능하다.

// 4.
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

// 5.
function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] === 'number') {
            menu[key] *= 2;
        }
    }
}