
const baseURL = 'http://localhost:3000/cards';

async function listarCards(){
    const getCards = await fetch(baseURL);
    const cards = await getCards.json();
    return cards;
}

async function criarProduto(titulo, imagem, valor, icone_trash ){
    const postProduto = await fetch(baseURL, {
        method: "post",
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            imagem: imagem,
            valor: `$ ${valor},00`,
            icone_trash: icone_trash
        })
    });
    if(!postProduto.ok){
        throw new Error("Não foi possível adicionar o produto.");
    }
    const produto = await postProduto.json();
    return produto;
}

async function deletarProduto(id){
    const removeProduto = await fetch(`${baseURL}/${id}`, {
        method: "delete",
    });
    if(!removeProduto.ok){
        throw new Error("Não foi possível remover o produto.");
    }
}

export const conectaAPI = {
    listarCards,
    criarProduto,
    deletarProduto    
}