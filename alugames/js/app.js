var jogosAlugados = ['Takenoko'];
console.log(jogosAlugados);

function alterarStatus(idGame) {
    var game = document.getElementById(`game-${idGame}`);
    var gameImg = game.querySelector('.dashboard__item__img');
    var gameButton = game.querySelector('.dashboard__item__button');
    var gameName = game.querySelector('.dashboard__item__name').innerHTML;
    
    if(gameImg.classList.contains('dashboard__item__img--rented')) {
        gameImg.classList.remove('dashboard__item__img--rented');
        gameButton.classList.remove('dashboard__item__button--return');
        gameButton.innerHTML = 'Alugar';
        alert('Devolvido com sucesso!'); //No projeto Alugames, implemente uma confirmação de devolução.
        var index = jogosAlugados.indexOf(gameName);
        jogosAlugados.splice(index, 1); // Remover o gameName do array  
    } else {
        gameImg.classList.add('dashboard__item__img--rented');
        gameButton.classList.add('dashboard__item__button--return');
        gameButton.innerHTML = 'Devolver';
        jogosAlugados.push(gameName);
    }
    console.log('Quantidade de jogos alugados no momento: ' + jogosAlugados.length); //No projeto Alugames, crie uma função para imprimir no console a informação sobre quantos jogos foram alugados.
}