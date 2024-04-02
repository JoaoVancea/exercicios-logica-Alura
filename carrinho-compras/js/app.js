var precoTotal = 0;
var precoTotalHTML = document.querySelector('#valor-total');
var carrinho = document.querySelector('.carrinho__produtos__produto');

function adicionar() {
    var produtoCompleto = document.querySelector('#produto').value;
    var produtoValores = produtoCompleto.split(' - R$');
    var produtoQuantidade = document.querySelector('#quantidade').value;

    var precoProduto = produtoValores[1] * produtoQuantidade;
    precoTotal += precoProduto;

    var novoItem = `<br><span class="texto-azul">${produtoQuantidade}x</span> ${produtoValores[0]} <span class="texto-azul">R$${produtoValores[1]}</span>`;

    carrinho.innerHTML += novoItem;
    precoTotalHTML.innerHTML = `R$${precoTotal}`;
}

function limpar() {
    precoTotalHTML.innerHTML = 'R$0';
    produtoQuantidade = '';
    document.querySelector('#quantidade').value = '';
    carrinho.innerHTML = '';
}
