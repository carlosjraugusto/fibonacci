function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    let temp;
    
    // Verifica se o número é igual a 0 ou 1
    if (numero == 0 || numero == 1) {
        return true;
    }

    // Calcula a sequência de Fibonacci até encontrar um número maior ou igual ao número dado
    while (b < numero) {
        temp = b;
        b = a + b;
        a = temp;
    }

    // Verifica se o número pertence à sequência de Fibonacci
    if (b == numero) {
        return true;
    } else {
        return false;
    }
}

// Testando a função com um exemplo
const numeroInformado = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci: "));

if (verificaFibonacci(numeroInformado)) {
    console.log(numeroInformado + " pertence à sequência de Fibonacci.");
} else {
    console.log(numeroInformado + " não pertence à sequência de Fibonacci.");
}