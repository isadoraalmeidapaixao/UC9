const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

async function buscarDetalhes() {
    try {
    const reponse = await fetch(`${API_BASE_URL}/produtos/${id}`);
    if(!response) throw new Error("Erro ao carregar produto");

    const produto = await response.json();

    console.log(produto)

    document.getElementsById("dados-produto").innerHTML = `
        <h3>${produto.nome}</h3>
        <h4><strong>Preço:</strong> R$ ${produto.preco}</h4>
    `     
    } catch (error) {
        console.error("Erro ao carregar detalhes" , error)
    }



}

buscarDetalhes();