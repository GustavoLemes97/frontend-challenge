# :money_with_wings: Projeto Calculadora de Salário Liquido

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:
* Javascript / React
* CSS
* Redux
* Cypress

## :computer: Projeto

Este projeto foi desenvolvido como um desafio proposto, de front-end, para a criação de uma calculadora de salário líquido.
Ele se trata de um aplicativo de página única que consiste em realizar o cálculo do salário líquido baseando-se nos valores
do salário bruto, dos valores descontados (pensão alimentícia, plano de saúde, etc.) e na quantidade de dependentes que o
usuário possui. Após o cálculo ser realizado, é possível verificar o salário líquido e a forma que tal valor foi encontrado. 

*O percentual do INSS e do IRRF mostrado no cálculo é o valor efetivo.*

Para que o cálculo seja realizado, valores válidos (números) devem ser digitados nas entradas.
* Caso digite **apenas** o salário bruto, o salário será calculado considerando os outros valores como sendo 0.
* Caso o salário **não** seja digitado, o cálculo será feito considerando todos os valores como sendo 0.

## :gear: Configuração

Caso queira *buildar* este projeto localmente, siga os seguintes passos:
* Faça o download do projeto ou clone através do comando `git clone :HttpOuSSH` .
* Instale as dependências na raiz do projeto com o comando `npm install`.
* Use o comando `npm start` para abrir o projeto, ele de ficar disponivel em *localhost:3000*.

Caso queira executar testes unitários e/ou end to end do projeto, siga os seguintes passos:
* Use o comando `npm test` para que seja executado os testes unitários.
* Enquanto o projeto esteja sendo compilado, use o comando `npm run cy:open` e assim que abrir uma janela, selecione os testes integrados do arquivo `calculator_page.spec.js` para que seja possível ver os testes end to end do *Cypress* serem executados.

**Nota: Caso a porta 3000 não esteja compilando o projeto, os testes falharam, pois os testes foram feitos considerando o projeto compilado em dada porta.**
