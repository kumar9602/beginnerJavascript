// Date and Time
// Date Object always carry both "date" and "time"


// using date method

// let currentDate = new Date(2023 , 0 , 2);
// console.log(currentDate);
// let date = new Date(0);
// console.log(date)

// let currentDate = new Date().getTime();
// console.log(currentDate);

// Date and Time(Methods)
// let completeDateAndTime = new Date();
// console.log(completeDateAndTime.getFullYear());
// console.log(completeDateAndTime.getMonth());
// console.log(completeDateAndTime.getDay());
// console.log(completeDateAndTime.getDate());

// let hourHand = document.querySelector('.hour');
// let minHand = document.querySelector('.minute');
// let secHand = document.querySelector('.second');


// let ticking = function(){
//     let currentDate = new Date();
//     let getHour = currentDate.getHours();
//     let getMinute = currentDate.getMinutes();
//     let getSecond = currentDate.getSeconds();

//     hourHand.textContent = getHour ;
//     minHand.textContent = getMinute ;
//     secHand.textContent = getSecond ;
// }

// setInterval(ticking , 1000);


// Local storage

// In the previous todo list taks when we refresh the browser we 
// lose our current state of data
// for now our focus is local storage
// Store and retrieve data from local storage
// Is an api provided by browser to store date inside browser

// localStorage.setItem('passion' , 'programming');
// localStorage.setItem('age' , 24);
// console.log(localStorage)

// console.log(localStorage.getItem('passion'));
// we can update value of a key by setTime same way


// localStorage.removeItem('age');
// localStorage.removeItem('passion');

// How to store complext data structures like 
// array of objects
// ultimately in local storage data store in stirng formate
// let vehicles = [
//     {comany : "Honda" , model : "2008"} , 
//     {company : "toyota" ,  model: "2010"}
// ];

// let stringOfVehicles = JSON.stringify(vehicles);
// // console.log(stringOfVehicles);

// localStorage.setItem('vehicles' , stringOfVehicles);
// // console.log(localStorage);

// // Retriving the array
// let storedData= localStorage.getItem("vehicles");
// let objectFormate = JSON.parse(storedData);
// console.log(objectFormate);
// console.log(typeof objectFormate);
// localStorage.removeItem("vehicles");





// Object Oriented Programming
// constructor function and the 'new' operator
// we can not use 'arrow' function as constructor
// call 'constructor' function using 'new' keyword


// let Car = function(color , model){
//     this.color = color ;
//     this.model = model ;
//     // this.login = function(){
//     //     console.log("your loged in");
//     // }
// }
// Car.prototype.startEngine = function(){
//     console.log("your engine has started");
// }
// let instance = new Car("yellow" , 2021);
// // instance.login();
// instance.startEngine();
// console.log(instance.__proto__.isPrototypeOf(instance));
// console.log(Car.prototype.isPrototypeOf(Car));


// class Car {
//     constructor(color , model){
//         this.color = color ;
//         this.model = model ;
//     }
//     startEngine(){
//         console.log("Engine has started");
//     }

//     get _startEnginer(){
//         console.log("Engine has started");
//     }
//     set changeColor(color){
//         console.log(this.color = color);
//     }
//     get description(){
//         return `Color of the Bike is ${this.color} and its model is ${this.model}`
//     }
// }
// Car.prototype.breakMethod = function(){
//     console.log("this is the break method of  car");
// }
// let honda = new Car("Red" , "2021");
// honda.startEngine();
// honda.breakMethod();
// honda._startEnginer ;
// honda.changeColor = "blue";
// console.log(honda.color);
// console.log(honda.description);

// Car.breakMethod = function(){
//     console.log("this is the break method of car");
// }
// Car.breakMethod();
// Important ponits
// Classes are not hoisted
// Classes are also first class citizens(pass as an argument)
// Classes are executed in strict mode


// Setter and Getter method

// class Bike extends Car{
//     constructor(color , model , engineCapacity){
//         super(color , model);
//         this.engineCapacity = engineCapacity ;
//     }
//     bikeMethod(){
//         console.log("Bike Method");
//     }
// }
// Bike.prototype.ownBike() = function(){
//     console.log("This is own Bike class method");
// }
// Bike.prototype.ownBike() = function(){
//     console.log("This is own Bike class method");
// }
// let newBike = new Bike("Black" , 2023 , 432);













// Asynchronous Javascript

// Async Code examples

// Value state description
// 0 unsent client has been created .open() not called yet
// 1 opened open() has been called
// 2 header_receieved
// 3 loading downloading
// 4 done

// HTTP response status codes
// Informational responses (100 , 199);
// Successful responses (200 , 299);
// Redirection responses (300 , 399);
// Client Erro responses(400 , 499);
// Server error responses (500 , 599);
// console.log(1);
// console.log(2);

// setTimeout( ()=>{
//     console.log("Ajex");
// } , 3000);

// console.log(3);
// console.log(4);

// practice json data in response by this link
// https://jsonplaceholder.typicode.com/

// let todos = (resource , callback)=>{
//     // Making HTTP Request(Exmaple)
//     let request = new XMLHttpRequest();
//     // Set up the request
//     // console.log(request , request.readyState);
//     request.addEventListener('readystatechange' , ()=>{
//         // console.log(request , request.readyState);
//         if(request.readyState === 4 && request.status == 200){
//             // console.log(request.responseText);
//             let data = JSON.parse(request.responseText);// regular JS Object
//             callback(undefined , data);
//         }else if(request.readyState == 4){
//             // console.log("Data could not factch");
//             callback("Data could not fatch" , undefined);
//         }
//     });
//     request.open("Get" , resource);

//     // Sending the request

//     request.send();
// }

// Async Code
// Chain of todos function(callback) => callback hell
// todos("data.json" , (error , Data) =>{  // Wil take some time
//     if(error){
//         console.log(error);
//     }else{
//         console.log(Data);
//     }
//     todos("mario.json" , (error , Data) =>{
//         if(error){
//             console.log(error);
//         }else{
//             console.log(Data);
//         }
//         todos("lurie.json" , (error , Data) =>{
//             if(error){
//                 console.log(error);
//             }else{
//                 console.log(Data);
//             }
//         });
//     });
// });



// This is the way to get rid of callback hell



// let getSomething = () =>{
//     return new Promise((resolve , reject) =>{
//         resolve("Some Data") // some data to return
//         // reject("Some Error") 
//     }) ;
// }

// getSomething().then((data) =>{
//     console.log(data);
// }).catch((error) =>{
//     console.log(error);
// })

// let todos = (resource , callback) =>{
//     return new Promise((resolve , reject) =>{
//         let request = new XMLHttpRequest();
//         request.addEventListener('readystatechange' , ()=>{
//             if(request.readyState === 4 && request.status == 200){
//                 let data = JSON.parse(request.responseText);// regular JS Object
//                 resolve(data)
//             }else if(request.readyState == 4){
//                 reject("erroe in faetching the error");
//             }
//         });
//         request.open("Get" , resource);

//         request.send();
//     })
// }

// todos("data.json").then((data)=>{
//     console.log("Promise 1 resolved" , data);
//     return todos("lurie.json");
// }).then((data)=>{
//     console.log("Promise 2 Resolved" , data);
//     return todos("mario.json");
// }).then((data)=>{
//     console.log("Promise 3 Resolved" , data);
// }).catch((error) =>{
//     console.log(error);
// })




// fecth API

// fetch("data.json").then((response) =>{
//     // console.log("Promise resolved" , response);
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((error) =>{
//     console.log(error);
// })






// async and await

// let getTodos = async() =>{
//     try{
//         let responce = await fetch("data.json");
//         let data = await responce.json();

//         let response2 = await fetch("mario.json");
//         let marioData = await response2.json();

//         console.log(data , marioData);
//     }
//     catch(error){
//         console.log(error.message);
//     }
// }
// getTodos();












// Destructuring the Arrays


// simple example
// without
// let items = [2 , 3 , 4 , 5];
// // let x = items[0];
// // let y = items[1];

// let [x , y , z , p] = items ;

// console.log(x , y , z , p);

// let [first , second] = hotel.categories ;

// console.log(first , second);

// let [a , , c] = hotel.categories ;
// console.log(a , c);

// // Swith the category
// [a , c] = [c , a];
// console.log(a , c);


// Destructuring of nested arrays
// let nums = [2 , 3 , [5 , 6]];
// let [a , b , [c , d]] = nums ;
// let [, , e] = nums ;
// console.log(a , b);
// console.log(c , d);
// console.log(e);


// let hotel = {
//     name : "hotell",
//     location : "street no xyz delhi" ,
//     categories : ["chinease" , "italian" , "english"]
// };

// let {name , categories} = hotel ;
// console.log(name , categories);

// Set customize name to Object property
// let {name : hotelName, categories : Cate} = hotel ;
// console.log(hotelName , Cate);

// can give default values is well



// let {name , openingHours} = hotel ;

// console.log(name , openingHours);

// let {monday} = openingHours ;
// console.log(monday);

// let {openingHours : {sunday: { open  , close}}}= hotel ;

// console.log(open , close);

// let nums = [1 , 2 , 3 , 5];
// let nums1 = [3 , 2];
// console.log(nums);
// console.log(...nums);

// usecase
// let first  = [9 , 10].concat(nums);
// let newArray = [9 , 10 , ...nums];
// console.log(newArray);
// console.log(first);

// Join 2 Array
// let joinedArray = [...nums , ...nums1];
// console.log(joinedArray);

// let passion = "Programming";
// console.log(...passion);



// Rest(opposite of spread)

// let nums = [1 , 2 , 3 , 4 , 5];
// let [a , b , ...rest] = nums ;
// console.log(rest);





// Short circuiting(&& , ||)

// let result = 5000 && false;
// console.log(result);

// let result = false || 5000 || "string";
// console.log(result);

// For nullish coalesing operator(??) only "null" and "undefined" are 
// false values 0 , is true

// let result = 0 ?? 10 ;
// console.log(result);

// we can check if value exists in dot value by replacing . with ?.
// this is called option chaining
// let openingHours =  {
//     sunday : {open : "10:00AM" , close : "12:00PM"},
//     monday : {open : "08:00AM" , cloase : "11:00PM"}
// }
// let hotel = {
//     name : "hotell",
//     location : "street no xyz delhi" ,
//     categories : ["chinease" , "italian" , "english"],
//     mainMenu : ["FoodA" , "FoodB" , "FoodC"],
//     openingHours,
// };

// Keys(prperties)
// let properties = Object.keys(openingHours);
// console.log(properties);

// //values
// let values = Object.values(openingHours);
// console.log(values);

// //entries
// let entries = Object.entries(openingHours);
// console.log(entries);



// sets(unique values)

// let ItemSet = new Set([11 , 4 , 2 , 4 , 2 , 4 , 2 , 5]);
// console.log(ItemSet);
// add delete for adding and deleting





// hashmap

// let first = new Map();
// first.set(1 , 2);
// first.set(2 , 4);
// console.log(first.get(2));











// Moder Javascript Modules and Tooling
// "Exporting and Importing" ES6 modules
// as keyword works in both import and export

// import {order ,laptopPrice , quantity} from  './Product.js';

// order("jack" , "laptop")
// console.log(laptopPrice , quantity);



// Top level await ES2022

// before ES2022 we could use await only inside async fucntion

// But in ES2022 we are introduced with top leve "await"

// It means now we can use "await" outside the async function


// let getTodos = async() =>{
//     let responce = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let data = await responce.json();
//     console.log(data);
// }
// getTodos();
// console.log("first");
//top level await block the execuation of next code part



// Module pattern

// IIFE

// let resultIIFE = (function(){
//     let orders = [];
//     let addToCart = function(product , quantity){
//         console.log(`${product} ordered ${quantity}`);
//         orders.push({product , quantity});
//     }
//     return {
//         orders,
//         addToCart 
//     }
// })();

// console.log(resultIIFE.addToCart("burger" , 4));


// Modern Javascript Modules, and tooling
// Introduction to NPM (Node package manager)
