// Log a message to the console to ensure the script is linked correctly
console.log('JavaScript file is linked correctly.');

let inventory = []
let keyFound = false

function updateInventory(){
    let list = document.getElementById("inventory")
    list.innerHTML = ""

    inventory.forEach(item =>{
        let li = document.createElement("li")
        li.textContent = item
        list.appendChild(li)
    })
}

function inspect(object){

    let description = document.getElementById("description")

    if(object === "desk"){

        if(!keyFound){
            description.textContent =
            "You open the desk drawer and find a small key! 🔑"

            inventory.push("Key")
            keyFound = true
            updateInventory()
        }

        else{
            description.textContent =
            "The desk drawer is empty."
        }
    }

    if(object === "painting"){
        description.textContent =
        "Behind the painting is a message: 'The key opens the door.'"
    }

    if(object === "door"){

        if(inventory.includes("Key")){
            description.textContent =
            "You unlock the door and escape! 🎉"
        }

        else{
            description.textContent =
            "The door is locked."
        }

    }
}