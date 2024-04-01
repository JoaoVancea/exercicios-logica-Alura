let botaoSortear = document.getElementById('btn-sortear');
let botaoReiniciar = document.getElementById('btn-reiniciar');
let inputQuantidadeNumeros = document.getElementById('quantidade');
let inputNumeroInicial = document.getElementById('de');
let inputNumeroFinal = document.getElementById('ate');
let textoResultado = document.getElementById('resultado');

botaoReiniciar.disabled = true;
limparTodosInputs();

function limparInputField(inputField) {
    inputField.value = '';
}

function limparTodosInputs() {
    limparInputField(inputQuantidadeNumeros);
    limparInputField(inputNumeroInicial);
    limparInputField(inputNumeroFinal);
}

function desabilitarBotao(botaoDesabilitar) {
    botaoDesabilitar.disabled = true;
    botaoDesabilitar.classList.remove('container__botao');
    botaoDesabilitar.classList.add('container__botao-desabilitado');
}

function habilitarBotao(botaoHabilitar) {
    botaoHabilitar.disabled = false;
    botaoHabilitar.classList.remove('container__botao-desabilitado');
    botaoHabilitar.classList.add('container__botao');
}

function sortear() {
    let numerosSorteados = [];
    let quantidadeNumerosSorteados = document.getElementById('quantidade').value;
    let numeroInicial = inputNumeroInicial.value;
    let numeroFinal = inputNumeroFinal.value;

    if(quantidadeNumerosSorteados > (numeroFinal - numeroInicial)) {
        alert('O quantidade de números a serem sorteados não pode ser maior que o intervalo proposto');
    } else {
        while(quantidadeNumerosSorteados > 0) {
            let numeroSorteado = Math.floor(Math.random() * numeroFinal);
            if(numeroSorteado > numeroInicial && !numerosSorteados.includes(numeroSorteado)){
                numerosSorteados.push(numeroSorteado);
                quantidadeNumerosSorteados--;
            } 
        }
    }
    
    textoResultado.innerHTML = 'Números sorteados: ' + numerosSorteados;
    desabilitarBotao(botaoSortear);
    habilitarBotao(botaoReiniciar);
}

function  reiniciar() {
    textoResultado.innerHTML = 'Números sorteados: nenhum até agora';
    limparTodosInputs();
    habilitarBotao(botaoSortear);
    desabilitarBotao(botaoReiniciar);
}