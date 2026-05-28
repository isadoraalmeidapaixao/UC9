const urlPArams = new URLSearchParams(window.location.search);
const id = urlPArams.get(`id`);

console.log(id);

async function buscarDetalhes() {
    try{ //tenta buscar
        const response = await fetch(`http://10.24.90.15:5143/api/produtos/${id}`)
        const produto = await response.json();

        console.log(produto);

        document.getElementById("dados-produto").innerHTML = `
        <p><strong>ID: </strong> ${produto.id}</p>
        <p><strong>Nome: </strong>${produto.nome}</p>
        <p><strong>Preco: </strong>${produto.preco}</p>
        <p><strong>Quantidade: </strong>${produto.quantidadeEstoque}</p>
        <p><strong>Fornecedor: </strong>${produto.fornecedorId || 'Não cadastrado'}</p>
        <p><strong>Data de Vencimento: </strong> ${produto.dataVencimento || '--/--/--'}</p>        `

    } catch (error) { // se deu erro
        document.getElementById("dados-produto").innerHTML = '<p>Erro ao carregar detalhes</p>'
    }
}

buscarDetalhes()