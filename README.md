## ORM com NodeJS: Avançando nas funcionalidades do Sequelize

No terminal dentro do diretório do projeto vamos baixar as dependências da API:
`$ npm install`

Rodando o servidor: `$ npm start`

## Descrição do Projeto

- Criar uma API com NodeJS e algumas de suas principais bibliotecas;
- Aprender na prática como funciona um ORM;
- Usar o Sequelize para fazer operações em bancos sem usar SQL;
- Desenvolver uma aplicação organizada no modelo MVC;
- Aprimorar seus conhecimentos em JavaScript para back-end.

## Estrutura do Projeto

- Estruturando o Projeto;
- Modelos, migrações seeds;
- Controladores e rotas;
- CRUD com Sequelize;
- Relações e associações;
- Controladores.

## Preparando o ambiente

**MySQL**: é o banco SQL que vamos utilizar para guardar os dados da nossa API. Temos um [tutorial com o passo a passo para instalação no **Windows**](https://www.alura.com.br/artigos/mysql-do-download-e-instalacao-ate-sua-primeira-tabela) e alguns comandos iniciais. Para [instalação no MacOS, baixe o arquivo DMG](https://downloads.mysql.com/archives/community/) e [siga as instruções de instalação](https://dev.mysql.com/doc/mysql-osx-excerpt/8.0/en/osx-installation-pkg.html). Se estiver usando Linux (Debian/Ubuntu), você pode [baixar direto via terminal](https://ubuntu.com/server/docs/databases-mysql) com `$ sudo apt install mysql-server`.

**MySQL Workbench**: durante o curso faremos as consultas ao banco direto pelo terminal, porém se você quiser, pode fazer isso usando um programa como o [MySQL Workbench](https://dev.mysql.com/downloads/workbench/).

**NodeJS**: Se você já fez outros cursos dessa formação, o NodeJS já deve estar instalado. você pode conferir com o comando `$ node --version` ou `$ node -v` no terminal, caso retorne um número de versão, como por exemplo, `v10.16.0`, o NodeJS já está instalado. Caso precise instalar, os links estão na [página oficial do NodeJS](https://nodejs.org/en/download/). Este curso foi desenvolvido usando a versão 10.20.0.

**Postman**: É o ambiente onde faremos os testes da nossa API, enviando requisições e recebendo respostas. Caso não tenha instalado, pode baixar na [página oficial do Postman](https://www.postman.com/downloads/). Neste curso utilizamos a versão 7.21.2.

## Requisitos do projeto - Atualização do Projeto

OK - O cliente não gostaria que registros importantes do sistema, como as Pessoas, sejam apagados definitivamente do banco de dados.

OK - Para deixar a interface mais limpa, o cliente gostaria que na lista de Pessoas, por padrão, fossem exibidos somente os usuários ativos.

OK - Foram percebidas algumas falhas de validação dos formulários por parte do front-end, o que resultou em dados de email inválidos no banco. É desejável que essa validação não seja responsabilidade exclusiva do front.

OK - É importante poder consultar todas as matrículas confirmadas referentes a estudante X de forma rápida.

OK - O cliente gostaria de poder consultar as turmas abertas por intervalo de data, para não receber informações desnecessárias (como turmas antigas).

OK - O cliente quer poder consultar as matrículas por turma e saber quais delas estão lotadas, para organizar melhor as matrículas.

O cliente gostaria que, uma vez que o cadastro de um estudante fosse desativado, todas as matrículas relativas a este estudante automaticamente passassem a constar como “canceladas”.

-------------------------------------------------------------------------

Sequelize teve versão atualizada, siga os seguintes procedimentos:
`$ npm outdated`
Saída no terminal:
Package    Current  Wanted  Latest  Location                Depended by
sequelize   6.15.0  6.16.1  6.16.1  node_modules/sequelize  sequelizeTo

Acesse o arquivo package.json e altere na linha referente ao Sequelize para a versão atual: 
"sequelize": "^6.16.1",

Logo após digite o seguinte comando no terminal para atualizar: 
`$ npm update` 
