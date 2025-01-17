// Função para ir para a próxima fase
function nextPhase() {
    createHearts(); // Inicia a animação dos corações
    setTimeout(() => {
      window.location.href = 'fase1.html'; // Vai para a próxima fase depois da animação
    }, 3000); // Tempo para exibir os corações antes de mudar de página
  }
  
  // Criar corações animados ao clicar no botão
  function createHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
  
        // Posição aleatória para os corações
        heart.style.left = `${Math.random() * window.innerWidth}px`; 
        heart.style.top = `-30px`; // Começa acima da tela
        heart.style.animationDuration = `${2 + Math.random() * 3}s`; // Duração aleatória
        heart.style.animationDelay = `${Math.random()}s`; // Delay aleatório
  
        heartsContainer.appendChild(heart);
  
        // Remover coração após a animação para não sobrecarregar
        setTimeout(() => heart.remove(), 5000);
      }, i * 100);
    }
  }
  