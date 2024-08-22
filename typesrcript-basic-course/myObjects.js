"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//object is defined inside curly brackets
function createUser() {
    return { name: "Anju", ispaid: true };
}
function greet(person) {
    return "Hello " + person.name;
}
function getUser(user) {
    return { name: "anju", age: 21, isActive: true };
}
var myUser = {
    _id: "12345",
    name: "AAAA",
    age: 26,
    isActive: true,
    creditDetail: 12354454656,
};
myUser.name = "SS";
