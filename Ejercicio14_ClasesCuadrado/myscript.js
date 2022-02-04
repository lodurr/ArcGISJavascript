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
    calcularPerimetro(lado){
        const volumenResultado = this.lado * 4;
        return volumenResultado;
    }
}
const cuadradoPequenyo = new cuadrado(2);
const cuadradoMediano  = new cuadrado(5);
const cuadradoGrande   = new cuadrado(10);

let lado = prompt("Por favor ingrese el lado de su cuadrado");
const calcularCuadrado = new cuadrado(lado);


console.log("El perimetro del cuadrado pequenyo es:" + cuadradoPequenyo.calcularPerimetro() + "\nEl area del cuadrado pequenyo es:" + cuadradoPequenyo.calcularArea() + "\nEl volumen de su cuadrado pequenyo es:" + cuadradoPequenyo.calcularVolumen())
console.log("El perimetro del cuadrado mediano es:" + cuadradoMediano.calcularPerimetro() + "\nEl area del cuadrado mediano es:" + cuadradoMediano.calcularArea()  + "\nEl volumen de su cuadrado pequenyo es:" + cuadradoMediano.calcularVolumen())
console.log("El perimetro del cuadrado grande es:" + cuadradoGrande.calcularPerimetro() + "\nEl area del cuadrado grande es:" + cuadradoGrande.calcularArea() + "\nEl volumen de su cuadrado pequenyo es:" + cuadradoGrande.calcularVolumen())
console.log("El perimetro del cuadrado es:" + calcularCuadrado.calcularPerimetro() + "\nEl area de su cuadrado es:" + calcularCuadrado.calcularArea() + "\nEl volumen de su cuadrado es: " + calcularCuadrado.calcularVolumen())


