let biblioteca = []
const titulo = document.querySelector("#titulo")
const autor = document.querySelector("#autor")
const genero = document.querySelector("#genero")
const ano = document.querySelector("#ano")
const formulario = document.querySelector("#formulario")
const form_buscar = document.querySelector("#form_buscar")
const buscar_titulo = document.querySelector("#buscar_titulo")

function criar_livro(e) {
    e.preventDefault()

    let livro = {
        titulo: titulo.value,
        autor: autor.value,
        genero: genero.value,
        ano: ano.value
    }
    console.log(livro);
    biblioteca.push(livro)
}

function buscar(nome) {
    nome.preventDefault()
    const result_livro = document.createElement("ul")


    biblioteca.forEach((livro) => {
        if (livro.titulo == nome.value) {
            livro.forEach((e) => {
                const item_lista = document.createElement("li")
                item_lista.textContent = e
                result_livro.appendChild(item_lista)


            })
        }

    })
    alert("livro nao encontrado")
}
formulario.addEventListener("submit", criar_livro)
form_buscar.addEventListener("submit", buscar)