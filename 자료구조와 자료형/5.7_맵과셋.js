// 배열, 객체 말고도 Map, Set 컬렉션도 존재한다.

// 1.
function unique(arr) {
    const set = new Set(arr);
    return Array.from(set);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // 얼럿창엔 `Hare, Krishna, :-O`만 출력되어야 합니다.

// 2.
function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join("");
        map.set(sorted, word); // 키값이 똑같으면 중복으로 들어가는게 아닌 무시된다.
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear"나 "PAN,cheaters,era"이 출력되어야 합니다.

// 3.
let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
keys.push("more");

// keys 배열이 완전한 배열이 아니기 때문이다. 이를 위해서 Array.from 명령어를 사용해줘야한다.
// keys()는 이터러블을 반환한다.