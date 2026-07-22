const emprestimo = prompt (" Digite o valor que deseja de empréstimo")
const parcela = prompt (" Digite quantas parcelas ")
const juros = prompt (" Digite os juros em cada parcelo")

const valor = parseFloat (emprestimo)
const parcelas = parseFloat (parcela)
const percentual = parseFloat (juros)

if (percentual < 5) {
    alert ("Erro: os juros mensais nao podem ser menores que 5% ao mes")
}
else { 
const jurosTotal = valor * (percentual / 100) * parcelas
const valorFinal = valor + jurosTotal
const valorParcela = valorFinal / parcelas

console.log(`Valor final do empréstimo com juros: R$ ${valorFinal.toFixed(2)}`)
console.log(`Valor de cada parcela com juros: R$ ${valorParcela.toFixed(2)}`)
console.log(`Número de parcelas: ${parcelas}`)
}




