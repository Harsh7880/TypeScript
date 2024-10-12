let score : number | string = 33;
score = "33";

type USER = {
    name: string,
    id: number
}

type ADMIN = {
    username: string,
    id: number
}

let harsh : USER | ADMIN = {name: "Harsh", id:  123};

harsh = { username : "hk", id: 556 }

// function getDbId(id: number | string){
// console.log(`DB id is ${id}`);
// }

getDbId(3);
getDbId("3");


function getDbId(id: number | string) {
    // id.toLowerCase();
    if(typeof id === "string"){
        id.toLocaleLowerCase();
    }else{
        id + 2;
    }
    console.log(`DB id is ${id}`);
}

getDbId(3);
getDbId("3");

const data: string[] | number[] = ["1","2","3","4"];
const data1: (string | number)[] = ["1",2,"3","4"];
const data2: (string | number | boolean)[] = ["1","2",3,"4",true];

let seatAllotment: "aisle" | "midle" | "window"
seatAllotment = "aisle";
// seatAllotment = "crew" not allowed 