const palavra = "Mariana"
let palavrainvertida = ""
for(let i=palavra.length-1; i >= 0; i--)
{
 console.log("for",i, palavra[i])
   
 palavrainvertida += palavra[i]; 
}
console.log("A palavra invertida é", palavrainvertida)