const frases= prompt ("Digite uma palavra ou frase")
console.log (frases)
const lista = []

for ( let i=0; i < frases.length; i++)
    { 
      lista.push(frases[i])
    }
    console.log (lista)

let fraseordenada = [ ]
const listaPalavras = [ "estudo", "Eu", "Senac", "no", "noite", "a" ]
let palavra = ""
for (let i=0; i < listaPalavras.length; i++)
    {
    palavra += `${listaPalavras[i]} `
    }
console.log(fraseordenada.join(' '), '')
console.log(palavra,'palavra')

const listanumeros = [ 1, 2, 3, 4, 5, 6, 7, 8, ]

let maiornumero = listanumeros [0]
let menornumero = listanumeros [0]
let resultado = []
for (let i=0; i < listanumeros.length; i++)
    {
        resultado=[]
      if( listanumeros [i] > maiornumero )
        { maiornumero = listanumeros [i] } 
    
      if( listanumeros [i] < menornumero)
        { menornumero = listanumeros[i]} 
    
    resultado.push(menornumero,maiornumero)
}

console.log (listanumeros)
console.log (menornumero)
console.log (maiornumero)
console.log(resultado)
