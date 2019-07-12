export class user {
    constructor(public name: string, public des: string, public add: string, public phone: number[]) { }

    GetFullDet() {
        return "Name:" + this.name + " | Des:" + this.des + " | Add:" + this.add + " | Phone:" + this.phone;
    }

    GetName() {
        return "Name:" + this.name;
    }

    GetDes() {
        return "Des:" + this.des;
    }

    GetAdd() {
        return "Add:" + this.add;
    }
    GetPhone() {
        return "Phone:" + this.phone;
    }

}