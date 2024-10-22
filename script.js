const buttons = document.getElementsByClassName('buttons')
const display = document.getElementById('display')

const arrayButtons = Array.from(buttons) // Transforma os botões em um array

let inputAtual = ''
let inputAntigo = ''
let operador = ''

arrayButtons.forEach(button => { 
    button.addEventListener('click', (event) => {
        const value = event.target.dataset.value // Irá pegar exatamente o valor do botão de acordo com evento de click

        if (value === "AC"){ //Limpa o visor
            inputAtual = ''
            inputAntigo = ''
            operador = ''
        } else if (value === "DEL") { // Exclui um valor do visor por vez
            inputAtual = inputAtual.slice(0, -1)
        } else if (value === "="){ // Realiza o calculo através da função calcular
            calcular()
        } else if ( value === "+" | value === "-" | value === "*" | value === "/" | value === "%"){ // Define o operador da conta
            operador = value
            inputAntigo = inputAtual
            inputAtual = ''
        } else{ // Passa o valor para o input atual
            inputAtual += value
        }

        // Passa os valores do input atual para o visor
        display.value = inputAtual
            
    })
});


function calcular(){
    const resultado = eval(inputAntigo + operador + inputAtual) // O eval permite a realização da conta, sem ele as strings seriam apenas concatenadas
    inputAtual = resultado
    inputAntigo = ''
    operador = ''
}

