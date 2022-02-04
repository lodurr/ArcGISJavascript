class cuadrado {
    constructor(l="lado"){
        this.lado = l;
    }
    calcularArea(lado){
        const areaResultado = this.lado * this.lado;
        return areaResultado;
    }
    calcularVolumen(lado){
        const volumenResultado = this.lado * this.lado * this.lado;
        return volumenResultado;
    }
}
const cuadradoPequenyo = new cuadrado(2);
const cuadradoMediano  = new cuadrado(5);
const cuadradoGrande   = new cuadrado(10);

let lado = prompt("Por favor ingrese el lado de su cuadrado");
const calcularCuadrado = new cuadrado(lado);


console.log("El area del cuadrado pequenyo es:" + cuadradoPequenyo.calcularArea() + "\nEl volumen de su cuadrado pequenyo es:" + cuadradoPequenyo.calcularVolumen())
console.log("El area del cuadrado mediano es:" + cuadradoMediano.calcularArea()  + "\nEl volumen de su cuadrado pequenyo es:" + cuadradoMediano.calcularVolumen())
console.log("El area del cuadrado grande es:" + cuadradoGrande.calcularArea() + "\nEl volumen de su cuadrado pequenyo es:" + cuadradoGrande.calcularVolumen())
console.log("El area de su cuadrado es:" + calcularCuadrado.calcularArea() + "\nEl volumen de su cuadrado es: " + calcularCuadrado.calcularVolumen())


