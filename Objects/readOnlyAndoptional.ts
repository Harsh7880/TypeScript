type User = {
    readonly _id : number,
    name: string,
    email: string
    isActive: boolean
    creditCard?: number
}

let myUser: User = {
    _id: 123,
    name: "H",
    email: "H",
    isActive:false
}

type cardNumber = {
    cardNumber: number
}
type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export {}