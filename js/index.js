import GameBoard from "./components/GameBoard.component.js";

let lottoStarGameBoard = new GameBoard(4,4);
lottoStarGameBoard.createHtmlElement();
lottoStarGameBoard.render(document.querySelector("#lotto-star-game-container"));