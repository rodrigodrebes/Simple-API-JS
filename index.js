const express = require('express') // Express é um framework para Node.js que fornece recursos para construção de aplicações web e APIs.

const morgan = require('morgan') // Morgan é um middleware de logging de solicitações HTTP para Node.js. Ele simplifica o processo de log das solicitações para o aplicativo.

const cors = require('cors') // Cors é uma biblioteca que fornece um middleware Express para habilitar CORS (Cross-Origin Resource Sharing) em nosso aplicativo.

const bodyParser = require('body-parser') // Body-parser é um middleware que é responsável por analisar o corpo das solicitações HTTP recebidas.

const routes = require('./config/routes')

// cria o servidor
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended : false}))
app.use(express.json())
app.use(cors())
app.use(routes)

// Configuração da porta do servidor
app.listen(8080, () => {
  console.log(`Express started at http://localhost:8080`)
})

