"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//number
function addTwo(num) {
    return num + 2;
}
//string
function getUpper(val) {
    return val.toUpperCase();
}
//boolen 
function signUpUser(name, email, password, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("ANNN");
signUpUser("ANJU", "grg.puru@gmail.com", 12345, true);
loginUser("A", "A@A.com");
//  let getUser = (myValue) => {
//    if (myValue >5){
//     return true;
//     } else{
//         return "400 ok";
//     }
//  }
var getHello = function (s) {
    return "";
};
var heros = ["Thor", "SpiderMan", "WonderWomen"];
// const heros = [1,2,3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(msg) {
    throw new Error(msg);
}
