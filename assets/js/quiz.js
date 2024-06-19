const quizData = [
    {
      question: "Qual é o maior mamífero marinho?",
      choices: ["Baleia Azul", "Tubarão Branco", "Golfinho", "Orca"],
      correct: 0
    },
    {
      question: "Qual é a maior barreira de corais do mundo?",
      choices: ["Grande Barreira de Coral", "Recife de Belize", "Recife de Apo", "Recife Mesoamericano"],
      correct: 0
    },
    {
      question: "Qual peixe é conhecido por sua habilidade de inflar-se como uma bola?",
      choices: ["Peixe-Balão", "Peixe-Palhaço", "Peixe-Espada", "Peixe-Voador"],
      correct: 0
    },
    {
      question: "Qual destes animais pode mudar de cor para se camuflar?",
      choices: ["Polvo", "Tubarão", "Baleia", "Golfinho"],
      correct: 0
    },
    {
      question: "Qual é o maior peixe do mundo?",
      choices: ["Tubarão-Baleia", "Tubarão-Branco", "Atum", "Salmão"],
      correct: 0
    },
    {
      question: "Quantos oceanos existem na Terra?",
      choices: ["Cinco", "Três", "Quatro", "Seis"],
      correct: 0
    },
    {
      question: "Qual é a principal causa de morte das tartarugas marinhas?",
      choices: ["Poluição plástica", "Caça", "Acidentes de barco", "Predação natural"],
      correct: 0
    },
    {
      question: "Qual desses animais é um crustáceo?",
      choices: ["Caranguejo", "Polvo", "Baleia", "Peixe-Espada"],
      correct: 0
    },
    {
      question: "Qual é o nome da corrente oceânica que regula o clima europeu?",
      choices: ["Corrente do Golfo", "Corrente de Humboldt", "Corrente do Pacífico Norte", "Corrente de Benguela"],
      correct: 0
    },
    {
      question: "Qual é a profundidade média dos oceanos?",
      choices: ["3.800 metros", "1.500 metros", "5.200 metros", "7.000 metros"],
      correct: 0
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionData = quizData[currentQuestion];
    document.getElementById('question').innerText = questionData.question;
    const choices = document.querySelectorAll('.choice');
    choices.forEach((choice, index) => {
      choice.innerText = questionData.choices[index];
      choice.style.backgroundColor = '';
      choice.disabled = false; 
    });
    document.getElementById('next-btn').style.display = 'none'; 
  }
  
  function selectAnswer(index) {
    const questionData = quizData[currentQuestion];
    const choices = document.querySelectorAll('.choice');
    choices.forEach((choice, i) => {
      choice.disabled = true;
      if (i === questionData.correct) {
        choice.style.backgroundColor = '#28a745';
      } else if (i === index) {
        choice.style.backgroundColor = '#dc3545';
      }
    });
    document.getElementById('next-btn').style.display = 'block';
    if (index === questionData.correct) {
      score++;
    }
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `
      <h2>Você respondeu corretamente ${score} de ${quizData.length} perguntas.</h2>
      <button onclick="restartQuiz()">Tente Novamente</button>
      <button onclick="goHome()">Página Inicial</button>
    `;
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    window.location.href = 'quiz.html';
  }
  
  function goHome() {
    window.location.href = 'index.html';
  }
  
  document.addEventListener('DOMContentLoaded', loadQuestion);
  