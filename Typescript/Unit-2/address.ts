export class Address {
    constructor(private state:string,private Country:string){}
    
    getaddress(){
        return this.state+' '+this.Country;
    }
}