

//object is defined inside curly brackets
function createUser():{name: string, ispaid: boolean}{
    return {name:"Anju", ispaid: true};
}

function greet(person: { name: string; age: number }) {
    return "Hello " + person.name;
  }


  // type alias
type User = {
    name : string,
    age : number,
    isActive : boolean,
};

function getUser(user:User): User{  
    return {name:"anju", age : 21, isActive : true}
}
//readonly and optional scenoirs
type UserInfo = {
    readonly _id : string // value cannot be assigned
    name : string,
    age : number,
    isActive : boolean,
    creditDetail?: number, //its conditional optional
};

let myUser:UserInfo = {
    _id : "12345",
    name : "AAAA",
    age : 26,
    isActive : true,
    creditDetail: 12354454656,
};
myUser.name = "SS";

//mix match type 

type cardNumber = {
    cardNumbers: string,
}
type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export {}