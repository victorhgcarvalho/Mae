function nextPhase() {
    createHearts(); // Inicia a animação dos corações
    setTimeout(() => {
      window.location.href = 'fase3.html'; // Vai para a próxima fase depois da animação
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



const correctCode = [0, 1, 1, 7];
let currentCode = [0, 0, 0, 0];
const digits = document.querySelectorAll(".digit");
const safeDoor = document.querySelector(".safe-door");
const messageContainer = document.querySelector(".message-container");
const nextButton = document.querySelector(".next-button");
const safeSound = document.getElementById("safeSound");
const correctSound = document.getElementById("correctSound");

// Adiciona evento de clique em cada número do cadeado
digits.forEach((digit, index) => {
    digit.addEventListener("click", () => {
        let value = parseInt(digit.textContent);
        value = (value + 1) % 10; // Incrementa o número e volta para 0 após 9
        digit.textContent = value;

        // Verifica se o número colocado está correto
        if (value === correctCode[index]) {
            correctSound.play(); // Toca o som apenas se o número estiver certo
        }

        currentCode[index] = value;
        checkCode();
    });
});

// Verifica se a combinação está correta
function checkCode() {
    if (JSON.stringify(currentCode) === JSON.stringify(correctCode)) {
        openSafe();
    }
}

// Abre o cofre ao acertar a combinação
function openSafe() {
    safeDoor.classList.add("opened");

    // Toca o som do cofre abrindo
    safeSound.play();

    setTimeout(() => {
        messageContainer.classList.remove("hidden"); // Agora a mensagem aparece fora do cofre
        messageContainer.classList.add("show");
        nextButton.classList.remove("hidden");
    }, 1200);
}
