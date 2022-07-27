// 1.
let user = {
    name: "John Smith",
    age: 35
};

const strUser = JSON.stringify(user);
const jsonUser = JSON.parse(strUser);

// 2.
let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};

// 순환 참조
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value === meetup) ? undefined : value;
}));