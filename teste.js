

function valor(s) {
   
    var saldo = s   
    var mensagem = `O seu saldo é: ${ saldo > 0 ? `R$ ${saldo}` : `negativo: R$ ${saldo}`}`
    console.log("saldo: ", saldo)
    console.log(mensagem)
    saldo = -1000
    console.log("saldo: ", saldo)
    console.log(mensagem)
}

valor(1000)
valor(0)


// rest spread 

function somaC (...numeros){
    return numeros.reduce((total, numero) => total + numero)
}

console.log("A soma dos numeros passados foram:",somaC (1,2,3,4,6))
console.log("A soma dos numeros passados foram:",somaC (7,8,9,3,4,5))