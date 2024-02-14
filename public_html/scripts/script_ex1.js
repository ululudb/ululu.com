// fetch só funciona quando está usando um servidor (ex:1)
// para arquivos locais o melhor é chamar os dados no script (ex:2)

// LENDO DE UM ARQUIVO NO SERVIDOR LOCAL
let divLOCAL = document.querySelector("#servlocal")
divLOCAL.innerHTML += `<h3> LENDO UM ARQUIVO NO SERVIDOR LOCAL (usando fetch) </h3>`
fetch('data/dados_ex1.json').then((response) => {
    response.json().then((dados) => {
        dados.usuarios.map((usuario) => {
            divLOCAL.innerHTML += `<li> ${usuario.nome} - ${usuario.idade} anos</li>`
        })
    })
})

// LENDO DO GITHUB
let divGIT = document.querySelector("#github")
divGIT.innerHTML += `<h3> LENDO DO GITHUB (usando fetch) </h3>`
// para funcionar tem que gerar o link
// https://raw.githubusercontent.com/<your_Github_username>/<your_repository_name>/<branch_name>/<file_name>.<extension_name>
var queryURL = 'https://raw.githubusercontent.com/ululudb/site/main/dados_ex1.json';
fetch(queryURL).then((response) => {
    response.json().then((dados) => {
        dados.usuarios.map((usuario) => {
            divGIT.innerHTML += `<li> ${usuario.nome} - ${usuario.idade} anos</li>`
        })
    })
})


