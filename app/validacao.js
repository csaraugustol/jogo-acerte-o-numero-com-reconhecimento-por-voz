function verificaSeOChuteEhUmValorValido(chute) {
    const numero = +chute;

    if(chuteEhInvalido(numero)) {
        console.log('Valor inválido');
    }

    if(numeroMaiorOuMenorValorPermiido(numero)) {
        console.log(`Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}.`);
    }
}

function chuteEhInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorValorPermiido(numero) {
    return numero > maiorValor || numero < menorValor;
}
