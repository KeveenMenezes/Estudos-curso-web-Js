//Mulher chinesa com menor salario

const chinesa = (a) => (a.pais == 'China' && a.genero == 'F')  

const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

const info = funcionarios.filter(chinesa).reduce(menorSalario)

console.log(info)

})
