# Calculadora — Exercício de Lógica e Programação

Este projeto é uma introdução prática à programação com **JavaScript**.  
Aqui você vai encontrar funções básicas de uma calculadora (soma, subtração, multiplicação, divisão e média) e também aprender como escrever e executar **testes automatizados** usando Node.js.

A ideia é simples: mostrar como organizar o código em funções, como reaproveitar uma dentro da outra e como validar se tudo funciona corretamente com testes.

---

## 📂 Estrutura do projeto

- `src/calculadora.js` — contém a implementação das funções matemáticas.
- `tests/calculadora.test.js` — contém os testes automatizados escritos com **Mocha** e **Chai**.
- `package.json` — configurações e scripts do projeto.
- `reports/` — pasta onde ficam relatórios em HTML dos testes (gerados com mochawesome).

---

## 🚀 Pré-requisitos

- [Node.js](https://nodejs.org) (versão 16 ou superior recomendada)
- npm (gerenciador de pacotes que já vem com o Node)

---

## ⚙️ Instalação

1. Clone o repositório e entre na pasta:

   ```bash
   git clone https://github.com/dennyscaetano/mts20t2-logica-e-programacao.git
   cd mts20t2-logica-e-programacao
   ```

2. Instale as dependências necessárias:

   ```bash
   npm install
   ```

> Obs.: o projeto já inclui `mocha` e `chai` como dependências de teste.

---

## ▶️ Como usar as funções da calculadora

Você pode usar as funções da calculadora em qualquer arquivo `.js`.  
Por exemplo, crie um arquivo chamado `index.js` e escreva o seguinte:

```javascript
// Importa as funções do arquivo calculadora.js
const {
  somarDoisNumeros,
  subtrairDoisNumeros,
  multiplicarDoisNumeros,
  dividirDoisNumeros,
  calcularMediaDeDoisNumeros
} = require('./src/calculadora');

// Usando as funções
console.log("Soma:", somarDoisNumeros(5, 3)); // Resultado: 8
console.log("Subtração:", subtrairDoisNumeros(10, 4)); // Resultado: 6
console.log("Multiplicação:", multiplicarDoisNumeros(6, 2)); // Resultado: 12
console.log("Divisão:", dividirDoisNumeros(20, 5)); // Resultado: 4
console.log("Média:", calcularMediaDeDoisNumeros(6, 4)); // Resultado: 5
```

Depois, execute no terminal:

```bash
node index.js
```

---

## 🧪 Executando os testes

Os testes verificam se as funções estão funcionando corretamente.

Para rodar os testes no terminal:

```bash
npm test
```

ou

```bash
npm run mocha
```

---

## 📊 Gerar relatório HTML dos testes

Além de rodar os testes no terminal, você pode gerar um relatório visual em HTML usando o **mochawesome**.

1. Instale (caso ainda não tenha feito):

   ```bash
   npm install --save-dev mochawesome
   ```

2. Execute o comando:

   ```bash
   npm run test:report
   ```

O relatório será gerado dentro da pasta `reports/`, no arquivo:

```
reports/mochawesome-report.html
```

Basta abrir esse arquivo no navegador para visualizar.

---

## 📝 O que você vai aprender com este projeto

- Criar funções simples em JavaScript
- Reutilizar funções em outras funções
- Exportar e importar módulos (`module.exports` e `require`)
- Escrever testes automatizados com Mocha e Chai
- Gerar relatórios de testes em HTML

Este repositório serve como uma base para praticar e consolidar os primeiros passos em lógica de programação e testes automatizados.

---

## 🎯 Desafios extras para praticar

Se você quiser ir além, aqui estão algumas ideias de exercícios para continuar praticando:

1. **Criar novas funções matemáticas**
   - Potência (num1 elevado a num2)
   - Raiz quadrada (apenas de num1)
   - Resto da divisão (num1 % num2)

2. **Melhorar as validações**
   - Tratar divisão por zero retornando uma mensagem de erro ao invés de `Infinity` ou `NaN`.

3. **Criar novos testes**
   - Escreva testes para cada nova função criada.
   - Teste cenários de erro (ex.: divisão por zero).

4. **Explorar arrays**
   - Crie uma função que calcule a média de **vários números** em vez de apenas dois.

Esses desafios vão te ajudar a fixar os conceitos de funções, lógica de programação e testes automatizados.
