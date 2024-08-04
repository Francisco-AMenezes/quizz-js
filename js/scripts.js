// Declarando variáveis
const question = document.querySelector("#questions");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0;

// Perguntas

const questions = [
  {
    question: 'Quem "adotou" o Bastion?:',
    answers: [
      {
        answer: "Torbjörn",
        correct: true,
      },
      {
        answer: "Reinhardt",
        correct: false,
      },
      {
        answer: "Soujorn",
        correct: false,
      },
      {
        answer: "Tracer",
        correct: false,
      },
    ],
  },

  {
    question: "Qual o nome da Tracer?:",
    answers: [
      {
        answer: "Olivia Colomar",
        correct: false,
      },
      {
        answer: "Vivian Chase",
        correct: false,
      },
      {
        answer: "Lena Oxton",
        correct: true,
      },
      {
        answer: "Amélie Lacroix",
        correct: false,
      },
    ],
  },
  {
    question: "Quem costumava alimentar o Pet da Soujurn com resto de comida?:",
    answers: [
      {
        answer: "Reinhardt",
        correct: false,
      },
      {
        answer: "Mercy",
        correct: true,
      },
      {
        answer: "Ana",
        correct: false,
      },
      {
        answer: "Soldado: 76",
        correct: false,
      },
    ],
  },
  {
    question: "Quem foi o líder do Monastério de Shambali?:",
    answers: [
      {
        answer: "Zenyatta",
        correct: false,
      },
      {
        answer: "Genji",
        correct: false,
      },
      {
        answer: "Ramattra",
        correct: false,
      },
      {
        answer: "Mondatta",
        correct: true,
      },
    ],
  },
  {
    question: "Qual destes personagens possui parentesco com Genji e Hanzo?:",
    answers: [
      {
        answer: "Kiriko",
        correct: true,
      },
      {
        answer: "Mei",
        correct: false,
      },
      {
        answer: "Mercy",
        correct: false,
      },
      {
        answer: "Tracer",
        correct: false,
      },
    ],
  },
  {
    question:
      "Qual destes personagens não habitou a estação espacial internacional?:",
    answers: [
      {
        answer: "Winston",
        correct: false,
      },
      {
        answer: "Hammond",
        correct: false,
      },
      {
        answer: "Sigma",
        correct: false,
      },
      {
        answer: "Tracer",
        correct: true,
      },
    ],
  },
];

// Substituição do quizz para a primeira pergunta

function init() {
  //criar a primeira pegunta
  createQuestion(0);
}

// Cria uma pergunta
function createQuestion(i) {
  // Limpar a questão anterior
  const oldButtons = answersBox.querySelectorAll("button");
  oldButtons.forEach(function (btn) {
    btn.remove();
  });

  //Alterar o texto da pergunta
  const questionText = document.querySelector("#question-text");
  const questionNumber = document.querySelector("#question-number");

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // Insere as alternativas

  questions[i].answers.forEach(function (answer, i) {
    //cria o template da questão do quizz
    const answerTemplate = document
      .querySelector(".answer-template")
      .cloneNode(true);
    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");

    letterBtn.textContent = letters[i];
    answerText.textContent = answer["answer"];

    answerTemplate.setAttribute("correct-answer", answer["correct"]);

    // Removendo hide e template class
    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template");

    // Inserir alternativas na tela
    answersBox.appendChild(answerTemplate);

    //Inserir evento de click nos botões
    answerTemplate.addEventListener("click", function () {
      checkAnswer(this);
    });
  });

  //Iterar o número da questão
  actualQuestion++;
}

// Verificando a resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answersBox.querySelectorAll("button");

  // verifica qual botão é o correto e adiciona as classes
  buttons.forEach(function (button) {
    if (button.getAttribute("correct-answer") == "true") {
      button.classList.add("correct-answer");
      // checa se o usuário acertou a pergunta
      if (btn === button) {
        //incrementa os pontos
        points++;
      } else {
      }
    } else {
      button.classList.add("wrong-answer");
    }
  });

  //Exibe a próxima pergunta
  nextQuestion();
}

//Exibe a próxima pergunta
function nextQuestion() {
  // seta um timer para o usuário ver as respostas
  setTimeout(function () {
    //verifica se já está na última pergunta
    if (actualQuestion >= questions.length) {
      // aperesenta a mensagem de sucesso
      showSuccessMessage();
    }

    createQuestion(actualQuestion);
  }, 1200);
}

// Exibe a tela final
function showSuccessMessage() {
  quizzContainer.classList.toggle("hide");
  scoreContainer.classList.toggle("hide");

  //trocar dados do score
  //calcular o score
  const score = ((points / questions.length) * 100).toFixed(2);
  const displayScore = document.querySelector("#display-score span");

  displayScore.textContent = score.toString();

  //aterar o número de perguntas corretas
  const correctAnswers = document.querySelector("#correct-answers");

  correctAnswers.textContent = points;

  //altera o número de perguntas totais
  const questionsQuantity = document.querySelector('#questions-qty')
  questionsQuantity.textContent = questions.length
}


const restartButton = document.querySelector('#restart')

restartButton.addEventListener('click', function() {
    location.reload()
})


// Inicializando o Quizz
init();