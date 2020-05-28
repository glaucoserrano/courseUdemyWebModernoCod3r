const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono...
const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)

//assincrono...
fs.readFile(caminho,'utf-8',(err,conteudo)=>{
   const config = JSON.parse(conteudo)
   console.log(`${config.db.host}: ${config.db.porta}`)
})

//ler json direto
const config = require('./arquivo.json')
console.log(config.db)

//ler diretorio
fs.readdir(__dirname, (err,arquivos)=>{
   console.log('Consteudo na pasta....')
   console.log(arquivos)
})