
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

        comparacionDeValores()
    })


}

 extraerValores()

 const comparacionDeValores = ()=>{
    if (arrayDeIds.length == 1) {
        let value = Math.floor(inputRange.value/10)

        for (let i = 0; i < value; i++) {
            let random = Math.floor(Math.random()*value)

            console.log(arrayDeArrays[arrayDeIds[0]][random]);
        }

    }else if(arrayDeIds.length ==  2){
        let newArr = arrayDeArrays[arrayDeIds[0]].concat(arrayDeArrays[arrayDeIds[1]])

        console.log(newArr);

        let value = newArr.length
        let value1 = Math.floor(inputRange.value/10)

        for (let i = 0; i < value1; i++) {
            let random = Math.floor(Math.random()*value)

            console.log(newArr[random]);
        }

    }else if (arrayDeIds.length == 3){
        let newArr = arrayDeArrays[arrayDeIds[0]].concat(arrayDeArrays[arrayDeIds[1]])

        let newNewArr = newArr.concat(arrayDeArrays[arrayDeIds[2]])

        let value = newNewArr.length
        let value1 = Math.floor(inputRange.value/10)

        for (let i = 0; i < value1; i++) {
            let random = Math.floor(Math.random()*value)

            console.log(newNewArr[random]);
        }

    }else if(arrayDeIds.length == 4){
        let newArr = arrayDeArrays[arrayDeIds[0]].concat(arrayDeArrays[arrayDeIds[1]])

        let newNewArr = newArr.concat(arrayDeArrays[arrayDeIds[2]])

        let lastArr = newNewArr.concat(arrayDeArrays[arrayDeIds[3]])

        let value = lastArr.length
        let value1 = Math.floor(inputRange.value/10)

        for (let i = 0; i < value1; i++) {
            let random = Math.floor(Math.random()*value)

            console.log(lastArr[random]);
        }
    }
 }