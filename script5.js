const palavra = prompt("Digite uma palavra:");
const tamanho = palavra.length;
let numVogais = 0 
let palavrainvertida = ""
for(let i=palavra.length-1; i >= 0; i--)
{ 
if (palavra[i]== "a" || palavra[i]== "e" || palavra[i]== "i" || palavra[i]== "o" || palavra[i]== "u")
    {
    numVogais++
    } 
 console.log("for",i, palavra[i])
   
 palavrainvertida += palavra[i]; 
}
console.log(`Tamanho da palavra: ${tamanho}`)
console.log(`Número de vogais: ${numVogais}`)
console.log(`Palavra invertida: ${palavrainvertida}`)