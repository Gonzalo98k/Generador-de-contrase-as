
let childContainer = document.querySelector(".childContainer")
let inputRange = document.querySelector(".inputRange")
let resetButton = document.querySelector(".reset")
let inputCheckbox = document.querySelectorAll(".inputCheckbox")
let contador = document.querySelector(".contador")

childContainer.textContent = "Genere una contraseña"

const verificarValores = ()=>{
    inputRange.addEventListener("change", ()=>{
        contador.textContent = Math.floor(inputRange.value/10)
    })
}

verificarValores()


let arrayDeIds = [];

const extraerValores = ()=>{
    resetButton.addEventListener("click", ()=>{
        inputCheckbox.forEach(e => {
            if (e.checked == true) {
                arrayDeIds.push(e.id)
            }
            
        });
    })
    

}

extraerValores()

setTimeout(() => {
    console.log(arrayDeIds);
}, 6000);