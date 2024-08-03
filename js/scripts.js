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
    question: 'Qual é a técnica utilizada para detectar ondas gravitacionais causadas pela fusão de buracos negros?',
    answers: [
      {
        answer: "Interferometria de Laser",
        correct: true,
      },
      {
        answer: "Astrometria de Radiofrequência",
        correct: false,
      },
      {
        answer: "Fotometria de Alta Precisão",
        correct: false,
      },
      {
        answer: "Espectroscopia de Absorção",
        correct: false,
      },
    ],
  },
  {
    question: 'Qual foi a missão espacial responsável por obter a primeira imagem de um buraco negro?',
    answers: [
      {
        answer: "Event Horizon Telescope",
        correct: true,
      },
      {
        answer: "Very Large Telescope",
        correct: false,
      },
      {
        answer: "Hubble Space Telescope",
        correct: false,
      },
      {
        answer: "James Webb Space Telescope",
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é o nome do fenômeno que descreve a aceleração da expansão do universo devido à energia escura?',
    answers: [
      {
        answer: "Expansão Cosmológica",
        correct: false,
      },
      {
        answer: "Constante Cosmológica",
        correct: true,
      },
      {
        answer: "Pressão de Radiação",
        correct: false,
      },
      {
        answer: "Expansão Exponencial",
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a previsão teórica para a massa de um axion, uma partícula hipotética candidata à matéria escura?',
    answers: [
      {
        answer: "10^-5 eV",
        correct: true,
      },
      {
        answer: "10^-2 eV",
        correct: false,
      },
      {
        answer: "10^-7 eV",
        correct: false,
      },
      {
        answer: "10^-10 eV",
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a principal evidência observacional para a existência da matéria escura?',
    answers: [
      {
        answer: "Curvas de rotação das galáxias",
        correct: true,
      },
      {
        answer: "Lente gravitacional fraca",
        correct: false,
      },
      {
        answer: "Radiação cósmica de fundo",
        correct: false,
      },
      {
        answer: "Velocidade de recessão de quasares",
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é o fenômeno responsável pela produção de neutrinos de alta energia em núcleos ativos de galáxias?',
    answers: [
      {
        answer: "Interações hadrônicas em jatos relativísticos",
        correct: true,
      },
      {
        answer: "Decaimento beta inverso",
        correct: false,
      },
      {
        answer: "Análise de pulsares",
        correct: false,
      },
      {
        answer: "Oscilações de neutrinos",
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é o nome do instrumento que mediu a polarização da radiação cósmica de fundo em micro-ondas?',
    answers: [
      {
        answer: "BICEP2",
        correct: true,
      },
      {
        answer: "Hubble Space Telescope",
        correct: false,
      },
      {
        answer: "James Webb Space Telescope",
        correct: false,
      },
      {
        answer: "Kepler Space Telescope",
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a técnica mais utilizada atualmente para detectar exoplanetas em torno de outras estrelas?',
    answers: [
      {
        answer: "Método de Trânsito",
        correct: true,
      },
      {
        answer: "Microlente gravitacional",
        correct: false,
      },
      {
        answer: "Astrometria de precisão",
        correct: false,
      },
      {
        answer: "Imagens diretas",
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é o conceito que descreve a "reionização" do universo?',
    answers: [
      {
        answer: "Reionização é a era em que o gás hidrogênio no universo foi reionizado por radiação de alta energia.",
        correct: true,
      },
      {
        answer: "Reionização é a era em que o gás hélio no universo foi reionizado por radiação de alta energia.",
        correct: false,
      },
      {
        answer: "Reionização é a era em que o universo passou de um estado ionizado para um estado neutro.",
        correct: false,
      },
      {
        answer: "Reionização é a era em que as galáxias começaram a se formar no universo.",
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a principal hipótese sobre a origem dos FRBs (Fast Radio Bursts)?',
    answers: [
      {
        answer: "Magnetares em rotação rápida",
        correct: true,
      },
      {
        answer: "Pulsares em rotação rápida",
        correct: false,
      },
      {
        answer: "Colapsos de buracos negros",
        correct: false,
      },
      {
        answer: "Explosões de supernovas",
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é o nome do fenômeno que ocorre quando duas estrelas de nêutrons se fundem?',
    answers: [
      {
        answer: "Kilonova",
        correct: true,
      },
      {
        answer: "Supernova",
        correct: false,
      },
      {
        answer: "Hipernova",
        correct: false,
      },
      {
        answer: "Micronova",
        correct: false,
      },
    ],
  },
  {
    question: 'Qual é a interpretação do efeito "lente gravitacional" na teoria da relatividade geral?',
    answers: [
      {
        answer: "A luz é desviada pela curvatura do espaço-tempo causada por um objeto massivo.",
        correct: true,
      },
      {
        answer: "A luz é desviada pela velocidade de rotação de um objeto massivo.",
        correct: false,
      },
      {
        answer: "A luz é desviada pela interação com partículas de matéria escura.",
        correct: false,
      },
      {
        answer: "A luz é desviada pela interação com campos magnéticos intensos.",
        correct: false,
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
      // apresenta a mensagem de sucesso
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

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector("#correct-answers");

  correctAnswers.textContent = points;

  //alterar o número de perguntas totais
  const questionsQuantity = document.querySelector('#questions-qty');
  questionsQuantity.textContent = questions.length;
}

const restartButton = document.querySelector('#restart');

restartButton.addEventListener('click', function() {
    location.reload();
});

// Inicializando o Quizz
init();

console.log(questions.length)