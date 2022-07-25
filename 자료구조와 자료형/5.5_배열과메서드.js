// splice
// 배열의 추가 삭제 교체를 위해 사용한다.

let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1);
console.log(arr); // ["I", "JavaScript"]

let arr = ["I", "study", "JavaScript", "right", "now"];
arr.splice(0, 3, "Let's", "dance");
console.log(arr); // ["Let's", "dance", "right", "now"]

let arr = ["I", "study", "JavaScript", "right", "now"];

// 처음 두 개의 요소를 삭제함
let removed = arr.splice(0, 2);

alert( removed ); // "I", "study" <-- 삭제된 요소로 구성된 배열

let arr = ["I", "study", "JavaScript"];

// 인덱스 2부터
// 0개의 요소를 삭제합니다.
// 그 후, "complex"와 "language"를 추가합니다.
arr.splice(2, 0, "complex", "language");

alert( arr ); // "I", "study", "complex", "language", "JavaScript"

// 위 코드처럼 splice는 배열의 원소를 삭제하지 않고도 중간에 원소를 추가할 수 있다.

// slice
앞에 문자열과 동일

// concat

// forEach

// find
// 배열에 원소가 객체인 경우 자주 사용

// filter

// map

// split, join

// reduce
// 배열을 기반으로 하나의 값을 도출하고 싶을 때 사용

// 1.
function myShortString(str) {
    const splitStr = str.split("-");
    for (let i = 1; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i][0].toUpperCase() + splitStr[i].slice(1);
    }
    return splitStr.join("");
}

// 2.
function filterRange(arr, a, b) {
    return arr.filter(item => (item >= a && item <= b));
}

// 3.
function filterRangeInPlace(arr, a, b) {

}