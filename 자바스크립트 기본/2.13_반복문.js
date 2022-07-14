// 1.
let i = 3;

while (i) {
    alert( i-- );
}

// 1이 출력된다.

// 2.
let i = 0;
while (++i < 5) alert( i );

let i = 0;
while (i++ < 5) alert( i );

// 1, 2, 3, 4
// 1, 2, 3, 4, 5

// 두 출력값은 다르다.

// 3.
for (let i = 0; i < 5; i++) alert( i ); // 0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) alert( i ); // 0, 1, 2, 3, 4

// 4.

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 1) continue;

    alert(i);
}

// 5.
let i = 0;
while (i < 3) {
    alert(`number ${i}`);
    i++;
}

// 6.
while(true) {
    let number = prompt("숫자를 입력해주세요");
    if (number > 100 || number === null || number === "") {
        break;
    }
}

// 7.
let decimal = [];

for (let i = 2; i <= n; i++) {
    let num = i;
    let cnt = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            cnt += 1;
        }
    }
    if (cnt > 2) {
        continue;
    }
    decimal.push(i);
}

decimal.forEach(item => alert(item));