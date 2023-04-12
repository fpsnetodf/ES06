

const ireland = ['Dublin', 'Galway', 'Cork']
const love = ireland.map(city => `Eu amo ${city}`) /* retorna um novo array */
const loveF = ireland.filter(l => l === "Galway" ? `Moro em ${l}` : '') /* filtra um dado especifico */
console.log(love)
console.log(loveF)

const loveChain = ireland
    .filter(nome => nome === 'Dublin')
    .map(nome => `Eu amo ${nome}`)

console.log(loveChain)