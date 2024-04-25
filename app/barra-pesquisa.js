const barraDePesquisa = document.querySelector('.pesquisar__input');

barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa(){
    const livros = document.querySelectorAll('.livro');
    const valorFiltro = barraDePesquisa.value.toLowerCase();

    livros.forEach(livro => {
        const titulo = livro.querySelector('.livro__titulo').textContent.toLowerCase();

        if (!titulo.includes(valorFiltro)) {
            livro.classList.add('hidden');
        } else {
            livro.classList.remove('hidden');
        }
    });
}

// const barraDePesquisa = document.querySelector('.pesquisar__input');

// barraDePesquisa.addEventListener("input", filtrarPesquisa);

// function filtrarPesquisa(){
//     const livros = document.querySelectorAll('.livro');

//     if(barraDePesquisa.value != ""){
//         for(let livro of livros){
//             let titulo = livro.querySelector('.livro__titulo').textContent.toLowerCase();
//             let valorFiltro = barraDePesquisa.value.toLowerCase();

//             if(!titulo.includes(valorFiltro)){
//                 livro.style.display = 'none';
//             } else{
//                 livro.style.display = 'block';
//             }
//         }
//     } else{
//         livros.style.display = 'block';
//     }
// }

