function comprar() {
    var ingresso = document.querySelector('#tipo-ingresso');
    var quantidade = document.querySelector('#qtd').value;
    var lis = document.querySelector('.lista').getElementsByTagName('li');
    var quantidades = document.querySelector('.lista').getElementsByTagName('span');
    var tipoIngresso = ingresso.options[ingresso.selectedIndex].innerText;

    var listaCompleta = [];
    for(var i = 0; i < lis.length; i++) {
        listaCompleta.push(lis[i].innerText);
    }

    var listaProdutos = [];
    for(var i = 0; i < listaCompleta.length; i++) {
        listaProdutos.push(listaCompleta[i].replace(/[0-9]/g, ''));
    }

    for(var i = 0; i < listaProdutos.length; i++) {
        if(tipoIngresso == listaProdutos[i]) {
            if(parseInt(quantidades[i].innerText) <  parseInt(quantidade)) {
                alert('Não há estoque suficiente');
            } else {
                quantidades[i].innerText = (parseInt(quantidades[i].innerText) - parseInt(quantidade));
            }
        }
    }
}