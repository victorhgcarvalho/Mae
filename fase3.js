const questions = [
    { question: "Quem é o assassino que apenas mata criminosos?", options: ["Jeffrey Dahmer", "Joe Goldberg", "Dexter Morgan", "Mickey Mouse"], answer: "Dexter Morgan" },
    { question: "Quem é o melhor advogado do mundo?", options: ["Harvey Specter", "Junior", "Saul Goodman", "He-man"], answer: "Harvey Specter" },
    { question: "Quem sabe mais de medicina?", options: ["Dr.House", "Jeane Rocha", "Victor Hugo", "John Watson"], answer: "Jeane Rocha" },
    { question: "Qual o presente mais valioso que você já me deu?", options: ["Um celular", "Seu amor", "Um videogame", "Uma viagem"], answer: "Seu amor" },
    { question: "O que eu mais quero te dizer hoje?", options: ["Te amo!", "Feliz aniversário!", "Você é incrível!", "Todas as opções"], answer: "Todas as opções" }
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const finishButton = document.getElementById("finish-button");
const quizContainer = document.getElementById("quiz-container");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    optionsContainer.innerHTML = "";
    nextButton.classList.add("hidden");
    finishButton.classList.add("hidden");

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
        button.classList.add("correct");
        if (currentQuestionIndex === questions.length - 1) {
            finishButton.classList.remove("hidden");
        } else {
            nextButton.classList.remove("hidden");
        }
    } else {
        button.classList.add("incorrect");
        setTimeout(() => button.classList.remove("incorrect"), 500);
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function finishQuiz() {
    quizContainer.style.display = "none";
    startCelebration();
}

function startCelebration() {
    document.body.classList.add("celebration");

    const heart = document.createElement("div");
    heart.classList.add("big-heart");
    heart.textContent = "TE AMO MÃE! ❤️";
    document.body.appendChild(heart);

    for (let i = 0; i < 20; i++) {
        const firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.top = `${Math.random() * 100}vh`;
        document.body.appendChild(firework);

        setTimeout(() => firework.remove(), 3000);
    }
}

loadQuestion();
