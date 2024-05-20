var listaAmigos = [];
var listaAmigosHTML = document.querySelector('#lista-amigos');
var nomeAmigo = document.querySelector('#nome-amigo');
var listaSorteio = document.querySelector('#lista-sorteio');

function reiniciar() {
    listaAmigos = [];
    listaAmigosHTML.innerHTML = '';
    listaSorteio.innerHTML = '';
    nomeAmigo.value = '';
}

function adicionar() {
    if (nomeAmigo.value != '') {
        if (!listaAmigos.includes(nomeAmigo.value)) {
            if(listaAmigosHTML.innerHTML == '') {
                listaAmigosHTML.innerHTML = `${nomeAmigo.value}`
            } else {
                listaAmigosHTML.innerHTML += `, ${nomeAmigo.value}`
            }
            listaAmigos.push(nomeAmigo.value);
            nomeAmigo.value = '';
        } else {
            alert('Nome já adicionado');
        }
    } else {
        alert('Digite um nome para adicionar a lista');
    }
}

function randomizarLista(lista) {
    var listaEmbaralhada = [];
    let i = 0;

    while(i < lista.length) {
        var numeroAleatorio = Math.floor(Math.random() * lista.length);
        if(!listaEmbaralhada.includes(lista[numeroAleatorio])) {
            listaEmbaralhada.push(lista[numeroAleatorio]);
            i++;
        }
    }

    return listaEmbaralhada;
}

function sortear() {
    listaSorteio.innerHTML = '';
    var listaEmbaralhada = randomizarLista(listaAmigos);
    var amigosAdicionados = [];
    
    let i = 0;
    if (listaAmigos.length >= 4) {
        while(i < listaAmigos.length) {
            if(listaAmigos[i] != listaEmbaralhada[i] && !amigosAdicionados.includes(listaEmbaralhada[i])) {
                listaSorteio.innerHTML += `${listaAmigos[i]} -> ${listaEmbaralhada[i]} <br>`;
                amigosAdicionados.push(listaEmbaralhada[i]);
                i++;
            } else {
                listaEmbaralhada = randomizarLista(listaAmigos);
            }
        }
    } else {
        alert('Mínimo de 4 pessoas participando!');
    }
}