const axios= require('axios')
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const chineses = f=> f.pais==='China'
const mulheres = f=> f.genero==='F'
const menorSalario = (func,funcAtual)=> {
   return func.salario < funcAtual.salario ? func : funcAtual
}
axios.get(url).then(response=> {
   const funcionarios = response.data

   //Mulher chinesa com menor salario - Desafio - Resolução
   const func = funcionarios
      .filter(chineses)
      .filter(mulheres)
      .reduce(menorSalario)

   console.log(func)
})