import GameCell from "./GameCell.component.js";
import GameCellHandlers from "../eventHandlers/GameCell.handlers.js"
import GameBoardHandlers from "../eventHandlers/GameBoard.handlers.js";
export default class GameBoard{

    constructor(rowLength,columnLength,displayGameResults,resetGame,confirmContinue){
        this.rowLength = rowLength;
        this.columnLength = columnLength;
        this.gameCells = [];
        this.displayGameResults = displayGameResults;
        this.resetGame = resetGame;
        this.confirmContinue = confirmContinue;
        
    }

    generateRandomAmount()
    {
        let amount = Math.floor(Math.random(250000)*1000000);
        if(amount<500)
        {
            let diff = amount-500;
            amount+=diff;
        }
       return amount.toString();
    }

    createHtmlElement(){

        this.htmlElement = document.createElement("div");
        this.htmlElement.classList.add("lotto-star-game-board");
        let rowIndex =0;
       
        while(rowIndex<this.rowLength)
        {
            let columnIndex =0;
            while(columnIndex<this.columnLength)
            {
                let bagNum = this.gameCells.length+1;
                let gameCell = new GameCell("fas fa-box-usd",this.generateRandomAmount(),`Bag ${bagNum}`);
                let gameCellElement = gameCell.createHtmlElement();
                this.gameCells.push(gameCell);
                gameCellElement.setAttribute("id",this.gameCells.length);
                this.htmlElement.appendChild(gameCellElement);
                gameCell.htmlElement.addEventListener("click",GameCellHandlers.onClick);
                gameCell.htmlElement.addEventListener("animationend",GameCellHandlers.onAnimationEnd);
                
                columnIndex+=1;
            }
            rowIndex+=1;
        }
        this.htmlElement.addEventListener("click",()=>GameBoardHandlers.onClick(this,this.displayGameResults,this.resetGame,this.confirmContinue));
        return this.htmlElement;
    }

    render(container){
        container.innerHTML ="";
        container.appendChild(this.htmlElement);
        return this.htmlElement;
    }

}
