
//string
let greeting: string = "Harsh Kumar";
greeting.toLocaleLowerCase();
console.log(greeting);

//number
// not good practice : using too much typescript
let userId: number = 38464.4348

//typescrit automatically detect that a number is assigned
let useeID = 8920.98;

//boolean
let isLoggedIn: boolean = false

//any 
let hero;

function getHero (){
    return true;
}
hero = getHero();
export {}