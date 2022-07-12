// 1.
5 > 4
"apple" > "pineapple" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

// 비교 연산자는 서로 비교자가 타입이 다른 경우에만 타입 변환을 하고 그 이외의 경우에는 그대로 비교한다.