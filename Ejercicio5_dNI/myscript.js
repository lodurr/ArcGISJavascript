var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let dni = prompt("Por favor ingrese su DNI sin la letra");
let letraIntroducida = prompt("Por favor ingrese su letra del DNI");

if (dni > 99999999 || dni < 0){
    alert("El numero proporcionado no es valido");
}
else{
    letraAsignada=letras [dni % 23];
    if (letraAsignada!=letraIntroducida){
        alert("La letra indicada no es correcta")
    }
    else{
        alert("Numero DNI y letra son correctos")
    }

}
