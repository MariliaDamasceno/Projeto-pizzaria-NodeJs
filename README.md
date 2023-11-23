# Projeto-CRUD-pizzaria

![Logo NodeJs](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png)

Projeto final Modulo Back-end Development do Curso Desenvolvimento FullStack da Italents.

Projeto Express CRUD completo de uma pizzaria, desenvolvido no padrão MVC, conexão com banco de dados via mongoose e implementado JWT para melhorar aspecto de segurança na aplicação, definindo rotas de uso e documentação Swagger.

## Instalação

1. Baixe todo o codigo
2. Abra o terminal do VS Code
3. execute: npm i
4. rode usando: npm run dev

## Principais Recursos

### usuário

* **Get - /usuario/findAll**
* **Get - /usuario/findById**
* **Post - usuario/create**
* **Post - usuario/addAddress**
* **Post - usuario/addFavProduct**
* **Put - usuario/update**
* **Delete - usuario/remove**
* **Delete - usuario/removeAddres**s
* **Delete - usuario/removeFavProduct**

### Produto

* **Get - produto/findAll**
* **Get - produto/findById**
* **Post - produto/create**
* **Put - produto/update**
* **Delete - produto/remove**

### Pedido

* **Get - pedido/findAll**
* **Get - pedido/findById**
* **Post - pedido/create**
* **Put - pedido/updateStatusPedido**
* **Delete - pedido/remove**

### Categoria

* **Get - categoria/findAll**
* **Get - categoria/findById**
* **Post - categoria/create**
* **Put - categoria/update**
* **Delete - categoria/remove**

### Carrinho

* **Get - carrinho/findAll**
* **Get - carrinho/findById**
* **Post - carrinho/create**
* **Put - carrinho/update**
* **Delete - carrinho/remove**

### Sabores

* **Get - sabores/findAll**
* **Get - sabores/findById**
* **Post - sabores/create**
* **Put - sabores/update**
* **Delete - sabores/remove**

## Enpoints

Abaixo poderá visualizar uma tabela com os endpoints da aplicação.



| Code | Resposta                                                                  |
| :----- | --------------------------------------------------------------------------- |
| 200  | Retorna como válido                                                      |
| 201  | Retorna uma nova criação                                                |
| 400  | Retorna uma mensagem informando o erro                                    |
| 401  | Retorna o erro de autenticação                                          |
| 404  | Retorna uma mensagem informando que o item solicitado não foi encontrado |
