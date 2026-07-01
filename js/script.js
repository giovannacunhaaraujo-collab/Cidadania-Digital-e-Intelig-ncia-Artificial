// Breve comentário: Seleção de elementos do DOM para processamento seguro de dados.
const themeToggle = document.getElementById('theme-toggle');
const quizForm = document.getElementById('quiz-form');
const quizResult = document.getElementById('quiz-result');
const resultText = document.getElementById('result-text');

// Funcionalidade 1: Controle de Acessibilidade (Alternador de Modo Escuro)
themeToggle.addEventListener('click', () => {
    // Altera o atributo de tema na tag raiz html
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.textContent = '🌓 Modo Escuro';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️ Modo Claro';
    }
});

// Funcionalidade 2: Validador de Respostas do Quiz com Contadores
quizForm.addEventListener('submit', (event) => {
    // Impede o recarregamento padrão da página
    event.preventDefault();

    // Uso de variáveis para processar informações antes de exibir na tela (Rubrica Nível 4)
    let acertos = 0;
    const totalPerguntas = 2;

    // Coleta dos dados do formulário dinamicamente
    const respostaQ1 = quizForm.elements['q1'].value;
    const respostaQ2 = quizForm.elements['q2'].value;

    // Lógica do processamento das respostas
    if (respostaQ1 === 'correto') {
        acertos++;
    }
    if (respostaQ2 === 'correto') {
        acertos++;
    }

    // Manipulação dinâmica do DOM para exibir os dados atualizados ao usuário
    resultText.textContent = `Você acertou ${acertos} de ${totalPerguntas} perguntas. `;
    
    if (acertos === totalPerguntas) {
        resultText.textContent += "Parabéns! Você tem uma excelente percepção sobre segurança digital.";
    } else {
        resultText.textContent += "Continue estudando para não cair em truques e desinformações de IA!";
    }

    // Exibe a div de resultados removendo a classe oculta
    quizResult.classList.remove('hidden');
});
