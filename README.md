# Projeto-CRUD-pizzaria

![Logo da Minha Empresa](https://solidstudio.io/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Flofvu8al%2Fproduction%2F915aa873ca2e568f347fd579430ef38dd18cd8f3-420x308.png&w=1080&q=75.png)

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
