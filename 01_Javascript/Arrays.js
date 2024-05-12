const Array1=['Pratik','he','him'];
const Array2=[6,4,1,2,3,4,5];

console.log(Array2.map((x)=> Math.pow(x,2) ));//takes the callback function and argument and treats the every single argument of the array

console.log(Array2.sort());//sorts the array and ignores the duplicate values
//push and pop operation in an array

Array1.pop();//pops the last element

// Array2.push(...Array1);//adds the elements in the last of the array
console.log(Array1);
console.log(Array2);

// Array2.splice(0,5);//takes starting index and number of items as argument,affects the original array

console.log(Array1.slice(0,-1));//takes starting and ending index as parameters and returns the copy array without affecting the original array,negative index denotes the end of an array

console.log(Array2);

//concat of two arrays
const Array3=Array1.concat(Array2);
console.log(Array3);
//using spread operator
const Array4=[...Array1,...Array2]
console.log(Array4);

console.log(Array4.length);//number of items in an array

const len = Array1.unshift("idiot")//adds an item in the starting of an array and return the new length

const elem =  Array2.shift();//removes the first element and return it

console.log(Array2,elem);
console.log(Array1,len);
const Array5=["pratik",[2,3,4],["my","name",["is",["pratik"]]]]

console.log(Array5.flat(2))//removes the nesting and returs the single array,takes the depth of recursion as argument


