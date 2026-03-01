const main = document.getElementById("master-element");
const container = document.getElementById("container");

const btnAddGrid = document.createElement("button");
btnAddGrid.textContent = "Add Grid";
btnAddGrid.classList = "btn-grid";

main.appendChild(btnAddGrid);

btnAddGrid.addEventListener("click", function() {
    let inputUser = prompt("masukkan jumlah grid yang anda inginkan");
    
    while(inputUser > 100 || inputUser < 1 || isNaN(inputUser) ) {
        inputUser = prompt("masukkan jumlah grid yang anda inginkan");
    }

    container.innerHTML = "";

    container.style.setProperty("--grid-size", inputUser);

    for(let i = 0; i < inputUser * inputUser; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "div-child";

        container.appendChild(newDiv);

        newDiv.addEventListener("mouseenter", function() {
            this.classList.add("change-color");
        })
    }
})