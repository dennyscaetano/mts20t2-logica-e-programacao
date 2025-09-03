# Calculadora — Exercício de Lógica e Programação

Repositório com uma implementação simples de funções de calculadora e testes automatizados em JavaScript (Node.js).

## Conteúdo

- `src/calculadora.js` — implementação das funções: soma, subtração, multiplicação e divisão.
- `tests/calculadora.test.js` — suíte de testes usando Mocha + Chai.

## Requisitos

- Node.js (versão 16+ recomendada) e npm.

## Instalação

1. Clone o repositório:

   git clone https://github.com/dennyscaetano/mts20t2-logica-e-programacao.git
   cd mts20t2-logica-e-programacao

2. Instale dependências:

```bash
npm install
```

> Observação: o projeto já declara `mocha` e `chai` como dependências.

## Executar testes (console)

Para rodar os testes no terminal:

```bash
npm test
```

ou

```bash
npm run mocha
```

## Gerar relatório HTML dos testes

Este repositório inclui um script para gerar um relatório bonito em HTML usando o `mochawesome`.

1. Instale o gerador de relatórios (uma vez):

```bash
npm install --save-dev mochawesome
```

2. Gere o relatório executando:

```bash
npm run test:report
```

O relatório será gerado em `reports/mochawesome-report.html`.

## Arquivos adicionados / atualizados

- `.gitignore` — entradas para `node_modules/`, `reports/`, `coverage/`, arquivos de sistema e editores.
- `package.json` — script `test:report` para gerar relatório com `mochawesome`.
- `README.md` — este arquivo com instruções de uso.

## Notas

- Se preferir instalar `mochawesome` globalmente, você pode, mas é recomendado adicionar como devDependency no projeto.
- Se quiser integração contínua (CI), adicione um passo que rode `npm ci` e `npm run test:report`.

---

Se quiser, eu posso instalar `mochawesome` como devDependency e rodar os testes aqui para gerar o relatório no repositório. Quer que eu faça isso agora?
