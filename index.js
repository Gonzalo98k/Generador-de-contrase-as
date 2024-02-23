
let childContainer = document.querySelector(".childContainer")
let inputRange = document.querySelector(".inputRange")
let resetButton = document.querySelector(".reset")
let inputCheckbox = document.querySelectorAll(".inputCheckbox")
let contador = document.querySelector(".contador")

childContainer.textContent = "Genere una contraseña"

let arrayDeArrays =[
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "LL", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "ll", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

    [1,2,3,4,5,6,7,8,9],

    ["@", "*", ".", ",", "#", "!", "$", "%", "&", "/", "(", ")", "=", "?", "¿", "¡", "+",]
]



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