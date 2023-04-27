# Simple Node.js API

Este é um projeto simples que demonstra como construir uma API RESTful com Node.js. A API é capaz de manipular um conjunto de dados de clientes em um banco de dados em memória.

## Funcionalidades

Esta API possui três principais rotas/endpoints:

- `GET /`: Retorna todos os clientes no banco de dados.
- `POST /add`: Adiciona um novo cliente ao banco de dados.
- `DELETE /:id`: Remove um cliente do banco de dados com base no id fornecido.

## Bibliotecas e funções

- **Express**: Este é o framework principal usado para construir a API. Ele facilita a configuração de rotas, middlewares e muito mais.

- **Morgan**: Este middleware é usado para registrar todas as solicitações HTTP que o servidor recebe. Isso é útil para depuração e monitoramento.

- **Cors**: Este middleware é usado para habilitar CORS (Cross-Origin Resource Sharing), que é uma segurança necessária para permitir que clientes de domínios diferentes acessem a API.

- **Body-parser**: Este middleware é responsável por analisar o corpo das solicitações HTTP recebidas. Ele suporta vários formatos de dados, incluindo JSON.

## Como rodar o projeto

1. Certifique-se de ter o [Node.js](https://nodejs.org/en/) e o [npm](https://www.npmjs.com/) instalados.

2. Clone o repositório ou baixe os arquivos.

3. Vá para o diretório do projeto via linha de comando.

4. Instale as dependências usando `npm install`.

5. Execute o servidor usando `node index.js`.

Agora você deve ver a mensagem `Express started at http://localhost:8080` no console. Isso significa que o servidor está rodando e ouvindo a porta 8080.
