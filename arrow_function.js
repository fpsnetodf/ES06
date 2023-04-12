const irelan = ["Dublin", "Galway", "Cork"]
const love = irelan.map((nome)=> `I love ${nome}`)


console.log(love)

const filtro = irelan
    .filter(nome => nome == 'Dublin')
    .map( nome => `Eu amo ${nome}`)
console.log(filtro)