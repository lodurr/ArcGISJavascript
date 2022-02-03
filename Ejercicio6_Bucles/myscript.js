const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2]
sumatoria = 0;

for (i = 0; i<notas.length; i++){
    console.log(sumatoria += notas[i])
}
sumatoria = 0;
for (var nota of notas ){
    console.log(sumatoria += nota)
}
