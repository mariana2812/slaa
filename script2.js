const nome = prompt(" Digite o preço do produto ")
const percentual = prompt(" Digite o percentual de desconto")

const produto = parseFloat(nome)
const desconto = parseFloat(percentual)
const valorFinal = produto - (produto * (desconto / 100));

alert(`O valor final do produto com desconto é R$ ${valorFinal.toFixed(2)}`);


const pesoDigitado = prompt("Digite o seu peso");
const alturaDigitada = prompt("Digite a sua altura");
const peso = parseFloat(pesoDigitado);
const altura = parseFloat(alturaDigitada);
const imc = peso / (altura * altura);

let classificacao = "";

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} 
else if (imc < 25) {
    classificacao = "Peso normal";
} 
else if (imc < 30) {
    classificacao = "Sobrepeso";
} 
else 
    {
    classificacao = "Obesidade";
}

alert(`Seu IMC é ${imc.toFixed(1)}.\nClassificação: ${classificacao}`);




const numero = prompt("digite um numero")

if(numero % 2 == 0)
{

alert (numero + ' é um numero par')
}
else
{

alert(numero+' é um numero impar')
}
    
