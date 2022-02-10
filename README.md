## ORM com NodeJS: API com Sequelize e MySQL

No diretório do projeto digite o seguinte comando para criar o projeto:

`$ npm init -y`

Saída:

`{
  "name": "orm-sequelize",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}`

Instalação do Express:

`$ npm install express`

Instalação do Body-parser:

`$ npm install body-parser`

Instalação do nodemon:

`$ npm install --save/dev nodemon`

Logo após configurar o arquivo package.json:

<img src="C:\Users\joao.duarte\AppData\Roaming\Typora\typora-user-images\image-20220201213713278.png" alt="image-20220201213713278" style="zoom:50%;" />

Criar dentro da pasta api o arquivo index.js :

<img src="C:\Users\joao.duarte\AppData\Roaming\Typora\typora-user-images\image-20220201213255444.png" alt="image-20220201213255444" style="zoom:50%;" />

Criar o script de configuração do servidor no arquivo index.js:

<img src="C:\Users\joao.duarte\AppData\Roaming\Typora\typora-user-images\image-20220201213359566.png" alt="image-20220201213359566" style="zoom:50%;" />



Rodando o servidor: `$ npm start`

- Saída no terminal:

<img src="C:\Users\joao.duarte\AppData\Roaming\Typora\typora-user-images\image-20220201213809983.png" alt="image-20220201213809983" style="zoom:50%;" />

- Saída no Postman:

  <img src="C:\Users\joao.duarte\AppData\Roaming\Typora\typora-user-images\image-20220201214618203.png" alt="image-20220201214618203" style="zoom:50%;" />



Instalação da biblioteca do MySQL:

`$ npm install mysql2`

Instalação do Sequelize e suas dependências:

`$ npm install sequelize sequelize-cli path`

Criar um projeto vazio com o Sequelize:
`$ npx sequelize-cli init`

Saída:

<img src="C:\Users\joao.duarte\AppData\Roaming\Typora\typora-user-images\image-20220201222141503.png" alt="image-20220201222141503" style="zoom:50%;" />



Criação e configuração do arquivo .sequelizerc:

<img src="C:\Users\joao.duarte\AppData\Roaming\Typora\typora-user-images\image-20220201223113462.png" alt="image-20220201223113462" style="zoom:50%;" />



## Criando usuários no MySQL

Para acessar o terminal em sistemas Unix (Linux/MacOs) basta usar o comando `$ mysql -u [usuário] -p`. Por exemplo, para acessar com o usuário `root`: `mysql -u root -p`. O terminal vai solicitar a senha que você definiu para este usuário nas configurações iniciais e em seguida exibir o prompt do mysql: `mysql>`

Caso seu usuário atual do sistema não seja um usuário sudoer (ou seja, um usuário com privilégios de “administrador”) pode ser necessário o `sudo` no início do comando: `sudo mysql -u [usuário] -p` (você vai precisar da senha correspondente)

Se você utiliza Linux e está com problemas para fazer o Sequelize acessar o banco (o erro de “acesso negado ao usuário 'root'@'localhost'”), como vimos no vídeo, você pode criar um novo usuário para este projeto com os comandos:

`mysql> CREATE USER '[seu nome de usuário]'@'localhost' IDENTIFIED BY '[sua senha]';` - substitua as infos dentro dos colchetes pelas de sua preferência e não esqueça de deletar somente os colchetes - as aspas simples fazem parte do código.

Em seguida, dê ao novo usuário privilégios:

```
GRANT ALL PRIVILEGES ON * . * TO '[seu nome de usuário]'@'localhost';COPIAR CÓDIGO
```

Importante: Veja que o comando acima dá ao usuário recém-criado privilégios totais de acesso! Ao mesmo tempo que isso é OK enquanto se trabalha localmente, não é o que costuma acontecer quando se trabalha em um projeto com acesso de diversos usuários e informações sensíveis no banco, por razões de segurança.

Por último, rode o comando: `FLUSH PRIVILEGES;` para recarregar as permissões.

Acessando o MySQL pelo terminal:

<img src="C:\Users\joao.duarte\AppData\Roaming\Typora\typora-user-images\image-20220202074027703.png" alt="image-20220202074027703" style="zoom:50%;" />



Criando a base de dados:

<img src="C:\Users\joao.duarte\AppData\Roaming\Typora\typora-user-images\image-20220202074636026.png" alt="image-20220202074636026" style="zoom:50%;" />



Configurando pelo Sequelize dentro do caminho /api/config o arquivo config.json:

<img src="C:\Users\joao.duarte\AppData\Roaming\Typora\typora-user-images\image-20220202075222280.png" alt="image-20220202075222280" style="zoom:50%;" />





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

Foram percebidas algumas falhas de validação dos formulários por parte do front-end, o que resultou em dados de email inválidos no banco. É desejável que essa validação não seja responsabilidade exclusiva do front.

É importante poder consultar todas as matrículas confirmadas referentes a estudante X de forma rápida.

O cliente gostaria de poder consultar as turmas abertas por intervalo de data, para não receber informações desnecessárias (como turmas antigas).

O cliente quer poder consultar as matrículas por turma e saber quais delas estão lotadas, para organizar melhor as matrículas.

O cliente gostaria que, uma vez que o cadastro de um estudante fosse desativado, todas as matrículas relativas a este estudante automaticamente passassem a constar como “canceladas”.

Sequelize teve versão atualizada, siga os seguintes procedimentos:
`$ npm outdated`
Saída no terminal:
Package    Current  Wanted  Latest  Location                Depended by
sequelize   6.15.0  6.16.1  6.16.1  node_modules/sequelize  sequelizeTo

Acesse o arquivo package.json e altere na linha referente ao Sequelize para a versão atual: 
"sequelize": "^6.16.1",

Logo após digite o seguinte comando no terminal para atualizar: 
`$ npm update` 