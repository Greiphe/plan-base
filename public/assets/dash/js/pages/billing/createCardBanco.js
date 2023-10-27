// Função para criar um novo card com base nos dados do objeto card
function createCard(card) {
    // Crie um elemento div para representar o card
    const newCard = document.createElement('div');
    newCard.className = 'col-md-6 mb-md-0 mb-4';

    // Preencha o HTML do card com os dados do objeto card
    newCard.innerHTML = `
      <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row mt-2">
        <img class="w-10 me-3 mb-0 cartao-info" src="/assets/dash/img/icons-banks/${card.Banco.toLowerCase()}-black.svg" alt="logo">
        <h6 class="mb-0 cartao-info">${card.Agência} / ${card.NumeroConta}</h6>
        <button type="button" class="btn p-0 m-0 ms-auto btn-deletar" data-bs-toggle="modal"
          data-bs-target="#modalDelCardBanco" data-bs-whatever="Deletar"
          data-cartao="${card.Agência}/${card.NumeroConta}" data-logo="/assets/dash/img/icons-banks/${card.Banco.toLowerCase()}-black.svg">
          <img title="Delete" src="/assets/dash/img/icons/delete.svg" alt="Delete">
        </button>
      </div>
    `;

    // Adicione o card à seção desejada no HTML (dentro do elemento com a classe 'card-body')
    document.querySelector('.card-body .row').appendChild(newCard);

    // Limpe os campos do modal
    document.querySelector('input[name="Agência"]').value = '';
    document.querySelector('input[name="Número conta"]').value = '';
    document.querySelector('input[name="Taxa"]').value = '';
    document.getElementById('tipoCategoria').value = '';
    document.getElementById('valorBancario').value = '';

    // Emita um evento personalizado para fechar o modal
    const closeModalEvent = new Event('closeModal');
    document.getElementById('exampleModal3').dispatchEvent(closeModalEvent);
}

// Adicione um evento de clique ao botão "Adicionar" no modal de novo banco
document.getElementById('adicionarValor').addEventListener('click', function() {
    // Coletar os valores dos campos do modal
    const agencia = document.querySelector('input[name="Agência"]').value;
    const numeroConta = document.querySelector('input[name="Número conta"]').value;
    const taxa = document.querySelector('input[name="Taxa"]').value;
    const tipoCategoria = document.getElementById('tipoCategoria').value;
    const escolhaBanco = document.getElementById('valorBancario').value;

    // Criar o objeto card
    const card = {
        Agência: agencia,
        NumeroConta: numeroConta,
        Taxa: taxa,
        TipoDaCobrança: tipoCategoria,
        Banco: escolhaBanco,
    };

    // Criar um novo card com base nos dados do objeto card
    createCard(card);
});

// Adicione um ouvinte de evento para fechar o modal quando receber o evento personalizado
document.getElementById('exampleModal3').addEventListener('closeModal', function () {
    const modalNovoBanco = new bootstrap.Modal(document.getElementById('exampleModal3'));
    modalNovoBanco.hide();
});
