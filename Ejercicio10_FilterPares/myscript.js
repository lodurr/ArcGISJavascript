const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];

const pares = number.filter(par => par%2==0)
const impares = number.filter(impar => impar%2==1)
alert("Los numeros pares son: " + pares+  " \nLos numeros impares son: " + impares)
