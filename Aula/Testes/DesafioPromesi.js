const fs = require('fs')

function ConterCaminho(caminho){

    cam = __dirname + '/' + caminho + '.json'

    return new Promise(resolve=> {  
        fs.readFile(cam, 'utf-8', function(err, conteudo){
        resolve(JSON.parse(conteudo))
        })
    })
}

ConterCaminho('teste')
    .then(valida => valida.db.Nome)
    .then(console.log)

