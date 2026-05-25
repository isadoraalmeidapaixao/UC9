async function carregarFornecedores() {
    try {
        const resposta = await fetch("https://localhost:7135/api/Fornecedores")
        const fornecedores = await resposta.json()

        const tbody = document.getElementById("tabela-fornecedores")
        tbody.innerHTML = '';

        fornecedores.forEach(fornecedor => {
            const novaLinhaDaTabela = document.createElement('tr')
            novaLinhaDaTabela.innerHTML = `
                <td>${fornecedor.id}</td>
                <td>${fornecedor.nomeFantasia}</td>
                <td>${fornecedor.cnpj}</td>
            `;
            tbody.appendChild(novaLinhaDaTabela)
        });
        
    } catch (error) {
        console.error("Erro ao carregar fornecedores", error)
    }
}

carregarFornecedores()