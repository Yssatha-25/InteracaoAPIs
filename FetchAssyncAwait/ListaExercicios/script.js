
// EXERCICIO 1

async function exercicio1() {
    try {
        console.log("Exercício 1: ")
        const resposta = await fetch("https://viacep.com.br/ws/88161789/json")
        const dados = await resposta.json()
        console.log(dados)
    }
    catch (erro) {
        console.log(erro.message)
    }
}


// EXERCICIO 2

async function exercicio2() {
    try {
        console.log("Exercício 2: ")
        const resposta = await fetch("https://viacep.com.br/ws/88132857/json")
        const dados = await resposta.json()
        console.log(`
            Logradouro 1: ${dados.logradouro}
            `)
    }
    catch (erro) {
        console.log(erro.message)
    }
}

// EXERCICIO 3

url1 = "https://viacep.com.br/ws/88132857/json"
url2 = "https://viacep.com.br/ws/88104800/json"

async function exercicio3() {
    try {
        console.log("Exercício 3: ")
        const resposta1 = await fetch(url1)
        const resposta2 = await fetch(url2)
        const dados1 = await resposta1.json()
        const dados2 = await resposta2.json()
        console.log(`
        CEP 1: ${dados1.cep}
        CEP 2: ${dados2.cep}
        `)
    }
    catch (erro) {
        console.log(erro.message)
    }
}

// EXERCICIO 4

async function exercicio4() {
    console.log("Exercício 4: ")
    try {
        const resposta = await fetch("https://viacep.com.br/ws/88132857/json")
        const dados = await resposta.json()
        console.log(dados)
    }
    catch (erro) {
        console.log("Houve um erro ao tentar buscar o CEP.")
        console.log(erro.message)
    }
}

// EXERCICIO 5

let divMostrarEx = document.getElementById("mostrarEx")

function apagarEx() {
    divMostrarEx.innerHTML = ""
}

async function exercicio5() {
    console.log("Exercício 5. ")
    try {
        const resposta = await fetch("https://viacep.com.br/ws/88104800/json")
        const dados = await resposta.json()
        divMostrarEx.innerHTML = ""
        divMostrarEx.innerHTML += `
        <h3>Exercício 5</h3> 
        <button onclick="apagarEx()" class="botao-invisivel">Fechar exercício</button>
        <p> CEP: ${dados.cep} </p>
        <p> Rua: ${dados.logradouro} </p>
        <p> Bairro: ${dados.bairro} </p>
        <p> Cidade: ${dados.localidade} </p>
        <p> Estado: ${dados.uf} </p>
        `
    }
    catch (erro) {
        console.log(erro.message)
    }
}

// EXERCICIO 6

function exercicio6() {
    fetch("https://viacep.com.br/ws/88104800/json")
        .then(res => res.json())
        .then(console.log("Exercício 6: "))
        .then(dados => console.log("CEP: " + dados.cep + "Cidade: " + dados.localidade))
}

// EXERCICIO 7 - Faça um fetch para um CEP invalido e obeserve o que acontece com catch

function exercicio7() {
    fetch("https://viacep.com.br/ws/88104800/json")
        .then(console.log("Exercío 7 - erro nos dados:"))
        .then(res => {
            if (!res.ok) {
                throw new Error("Houve um erro com o CEP.")
            }
            return res.json()
        })
        .then(dados => {
            if (dados.erro) {
                throw new Error("Houve um erro nos dados.")
            }
            console.log("CEP: " + dados.cep + "\nCidade: " + dados.localidade)
        })
        .catch(erro => {
            console.log(erro.message)
        })
}

// EXERCICIO 8 - mostre na tela a menssagem carregando enquanto os dados não chegam

let divStatusDados = document.getElementById("statusDados")

async function exercicio8() {

    divStatusDados.classList.remove("hidden")

    console.log("Exercício 8. ")
    try {
        const resposta = await fetch("https://viacep.com.br/ws/88104800/json")
        const dados = await resposta.json()
        divMostrarEx.innerHTML = ""
        divMostrarEx.innerHTML += `
        <h3>Exercício 8</h3> 
        <button onclick="apagarEx()" class="botao-invisivel">Fechar exercício</button>
        <p> CEP: ${dados.cep} </p>
        <p> Rua: ${dados.logradouro} </p>
        <p> Bairro: ${dados.bairro} </p>
        <p> Cidade: ${dados.localidade} </p>
        <p> Estado: ${dados.uf} </p>
        `
    }
    catch (erro) {
        console.log(erro.message)
    }

    divStatusDados.classList.add("hidden")
}


// EVENTOS 
const btnEx8 = document.getElementById("ex8")
btnEx8.addEventListener("click", async ()=>{
    exercicio8()  
})

