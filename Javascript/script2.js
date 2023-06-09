// //Strings
// console.log("Hell Coders") ;
// let firstName = "Wow" , secondName = "Programmer";

// console.log(firstName ,  secondName);
// firstName += secondName ;
// console.log(firstName) ;
// let fullName = `I want to become ${firstName} ${secondName}`;
// console.log(fullName) ;

// // Getting string characters
// // indexing just like c++
// console.log(secondName[2].toLowerCase());
// console.log(secondName.indexOf('m')) ;
// let hobbies = "     coding   reading   running   "
// let result = hobbies.trim();
// console.log(result);
// console.log(hobbies);
// console.log(hobbies.lastIndexOf('n')); //case sensitive hota h nhi hua to -1 return karega
// console.log(hobbies.includes("running"));

// let fullName = "wowprogrammer";
// // slice = substr but second thing is indexing
// console.log(fullName.slice(0  , 3));
// console.log(fullName.slice(1 , 4));
// let favoritColors = "Brown Black Blue  Gray  Red";
// let arrColors = favoritColors.split(' ');
// console.log(arrColors);
// let str = "Hello";
// let num = "zzzzz";
// str = num ;
// console.log(str , typeof str);

// let score = 50;
// score /= 8 ;
// console.log(score)

// Loose equality(==) and Strict equality operator (===)

// // let age = 12 ;
// // console.log(age == "12");
// // console.log(age === '12');

// // Type conversations
// // let stringType = "54";
// // let numbertype = Number(stringType);
// // console.log(numbertype , typeof  numbertype); // works on only valid strings

// // Boolean Method true/false

// // 0 in numbers and empty string in considered as false rest is true

// // Arrays
// // let dishes = ["first" , "second" , "third"];
// // dishes.push("fourth");
// // console.log(dishes.join(' '));
// // let newDishes = ["fifth" , "sixth"];

// // console.log(dishes.concat(newDishes));
// // we can push something to array
// // we can pop

// // Control flow
// // For loop

// // for(let i = 0 ; i < 5 ; i++){
// //     console.log(i);
// // }

// // we can access array elements
// // let j = 1 ;
// // while(j <= 9){
// //     console.log(j);
// //     j++;
// // }

// // if , else , else if conditions
// // let first = 21 ;
// // if(first == 10){
// //     console.log(10);
// // }
// // else if(first == 12){
// //     console.log(12);
// // }else{
// //     console.log("else if => " , first);
// // }
// // if(first == 21){
// //     console.log(21)
// // }

// // break and continue statements
// // same as c++


// //logical operators 
// // same as c++

// // ternary operator

// // let age = 12 ;
// // let weight = 50 ;
// // console.log(age >= 18 ? "Qualified" : weight >= 50 ? "Qualified" : "Failed" );

// // switch case same as c++

// function nameOfTheFunction(){
//     console.log("hey bro");
// }
// nameOfTheFunction();
// let fun = function(name = "unknown"){
//     console.log(`hey bro ${name}`);
// }
// fun("sandeep");
// fun();

// let fun1 = function(c){
//     return c - 1 ;
// }
// console.log(fun1(3));

// //Arrow function

// let invitation = name => `welceome  ${name}  to this event` ;
// console.log(invitation('coders'));

// // we can pass function as parameter

// let upperCase = function(str){
//     return str.toUpperCase();
// }
// let lowerCase = function(str){
//     return str.toLowerCase();
// }

// let change = function(str , method){
//     return method(str);
// }

// console.log(change("HellO" , upperCase));

// IMMediately invoked function expression
// executed only once
// (function(){
//     console.log("This function will never execuate again ");
// })()

// //setTimeout -> Run function "once" after "interval" of time

// // setInterval -> Run fuction repeatedly, starting after the 
// // interval of time, the repeating.....

// // setTimeout

// // setTimeout(func|code , delay , arg1 , arg2 , ..)

// function greeting(){
//     console.log("welcome bro");
// }

// // setTimeout(greeting , 3000);

// // setInterval

// // setInterval(greeting , 1000);
// // test();
// let test = function(){
//     console.log("hello word")
// }
