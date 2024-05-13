//this keyword
const obj1={
    name:"Pratik",
    Class:"12",
    Roll:"211529",
    Message: function(){
        console.log(`Hello ${this.name},welcome`);
        console.log(this);//returns the whole object
    }
}
//this refers to current context as in above example the context is the object obj1
obj1.Message()
function fn2(){
    let user= "pratik"
    // console.log(this.user);//returns undefined
}
fn2()

//arrow function

//explicit arrow function
const pratik =(num1,num2)=>{
    console.log("Pratik")
    return num1+num2
}//needs to use return keyword aand curly braces
console.log(pratik(1,2))

//implicit arrow function
const code=(num1,num2)=>(num1+num2)//needs to be written in a single line and no return keyword required
console.log(code(6,9));

const user = () => ({username:"Pratik"})
console.log(user());
