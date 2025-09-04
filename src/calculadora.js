// Esta função recebe dois números como parâmetros (num1 e num2)
// e retorna a soma deles usando o operador "+"
function somarDoisNumeros(num1, num2) {
    return num1 + num2; // Exemplo: se num1 = 5 e num2 = 3, o retorno será 8
}

// Esta função recebe dois números e retorna o resultado da subtração
// Utiliza o operador "-" para fazer a operação
function subtrairDoisNumeros(num1, num2) {
    return num1 - num2; // Exemplo: se num1 = 10 e num2 = 4, o retorno será 6
}

// Esta função recebe dois números e retorna o resultado da multiplicação
// O operador "*" é usado para multiplicar
function multiplicarDoisNumeros(num1, num2) {
    return num1 * num2; // Exemplo: se num1 = 5 e num2 = 3, o retorno será 15
}

// Esta função divide o primeiro número pelo segundo
// Usa o operador "/" para dividir
function dividirDoisNumeros(num1, num2) {
    return num1 / num2; // Exemplo: se num1 = 10 e num2 = 2, o retorno será 5
    // Observação importante: dividir por zero causa "Infinity" ou "NaN"
}

// Esta função calcula a média de dois números
// Para isso, ela reutiliza funções que já criamos:
// - Primeiro soma os dois números
// - Depois divide o resultado por 2
function calcularMediaDeDoisNumeros(num1, num2) {
    // Usamos a função de soma já criada para somar os dois valores
    const resultadoSoma = somarDoisNumeros(num1, num2);
    
    // Agora dividimos o total por 2 usando a função de divisão
    return dividirDoisNumeros(resultadoSoma, 2); 
    // Exemplo: se num1 = 6 e num2 = 4 -> soma = 10 -> 10/2 = 5
}

// O "module.exports" serve para disponibilizar essas funções
// para que outros arquivos do projeto possam utilizá-las.
// Sem isso, as funções ficariam disponíveis apenas aqui neste arquivo.
module.exports = { 
    somarDoisNumeros,
    subtrairDoisNumeros,
    multiplicarDoisNumeros,
    dividirDoisNumeros,
    calcularMediaDeDoisNumeros
};
