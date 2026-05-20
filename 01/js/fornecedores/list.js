async function carregarFornecedores() {
    try {
        const resposta = await fetch("https://localhost:7135/api/Fornecedores")
        const fornecedores = await resposta.json()

        const tbody = document.getElementById("tabela-fornecedores")

    } catch (error) {
        console.log("Erro ao carregar fornecedores", error)
    }
}

carregarFornecedores()