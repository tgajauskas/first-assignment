const vardas = document.getElementById("vardas")
const container = document.querySelector(".container")

vardas.style.fontSize = "100%"
container.style.height = "100vh"
container.style.display = "flex"

console.log(vardas)
console.log(container)

function funkcija(){
    vardas.style.color = "red"
    vardas.style.fontSize = "200%"
    container.style.justifyContent = "center"
    container.style.alignItems = "center"
}