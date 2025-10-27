const resultado = document.getElementById("resultado")
const brnPesquisar = document.getElementById("pesquisar")

async function PesquisarCep() {
    const dados = await ResgatarDados() 
    console.log(dados)

    const cep = dados.cep
    const rua = dados.logradouro
    const bairro = dados.bairro
    const cidade = dados.localidade
    const estado = dados.estado

    CriarEndereço(cep, rua, bairro, cidade, estado)
}

async function ResgatarDados() {
    try {
        const respostaServ = await fetch("https://viacep.com.br/ws/88132857/json/")

        // se a resposta NÃO veio corretamente, ...
        if (!respostaServ.ok) {
            console.log("Falha ao tentar resgatar os dados da API de CEP.")
            return null
        }

        const dados = await respostaServ.json()
        return dados
    } catch (erro) {
        console.log(erro.message)
        return null
    }
}

function CriarEndereço(cep, rua, bairro, cidade, estado){
    
    resultado.innerHTML=""

    const container = document.createElement("div")
    const ul = document.createElement("ul")
    
    const el_cep = document.createElement("li")
    const el_rua = document.createElement("li")
    const el_bairro = document.createElement("li")
    const el_cidade = document.createElement("li")
    const el_estado = document.createElement("li")

    el_cep.textContent = "CEP: " + cep
    el_rua.textContent = "Rua: " + rua
    el_bairro.textContent = "Bairro: " + bairro
    el_cidade.textContent = "Cidade: " + cidade
    el_estado.textContent = "Estado: " + estado

    ul.append(el_cep, el_rua, el_bairro, el_cidade, el_estado)
    console.log(ul)
    container.append(ul)
    resultado.append(container)

    resultado.innerHTML+=`
    <button onclick="RemoverEndereço()">Fechar</button>
    `

    document.getElementById("pesquisar").classList.add("hidden")
}

function RemoverEndereço(){  
    resultado.innerHTML=""
    document.getElementById("pesquisar").classList.remove("hidden")
}