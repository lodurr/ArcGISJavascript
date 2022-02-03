let numero = prompt("Por favor ingrese un numero");

function checkNumber (numero){
    if (numero%2===0){
        alert("El numero " +numero + " es par")
    }
    else
        alert("El numero " +numero + " es impar")
}

checkNumber(numero)
