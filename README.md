 
# Testes de ponta a ponta com o Cypress
Exemplo de projeto para demonstrar testes end-to-end (e2e) escritos com [Cypress](https://cypress.io) em execução no GitHub Actions.
## Pré-requisitos
Para clonar e executar este projeto, você precisará de:
- [git](https://git-scm.com/downloads) (Eu usei a versão `2.34.1` enquanto escrevia este documento)
- [Node.js](https://nodejs.org/en/) (usei a versão `v18.15.0` enquanto escrevia este documento)
- npm (utilizei a versão `9.5.0` enquanto escrevia este documento)
**Nota:** Ao instalar o Node.js, o npm é instalado automaticamente. 🚀
## Instalação
Para instalar as dependências do desenvolvimento, execute `npm install` (ou `npm i` para abreviar).
## Configurando as variáveis de ambiente
Antes de executar os testes, algumas variáveis de ambiente precisam ser configuradas.
Faça uma cópia do arquivo [`cypress.env.example.json`](./cypress.env.example.json) como `cypress.env.json`, e defina os valores apropriados para todas as variáveis.
**Nota:** O arquivo `cypress.env.json` não é rastreado pelo git, pois está listado no arquivo `.gitignore`.
## Executando os testes
Neste projeto, é possível executar testes nos modos interativo e headless, tanto em viewports de desktop quanto de tablet.
### Modo headless
Execute `npm test` (ou `npm t` para abreviar) para executar todos os testes em modo headless usando uma viewport desktop.
Execute `npm run test:tablet` para executar os testes apropriados no modo headless usando uma viewport de tablet.
### Modo interativo
Execute `npm run cy:open` para abrir o __Cypress  App__ para executar testes em modo interativo utilizando uma janela de visualização do ambiente de trabalho.
Execute `npm run cy:open:tablet` 

Execute `npm run cy:open:tablet` para abrir o __Cypress  App__ para executar testes em modo interativo utilizando uma janela de visualização de tablet.