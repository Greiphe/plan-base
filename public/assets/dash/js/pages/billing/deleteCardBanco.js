document.addEventListener('DOMContentLoaded', function () {
    const btnDeletar = document.querySelectorAll('.btn-deletar');
    const modalDelCardBanco = new bootstrap.Modal(document.getElementById('modalDelCardBanco'));
    const modalCardInfo = document.getElementById('modalCardInfo');
    const modalCardLogo = document.getElementById('modalCardLogo');
    const modalDeletarButton = document.getElementById('modalDeletarButton');
    const inputMatricula = document.querySelector('input[name="Matricula"]');
    const inputSenha = document.querySelector('input[name="Senha"]');

    btnDeletar.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const cartao = btn.getAttribute('data-cartao');
            const logo = btn.getAttribute('data-logo');

            modalCardInfo.innerText = cartao;
            modalCardLogo.src = logo;
            modalCardLogo.alt = 'logo';

            modalDeletarButton.addEventListener('click', function () {
                const cardToDelete = btn.closest('.col-md-6');
                if (cardToDelete) {
                    cardToDelete.classList.add('d-none');

                    if (inputMatricula && inputSenha) {
                        inputMatricula.value = '';
                        inputSenha.value = '';
                    }

                    modalDelCardBanco.hide();
                }
            });
        });
    });
});
