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

  else if (input === 2 && codeInput === "0000") {
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

function whichRoom() {
  const currentURL = window.location.href;
  
  if (currentURL.includes("index.html")) {
    return 1;
  }

  else if (currentURL.includes("room2.html")) {
    return 2;
  }

  else {
    return null;
  }
}

if (whichRoom() === 1) {
  let paintingClickCount = 0;

  let pillowClicked = false;

  const pillow = document.getElementById("pillow");

  const painting = document.getElementById("painting");

  const lock = document.getElementById("lock");

  const popupClue = document.getElementById("popup-clue");

  const popupCode = document.getElementById("popup-code");

  const popupLock = document.getElementById("popup-lock");

  pillow.onclick = () => {
    pillowClicked = true;

    popupClue.classList.remove("hidden");
  };

  painting.onclick = () => {
      if (pillowClicked === true) {
          paintingClickCount++;
      }

      if (paintingClickCount >= 2) {
          popupCode.classList.remove("hidden");
      }
  };

  lock.onclick = () => {
    popupLock.classList.remove("hidden");
  };
}

else {
  const windowlock = document.getElementById("windowlock");

  const popupLock = document.getElementById("popup-lock");

  const jerrycan = document.getElementById("jerrycan");

  const questions = [
    {
      question: "How many people lack access to clean water?",
      answers: ["500 million", "2 billion", "100 million"],
      correct: 1
    },
    {
      question: "How far do some people walk daily to collect water?",
      answers: ["1 mile", "4 miles", "10 miles"],
      correct: 1
    },
    {
      question: "How much water can a jerry can carry?",
      answers: ["20 liters", "5 liters", "50 liters"],
      correct: 0
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
        showQuestion();
      }

      else {
        alert("You have answered all the questions! You found a key in the jerry can!");

        addToInventory("Key");
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
}