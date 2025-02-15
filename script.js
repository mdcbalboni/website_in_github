document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        // Verifica se o item já está aberto
        const isActive = item.classList.contains('active');

        // Fecha todos os itens
        document.querySelectorAll('.menu-item').forEach(i => {
            i.classList.remove('active');
            const content = i.querySelector('.content');
            if (content) content.style.display = 'none'; // Oculta o conteúdo
        });

        // Se o item clicado não estava aberto, abre ele
        if (!isActive) {
            item.classList.add('active');

            // Cria o conteúdo com base no data-target
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = item.getAttribute('data-target'); // Usa o valor do data-target

            // Adiciona o conteúdo ao item e exibe
            item.appendChild(content);
            content.style.display = 'block';
        }
    });
});
