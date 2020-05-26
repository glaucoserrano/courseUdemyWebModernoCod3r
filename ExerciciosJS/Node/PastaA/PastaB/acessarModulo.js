const moduloA = require('../../ModuloA')

console.log(moduloA.ola)

 
const http = require('http')
http.createServer((req,res)=>{
   res.write('Bom dia pessoal!')
   res.end()
}).listen(8080)


 const C = require('../PastaC') //acessa sem passar arquivo pois esta nomeado como Index.js
 console.log(C.ola2)