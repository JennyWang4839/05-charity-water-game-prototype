// Log a message to the console to ensure the script is linked correctly
console.log('JavaScript file is linked correctly.');

let inventory = []

let keyFound = false

const sidebar = document.getElementById("inventorySidebar");

function openInventory(){
  const inventory = document.getElementById("inventory");

  if (inventory.style.display === "none") {
      inventory.style.display = "block";
  } 
  
  else {
      inventory.style.display = "none";
  }
}

function addToInventory(text){
  const inventory = document.getElementById("inventoryList");

  const item = document.createElement("li");

  const popupCode = document.getElementById("popup-code");

  item.textContent = text;

  inventory.appendChild(item);

  popupCode.classList.add("hidden");
}

function checkCode(input) {
  const codeInput = document.getElementById("codeInput").value;

  const nextroomPopup = document.getElementById("popup-nextroom");

  if (input === 1 && codeInput === "0322") {
      document.getElementById("popup-lock").classList.add("hidden");

      nextroomPopup.classList.remove("hidden");
  }

  else if (input === 2 && codeInput === "2024") {
    document.getElementById("popup-lock").classList.add("hidden");

    alert("You have escaped!");
  }

  else {
      alert("Incorrect code. Please try again.");
  }
}

function nextRoom() {
  window.location.href = "room2.html";
}

function previousRoom() {
  window.location.href = "index.html";
}

window.onload = function() {
    setTimeout(() => {
        document.getElementById("intro").classList.add("fade");
    }, 1500);
};

const windowlock = document.getElementById("windowlock");

const popupLock = document.getElementById("popup-lock");

const jerrycan = document.getElementById("jerrycan");

const questions = [
  {
    question: "How much water can a jerry can carry?",
    answers: ["20 liters", "5 liters", "50 liters"],
    correct: "20 liters"
  },
  {
    question: "How many people lack access to clean water?",
    answers: ["500 million", "2 billion", "100 million"],
    correct: "2 billion"
  },
  {
    question: "How far do some people walk daily to collect water?",
    answers: ["1 mile", "4 miles", "10 miles"],
    correct: "4 miles"
  }
];

let currentQues = 0;

function showQuestion() {
  const questionElement = document.getElementById("question");

  const answerBtns = document.querySelectorAll(".answerBtn");

  questionElement.textContent = questions[currentQues].question;
  
  answerBtns.forEach((btn) => {
      btn.innerHTML = "";
  });

  answerBtns.forEach((btn, i) => {
    btn.textContent = questions[currentQues].answers[i];
  });
}

function checkAnswer(btn) {
  const answer = btn.textContent;

  if (answer === questions[currentQues].correct) {
    currentQues++;

    if (currentQues < questions.length) {
      document.getElementById("triviaResult").textContent = "";

      showQuestion();
    }

    else {
      document.getElementById("triviaResult").textContent = "";

      document.getElementById("popup-trivia").classList.add("hidden");
      
      document.getElementById("popup-clue").classList.remove("hidden");
    }
  }

  else {
    document.getElementById("triviaResult").textContent = "Incorrect! Please try again.";
  }
}

windowlock.onclick = () => {
  popupLock.classList.remove("hidden");
};

jerrycan.onclick = () => {
  document.getElementById("popup-trivia").classList.remove("hidden");

  showQuestion();
};