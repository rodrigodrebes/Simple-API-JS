const express = require('express')
const routes = express.Router()

module.exports = routes

// Banco de dados local para teste
let db =[
  { '1': {Nome: 'Cliente 1', Idade: '20'} },
  { '2': {Nome: 'Cliente 2', Idade: '40'} },
  { '3': {Nome: 'Cliente 3', Idade: '50'} }

]

//Rota simples de GET
routes.get('/', (req, res) =>{
  return res.json(db)
})

//Rota simples de POST
routes.post('/add', (req, res) =>{
  const body = req.body

  if(!body)
    return res.status(400).end()

  db.push(body)
  return res.json(body)
})

//Rota simples de DELETE através do id
routes.delete('/:id', (req, res) =>{
  const id = req.params.id

  let newDB = db.filter(item =>{
    if(!item[id])
      return item
  })

  db = newDB

  return res.send(newDB)
})