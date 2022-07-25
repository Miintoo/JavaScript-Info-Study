// slice
let str = "stringify";
alert(str.slice(0, 5)); // strin
alert(str.slice(0, 1)); // s
alert(str.slice(2)); // ringify

console.log(str.slice(-4, -1)); // gif
console.log(str.slice(-4)); // gify

// substring

// slice와 똑같지만 start 인수가 더 작아도 되고 음수를 허용하지 않는다.

// substr
let str = "stringify";
alert(str.substr(2, 4)); // ring

// slice 와 substring와 다르게 두번째 인자로 길이를 넣는다.

// 세개중 slice만 쓰면 충분하다.

// 1.
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

// 2.
function checkSpam(str) {
    let upperStr = str.toUpperCase();
    if (upperStr.includes('VIAGRA') || upperStr.includes('XXX')) {
        return true;
    } else {
        return false;
    }
}

// 3.
function truncate(str, maxlength) {
    if (str.length >= maxlength) {
        return str.slice(0, maxlength - 1) + "...";
    } else {
        return str;
    }
}

// 4.
function extractCurrencyValue(str) {
    return +str.slice(1);
}