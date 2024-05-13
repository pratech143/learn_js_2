//scopes of variables
const a=5//constant and value can never be chamged anywhere
let b=3
var c=3//it is a global declaration and original value is changed wherever used

if(true){
    let b=200
    var c=300
    console.log(c);
    console.log(b)
    // a=69
    console.log(a);
}
console.log(c);
console.log(b)
//ways of declaring functions

console.log(addnum(6,9));
function addnum(num1,num2){
    return (num1+num2);
}//can be called anywhere


const subnum=function(num1,num2){//num1,num2 are parameters
    return(num1-num2);
}//cannot be called before initialization
console.log(subnum(9,6));//9,6 are arguments

//nesting of functions and scopes
function one(){
        const name="Pratik"
        function two(){
            const college="NCIT"
            console.log(name)
            console.log(college);
        }
        console.log(college) //parent fn cammot use child fn's variables
        two()       
}
one()
