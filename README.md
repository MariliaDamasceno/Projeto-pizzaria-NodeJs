# Projeto-CRUD-pizzaria

![Logo NodeJs](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png)

Projeto final Modulo Back-end Development do Curso Desenvolvimento FullStack da Italents.

Projeto Express CRUD completo de uma pizzaria, desenvolvido no padrão MVC, conexão com banco de dados via mongoose e implementado JWT para melhorar aspecto de segurança na aplicação, definindo rotas de uso e documentação Swagger.

## Instalação

1. Baixe todo o codigo
2. Abra o terminal do VS Code
3. execute: npm i
4. rode usando: npm run dev

## Enpoints

Abaixo poderá visualizar uma tabela com os endpoints da aplicação.

### Usuario


| Code | Resposta                                                      |
| ------ | --------------------------------------------------------------- |
| 400  | Retorna uma mensagem informando o erro                        |
| 401  | Retorna o erro de autenticação                              |
| 404  | Retorna uma mensagem informando que não encontrou o usuário |

### Produto


| Code | Resposta                                                     |
| :----- | -------------------------------------------------------------- |
| 200  | Retorna um produto válido                                   |
| 201  | Retorna a criação de um produto novo                       |
| 400  | Retorna uma mensagem informando o erro                       |
| 401  | Retorna o erro de autenticação                             |
| 404  | Retorna uma mensagem informando que não encontrou o produto |
