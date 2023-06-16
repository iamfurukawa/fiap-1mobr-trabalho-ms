# 1MOBR - Trabalho final de Microserviços

## Instalar

    yarn ou npm install

## Executar

    yarn start ou npm run start

## Serviço Client (porta: 3333):

Serviço para gerenciar usuários desde o seu cadastro até update de senha e criação de token de autenticação.

### Para retornar todos os clientes.

`GET /client`

### Para cadastrar novo cliente.

`POST /clientes`

    {
        "nomeusuario": "vinicius",
        "email": "vinicius_furuka@hotmail.com.br",
        "senha": "vinicius1234",
        "nomecompleto": "Vinícius Furukawa Carvalho",
        "telefone": "(13)99790-6387"
    }

### Para gerar um token para o cliente.

`POST /auth`

    {
        "email": "vinicius_furuka@hotmail.com.br",
        "senha": "vinicius1234"
    }

### Para atualizar a senha do usuário.

As senhas nova e atual devem ser diferentes e a senha atual deve ser igual a cadastrada.

`PATCH /clientes`

    {
        "senhaatual": "vinicius1234",
        "senhanova": "vinicius12345"
    }

## Serviço Account (porta: 4444):

Serviço para gerenciar contas bancárias de usuários desde o seu cadastro até update de informações e recuperação das mesmas. Para utilizar os endpoints é preciso estar com token Bearer que pode ser geradas no serviço de client.

### Para recuperar todas as contas.

`GET /account`

### Para criar uma conta.

`POST /account`

    {
        "nome_banco": "Nubank",
        "tipo_conta": "Conta Corrente",
        "nome_titular": "Vinícius Furukawa Carvalho",
        "limite_cartao": 20000.00
    }

### Para atualizar uma conta.

`PATCH /account/:id`

    {
        "nome_banco": "C6",
        "tipo_conta": "Conta Poupança",
        "nome_titular": "Vinícius F. Carvalho",
        "limite_cartao": 10000.00
    }