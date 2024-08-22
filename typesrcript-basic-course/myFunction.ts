//number
function addTwo(num: number): number{
    return num + 2;
}

//string
function getUpper(val:string ){
    return val.toUpperCase()
}
//boolen 
function signUpUser(name: string, email: string, password: number, isPaid: boolean){}

let loginUser = (name:string, email:string, isPaid: boolean = false)=> {}

addTwo(5);
getUpper("ANNN")
signUpUser("ANJU","grg.puru@gmail.com",12345, true);
loginUser("A", "A@A.com")

//  let getUser = (myValue) => {
//    if (myValue >5){
//     return true;
//     } else{
//         return "400 ok";
//     }
//  }

const getHello = (s:string): string=>{
    return ""
}

const heros = ["Thor", "SpiderMan", "WonderWomen"];
// const heros = [1,2,3]
heros.map((hero): string => {
    return `hero is ${hero}`;
})


function consoleError (errmsg:string): void{
    console.log(errmsg);
}
function handleError (msg:string): never{
    throw new Error(msg);
}

// const consoleError = (errorMsg: string) :void =>{
//     console.log(errorMsg);
// }
export {}