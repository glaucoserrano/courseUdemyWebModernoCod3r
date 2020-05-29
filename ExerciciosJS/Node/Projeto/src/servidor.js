const express= require('express')
const bd = require('./bancoDados')
const bodyParser = require('body-parser')

const porta = 3003
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos',(req,res,next) => {
   res.send(bd.getProdutos())
}) 
app.get('/produtos/:id',(req,res,next) =>{
   res.send(bd.getProduto(req.params.id))
})
app.post('/produtos',(req,res,next)=>{
   const produto = bd.salvarProduto({
      nome: req.body.nome,
      preco: req.body.preco
   })
   res.send(produto)
})

app.put('/produtos/:id',(req,res,next)=>{
   const produto = bd.salvarProduto({
      id: req.params.id,
      nome: req.body.nome,
      preco: req.body.preco
   })
   res.send(produto)
})

app.delete('/produtos/:id',(req,res,next)=>{
   const produto = bd.deleteProduto(req.params.id)
   res.send(produto)
})

app.listen(porta,() => {
   console.log(`Servidor executando na porta ${porta}`)
})