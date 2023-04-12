const a = 1

const person = {}
person.nome = 'Francisco'
person.idade = 49

let mydiv = document.getElementById('test')
// mydiv.innerHTML =  '<p>ola mundo</p>'
mydiv.innerHTML = `<h3>${person.nome}  ${person.idade}</h3>`