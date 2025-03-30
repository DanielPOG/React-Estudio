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
/* 
const isAutoriazado=true
const button = document.createElement("button")
button.innerText="Click me"
button.addEventListener("click", () =>{
    
    if(isAutoriazado){
        return alert("Esta autorizado")
    }  
    alert("No esta autorizado")
    
})
document.body.append(button)
*/
//Strings literales /interpolacion
/*
const backgroundColor="red"
const color = "white"

const button = document.createElement("button")
button.innerText="Click me"
button.style.backgroundColor=` ${backgroundColor} `
button.style.color=`${color}`
document.body.append(button)
const h1 = document.createElement("h1")
h1.innerText=`Esto es una interpolacion ${backgroundColor} ${color}`
document.body.append(h1)
*/
//arrray methods
const names = ["pepe","maria","juan","luis"]
// for (let name = 0; name<names.length; name++){
//     const element = names[name]
//     console.log(element)
// }

// forEach
//El foreach es un metodo de los arrays que permite recorrer cada elemento del array y ejecutar una funcion por cada uno de ellos
// names.forEach(name => {
//     console.log(name)
// });
//map crea un nuevo array con los resultados de la funcion que se le pase como argumento
// const newnames= names.map(name =>{
//     return name
// })
// console.log(newnames)//No modifica el array original, crea un nuevo array con los resultados de la funcion
//find para encontrar un elemento en el array que cumpla con una condicion
// const newNames= names.find(name => name === "pepe")
// console.log(newNames)//pepe
//filer para filtrar los elementos de un array que cumplan con una condicion
// const newNames= names.filter(name => name === "pepe" || name ==="luis")//no funciona con && si no se cumple la condicion no devuelve nada
// console.log(newNames)//devuelve un nuevo array con los elementos que cumplan con la condicion
//concat para concatenar dos arrays, no modifica el array original
const newNames= ["paco", "santiago"]
// console.log(newNames.concat(names))//concatena dos arrays, no modifica el array original
//spread operator para concatenar dos arrays, modifica el array original
// const newArray = [...names,...newNames]//concatena dos arrays, modifica el array original

// const user={
//     name:"daniel",
//     age:20
// }
// const addres={
//     country:"Peru",
//     city:"Lima",
// }
// const object={
//     ...user,
//     ...addres,
// }
// console.log(object)
//EcmaScript Modules
// import addModule from "./add.js"
// const { add, multiply } = addModule;
// console.log(addModule.add(2,3));
//optional chaining
// const person={
//     name:"ryan",
//     addres:{
//         city:"Lima"
//     },
//     location:{

//     }
// }
// console.log(person.location?.city ) //Estp es el operador de encadenamiento opcional, si la propiedad no existe no lanza un error, devuelve undefined
//async await
// const ul = document.createElement("ul")


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then (function (response){
//         //response es un objeto que contiene la respuesta de la peticion
//         return response.json()
//     }).then(function (datos){
//         console.log(datos)
//         datos.forEach(dato => {
//             const li = document.createElement("li")
//             li.innerText = dato.name
//             ul.append(li)
//         });
//         document.body.append(ul)
//     })
//     .catch(function (){
//         console.log("Error al cargar")
//     })

async function fetchData() {
    let data = await fetch("https://jsonplaceholder.typicode.com/users");
    let mostrar = await data.json()
    mostrar.forEach(element => {
        const h1 = document.createElement("h1")
        h1.innerText = element.name
        document.body.append(h1)
    });
    return console.log(mostrar)  ;
}
fetchData()
