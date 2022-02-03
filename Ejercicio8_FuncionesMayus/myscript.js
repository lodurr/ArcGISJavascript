let frase = prompt("Por favor ingrese una frase");

function checkPhrase(frase){
    if (frase.length===0){
        alert ("No ha escrito nada")
    }
    else if (frase===frase.toUpperCase()){
        alert ("La frase tiene Mayusculas")
    }
    else if (frase===frase.toLowerCase()){
        alert ("La frase tiene minusculas")
    }
    else
        alert ("La frase tiene mayusculas y minusculas")
}

checkPhrase(frase)







