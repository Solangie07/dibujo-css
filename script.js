console.log("hola");

const varTitulo = document.getElementById("titulo");

varTitulo.addEventListener("click", () => {
    varTitulo.innerText = "¡Buenos días!"; 
    varTitulo.style.backgroundColor = "blue"; 
    varTitulo.style.color = "white"; 
})