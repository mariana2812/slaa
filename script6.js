const frase = prompt ("Digite uma frase")
let fraseformatada= ""
for (let i = 0; i < frase.length; i++) 
{
    if (i % 2 === 0) {
        fraseformatada += frase[i].toUpperCase();
    } else {
        fraseformatada += frase[i].toLowerCase();
    }
}
console.log(fraseformatada);
