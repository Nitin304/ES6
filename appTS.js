    let word1 = "Nitin";
    let word2 = "Arora";
    //String Inforlation
    const name = `${word1}
    ${word2}`;
    console.log(name);


//Destructuring objects
const perSonalInformation = {
    f :"Nitin",
    n : "Arora"
}
const {f,n} = perSonalInformation;

console.log(`${f} ${n}`);

//Destructuring arrays
let [fn, ln] = ['Nitin','Arora'];
ln ="casd";

console.log(fn+" "+ln);

//Object Literal
function addressmaker(city, state){
    const newAddress = {city, state};
    console.log(newAddress);
}

addressmaker('Austin','Texas');

//Object Literal
function addressmaker1(address){
    const {city,state} = address;
    const newAddress = {
        city,
        state,
        country: 'US'
    }
    console.log(newAddress);
}

addressmaker1({city:'Austin',state:'texas'});


///For of loop

let incomes = [1000,123123,123123];

let total = 0;
for(const income of incomes){     
    total +=income;
}
console.log(total);

let fullname = "Nitin Arora";

for(let char of fullname){
    console.log(char);
}


let incomes1 = [1000,123123,123123];

let total1 = 0;
for(let income of incomes1){     
    income +=income;
}
console.log(incomes1);


//Spread Operator : this unwraps the array
// The same can be used in the objects but it is very strict over the babel

let example1 = [1,2,3,4,5,6];

let example2 = [...example1];
example2.push(7);
console.log(example1);
console.log(example2);



//Rest operator

function add(...nums){
    //in the below case it did not identify that it is an array, so the ...nums is added to the arguments
    //
    console.log(nums);
    //Simlar to console.log(arguments)
}

add(4,5,6,7,8)


//Array Functions

function add(...nums){
    //All the below works in a simlar way
    
    /*let total = nums.reduce(function(x,y){
        return x+y;
    })*/
    
    /*let total = nums.reduce((x,y)=>{
        return x+y;
    })*/
    
    let total = nums.reduce((x,y) => x+y);
    console.log(total);
}

add(4,5,6,7,8)

// Default Params

//This is case if the nothing is passed to the add1 function and we are iterating it over using forEach
function add1(numArray = []){
    let total = 0;
    numArray.forEach((elemts) =>{
        total +=elemts;
    })    
    console.log(total);
}

add1();


//Includes()

let arrNum = [1,2,3,4,5];

console.log(arrNum.indexOf(0));
//Instead we use not includes: this returns true or false
console.log(arrNum.includes(0));


//Difference b/w let, var and const are the way that 
// var can be used with hoisting.
// But let and const does not support hoisting
// Const values cannout be resigned, unless it is an object or an array.



//Import and export
//It didnt worked for me
/*import data  from './example.js';

console.log(data);*/


//Pad start and Pad end

let exmp = "Nitin Arora";

console.log(exmp.padStart(100,'a'));
console.log(exmp.padEnd(100,'a'));