const enlaces = document.getElementsByTagName("a")
const tercerParrafo = document.getElementById("third-paragraph").getElementsByTagName("a")
const newParrafo = document.createElement("p")

newParrafo.innerHTML = ("---------------------------" +
    "<br> El numero de enlaces de la pagina es: " + enlaces.length + 
    "<br> El penultimo enlace es: <a href='" + enlaces[(enlaces.length - 2)] + "'>" + enlaces[(enlaces.length - 2)] + "</a>"+
    "<br> El tercer parrafo tiene " + tercerParrafo.length + " enlaces")
document.body.append(newParrafo)