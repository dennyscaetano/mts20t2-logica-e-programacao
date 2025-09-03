function somarDoisNumeros(num1, num2) {
    return num1 + num2;
}

function subtrairDoisNumeros(num1, num2) {
    return num1 - num2;
}

function multiplicarDoisNumeros(num1, num2) {
    return num1 * num2;
}

function dividirDoisNumeros(num1, num2) {
    if (num2 === 0) {
        throw new Error('Divisão por zero não é permitida.');
    }
    return num1 / num2;
}

module.exports = { 
    somarDoisNumeros,
    subtrairDoisNumeros,
    multiplicarDoisNumeros,
    dividirDoisNumeros
 };