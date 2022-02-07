//Funcion para el boton
document.getElementById("myBtn").addEventListener("click", guardar);

function guardar() {
    alert("Desea Guardar?")
}
//Funcion para el texto Nombre
document.getElementById("textNombre").addEventListener("mouseover", nombreMouseOver);
function nombreMouseOver() {
    document.getElementById("textNombre").style.backgroundColor = "yellow";
}

document.getElementById("textNombre").addEventListener("mouseleave", nombreMouseLeave);

function nombreMouseLeave() {
    document.getElementById("textNombre").style.backgroundColor = "red";
}

//Funcion para el texto Letra vocal o consonante
document.getElementById("textLetra").addEventListener("keyup", lteckLetter);

var lt;
function lteckLetter() {
    lt = document.getElementById("textLetra").value;
        if ((lt >= 'a' && lt <= 'z') || (lt >= 'A' && lt <= 'Z')) {
            if (lt == 'a' || lt == 'e' || lt == 'i' || lt == 'o' || lt == 'u')
                document.getElementById("textLetra").style.backgroundColor = "lightBlue";
            else if (lt == 'A' || lt == 'E' || lt == 'I' || lt == 'O' || lt == 'U')
                document.getElementById("textLetra").style.backgroundColor = "aqua";
            else
                document.getElementById("textLetra").style.backgroundColor = "Orchid";
        }
        else
            document.getElementById("textLetra").style.backgroundColor = "red";
}