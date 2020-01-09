import GameBoard from "./components/GameBoard.component.js";
import GameCellHandler from "./eventHandlers/GameCell.handlers.js";
let gameBoardContainer = document.querySelector("#lotto-star-game-container");
const okButton = document.getElementById("ok-button");
const cancelButton = document.getElementById("cancel-button");

okButton.value ="ok";
cancelButton.value ="reset";
function displayGameResults(selectedBagElements,resetGame){
    setTimeout(()=>{
        selectedBagElements.forEach(ele=>{
                GameCellHandler.triggerRotate(ele);
        });
    },500);
}

function resetGame(gameBoardContainer){
    let lottoStarGameBoard = new GameBoard(4,4,displayGameResults,resetGame,confirmContinue);
    //document.querySelector(".lotto-star-confirm-box").classList.add("hide-ele");
    gameBoardContainer.innerHTML = "";
    lottoStarGameBoard.createHtmlElement();
    lottoStarGameBoard.render(gameBoardContainer);
    document.querySelector(".lotto-star-message").innerHTML = "Click On A Bag To Start";
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
            let selected = [...document.querySelectorAll(".lotto-star-game-cell-selected")];
            if(selected.length>0){
                displayGameResults(selected,resetGame);
            }
            else
            {
                document.querySelector(".lotto-star-message").innerHTML = "Click On A Bag To Start";
            }
            
        }
        else if(event.currentTarget.value=="reset")
        {
           resetGame(gameBoardContainer);
        }
    });
});
resetGame(gameBoardContainer);