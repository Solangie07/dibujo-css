console.log("hola");

const varTitulo = document.getElementById("titulo");
const varTexto = document.getElementById("texto");

const listaTextos = ["perros", "gatos", "pajaros", "tigre", "jaguar"];

let estadoInicial = true; 
let indice = 0; 

varTitulo.addEventListener("click", () => {
    if(estadoInicial === true) { 
        varTitulo.innerText = "¡Buenos días!"; 
    varTitulo.style.backgroundColor = "white"; 
    varTitulo.style.color = "blue"; 
    } else {
      varTitulo.innerText = "hola"; 
    varTitulo.style.color = "red";
    varTitulo.style.backgroundColor = "transparent"; 
    }
    estadoInicial = !estadoInicial; 
})

varTexto.addEventListener("click", () => {
varTexto.innerText = listaTextos[indice];
if(indice < listaTextos.length - 1){
  indice = indice + 1;  
} else {
    // indice = 0; // si quiero que vuelva a empezar 
    varTexto.innerText = "FIN.";
}
})