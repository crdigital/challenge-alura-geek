import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

function mostra(id){
    alert('id clicado:' + id);
}

export default function constroiCard(id,titulo,imagem,valor,icone_trash){
    const produto = document.createElement("div");
    produto.className = "card";
    produto.innerHTML = `           
        <img src="${imagem}" />
        <p>${titulo}</p>
        <div>                        
            ${valor}
            <img class="icon__card" src="${icone_trash}" alt="icone trash" width="20" onclick="mostra(${id})"/>            
        </div>
    `;

    return produto;
}

async function listaCards(){
    try {
        const listaAPI = await conectaAPI.listarCards();

        if(listaAPI.length === 0 ){
            lista.innerHTML = `<h2 class="mensagem__titulo">Sem produtos adicionados.</h2>`
        }else{
            listaAPI.forEach(element => {
                lista.appendChild(constroiCard(
                    element.id,
                    element.titulo,
                    element.imagem,
                    element.valor,
                    element.icone_trash
                ))
            });
        }
           
    } catch (error) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de produtos.</h2>`
    }    
}

listaCards();