 function addTwo(num:number): number{
    return num + 2;
 }

 function toUpper(val:string): string{
    return val.toUpperCase();
 }

 function signUpUser(name:string,email:string,isPaid:boolean):object{
  return {}
 }

 let login = (email:string,password:string,ispaid:boolean = false) : boolean=>{
   return true
 }

//  function getValue(val:number):boolean{
//     if(val>5){
//         return true;
//     }
//     return "200 Ok"
//  }

const heros = ["thor","shaktiman","ironman"]

heros.map((hero): string => {
    return `hero is ${hero}`
})


function consoleError(errorMsg: string): void{
    console.log(errorMsg);
}

function handleError(errorMsg: string):never{
  throw new Error(errorMsg);
}

 addTwo(3);
 toUpper("harsh");
 signUpUser("harsh","harsh2gmail.com",false)
 login("harsh2gmail.com","Harsg")