// Importamos a função "expect" do framework Chai
// O "expect" é usado para verificar se o resultado obtido é igual ao esperado
const { expect } = require('chai');

// Importamos as funções da calculadora que vamos testar
// Essas funções foram definidas em outro arquivo (../src/calculadora.js)
const { 
    somarDoisNumeros, 
    subtrairDoisNumeros, 
    multiplicarDoisNumeros, 
    dividirDoisNumeros, 
    calcularMediaDeDoisNumeros 
} = require('../src/calculadora');

// O "describe" serve para agrupar testes relacionados
// Aqui agrupamos todos os testes das operações da calculadora
describe('Testes de Operações da Calculadora', () => {
    
    // Grupo de testes para a função de soma
    describe('Testes da Função de Soma', () => {
        // Cada "it" representa um caso de teste específico
        it('A função deve ser capaz de somar dois números positivos', () => {
            // Chamamos a função passando dois números positivos
            const resultadoDaSoma = somarDoisNumeros(5, 3);
            // Verificamos se o resultado foi o esperado (5 + 3 = 8)
            expect(resultadoDaSoma).to.equal(8);
        });

        it('A função deve ser capaz de somar um número positivo e um negativo', () => {
            const resultadoDaSoma = somarDoisNumeros(50, -15);
            expect(resultadoDaSoma).to.equal(35);
        });

        it('A função deve ser capaz de somar dois números negativos', () => {
            const resultadoDaSoma = somarDoisNumeros(-5, -3);
            expect(resultadoDaSoma).to.equal(-8);
        });

        it('A função deve ser capaz de somar zero a um número', () => {
            const resultadoDaSoma = somarDoisNumeros(5, 0);
            expect(resultadoDaSoma).to.equal(5);
        });

        it('A função deve ser capaz de somar zero a zero', () => {
            const resultadoDaSoma = somarDoisNumeros(0, 0);
            expect(resultadoDaSoma).to.equal(0);
        });
    });

    // Testes para a função subtrairDoisNumeros
    describe('Testes da Função de Subtração', () => {
        it('A função deve ser capaz de subtrair dois números positivos', () => {
            const resultadoDaSubtracao = subtrairDoisNumeros(5, 3);
            expect(resultadoDaSubtracao).to.equal(2);
        });

        it('A função deve ser capaz de subtrair um número positivo e um negativo', () => {
            const resultadoDaSubtracao = subtrairDoisNumeros(5, -3);
            expect(resultadoDaSubtracao).to.equal(8);
        });

        it('A função deve ser capaz de subtrair dois números negativos', () => {
            const resultadoDaSubtracao = subtrairDoisNumeros(-5, -3);
            expect(resultadoDaSubtracao).to.equal(-2);
        });

        it('A função deve ser capaz de subtrair zero de um número', () => {
            const resultadoDaSubtracao = subtrairDoisNumeros(5, 0);
            expect(resultadoDaSubtracao).to.equal(5);
        });

        it('A função deve ser capaz de subtrair um número de zero', () => {
            const resultadoDaSubtracao = subtrairDoisNumeros(0, 5);
            expect(resultadoDaSubtracao).to.equal(-5);
        });
    });

    // Testes para a função multiplicarDoisNumeros
    describe('Testes da Função de Multiplicação', () => {
        it('A função deve ser capaz de multiplicar dois números positivos', () => {
            const resultadoDaMultiplicacao = multiplicarDoisNumeros(5, 3);
            expect(resultadoDaMultiplicacao).to.equal(15);
        });

        it('A função deve ser capaz de multiplicar um número positivo e um negativo', () => {
            const resultadoDaMultiplicacao = multiplicarDoisNumeros(5, -3);
            expect(resultadoDaMultiplicacao).to.equal(-15);
        });

        it('A função deve ser capaz de multiplicar dois números negativos', () => {
            const resultadoDaMultiplicacao = multiplicarDoisNumeros(-5, -3);
            expect(resultadoDaMultiplicacao).to.equal(15);
        });

        it('A função deve ser capaz de multiplicar um número por zero', () => {
            const resultadoDaMultiplicacao = multiplicarDoisNumeros(5, 0);
            expect(resultadoDaMultiplicacao).to.equal(0);
        });
    });

    // Testes para a função dividirDoisNumeros
    describe('Testes da Função de Divisão', () => {
        it('A função deve ser capaz de divir dois números positivos', () => {
            const resultadoDaDivisao = dividirDoisNumeros(6, 3);
            expect(resultadoDaDivisao).to.equal(2);
        });

        it('A função deve ser capaz de dividir um número positivo por um negativo', () => {
            const resultadoDaDivisao = dividirDoisNumeros(6, -3);
            expect(resultadoDaDivisao).to.equal(-2);
        });

        it('A função deve ser capaz de dividir dois números negativos', () => {
            const resultadoDaDivisao = dividirDoisNumeros(-6, -3);
            expect(resultadoDaDivisao).to.equal(2);
        });

        it('A função deve ser capaz de dividir zero por um número', () => {
            const resultadoDaDivisao = dividirDoisNumeros(0, 5);
            expect(resultadoDaDivisao).to.equal(0);
        });
    });

    // Testes para a função calcularMediaDeDoisNumeros
    describe('Testes da Função de Cálculo de Média', () => {
        it('A função deve ser capaz de calcular a média de dois números positivos', () => {
            const resultadoDaMedia = calcularMediaDeDoisNumeros(6, 4);
            expect(resultadoDaMedia).to.equal(5);
        });

        it('A função deve ser capaz de calcular a média de um número positivo e um negativo', () => {
            const resultadoDaMedia = calcularMediaDeDoisNumeros(6, -4);
            expect(resultadoDaMedia).to.equal(1);
        });

        it('A função deve ser capaz de calcular a média de dois números negativos', () => {
            const resultadoDaMedia = calcularMediaDeDoisNumeros(-6, -4);
            expect(resultadoDaMedia).to.equal(-5);
        });

        it('A função deve ser capaz de calcular a média quando um dos números é zero', () => {
            const resultadoDaMedia = calcularMediaDeDoisNumeros(6, 0);
            expect(resultadoDaMedia).to.equal(3);
        });

        it('A função deve ser capaz de calcular a média de dois zeros', () => {
            const resultadoDaMedia = calcularMediaDeDoisNumeros(0, 0);
            expect(resultadoDaMedia).to.equal(0);
        });
    });
});
