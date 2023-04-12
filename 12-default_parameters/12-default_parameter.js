function hello(name, surname){
    name = name || 'Willian'
    surname = surname || 'Justen'

    console.log(`hello ${name} ${surname}! how are you?`)
}

hello()
hello('Francisco', 'Paulo')


const Ola = (nome='Neto', idade=49)=>{
    console.log(`Ola, ${nome} você tem ${idade} anos`)
}

Ola()
Ola('Alanna', 34)