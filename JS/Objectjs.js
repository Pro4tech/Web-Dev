var Student={
    firstName : 'Ravi',
    lastName  : 'Sharma',
    address   :{
                state :'Goa',
                Country:'India',
                },
    marks     :[57,53,56,82,95],
    sum1      :function(){return this.marks[0]+this.marks[1]+this.marks[2]+this.marks[3]                      +this.marks[4];},
    sum2      :function(){var i,sum=0;
                for(i=0;i<this.marks.length;i++){sum+=this.marks[i];}
                return sum;},
    rollno    :8125
};

window.onload=function()
{
    
    console.log(Student)
}