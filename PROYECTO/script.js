/* Ejercicio N°1 */
function mensajes() {
    document.write("<h2>Ejercicio N°1</h2>")
    document.write("<b><u>Nombre:</u></b> Iván Palópoli<br>")
    document.write("<b><u>Comisión:</u></b> Martes TT<br>")
    document.write("<u><b>Hobbies:</u></b> Hacer deportes, pasear")
}

mensajes()

/* Ejercicio N°2 */
function frase() {
    let phrase = prompt("Ingrese una frase")
    console.log(phrase)
}

frase()

/*Ejercicio N°3 */

function exclamacion() {
    let nombre = prompt("Ingrese un nombre")
    console.log("Hola " + nombre + "!")
}

exclamacion()

/* Ejercicio N°4 */

function NomApe() {
    let nombre = prompt("Ingrese Nombre")
    let apellido = prompt("ingrese Apeliido")
    console.log(nombre + apellido)
}
NomApe()

/*Ejercicio N°5*/

function Nacimiento() {
    let anioNac = prompt("Ingrese año de nacimiento")
        /*let mesNac = prompt("Ingrese numero de mes de nacimiento del 1 al 12")
        let diaNac = prompt("Ingrese dia de nacimiento")*/
        /* let fechaActual = new date()
         let anioActual = fechaActual.getFullYear()
         let mesActual = fechaActual.getMonth()
         let diaActual = fechaActual.getDate()*/
    let edad
        /*if (mesNac < mesActual) {
            edad = (anioActual - anioNac) - 1
        }*/
    edad = 2024 - anioNac
    console.log(edad)
}
Nacimiento()

/*Ejecicio N°6*/
/*ingresar peso y altua para calcula IMC */
function IMC() {
    let peso = prompt("Ingrese peso")
    let altura = prompt("Ingese altura")
    let IMC = peso / altura ^ 2
    console.log("Su IMC es: " + IMC)
}

IMC()

/*Ejercicio N°7*/
function Ventanas() {
    let cantidadDeVentanas = prompt("Ingrese la cantidad de ventanas de su casa")
    console.log("La cantidad de ventanas que se ingresó fue:" + cantidadDeVentanas)
}
Ventanas()
    /*Ejercicio N°8 */
function Humano() {
    let soyHumano = true
    console.log(soyHumano)
}

Humano()

/*Ejercicio N°9 */
function Pizza(miGustoDePizza) {
    console.log(miGustoDePizza)
}

Pizza("Jamón y Morrones")


/*Ejercicio N°10 */
function Valores() {
    var valor = false
    console.log(valor)
    var valor = 'Hola'
    console.log(valor)
    var valor = 0
    console.log(valor)
    var valor = 'Minions'
    console.log(valor)
}

Valores()