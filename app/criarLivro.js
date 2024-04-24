import { conectaAPI } from "./conectaAPI.js";
const formulario = document.querySelector("[data-formulario]");

async function criaLivro(evento){
    evento.preventDefault();
    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const autor = document.querySelector("[data-autor]").value;
    const categoria = document.querySelector("[data-categoria]").value;

    await conectaAPI.criaLivro(imagem, url, titulo, autor, categoria);

    window.location.href = "../pages/envio-concluido.html";

}

formulario.addEventListener("submit", evento => criaLivro(evento));