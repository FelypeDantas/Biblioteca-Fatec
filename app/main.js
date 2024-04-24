
let livros = [];
const endpointDaApi = './app/livros.json';

getBuscarLivrosDaAPI();
const inserirLivros = document.getElementById('livros');

async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointDaApi);
    livros = await res.json();
    exibirOsLivrosNaTela(livros);
}

function exibirOsLivrosNaTela(listaLivros){
    inserirLivros.innerHTML = '';
    listaLivros.forEach(livro => {
        inserirLivros.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}"
            alt="${livro.alt}" />
        <h2 class="livro__titulo"><a href="${livro.url}" target="_blank">
            ${livro.titulo}
            </a>
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <div class="tags">
            <span class="tag">${livro.categoria}</span>
        </div>
        </div>
        `

    });
}


