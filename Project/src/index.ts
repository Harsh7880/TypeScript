
// class User {

//     email: string
//     name: string
//     private readonly city: string = "Lucknow"

//     constructor(email: string,name: string){
//     this.email = email;
//     this.name = name;
//     }
// }

class User {

    protected _courseCount = 1;
    readonly city: string = "Lucknow"

    constructor(
        public email: string,
        public name: string,
        private userId: string
    ){}

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courseCount;
    }
    set courseCount(courseNum) {
       if(courseNum <= 1){
        throw new Error ("Course Count should be more than one")
       }
       this._courseCount = courseNum;
    }

    private deleteToken (){
        console.log("Token Deleted");
    }

}




class SubUser extends User {
    isFamily: boolean = true;
    changeCourseCount (){
        this._courseCount = 3;
    }
}

const harsh = new User("hk@gmail.com","Harsh", "1234" );
const email = harsh.getAppleEmail;
console.log(email);