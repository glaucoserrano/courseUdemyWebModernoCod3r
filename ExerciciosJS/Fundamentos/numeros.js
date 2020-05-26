const peso1= 1.0
const peso2= Number('2.0')


console.log(peso1,peso2)

console.log(Number.isInteger(peso1))

const avaliacao1 = 9.873
const avaliacao2 = 6.532

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //.tofixed faz arredondamento e coloca casas decimais.
console.log(media.toString()) //transforma em string o number

console.log(typeof media.toString(2)) // typeof imprime o tipo da variavel

console.log(media.toString(2)) // transforma em binario