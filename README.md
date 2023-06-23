<h1 align="center">Desafiando limites</h1>

<p align="center">
  <img alt="NextJs" src="https://img.shields.io/badge/NodeJs-%3E%3D%2016-green?style=flat-square" />
  <img alt="NextJs" src="https://img.shields.io/badge/NextJs-%3E%3D%2013-green?style=flat-square" />
  <img alt="NestJs" src="https://img.shields.io/badge/NextJs-%3E%3D%209-green?style=flat-square" />
</p>

<p align="center">
  Este projeto apresenta um sistema de login desenvolvido em um computador antigo, </br>
  com o objetivo de mostrar que é possível programar mesmo em dispositivos com recursos limitados.
</p>

</br>

<p align="center">
  <a href="#-Bibliotecas-e-tecnologias">Bibliotecas e tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Especificações">Especificações</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Instalação-e-execução">Instalação e execução</a>
</p>

## 📚 Bibliotecas e tecnologias

- [Clean architecture](https://www.google.com/search?q=o+que+%C3%A9+clean+architecture) | Um padrão de desenvolvimento de software
- [NodeJs](https://nodejs.org/) | Executa o JavaScript fora do navegador, no lado do servidor.
- [NestJs](https://nestjs.com/) | Um framework back-end que utiliza como padrão o TypeScript.
- [NextJs](https://nextjs.org/) | Um framework JavaScript web, baseado no React.js.
- [ReactJs](https://react.dev/) | Uma biblioteca JavaScript para criar interfaces de usuário interativas.
- [Typescript](https://www.typescriptlang.org/) | TypeScript é uma extensão do JavaScript que adiciona tipos estáticos opcionais para desenvolvimento mais seguro e produtivo.
- [Typeorm](https://typeorm.io/) | Uma biblioteca para facilitar o trabalho com bancos de dados relacionais usando TypeScript e JavaScript.
- [Mysql](https://www.mysql.com/) | MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS).
- [React bootstrap](https://react-bootstrap.netlify.app/) | Uma biblioteca que combina React.js com os estilos e componentes do Bootstrap para criar interfaces web modernas e responsivas.
- [Axios](https://axios-http.com/ptbr/docs/intro) | Axios é uma biblioteca JavaScript para fazer requisições HTTP de forma fácil e eficiente.
- [Bcrypt](https://www.npmjs.com/package/bcrypt) | Uma biblioteca de criptografia de senhas para proteção segura de informações sensíveis.
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) | Uma estrutura de token segura usada para autenticação e troca de informações confiáveis.
- [Moment](https://www.npmjs.com/package/moment) | Uma biblioteca JavaScript para manipulação de datas e horários.
- [Eslint](https://eslint.org/) | Uma ferramenta de análise de código JavaScript que ajuda a identificar e corrigir problemas de qualidade e estilo no código-fonte.
- [Lodash](https://lodash.com/) | Uma biblioteca JavaScript que oferece funções utilitárias para facilitar a manipulação de dados e tarefas comuns de programação.
- [Yup](https://www.npmjs.com/package/yup) | Uma biblioteca JavaScript para validar e garantir a integridade dos dados em aplicativos de forma simples e expressiva.
- [Js cookie](https://www.npmjs.com/package/js-cookie) | Uma biblioteca JavaScript para manipulação de cookies no navegador de forma simples e fácil.
- [Invariant](https://www.npmjs.com/package/invariant) | Uma função utilizada para verificar assertivamente condições específicas durante a execução de um programa.
- [Class validator](https://www.npmjs.com/package/class-validator) | Uma biblioteca para validar e verificar dados em classes e objetos em JavaScript/TypeScript.
- [Ip](https://www.npmjs.com/package/ip) | Uma ferramenta para trabalhar com endereços IP em JavaScript. 

----

## 🖥 Especificações
### Essse projeto foi desenvolvido em um computador com a seguinte configuração:
- Sistema operacional: Ubuntu 18.04.6 LTS
- Memória: 3,7 GiB DDR2
- Processador: Intel® Core™2 Duo CPU T5800 @ 2.00GHz × 2 
- Gráficos: Mobile Intel® GM45 Express Chipset (CTG)
- tipo de sistema: 64 bits
- Disco: 156,4 GB (HD)

---- 

## 🧩 Instalação e execução

### Antes de tudo, voce precisa ter o mysql instalado em sua maquina 
[install mysql](https://www.google.com/search?q=install+mysql)

### Inclua as credencias de conexão no arquivo database.providers.ts
#### caminho relativo para o arquivo: nestjs-auth/src/infrastructure/typeorm/database.providers.ts

<br />

### Configurar e executar o BACKEND (nestjs-auth)
### Abra um terminal (Pode ser o terminal do VsCode)

#### Instale todas as dependências
    $ cd nestjs-auth && npm install

#### Execute a build do projeto
    $ npm run build

#### Executar a migration (Criação das tabelas do banco)
    $ npm run typeorm migration:run -- -d dist/infrastructure/typeorm/database.providers.js

#### Comando para criar novas tabelas/migrations (Não obrigatório)
    $ npm run typeorm migration:create src/infrastructure/typeorm/migrations/table-name

#### Execute
    $ npm run start

<br />

### Configurar e executar o FRONTEND (nextjs-auth)
### Abra uma nova aba do terminal (Pode ser o terminal do VsCode)

#### Instale todas as dependências
    $ cd nextjs-auth && npm install

#### Execute a build do projeto
    $ npm run build

#### Execute
    $ npm run start

----

## Autor

<a href="https://www.linkedin.com/in/rodrigo-barbosa-7a1429157/">
 <sub>
    <b>Rodrigo Barbosa</b>
 </sub>
</a>
<a href="#" title="Rocket">🚀</a>

 <br />
 <br />

[![Github Badge](https://img.shields.io/github/followers/rodrigobarbosa12?style=social&link=https://github.com/rodrigobarbosa12)](https://github.com/rodrigobarbosa12)

<Feito com 💙 />
