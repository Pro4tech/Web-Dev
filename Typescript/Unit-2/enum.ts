export enum Weekdays {
    MON, TUE, WED, THURS, FRI, SAT, SUN
}
let day: Weekdays;
day = Weekdays.SUN

if (day == Weekdays.SUN) {
    console.log("Its a Sunday Are Dude")
}

export enum ADV {
    A = "A", B = 'B', C = 'C', D = 'D', E = 'E', F = 'F',
}

export class Address {
    constructor(private state: string, private Country: string) { }

    getaddress() {
        return this.state + ' ' + this.Country;
    }
}
