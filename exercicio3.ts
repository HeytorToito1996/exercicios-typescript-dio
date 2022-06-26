// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let valor:number = 0;
campoSaldo.innerHTML = valor;

function somarAoSaldo(soma:number): number {
		valor = parseInt(valor) + parseInt(soma);
    return campoSaldo.innerHTML = parseInt(valor);
}

function limparSaldo() {
    campoSaldo.innerHTML = 0;
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});