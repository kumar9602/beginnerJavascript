// let car = {
//     company : "honda",
//     color : "black",
//     menu : "2022"
// }
// console.log(car);
// console.log(car["company"]);
// console.log(car.color)

// let propertyName = "color";
// console.log(car[propertyName]);

// car.color = "brown";
// console.log(car.color);

// let obj = {
//     prop1 : "value1",
//     prop2 : "value2"
// }
// delete obj.prop1 ;
// console.log(obj.prop1)


// Method >-- It is nothing but object property(key) holding


// let person = {
//     ageCalculate : function(birthyear = 2008){
//         let age = 2023 - birthyear ;
//         return age ;
//     }
// }
// console.log(`current age is ${person.ageCalculate()}`)

// let person = {
//     fisrtName : "Harry",
//     lastName : "Brook",
//     cit : "Delhi",
//     birthyear : 1998,
//     Education : "software developer",
//     getSummary : function(){
//         return `${this.fisrtName} ${this.lastName}`
//     }
// }

// console.log(person.getSummary())

// step 1 check in which method we use "this" keyword
// step 2 owner of that method(who is calling those method)

// let dishes = ["first" , "second" , "third" , "fourth"] ;
// dishes.forEach(function(element){
//     console.log(element);
// });

// let blackList = [{userName : "John" , reason : "abusive content"} , {userName : "Paul" , reason : "copyRight"}];
// console.log(blackList);
// // use . product to access element 

// for(let i = 0 ; i < blackList.length ; i++){
//     console.log(blackList[i].userName)
// }

// let number = 7.6 ;
// console.log(Math.round(number));
// console.log(Math.floor(number));
// console.log(Math.ceil(number));
// console.log(Math.trunc(number));
// let random = Math.random();
// console.log(Math.round(random * 100));


// let mainPlane = {
//     airline  : "Fly India",
//     iatecode : "FI",
//     bookings : [],
//     book : function(flightNum , name){
//         console.log(`${name} booked flight on ${this.airline}`);
//     }
// }
// mainPlane.book(553 , "Carlos");

// let childPlan = {
//     airline  : "Child Airline",
//     iatecode : "CA",
//     bookings : [],
// }
// let book = mainPlane.book ;
// book.call(childPlan , 5674 , "dinesh");
// book.apply(childPlan , [4324 , "dinesh"]);


// function greet(){
//     console.log(`Welcome ${this.firstName} ${this.lastName} here`);
// }

// let use = {
//     firstName : "Dinesh",
//     lastName  : "Kumar"
// }

// let greets = greet.bind(use);
// greets();

// "object/arrys" how "refrence" are passed to variable

// let arr = [1 , 2 , 3 , 4 , 5] ;
// let getRef = arr ;
// getRef[5] = 3 ;
// console.log(arr);
// console.log(getRef);

// let arr = [1 , 2 ,3 , 4 , 5];
// let getRef = [...arr];
// getRef.push(6);
// console.log(arr);
// console.log(getRef);
// for(let key in arr){
//     console.log(arr[key])
// }

// let car = {
//     company : "honda",
//     color : "black",
//     menu : "2022"
// }
// let bike = {
//     ...car
// };
// bike.color = "yellow";
// console.log(car.color , bike.color);
// for(let key in car){
//     console.log(car[key]);
// }


