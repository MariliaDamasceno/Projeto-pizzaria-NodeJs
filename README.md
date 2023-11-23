# Projeto-CRUD-pizzaria

(https://camo.githubusercontent.com/c0f29035c6709cf027b760604063e14e94308d2a979862926f900311fb78f44a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f642f64392f4e6f64652e6a735f6c6f676f2e7376672f3132303070782d4e6f64652e6a735f6c6f676f2e7376672e706e67)

Projeto final Modulo Back-end Development do Curso Desenvolvimento FullStack da Italentsdo modulo 2 curso de desenvolvimento FullStack.

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
