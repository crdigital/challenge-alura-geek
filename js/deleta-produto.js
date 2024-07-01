import { conectaAPI } from "./conectaAPI.js";

const trashButton = document.querySelector("[data-excluir]");


async function deletaProduto(evento){
    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    const valor  = document.querySelector("[data-valor]").value ;
    const icone_trash = './images/🦆 icon _trash 2_.png';
    

    try {
        await conectaAPI.criarProduto(titulo, imagem, valor, icone_trash);

        alert('Produto adicionado com sucesso!');    
    } catch (error) {
        alert(error);
    }
    
}

trashButton.addEventListener("click", evento => deletaProduto(evento));
