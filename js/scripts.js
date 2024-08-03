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
    question: "Qual é a principal componente da atmosfera de Titã, lua de Saturno?",
    answers: [
      {
        answer: "Metano",
        correct: false,
      },
      {
        answer: "Nitrogênio",
        correct: true,
      },
      {
        answer: "Dióxido de carbono",
        correct: false,
      },
      {
        answer: "Oxigênio",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é a distância aproximada da Terra ao centro da Via Láctea?",
    answers: [
      {
        answer: "2.6 mil anos-luz",
        correct: false,
      },
      {
        answer: "8.5 mil anos-luz",
        correct: false,
      },
      {
        answer: "25 mil anos-luz",
        correct: true,
      },
      {
        answer: "50 mil anos-luz",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é o nome do fenômeno que ocorre quando uma estrela massiva colapsa em um buraco negro?",
    answers: [
      {
        answer: "Nova",
        correct: false,
      },
      {
        answer: "Supernova",
        correct: true,
      },
      {
        answer: "Pulsar",
        correct: false,
      },
      {
        answer: "Quasar",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é a teoria atualmente mais aceita para a origem do universo?",
    answers: [
      {
        answer: "Teoria do Estado Estacionário",
        correct: false,
      },
      {
        answer: "Teoria do Big Bang",
        correct: true,
      },
      {
        answer: "Teoria da Panspermia",
        correct: false,
      },
      {
        answer: "Teoria das Cordas",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é o nome da galáxia que está em rota de colisão com a Via Láctea?",
    answers: [
      {
        answer: "Galáxia de Andrômeda",
        correct: true,
      },
      {
        answer: "Galáxia do Triângulo",
        correct: false,
      },
      {
        answer: "Galáxia de Centaurus A",
        correct: false,
      },
      {
        answer: "Galáxia de Sombrero",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é o nome da missão que enviou o primeiro rover para Marte?",
    answers: [
      {
        answer: "Viking",
        correct: false,
      },
      {
        answer: "Pathfinder",
        correct: true,
      },
      {
        answer: "Curiosity",
        correct: false,
      },
      {
        answer: "Opportunity",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é a principal característica que distingue um buraco negro de um buraco de minhoca?",
    answers: [
      {
        answer: "Massa",
        correct: false,
      },
      {
        answer: "Densidade",
        correct: false,
      },
      {
        answer: "Horizonte de eventos",
        correct: true,
      },
      {
        answer: "Conexão entre diferentes pontos do espaço-tempo",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é o nome do método que utiliza a paralaxe estelar para medir distâncias astronômicas?",
    answers: [
      {
        answer: "Método de Trigonometria",
        correct: true,
      },
      {
        answer: "Método de Espectroscopia",
        correct: false,
      },
      {
        answer: "Método de Astrometria",
        correct: false,
      },
      {
        answer: "Método de Fotometria",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é o nome da região ao redor de um buraco negro onde nada pode escapar, nem mesmo a luz?",
    answers: [
      {
        answer: "Singularidade",
        correct: false,
      },
      {
        answer: "Horizonte de eventos",
        correct: true,
      },
      {
        answer: "Raio de Schwarzschild",
        correct: false,
      },
      {
        answer: "Disco de acreção",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é o nome do primeiro exoplaneta confirmado orbitando uma estrela semelhante ao Sol?",
    answers: [
      {
        answer: "51 Pegasi b",
        correct: true,
      },
      {
        answer: "HD 209458 b",
        correct: false,
      },
      {
        answer: "Kepler-186f",
        correct: false,
      },
      {
        answer: "Proxima Centauri b",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é o nome do fenômeno que explica a expansão acelerada do universo?",
    answers: [
      {
        answer: "Matéria escura",
        correct: false,
      },
      {
        answer: "Energia escura",
        correct: true,
      },
      {
        answer: "Radiação cósmica de fundo",
        correct: false,
      },
      {
        answer: "Efeito Doppler",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é o período de rotação do pulsar mais rápido conhecido?",
    answers: [
      {
        answer: "1.4 milissegundos",
        correct: true,
      },
      {
        answer: "2.8 milissegundos",
        correct: false,
      },
      {
        answer: "4.2 milissegundos",
        correct: false,
      },
      {
        answer: "6.4 milissegundos",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é a principal teoria sobre a formação da Lua?",
    answers: [
      {
        answer: "Teoria da Captura",
        correct: false,
      },
      {
        answer: "Teoria da Co-formação",
        correct: false,
      },
      {
        answer: "Teoria do Impacto Gigante",
        correct: true,
      },
      {
        answer: "Teoria da Fissão",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é a massa mínima necessária para que uma estrela termine sua vida como um buraco negro?",
    answers: [
      {
        answer: "1.4 massas solares",
        correct: false,
      },
      {
        answer: "3.0 massas solares",
        correct: true,
      },
      {
        answer: "8.0 massas solares",
        correct: false,
      },
      {
        answer: "20.0 massas solares",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é a temperatura aproximada do núcleo do Sol?",
    answers: [
      {
        answer: "1 milhão de Kelvin",
        correct: false,
      },
      {
        answer: "5 milhões de Kelvin",
        correct: false,
      },
      {
        answer: "10 milhões de Kelvin",
        correct: false,
      },
      {
        answer: "15 milhões de Kelvin",
        correct: true,
      },
    ],
  },
  {
    question: "Qual é a principal causa da emissão de radiação gama em explosões de supernovas?",
    answers: [
      {
        answer: "Decaimento radioativo de elementos pesados",
        correct: true,
      },
      {
        answer: "Fusão de núcleos atômicos",
        correct: false,
      },
      {
        answer: "Emissão de neutrinos",
        correct: false,
      },
      {
        answer: "Aniquilação de partículas e antipartículas",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é o nome do telescópio espacial que observou a radiação cósmica de fundo em micro-ondas com alta precisão?",
    answers: [
      {
        answer: "Hubble",
        correct: false,
      },
      {
        answer: "Kepler",
        correct: false,
      },
      {
        answer: "Planck",
        correct: true,
      },
      {
        answer: "Spitzer",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é a principal característica dos buracos negros supermassivos encontrados nos centros das galáxias?",
    answers: [
      {
        answer: "Baixa densidade",
        correct: false,
      },
      {
        answer: "Alta rotação",
        correct: false,
      },
      {
        answer: "Alta luminosidade",
        correct: false,
      },
      {
        answer: "Massa superior a um milhão de massas solares",
        correct: true,
      },
    ],
  },
  {
    question: "Qual é o nome do fenômeno que causa a curvatura da luz ao passar por um campo gravitacional intenso?",
    answers: [
      {
        answer: "Desvio para o vermelho gravitacional",
        correct: false,
      },
      {
        answer: "Lente gravitacional",
        correct: true,
      },
      {
        answer: "Efeito Doppler",
        correct: false,
      },
      {
        answer: "Efeito Compton",
        correct: false,
      },
    ],
  },
  {
    question: "Qual é o nome da missão espacial que trouxe amostras de asteroides para a Terra?",
    answers: [
      {
        answer: "Voyager",
        correct: false,
      },
      {
        answer: "New Horizons",
        correct: false,
      },
      {
        answer: "OSIRIS-REx",
        correct: true,
      },
      {
        answer: "Juno",
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

  //altera o número de perguntas totais
  const questionsQuantity = document.querySelector('#questions-qty')
  questionsQuantity.textContent = questions.length
}

//Reinicia o Quizz
const restartButton = document.querySelector('#restart')

restartButton.addEventListener('click', function() {
    location.reload()
})

// Inicializando o Quizz
init();
