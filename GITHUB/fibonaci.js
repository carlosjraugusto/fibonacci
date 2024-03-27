function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    let temp;
    let sequencia = [0, 1];

    // Verifica se o número é igual a 0 ou 1
    if (numero == 0 || numero == 1) {
        return [true, sequencia];
    }

    // Calcula a sequência de Fibonacci até encontrar um número maior ou igual ao número dado
    while (b < numero) {
        temp = b;
        b = a + b;
        a = temp;
        sequencia.push(b);
    }

    // Verifica se o número pertence à sequência de Fibonacci
    if (b == numero) {
        return [true, sequencia];
    } else {
        return [false, sequencia];
    }
}

function verificarEFibonacci() {
    const numeroInformado = parseInt(document.getElementById('numeroInput').value);
    const resultado = verificaFibonacci(numeroInformado);
    const pertence = resultado[0];
    const sequenciaFibonacci = resultado[1];

    if (pertence) {
        document.getElementById('resultado').textContent = numeroInformado + " pertence à sequência de Fibonacci. ";
        document.getElementById('sequencia').textContent = "Sequência de Fibonacci: " + sequenciaFibonacci.join(', ');

    } else {
        document.getElementById('resultado').textContent = numeroInformado + " não pertence à sequência de Fibonacci: ";
        document.getElementById('sequencia').textContent = "Sequência de Fibonacci: " + sequenciaFibonacci.join(', ');

    }
}