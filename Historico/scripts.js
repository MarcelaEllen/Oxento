// Função para o botão "Voltar"
document.querySelector('.back-button').addEventListener('click', () => {
    window.history.back();
});

// Seleciona o formulário
const plantForm = document.getElementById('plant-form');
plantForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o recarregamento da página

    // Pega os valores do formulário
    const plantName = document.getElementById('plant-name').value;
    const plantAction = document.getElementById('plant-action').value;
    const plantDate = document.getElementById('plant-date').value;

    // Cria uma nova seção para a planta
    const newContainer = document.createElement('div');
    newContainer.classList.add('container');
    newContainer.innerHTML = `
    <div class="plant-container">
      <img src="https://via.placeholder.com/150" alt="Planta virtual" class="plant-image">
      <p class="plant-name">${plantName}</p>
    </div>
    <ul class="history">
      <li class="history-item">
        <span class="activity">${plantAction}</span>
        <span class="date">${new Date(plantDate).toLocaleDateString('pt-BR')}</span>
      </li>
    </ul>
    <button class="toggle-history">Mostrar/Ocultar Histórico</button>
  `;

    // Adiciona o novo container na página
    document.body.insertBefore(newContainer, document.querySelector('footer'));

    // Limpa o formulário
    plantForm.reset();
});

// Delegação de eventos para o botão "Mostrar/Ocultar Histórico"
document.body.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('toggle-history')) {
        // Seleciona o <ul> correspondente ao botão
        const history = e.target.previousElementSibling;

        // Alterna a exibição do histórico
        if (history.style.display === 'none' || history.style.display === '') {
            history.style.display = 'block';
            e.target.textContent = 'Ocultar Histórico';
        } else {
            history.style.display = 'none';
            e.target.textContent = 'Mostrar Histórico';
        }
    }
});

// Salva os dados no Local Storage
function saveData() {
    const data = document.body.innerHTML;
    localStorage.setItem('plantHistory', data);
}

// Carrega os dados ao abrir a página
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('plantHistory')) {
        document.body.innerHTML = localStorage.getItem('plantHistory');
    }
});

// Salva os dados antes de sair da página
window.addEventListener('beforeunload', saveData);
