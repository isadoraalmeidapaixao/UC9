const form = document.getElementById("form-fornecedor");

async function salvarFornecedor() {

    // caputrar o evento de 'click' em 'botaoSalvar'
    form.addEventListener('submit', async(e) => {
        e.preventDefault();

        // buscar os inputs e seus valores
        const nome = document.getElementById('nome').value
        const cnpj = document.getElementById('cpnj').value

        // adicionar validadores
        if (!nome || !cnpj) {
            alert('Por favor, preencha todos os campos obrigatórios!');
            return;
        }
        
        // tentar enviar esses valores para minha API
        const fornecedorDados = {
            nomeFantasia: nome,
            cnpj: cnpj
        }

        const url = `${API_BASE_URL}/fornecedores`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(fornecedorDados)
            });

            if (!response.ok) throw new Error("Erro ao salvar fornecedor")

            window.location.href = 'index.html';
        } catch (error) {
            console.error("Erro ao salvar: ", error);
            alert('Erro ao salvar o fornecedor. Tente novamente!')
        }
    })
}

salvarFornecedor();