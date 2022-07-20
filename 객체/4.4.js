// 화살표 함수의 경우에는 해당 함수를 참조하는게 아닌 외부 함수의 this를 참조한다.
// this는 런타임 환경에서 결정된다.
// this는 함수가 호출되기 전까지 아무런 값도 할당되지 않는다.

// 1.
function makeUser() {
    return {
        name: "John",
        ref: this
    };
};

let user = makeUser();

alert( user.ref.name ); // 에러발생
// user.ref 는 makeUser을 의미하는데 여기에 name 이라는 프로퍼티가 존재하지 않는다.

// 2.
let calculator = {
    num1: '',
    num2: '',
    read() {
        this.num1 = +prompt("정수를 입력하세요.", 0);
        this.num2 = +prompt("정수를 입력하세요.", 0);
    },

    sum() {
        return this.num1 + this.num2;
    },

    mul() {
        return this.num1 * this.num2;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// 3.
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
        alert( this.step );
        return this;
    }
};