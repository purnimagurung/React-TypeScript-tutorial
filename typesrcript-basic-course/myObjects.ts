const User = {
    name : "Anju",
    email : "aa@a.com",
    isActive : true,
}

//object is defined inside curly brackets
function createUser():{name: string, ispaid: boolean}{
    return {name:"Anju", ispaid: true};
}

function greet(person: { name: string; age: number }) {
    return "Hello " + person.name;
  }

export {}