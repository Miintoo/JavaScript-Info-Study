// 래퍼 객체
// 평소에 원시값에서 우리가 메서드를 사용이 가능하도록 해준게 래퍼 객체이다.
// 실행단계에서 생성되는 임시 객체라고 보면 된다. 실행이 끝나면 js 엔진이 자동으로 삭제해준다.

// 1.
let str = "Hello";

str.test = 5;

alert(str.test);

// 엄격모드 래퍼객체에 프로퍼티를 할당하는 순간 에러가 발생한다.
// 비엄격모드 래퍼객체에 정상적으로 프로퍼티는 할당 되지만 해당 프로퍼티를 호출하는 단계에선 이미 래퍼 객체는 삭제외어 있기 때문에
// undefined가 반환된다.
