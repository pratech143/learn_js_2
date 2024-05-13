//iife(Immediately Invoked Function Expressions)
//called automatically on execution of a program
//used to reduce the pollution done by global variables

//name iife
(function user(){
    console.log("Pratik");
})();
//semicolon is needed to distinct two iife in a single file

//unnamed iife
((num1,num2)=>{
    console.log(num1+num2);
})(6,9);

//passing of parameters in iife
((username)=>{
    console.log(`my name is ${username}`)
})("Pratik")