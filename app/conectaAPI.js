async function criaLivro(imagem, url, titulo, autor,  categoria){
    const conexao = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imagem: imagem,
            url: url,
            titulo: titulo,
            autor: autor,
            categoria: categoria
        })
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaAPI = {
    criaLivro
}