// 1.
function sumSalaries(arr) {
    let sum = 0;
    for (let salary of Object.values(arr)) {
        sum += salary;
    }
    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert( sumSalaries(salaries) ); // 650

// 2.
function count(obj) {
    return Object.keys(obj).length;
}

let user = {
    name: 'John',
    age: 30
};

alert( count(user) ); // 2