const questions = [
    {
        question: "Quem é o assasino que apenas mata crinosos?",
        options: ["Jeffrey Dahmer", "Joe Goldberg", "Dexter Morgan", "Mickey Mouse"],
        answer: "Dexter Morgan"
    },
    {
        question: "Quem é o melhor advogado do mundo?",
        options: ["Harvey Specter", "Junior", "Saul Goodman", "He-man"],
        answer: "Harvey Specter"
    },
    {
        question: "O que sempre me faz sorrir?",
        options: ["Chocolate", "Seus abraços", "Um filme", "Jogos"],
        answer: "Seus abraços"
    },
    {
        question: "Qual o presente mais valioso que você já me deu?",
        options: ["Um celular", "Seu amor", "Um videogame", "Uma viagem"],
        answer: "Seu amor"
    },
    {
        question: "O que eu mais quero te dizer hoje?",
        options: ["Te amo!", "Feliz aniversário!", "Você é incrível!", "Todas as opções"],
        answer: "Todas as opções"
    }
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    optionsContainer.innerHTML = "";
    nextButton.classList.add("hidden"); // Esconde o botão ao carregar nova pergunta

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => selectAnswer(button, option);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(button, selected) {
    if (selected === questions[currentQuestionIndex].answer) {
        button.classList.add("correct"); // Adiciona efeito de animação
        nextButton.classList.remove("hidden"); // Exibe o botão de próxima pergunta
    } else {
        button.classList.add("incorrect"); // Adiciona efeito de erro
        setTimeout(() => button.classList.remove("incorrect"), 500);
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    document.getElementById("quiz-container").classList.add("hidden");
    resultContainer.classList.remove("hidden");
}

function finish() {
    alert("Surpresa concluída! ❤️");
}

loadQuestion();
