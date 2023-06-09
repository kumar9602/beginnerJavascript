//JavsScript DOM (Document Object Model)
// Created by browser as the html load into the browser
// Browser create object of html called 'documet object'.

// In Document object there is model of complete html in
// Tree like structure

// let resultedElement = document.querySelectorAll('p');
// console.log(resultedElement);

// let resultedElement = document.querySelector('.coderdost');
// console.log(resultedElement);

// let resultedElement = document.querySelector('#coders');
// console.log(resultedElement);


// innerText
//ignore spaces
// let content = document.querySelector('p');
// // content.innerText = "<P>Great Coder</p>"
// content.innerHTML += "<P>Great Coder</p>"

// let youtube = document.querySelector('a');
// youtube.setAttribute('href' , "http://gmail.com");
// console.log(youtube.getAttribute('href'));


// let heading = document.querySelector('h1');
// heading.style.color = 'red';
// heading.style.backgroundColor = "yellow";
// // add the new class
// heading.classList.add('newClass');
// // Remove Class
// heading.classList.remove('newClass');
// // Replace Class
// heading.classList.replace('main' , 'newClass');







// Parent, Children and Sibling Element

// let parentElement = document.querySelector('.content');
// console.log(parentElement);
// console.log(parentElement.children)


// we can not run forEach Method on HTMLCollection so 
// First convert it into array

// Array.from()

// console.log(Array.from(parentElement.children));

// Array.from(parentElement.children).forEach(function(element){
//     element.classList.add("coders");
// })

// let childrenElement = document.querySelector('h2');
// console.log(childrenElement);
// console.log(childrenElement.parentElement);

// Find Next/Previous Sibling of child
// let childrenElement = document.querySelector('h2');
// console.log(childrenElement.previousElementSibling);













// // Create and Remove the element

// // const ul = document.querySelector('ul');

// // ul.addEventListener('click' , ()=>{
// //     console.log('Inside Ul');
// // })

// // Event Basics (click Event)

// let eventElement = document.querySelector('.clickMe');
// // console.log(eventElement);

// eventElement.addEventListener('click' , function(){
//     let li = document.createElement('li');
//     li.textContent = "Something new Added";
//     ul.append(li); 
//     // ul.prepend(li);
// })




// // Removing element 


// // let elements = document.querySelectorAll('li');
// // console.log(elements);

// // elements.forEach(function(element){
// //     element.addEventListener('click' , function(e){
// //         // console.log("Item Clicked", e.target);
// //         // e.target.style.textDecoration = 'line-through';
// //         // e.target.remove();
// //         console.log("Inside Li");
// //     })
// // });

// const ul = document.querySelector('ul');

// ul.addEventListener("click" , (e)=>{
//     // console.log(e.target);
//     // console.log(e);
//     if(e.target.nodeName == "LI"){
//         e.target.remove()
//     }   
// });




// // More Events

// // Copy Events

// // let copyRightElement = document.querySelector('.copy');
// // copyRightElement.addEventListener('copy' , ()=>{
// //     console.log("This is copy rightet content, get off");
// // })

// // // Mouse Move Element

// // let box = document.querySelector('.box');

// // box.addEventListener('mousemove' , (e)=>{
// //     console.log(e.offsetX , e.offsety);
// // })








// // Regular Expression (Regex)

// // It is a pattern of Characters used to do patter matching
// // Or we ca say for "Data validation"

// // Implementation of password validation
// // legth at least = 8
// // At least contain one upper case latter
// // AT least contain one lower case latter
// // At least contain one digit 0 to 9

// // Forms Events {Submit Form}

// let form = document.querySelector('.sign-up-form');
// // console.log(form);
// let email = document.querySelector('#email');
// let password = document.querySelector('#password');
// let passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
// form.addEventListener('submit' , (e)=>{
//     e.preventDefault();
//     // console.log(email.value , password.value);
//     // console.log(form.userEmail.value , form.userPassword.value);
//     let passwordValue = password.value ;
//     let result = passwordPattern.test(passwordValue);
//     if(result == true){
//         console.log(`Your password ${passwordValue} is strong`);
//     }else{
//         console.log("your password is weak please change it")
//     }

// });

// password.addEventListener('keyup' , (e) =>{
//     if(passwordPattern.test(e.target.value)){
//         // console.log("Passed");
//         password.setAttribute('class' , 'success');
//     }else{
//         // console.log("Failed");
//         password.setAttribute('class' , 'error');
//     }
// });















// // Working with Arrays(Simple Methods)

// let letters = ['a' , 'b' , 'c' , 'd' , 'e']

// // reverse array
// let k = letters.reverse();
// // reverse is mutating


// // concat
// let nums = [1 , 2 , 3 , 4]
// let concated = nums.concat(letters);
// // console.log(concated);
// // not mutating


// //join method
// // non mutating
// let join = letters.join(' ');
// console.log(join);


// Slice Method
// basically something like substr but little different
// here a , b are indexes not starting point and length like c++
// let num = [1 , 1 , 2 , 4 , 1 ,1 ];
// let extra = num.slice(0 , 4);
// console.log(extra);


// Splice Method
// used to add new elements into the array
// Array.splice(index , deleteValue , valueToBeAdded)
// Return delted items in the form of array
// let num = [1 , 2 , 3 , 4  , 3 , 2 ]
// let update = num.splice(1 , 3 , 5 , 6 , 5);
// console.log(update);
// console.log(num);

// at method
// let nums = [1 , 2 , 3 , 4];
// console.log(nums.at(1));
// works on negative indexes is well


// Map Method
// Create new array from original array by applying
// transformation function

// let salaries = [3000 , 4300 , 4332 , 432432 , 43242];
// let newSalaries = salaries.map(salary =>{
//     let increament = salary/2 ;
//     return salary + increament ;
// });
// console.log(newSalaries);

// Fileter Method (used to perform filtration)

// let gifts = ["Watch" , "Ring" , "Chocolates" , "Teddy-Bear"];
// let filterArray = gifts.filter(gift =>{
//     if(gift == "Watch" || gift == "Ring")
//         return gift ;
// })
// console.log(filterArray);


// Reduce Method
// Run reduce function for each array element
// Array.reduce(function(total,  currentValue) , initialValue)
// It returs a single value

// let nums = [1 , 4 , 3 , 5 , 2 ,2];
// let sum = nums.reduce(function(total , currentValue){
//     return total + currentValue
// } , 0);

// console.log(sum);



// "find" method
// It return the "first" element we are looking for...

// let students = [ {id : 4 , name : "alex"} , {id : 2 , name : "john"}
//                ,{id : 1 , name : "kumar"}];
// let result  = students.find(student =>{
//     return student.id == 1;
// });
// console.log(result);

// "findIndex" method
// it return the "first" index of the element that satiesfies the condition

// let results = students.findIndex(student=>{
//     return student.id == 1;
// });
// console.log(students[results]);


// 'some' and 'every' method
// some method return true if "any" array element pass the test 
// every method return true if "all" element pass the text

// let score = [45 , 32 , 12 , 54 , 65 , 32 , 45];

// let first = score.some(element =>{
//     return element > 50 ;
// });
// let second = score.every(element =>{
//     return element > 50;
// })
// console.log(first , second)

// "Flat" method
// flats the nested array

// let arr = [1 , 2 , 3 , [4 , 5 , 6 , [1 , 2 , 3]]];;
// let result = arr.flat(2);
// console.log(result);
// this method is not mutating


// "flatMap" method
// it is conbination of the "map()" method 
// followed by the "flat()" method of depth "1"

// let cart = [
//     {
//         name : "mobile phone",
//         qty : 2 ,
//         price : 500
//     }
//     ,
//     {
//         name : "tablet",
//         qty : 1,
//         price : 1000
//     }
// ]
// let newCart = cart.flatMap(item =>{
//     if(item.name == "mobile phone"){
//         return [item , {
//             name : "screen protector",
//             qty : 1,
//             price : 0
//         }] ;
//     }else{
//         return [item];
//     }
// }) ;
// console.log(newCart1);

// let letters = [1 , 4 , 32 , 12 , 43 , 2 , 111 ];
// letters.sort();
// console.log(letters);
// // by default sort function treats array as string array we have to change it

// letters.sort((a , b) =>{
//     return a - b ;
// });

// console.log(letters);
// we can sort decending by just changing the condition


// Chain of methods
// let num = [1 , 2, 3 , 4 , 5 , 6];
// let result = num.slice(0 , 3).splice(2 , 1 , 7);

// console.log(result);