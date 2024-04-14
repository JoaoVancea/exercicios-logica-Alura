function comprar() {
    var ingresso = document.querySelector('#tipo-ingresso').value;
    var quantidade = document.querySelector('#qtd').value;
    var lis = document.querySelector('.lista').getElementsByTagName('li');
    var quantidades = document.querySelector('.lista').getElementsByTagName('span');

    var listaQuantidades = [];
        for(var i = 0; i < lis.length; i++) {
            listaQuantidades.push(quantidades[i].innerText);
        }

    var listaCompleta = [];
    for(var i = 0; i < lis.length; i++) {
        listaCompleta.push(lis[i].innerText);
    }

    var listaProdutos = [];
    for(var i = 0; i < listaCompleta.length; i++) {
        listaProdutos.push(listaCompleta[i].replace(/[0-9]/g, ''));
    }
}