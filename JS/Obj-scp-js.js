var user ={
    name    :["user1"],
    pass   :["1234"],
    location:["GEC"],
    newloc:function(use,passw,locat){
        this.location.push(locat);
        this.name.push(use);
        this.pass.push(passw);
        return "user,pass and adress are added";   
    }
};