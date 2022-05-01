let flipButton = document.querySelector(".flip-button");
let resetButton = document.querySelector(".reset-button");
let pennyImage = document.querySelector(".penny-image");
let headsCounterCell = document.querySelector("#heads-counter")
let tailsCounterCell = document.querySelector("#tails-counter")
let headsPercentageCell = document.querySelector("#heads-percentage")
let tailsPercentageCell = document.querySelector("#tails-percentage")

let headsCounter = 0;
let tailsCounter = 0;
headsCounterCell.textContent=headsCounter;
tailsCounterCell.textContent=tailsCounter;
headsPercentageCell.textContent="0%";
tailsPercentageCell.textContent="0%";


flipButton.addEventListener("click", function() {
    let randomNum = Math.floor(Math.random()*2); 
    if (randomNum === 0) {
        pennyImage.setAttribute("src", "./assets/penny-heads.jpg");
        headsCounter++
        headsCounterCell.textContent=headsCounter;
    } else {
        pennyImage.setAttribute("src", "./assets/penny-tails.jpg");
        tailsCounter++;
        tailsCounterCell.textContent=tailsCounter;
    }
    headsPercentageCell.textContent=Math.floor((headsCounter / (headsCounter+tailsCounter))*100) + "%"
    tailsPercentageCell.textContent=Math.floor((tailsCounter / (headsCounter+tailsCounter))*100) + "%"
});

resetButton.addEventListener("click", function() {
    pennyImage.setAttribute("src", "./assets/penny-heads.jpg");
    headsCounter=0;
    headsCounterCell.textContent=headsCounter;
    tailsCounter=0;
    tailsCounterCell.textContent=tailsCounter;
    headsPercentageCell.textContent="0%";
    tailsPercentageCell.textContent="0%";
});