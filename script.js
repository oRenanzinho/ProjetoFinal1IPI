var lista_de_produtos = []



while (true) {

    var opcao = prompt(`
    Bem Vindo ao Cadastro de Produtos :D

    1. Cadastrar novo produto
    2. Editar produto
    3. Remover produto
    4. visualizar todos os produtos
 `)
     if (opcao == 1) {
      adicionar()
    } else if (opcao == 2) {
        editar()
    } else if (opcao == 3) {
        remover()
    } else if (opcao == 4) {
      ver()
    } else {
        alert("Nenhum das opções foram selecionadas!")
    }

}
lista = []

function adicionar(){
var objeto = {

    produto:'',
    marca:'',
    preco:'',
    quantidade_em_estoque:'',

}

objeto.produto = prompt("Digite o nome do produto:")
objeto.marca = prompt("Digite a marca do produto:")
objeto.preco = prompt("Digite o preço do produto:")
objeto.quantidade_em_estoque = prompt("Digite a quantia em estoque:")

lista_de_produtos.push(objeto)
alert("Produto registrado!")
}


function ver (){

var texto = ""

for(let i = 0; i < lista_de_produtos.length; i++){
texto +=`Produto: ${lista_de_produtos[i].produto}
 Marca: ${lista_de_produtos[i].marca} 
 Preço: ${lista_de_produtos[i].preco}
 Quantidade em estoque: ${lista_de_produtos[i].quantidade_em_estoque} \n`

}
alert(texto)
}

function editar(){
    var edit = prompt("edite o produto desejado")
    var objeto = {     
        produto:prompt("Digite o nome do produto:"),
        marca: prompt("Digite a marca do produto:"), 
        preco:prompt("Digite o preço do produto:")
    }

    var texto = `Produto: ${objeto.produto}

\n Marca: ${objeto.marca}

\n Preço: ${objeto.preco}`;

objeto[edit] = texto
}





function remover(){
    splice(i, 1)
}
