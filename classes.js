class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    apresenta(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos `)
    }
}

const p = new Pessoa('Francisco', 49)
const f = new Pessoa('Paulo', 34)

console.log(p)
console.log(f.apresenta())


class Funcionario extends Pessoa{
    constructor(nome, idade, salario){
        super(nome, idade)
        this.salario = salario
    }
    apresentaFuncionario(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e meu salário é R$ ${this.salario}`)
    }
}

const funcionario = new Funcionario('Francisco', 49, 5600)
console.log(funcionario)
funcionario.apresentaFuncionario()