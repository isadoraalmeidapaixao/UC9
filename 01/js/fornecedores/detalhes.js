const urlPArams = new URLSearchParams(window.location.search);
const id = urlPArams.get(`id`);

console.log(id);

async function buscarDetalhes() {
    try{ //tenta buscar
        const response = await fetch(`http://10.24.90.15:5143/api/fornecedores/${id}`)
        const fornecedor = await response.json();

        console.log(fornecedor);

        document.getElementById("dados-fornecedor").innerHTML = `
        <p><strong>ID: </strong> ${fornecedor.id}</p>
        <p><strong>Nome Fantasia: </strong>${fornecedor.nomeFantasia}</p>
        <p><strong>CNPJ: </strong>${fornecedor.cnpj}</p>

    `
    } catch (error) { // se deu erro
        document.getElementById("dados-fornecedor").innerHTML = '<p>Erro ao carregar detalhes</p>'
    }
}

buscarDetalhes()