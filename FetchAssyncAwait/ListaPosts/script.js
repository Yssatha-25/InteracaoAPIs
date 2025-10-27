

// console.log("Etapa 1")
// console.log("Etapa 2")
// console.log("Etapa 3")
// console.log("Etapa 4")


// console.log("Etapa 1")

// setTimeout(() => { // "Etapa 2" só aparece após o tempo definido
//     console.log("Etapa 2")
// }, 3000);


// setInterval(() => { // a cada tantos segundos (5000milisegundos) mostra no console "Carregando..."
//     console.log("Carregando...")
// }, 5000);


// const objeto = [
//     {
//         userId: 1,
//         id: 1,
//         title: "abdoskl",
//         body: "malmka"
//     }
// ]


// async function PegarPosts(){
//     const respostaServ = await fetch(url)
    
//     console.log(respostaServ)
// }

// const url = "https://dummyjson.com/posts";

// async function PegarTodosPosts(){
//     try{
//         const resposta = await fetch(url) // await => pra esperar a resposta
//         console.log(resposta)

//         if(!resposta.ok){
//             throw new Error("Erro na requisição " + resposta.status)
//         }
        
//         const dados = await resposta.json()
//         console.log((dados.posts))

//     } catch(erro){
//         console.log("O erro foi: ", erro.message)
//     }
// }

// PegarTodosPosts()

const titulo = document.getElementById("titulo")
titulo.textContent="Assincronicidade" // muda o título


const url="https://dummyjson.com/posts";

async function PegarTodosPosts(){
    const resposta = await fetch(url)
    const dado = await resposta.json()

    dado.posts.map((post)=>{
        const div = document.createElement("div")
        const titulo = document.createElement("h2")
        const texto = document.createElement("p")
        const link = document.createElement("a")
        const tagPrimeira = document.createElement("h3")

        console.log(post)

        titulo.innerText = post.title
        texto.innerText = post.body
        tagPrimeira.innerText = post.tags[0]
        link.innerText = "Ler"
        link.setAttribute("href", `/post.html?id=${post.id}`) // criando atributos no javascript e dps colocando no html
        
        div.appendChild(titulo)
        div.appendChild(texto)
        div.append(tagPrimeira)

        postsContainer.appendChild(div)
    })
}

PegarTodosPosts()