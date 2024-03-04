/*1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.*/

//alert("un mensaje");

/*2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write). */

//document.write("Hello World");

/*3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5. */
/*document.write("<br>");

document.write(3+5);*/

/*4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
Ejemplo:

input: Coder
Output: Hola Coder
*/

/*let nombre = prompt("Por favor, ingresa tu nombre:");
document.write("<br>");

document.write("Hola "+nombre);*/

/*5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
*/

/*document.write("<br>");
let num1 = parseInt(prompt("Por favor, ingresa 1er numero:"));
let num2 = parseInt(prompt("Por favor, ingresa 2do numero:"));

document.write("Suma:"+num1+" + "+num2+" = "+(num1+num2));*/

/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo:

input: 15 , 3

Output: El 15 es el número más grande
*/

/*document.write("<br>");
let numero1 = parseInt(prompt("Por favor, ingresa 1er numero:"));
let numero2 = parseInt(prompt("Por favor, ingresa 2do numero:"));

if(numero1>numero2){
    document.write("El mayor es: "+numero1);
}else if(numero2>numero1){
    document.write("El mayor es: "+numero2);
}
else{
    document.write("Son iguales");
}*/

/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo:

input: 15 , 3, 9


Output: El 15 es el número más grande
*/

/*document.write("<br>");
let numero1 = parseInt(prompt("Por favor, ingresa 1er numero:"));
let numero2 = parseInt(prompt("Por favor, ingresa 2do numero:"));
let numero3 = parseInt(prompt("Por favor, ingresa 3er numero:"));

if(numero1>numero2 && numero1>numero3){
    document.write("Mayor es "+numero1);
}else if(numero2>numero1 && numero2>numero3){
    document.write("Mayor es "+numero2);
}else if(numero3>numero1 && numero3>numero2){
    document.write("Mayor es "+numero3);
}else{
    document.write("Son iguales.");
}*/

/*8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo:

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
*/

/*document.write("<br>");
let numero = parseInt(prompt("Por favor, ingresa un numero:"));

if(numero%2===0){
    document.write(numero+" es divisible por 2.");
}
else{
    document.write(numero+" no es divisible por 2.");
}*/


/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:

input: Hola mundo
Output: oauo
*/

/*let frase = prompt("Ingresa una frase:").toLowerCase();

let vocales = "";

for (let i = 0; i < frase.length; i++) {
    let caracter = frase.charAt(i);
    if ("aeiou".indexOf(caracter) !== -1) {
        vocales += caracter;
    }
}

document.write("Las vocales en la frase son: " + vocales);*/

/*10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo:

input: 20


Output: El 20 es divisible por 2.
*/
/*document.write("<br>");
let numero = parseInt(prompt("Por favor, ingresa un numero:"));

if(numero%2==0){
    document.write(numero+" es divisible por 2");
}else if(numero%3==0){
    document.write(numero+" es divisible por 3");
}else if(numero%5==0){
    document.write(numero+" es divisible por 5");
}else if(numero%7==0){
    document.write(numero+" es divisible por 7");
}else{
    document.write(numero+" no es divisible por 2, 3, 5, 7");
}*/

/*11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo:

input: 20
input: 210

Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.
*/

document.write("<br>");
let numero = parseInt(prompt("Por favor, ingresa un numero:"));
document.write("Divisisores de "+numero+": ");
for(let i=2;i<=numero;i++){
    if(numero%i==0){
        document.write(i+" ");
    }
}
