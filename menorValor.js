const listaLivros = require("./listaLivros");

function menorValor (arrayDeProdutos, posicaoInicial, ){
    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrayDeProdutos.length; atual++){
        if (arrayDeProdutos[atual].preço < arrayDeProdutos[maisBarato].preço){
            maisBarato = atual
        }
    };
return maisBarato;
}

module.exports = menorValor
