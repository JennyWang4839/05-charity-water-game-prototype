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

function closeInventory(){
  const inventory = document.getElementById("inventory");
  
  if (inventory.style.display === "block") {
      inventory.style.display = "none";
  } 
  
  else {
      inventory.style.display = "block";
  }
};

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

  if (input === 1 && codeInput === "0322") {
      alert("Correct code! You've unlocked the next part of the game.");

      document.getElementById("popup-lock").classList.add("hidden");
  }

  else if (input === 2 && codeInput === "0000") {
    alert("Correct code! You've sucessfully escaped the room!");

    document.getElementById("popup-lock").classList.add("hidden");
  }

  else {
      alert("Incorrect code. Please try again.");
  }
}

window.onload = function() {
    setTimeout(() => {
        document.getElementById("intro").classList.add("fade");
    }, 1500);
};

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