const numero = 4
const numeros_vazio = [1]
console.log(numeros_vazio, 'lista numeros vazia')

const numeros_completos = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(numeros_completos, 'lista numeros completa')
console.log(numeros_completos[0], 'lista na posicao 0, ou index 0')

const nomes = ["Mariana", "Henry", "Andriele", "Matheus", "Vinícius"]
console.log(nomes, 'lista nomes', nomes[2], 'nomes no index 2')

const lista = [1, 2, 3, 4, 5]
console.log(lista, 'lista inicial')



const lista_aux = []
for (let i = 0; i < numeros_completos.length; i++) { 
    const valor = numeros_completos[i]
    lista_aux.push(valor * i) 
}
console.log(lista_aux, 'Lista multiplicada pelo index')



const nomes_invertidos = []
for (let i = nomes.length - 1; i >= 0; i--) { 
    nomes_invertidos.push(nomes[i])
}
console.log(nomes_invertidos, 'Nomes ao contrário')



const nomes_com_a = []
for (let i = 0; i < nomes.length; i++) {
    // const nome = nomes[i]
    // nome[0].toLowerCase() == "a"
    // nomes[i][0].toLowerCase() == "a"
    if (nomes[i].toLowerCase().startsWith('a')) {
        nomes_com_a.push(nomes[i])
    }
}
console.log(nomes_com_a, 'Começam com A')



const lista_classificada = []
for (let i = 0; i < numeros_completos.length; i++) {
    const num = numeros_completos[i]
    
    if (num % 5 === 0) {
        lista_classificada.push("xazam")
    } else if (num % 2 === 0) {
        lista_classificada.push("par")
    } else {
        lista_classificada.push("impar")
    }
}
console.log(lista_classificada, 'Classificação dos números')



let soma_total = 0
for (let i = 0; i < numeros_completos.length; i++) {
    soma_total += numeros_completos[i]
}
console.log(soma_total, 'Soma total dos números')



const apenas_pares = []
for (let i = 0; i < numeros_completos.length; i++) {
    if (numeros_completos[i] % 2 === 0) {
        apenas_pares.push(numeros_completos[i])
    }
}
console.log(apenas_pares, 'Apenas números pares')
