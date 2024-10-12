"use strict";
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
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Lucknow";
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course Count should be more than one");
        }
        this._courseCount = courseNum;
    }
    deleteToken() {
        console.log("Token Deleted");
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 3;
    }
}
const harsh = new User("hk@gmail.com", "Harsh", "1234");
const email = harsh.getAppleEmail;
console.log(email);
