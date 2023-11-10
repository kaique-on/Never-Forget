//Variavéis que serão usadas durante o script
const contador = document.getElementById('horario')
const botaoFoco = document.getElementById('foco')
const botaoDescanso = document.getElementById('descanso_curto')
const botaoDescansoLongo = document.getElementById('descanso_longo')
const addTarefa = document.getElementById('add-tarefa')
const start = document.getElementById('start')
let iniciado = false;
//funções que serão usadas e chamadas durante o script
function funcaoContador() {
    if(!iniciado){
        let tempoSegundos = 60;
        iniciado = true
        let tempoMinutos = 24;
        const timer = setInterval(function(){
        tempoSegundos --;

        if(tempoSegundos == 0 && tempoMinutos == 0){
            tempoSegundos = 0
            tempoMinutos = 0
            contador.textContent = `0${tempoMinutos}:0${tempoSegundos}`
            iniciado = false;
            clearInterval(timer)
        }
        if(tempoSegundos == 0){
            tempoSegundos = 59;
            tempoMinutos -= 1
        }

        if(tempoSegundos < 10){
            contador.textContent = `${tempoMinutos}:0${tempoSegundos}`
        }else{
            contador.textContent = `${tempoMinutos}:${tempoSegundos}`
        } 

        
        }, 10)
    }   
}

function funcaoAdicionar() {
    if(!iniciado){
        const divTarefas = document.querySelector('.container-adicionar')
        const divAdicionar = document.createElement('div')
        divAdicionar.classList.add('inserir-tarefa')
        divAdicionar.innerHTML = `<h1>Teste</h1>`
        divTarefas.appendChild(divAdicionar)
    }
    
}   

//uso das funções nos botões
start.addEventListener("click", funcaoContador)
addTarefa.addEventListener("click", funcaoAdicionar)