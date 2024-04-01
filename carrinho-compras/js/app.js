var precoTotal = 0;

function adicionar() {
    var produtoCompleto = document.querySelector('#produto').value;
    var produtoQuantidade = document.querySelector('#quantidade').value;
    var produtoValores = produtoCompleto.split('R$');
    var precoTotalHTML = document.querySelector('#valor-total');

    var precoProduto = produtoValores[1] * produtoQuantidade;
    var produtoNome = produtoValores[0].split('' -'');
    precoTotal += precoProduto;

    var carrinho = document.querySelector('.carrinho__produtos__produto');
    var novoItem = `<br><span class="texto-azul">${produtoQuantidade}x</span> ${produtoNome[0]} <span class="texto-azul">R$${produtoValores[1]}</span>`;

    carrinho.innerHTML += novoItem;
    precoTotalHTML.innerHTML = `R$${precoTotal}`;
}
