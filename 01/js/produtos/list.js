async function carregarProdutos() {
    try {
        const response = await fetch(`${API_BASE_URL}/produtos`);
        const produtos = await response.json();
        console.log(produtos);
        
        const tbody = document.getElementById("tabela-produtos")
        tbody.innerHTML = '';

        produtos.forEach(produto => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${produto.id}</td>
            <td>${produto.nome}</td>
            <td>${produto.preco}</td>
            <td>${produto.quantidadeEstoque}</td>
            <td>${produto.fornecedorId}</td>
            `
        tbody.appendChild(tr)
        });

    } catch (error) {
        // log capturado para a analise
        console.error("Erro ao carregar os produtos", error)
    }
}

carregarProdutos();