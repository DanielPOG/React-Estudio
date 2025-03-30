/*
Functions
- Funciones  
function hello(a=0,b=0) {
    return a+b
}
console.log(hello())
*/
/*

//Objetos
const user={
    name:"ryan", //key:value
    age:23,
    address:{
        city:"Lima",
        country:"Peru",
        street:"Av. Lima",
    },
    friends:["Juan","Pedro","Maria"],
    Active:true,
    sendMail: function(){
        return "Email sent"
    }
}
console.log(user) //{name: "ryan", age: 23, address: {…}, friends: Array(3), Active: true, …}
console.log(user.name) //ryan
 */

// const name="laptop"
// const price= 1000
// const newProduct={
//     name,
//     price, 
// }
// console.log(newProduct) 


//Manipular el DOM
/*
const title = document.createElement("h1")
title.innerText="Hello World" 
const button = document.createElement("button")
button.innerText="Click me"
button.addEventListener("click" , function(){
    title.innerText= "Texto actualizado con JS"
    alert("Se realizo un click")
})
document.body.append(title)
document.body.append(button)
*/

//Objetos como parametros
/*
const user={
    name:"pepe",
    age:23,
}

function printInfo(user){
    const   {name,age} = user //destructuracion de objetos
    return '<h1>Hola '+ name + ' </h1>' 
}
console.log(printInfo(user)) // <h1>Hola pepe</h1>
document.body.innerHTML= printInfo(user) // <h1>Hola pepe</h1>
*/
//Funciones anonimas
/* 
const button = document.createElement("button")
button.innerText="Click me"
button.addEventListener("click" , function(){
    alert("Se realizo un click")
})
document.body.append(button)
*/
//Funciones flecha
/* 
const add = (a)=> {
    return a+10
}
*/
// inline arrorw function
/*
const add2 = a => a+10 // no se necesita el return
const objeto = () => ({ name: "pepe" });
console.log(objeto()); // { name: "pepe" }
const objeto2 = () => ({ age:20})
console.log(objeto2())
*/
//Return en funciones
const isAutoriazado=true
const button = document.createElement("button")
button.innerText="Click me"
button.addEventListener("click", () =>{
    if(isAutoriazado){
        alert("Esta autorizado")
    }else{  
        alert("No esta autorizado")
    }
})
document.body.append(button)