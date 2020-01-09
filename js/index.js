import GameBoard from "./components/GameBoard.component.js";

let gameBoardContainer = document.querySelector("#lotto-star-game-container");
const okButton = document.getElementById("ok-button");
const cancelButton = document.getElementById("cancel-button");

okButton.value ="ok";
cancelButton.value ="reset";
function displayGameResults(selectedBagElements,resetGame){

}

function resetGame(gameBoardContainer){
    let lottoStarGameBoard = new GameBoard(4,4,displayGameResults,resetGame,confirmContinue);
    document.querySelector(".lotto-star-confirm-box").classList.add("hide-ele");
    gameBoardContainer.innerHTML = "";
    lottoStarGameBoard.createHtmlElement();
    lottoStarGameBoard.render(gameBoardContainer);
}

function confirmContinue(message){
    let confirmBoxSelector = ".lotto-star-confirm-box";
    let confirm = document.querySelector(confirmBoxSelector);
    
    document.querySelector(confirmBoxSelector+">.lotto-star-message").innerHTML =message;
    confirm.classList.add("show-ele");
    return document.getElementById("ok-button").hasAttribute("lotto-star-game-continue");
}


[okButton,cancelButton].forEach(btn=>{
    btn.addEventListener("click",event=>{
        if(event.currentTarget.value=="ok"){
            okButton.setAttribute("lotto-star-game-continue","true"); 
        }
        else
        {
           resetGame(gameBoardContainer);
        }
    });
});
resetGame(gameBoardContainer);