interface User {
    readonly dbId: number
    email : string,
    userId: number,
    goggleId?: string,
    // starttaril: () => string
    starttaril(): string
    getCoupon(couponName: string, value: number): number
}
// we can redclear Interface (Reopening of Interface)
interface User {
    githibToken: string
}


// inheritance
interface Admin extends User {
   role: "admin" | "ta" | "learner"
}


const harsh : Admin = {dbId: 234, email: "h@h.com",
    userId:123,
    role: "admin",
    githibToken: "123fcasdf",
    starttaril: () => {
        return "Trail Started"
    },
    getCoupon: (couponName: "Harsh10", off: 10) => {
        return 10
    }
}

harsh.email = "Hk@h.com"
// harsh.dbId = 124
harsh.goggleId = "jaowsm862hso";








export {}