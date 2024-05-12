//Objects in javascript

const obj1={}//singleton object

const sym= Symbol("i am symbol")
console.log(typeof sym);
const obj2={
    name:"Pratik",
    Grade:"Bachelors",
    Faculty:"BEIT",
    "Roll":211529,
    [sym]:"hi i am me" //symbol as javascript key value
}
console.log(obj2.Grade);
console.log(obj2["Faculty"]);//better way to acces object props
console.log(obj2["Roll"]);
console.log(obj2[sym]);

const details={
    fullName:{
        FirstName:"Pratik",
        LastName:"Chapagain"
    },
    Address:"Syangja",
    college:"NCIT"
}//nesting of objects

console.log(details.fullName.FirstName);//accessing nested objects
const {fullName:fn}= details;//object de-structuring
console.log(fn.LastName);
{
    name:"Pratik";
    Grade:"Bachelors";
    Faculty:"BEIT";
    Roll:211529

}//JSON(JavaScript Object Notation)