import GameCell from "./components/GameCell.component.js";

let gameCell = new GameCell("fas fa-box-usd","200");

let cellElement = gameCell.createHtmlElement();
gameCell.render(document.querySelector("#lotto-star-game-container"));