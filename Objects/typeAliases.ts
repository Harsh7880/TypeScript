type User = {
    name: string;
    email:string,
    address: string,
    age: number,
    isActive: boolean
}

function createUser(user: User): User{
    return {name:"",email:"",address:"",age:2,isActive:false}
}

createUser({name:"",email:"",address:"",age:2,isActive:false})

export {}