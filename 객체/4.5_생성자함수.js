// 생성자 함수는 일반 함수와 똑같다 하지만 함수를 호출하는 과정에서 new 연산자를 붙혀서 호출하면
// 그게 생성자 함수를 의미하고 반환 값으로 this를 반환한다.
// 함수의 이름은 시작을 대문자로 시작해야 하지만 규약일 뿐이고 소문자로 작성해도 된다. 하지만
// 코드를 읽는데 있어서 대문자로 만들어서 통일성을 유지하는게 더 좋다.
// 생성자 함수 내부에서 return 할 때 객체를 반환하는 경우 this는 무시 되지만 원시값을 반환하는 경우는
// 원시값은 무시되고 무조건 this가 반환된다.

// 1.
let obj = {};
function A() {
    return obj;
}
function B() {
    return obj;
}

let a = new A;
let b = new B;

alert( a == b ); // true

// 외부에서 객체를 선언하고 반환하도록 하면 똑같은 ref 값을 가진 객체가 반환되기 때문에 같다.


// 2.
function Calculator() {
    this.read = function() {
        this.num1 = +prompt("숫자를 입력해주세요", 0);
        this.num2 = +prompt("숫자를 입력해주세요", 0);
    }
    this.sum = function () {
        return (this.num1 + this.num2);
    }
    this.mul = function () {
        return (this.num1 * this.num2);
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

// 3.
function Accumulator(num) {
    this.value = num;
    this.read = function () {
        this.value += +prompt("수를 입력해주세요.",0);
    }
}


let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함