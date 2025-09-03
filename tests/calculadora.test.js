const { expect } = require('chai');
const { somarDoisNumeros, subtrairDoisNumeros, multiplicarDoisNumeros, dividirDoisNumeros } = require('../src/calculadora');

describe('Testes de Operações da Calculadora', () => {
    describe('Testes da Função de Soma', () => {
        describe('somarDoisNumeros', () => {
            it('A função deve ser capaz de somar dois números positivos', () => {
                const resultadoDaSoma = somarDoisNumeros(5, 3);
                expect(resultadoDaSoma).to.equal(8);
                if (resultadoDaSoma !== 8) throw new Error(`Esperado 8, mas recebeu ${resultadoDaSoma}`);
            });
            it('A função deve ser capaz de somar um número positivo e um negativo', () => {
                const resultadoDaSoma = somarDoisNumeros(50, -15);
                expect(resultadoDaSoma).to.equal(35);
                if (resultadoDaSoma !== 35) throw new Error(`Esperado 35, mas recebeu ${resultadoDaSoma}`);
            });
            it('A função deve ser capaz de somar dois números negativos', () => {
                const resultadoDaSoma = somarDoisNumeros(-5, -3);
                expect(resultadoDaSoma).to.equal(-8);
                if (resultadoDaSoma !== -8) throw new Error(`Esperado -8, mas recebeu ${resultadoDaSoma}`);
            });
            it('A função deve ser capaz de somar zero a um número', () => {
                const resultadoDaSoma = somarDoisNumeros(5, 0);
                expect(resultadoDaSoma).to.equal(5);
                if (resultadoDaSoma !== 5) throw new Error(`Esperado 5, mas recebeu ${resultadoDaSoma}`);
            });
            it('A função deve ser capaz de somar zero a zero', () => {
                const resultadoDaSoma = somarDoisNumeros(0, 0);
                expect(resultadoDaSoma).to.equal(0);
                if (resultadoDaSoma !== 0) throw new Error(`Esperado 0, mas recebeu ${resultadoDaSoma}`);
            });
        });
    });
    
    describe('Testes da Função de Subtração', () => {
        describe('subtrairDoisNumeros', () => {
            it('A função deve ser capaz de subtrair dois números positivos', () => {
                const resultadoDaSubtracao = subtrairDoisNumeros(5, 3);
                expect(resultadoDaSubtracao).to.equal(2);
                if (resultadoDaSubtracao !== 2) throw new Error(`Esperado 2, mas recebeu ${resultadoDaSubtracao}`);
            });
            it('A função deve ser capaz de subtrair um número positivo e um negativo', () => {
                const resultadoDaSubtracao = subtrairDoisNumeros(5, -3);
                expect(resultadoDaSubtracao).to.equal(8);
                if (resultadoDaSubtracao !== 8) throw new Error(`Esperado 8, mas recebeu ${resultadoDaSubtracao}`);
            });
            it('A função deve ser capaz de subtrair dois números negativos', () => {
                const resultadoDaSubtracao = subtrairDoisNumeros(-5, -3);
                expect(resultadoDaSubtracao).to.equal(-2);
                if (resultadoDaSubtracao !== -2) throw new Error(`Esperado -2, mas recebeu ${resultadoDaSubtracao}`);
            });
            it('A função deve ser capaz de subtrair zero de um número', () => {
                const resultadoDaSubtracao = subtrairDoisNumeros(5, 0);
                expect(resultadoDaSubtracao).to.equal(5);
                if (resultadoDaSubtracao !== 5) throw new Error(`Esperado 5, mas recebeu ${resultadoDaSubtracao}`);
            });
            it('A função deve ser capaz de subtrair um número de zero', () => {
                const resultadoDaSubtracao = subtrairDoisNumeros(0, 5);
                expect(resultadoDaSubtracao).to.equal(-5);
                if (resultadoDaSubtracao !== -5) throw new Error(`Esperado -5, mas recebeu ${resultadoDaSubtracao}`);
            });
        });
    });

    describe('Testes da Função de Multiplicação', () => {
        describe('multiplicarDoisNumeros', () => {
            it('A função deve ser capaz de multiplicar dois números positivos', () => {
                const resultadoDaMultiplicacao = multiplicarDoisNumeros(5, 3);
                expect(resultadoDaMultiplicacao).to.equal(15);
                if (resultadoDaMultiplicacao !== 15) throw new Error(`Esperado 15, mas recebeu ${resultadoDaMultiplicacao}`);
            });
            it('A função deve ser capaz de multiplicar um número positivo e um negativo', () => {
                const resultadoDaMultiplicacao = multiplicarDoisNumeros(5, -3);
                expect(resultadoDaMultiplicacao).to.equal(-15);
                if (resultadoDaMultiplicacao !== -15) throw new Error(`Esperado -15, mas recebeu ${resultadoDaMultiplicacao}`);
            });
            it('A função deve ser capaz de multiplicar dois números negativos', () => {
                const resultadoDaMultiplicacao = multiplicarDoisNumeros(-5, -3);
                expect(resultadoDaMultiplicacao).to.equal(15);
                if (resultadoDaMultiplicacao !== 15) throw new Error(`Esperado 15, mas recebeu ${resultadoDaMultiplicacao}`);
            });
            it('A função deve ser capaz de multiplicar um número por zero', () => {
                const resultadoDaMultiplicacao = multiplicarDoisNumeros(5, 0);
                expect(resultadoDaMultiplicacao).to.equal(0);
                if (resultadoDaMultiplicacao !== 0) throw new Error(`Esperado 0, mas recebeu ${resultadoDaMultiplicacao}`);
            });
        });
    });

    describe('Testes da Função de Divisão', () => {
        describe('dividirDoisNumeros', () => {
            it('A função deve ser capaz de divir dois números positivos', () => {
                const resultadoDaDivisao = dividirDoisNumeros(6, 3);
                expect(resultadoDaDivisao).to.equal(2);
                if (resultadoDaDivisao !== 2) throw new Error(`Esperado 2, mas recebeu ${resultadoDaDivisao}`);
            });
            it('A função deve ser capaz de lançar um erro ao tentar dividir por zero', () => {
                let erroLançado = false;
                try {
                    dividirDoisNumeros(6, 0);
                } catch (e) {
                    erroLançado = true;
                    if (e.message !== 'Divisão por zero não é permitida.') {
                        throw new Error(`Mensagem de erro inesperada: ${e.message}`);
                    }
                }
                if (!erroLançado) throw new Error('Esperado um erro ao dividir por zero, mas nenhum erro foi lançado.');
            });
            it('A função deve ser capaz de dividir um número positivo por um negativo', () => {
                const resultadoDaDivisao = dividirDoisNumeros(6, -3);
                expect(resultadoDaDivisao).to.equal(-2);
                if (resultadoDaDivisao !== -2) throw new Error(`Esperado -2, mas recebeu ${resultadoDaDivisao}`);
            });
            it('A função deve ser capaz de dividir dois números negativos', () => {
                const resultadoDaDivisao = dividirDoisNumeros(-6, -3);
                expect(resultadoDaDivisao).to.equal(2);
                if (resultadoDaDivisao !== 2) throw new Error(`Esperado 2, mas recebeu ${resultadoDaDivisao}`);
            });
            it('A função deve ser capaz de dividir zero por um número', () => {
                const resultadoDaDivisao = dividirDoisNumeros(0, 5);
                expect(resultadoDaDivisao).to.equal(0);
                if (resultadoDaDivisao !== 0) throw new Error(`Esperado 0, mas recebeu ${resultadoDaDivisao}`);
            });
        });
    });
});