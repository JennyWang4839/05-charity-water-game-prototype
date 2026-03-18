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

  item.textContent = text;

  inventory.appendChild(item);

  popup.classList.add("hidden");
}

let paintingClickCount = 0;

let pillowClicked = false;

const pillow = document.getElementById("pillow");

const painting = document.getElementById("painting");

const popup = document.getElementById("popup");

pillow.onclick = () => {
    pillowClicked = true;
};

painting.onclick = () => {
    if (pillowClicked === true) {
        paintingClickCount++;
    }

    if (paintingClickCount >= 2) {
        popup.classList.remove("hidden");
    }
};