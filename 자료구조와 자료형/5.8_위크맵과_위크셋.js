// 1.
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessage = new WeakSet();

readMessage.add(messages[0]);
readMessage.add(messages[1]);

alert("message 0은 읽음 상태인가요?: " + readMessage.has(messages[0]));

// 2.
let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));