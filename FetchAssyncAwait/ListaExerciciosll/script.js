

const div = document.getElementById("mostrarAtividades")

function removerEx() {
    div.innerHTML = ""
}

async function exercicio1() {
    div.innerHTML = ""
    div.innerHTML = `
    <p> Exercício exibido no console. </p>
    `
    console.log("Exercicio 1: ")

    try {
        const resp = await fetch("https://viacep.com.br/ws/01001000/json/")
        const dados = await resp.json()
        console.log(`
        Rua: ${dados.logradouro}
        Bairro: ${dados.bairro}
        Cidade: ${dados.localidade}
        Estado: ${dados.uf}
        CEP: ${dados.cep}
        `)
    }
    catch (erro) {
        console.log(erro.message)
    }

}

async function exercicio2() {
    div.innerHTML = ""
    div.innerHTML = `
    <p> Exercício exibido no console. </p>
    `

    console.log("Exercício 2: ")

    try {
        const resp = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current_weather=true")
        const dados = await resp.json()
        console.log(`
            Clima em São Paulo
            Temperatura: ${dados.current_weather.temperature}
            Velocidade do vento: ${dados.current_weather.windspeed} km/h
            `)
    }
    catch (erro) {
        console.log(erro.message)
    }

}

async function exercicio3() {

    const resp = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    const dados = await resp.json()

    div.innerHTML = ""
    div.innerHTML += `
    <h2>Exercício 3:</h2> 
    <button onclick="removerEx()" class="botao-invisivel">Fechar</button>
    <div class="container">
        <img src="${dados.sprites.front_default}" width=300></img>
        <p>Nome: ${dados.name}</p>
        <p>Altura: ${dados.height}</p>  
    </div>
    `
}

async function exercicio4() {
    console.log("Exercício 4: ")

    const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    const dados = await resp.json()

    console.log("10 pokemon aleatórios:")
    div.innerHTML = ""
    div.innerHTML += `
    <h2>Exercício 4:</h2>
    <button onclick="removerEx()" class="botao-invisivel">Fechar</button>
    <br><br>
    <h3>10 pokemons aleatórios:</h3>
    `

    for (let i = 0; i < 10; i++) {
        console.log(dados.results[i].name)
        div.innerHTML += `
         - ${dados.results[i].name}
        `
    }
}

async function exercicio5() {
    const resp = await fetch("https://dog.ceo/api/breeds/image/random")
    const dados = await resp.json()

    div.innerHTML = ""
    div.innerHTML += `
    <h2>Exercício 5:</h2> 
    <button onclick="removerEx()" class="botao-invisivel">Fechar</button>
    <img src="${dados.message}"></img> 
    `
}

async function exercicio6() {
    console.log("Exercício 6: ")

    const resp = await fetch("https://catfact.ninja/fact")
    const dados = await resp.json()

    console.log(dados.fact)
    div.innerHTML = ""
    div.innerHTML += `
    <h2>Exercício 6:</h2> 
    <button onclick="removerEx()" class="botao-invisivel">Fechar</button>
    <p>Fato aleatório sobre gatos: <br> ${dados.fact}</p> 
    `
}

async function exercicio8() {
    console.log("Exercício 8: ")

    const resp = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
    const dados = await resp.json()

    console.log(dados.bitcoin.usd)

    div.innerHTML = ""
    div.innerHTML += `
    <h2>Exercício 8:</h2>
    <button onclick="removerEx()" class="botao-invisivel">Fechar</button>
    <p>Valor atual do Bitcoin em dólares: <br> ${dados.bitcoin.usd}</p> 
    `
}

async function exercicio9() {
    console.log("Exercício 9: ")

    const resp = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const dados = await resp.json()

    console.log(dados.title)

    div.innerHTML = ""
    div.innerHTML += `
    <h2>Exercício 9:</h2>
    <button onclick="removerEx()" class="botao-invisivel">Fechar</button>
    <p>${dados.title}</p> 
    `
}

async function exercicio10() {
    console.log("Exercício 10: ")
    
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const dados = await resp.json()

    console.log("Lista de posts")
    div.innerHTML = ""
    div.innerHTML += `
    <h2>Exercício 10:</h2>
    <button onclick="removerEx()" class="botao-invisivel">Fechar</button>
    <br><br>
    `

    for (let i = 0; i < 5; i++) {
        console.log(dados.title)
        div.innerHTML += `
        ${dados.title}
        `
    }
}

