export default class GameCell{
    
    constructor(iconClass,amount,bagText="Bag"){
        this.iconClass = iconClass;
        this.amount = amount;
        this.bagText = bagText;
    }

    createHtmlElement(){
        let cellElement = document.createElement("div");
        let iconContainer = document.createElement("div");
        let amountContainer = document.createElement("div");
    
        amountContainer.innerHTML = this.amount;
       

        this.htmlElement = cellElement;
        this.htmlElement.appendChild(amountContainer);
        this.htmlElement.appendChild(iconContainer);

        iconContainer.classList.add(...this.iconClass.split(" "),"lotto-star-bag-icon");
        iconContainer.innerHTML = this.bagText;
        cellElement.classList.add("lotto-star-game-cell");
        amountContainer.classList.add("lotto-star-amount");
        
        return this.htmlElement;
    }

    render(containerComponent){
        containerComponent.innerHTML ="";
        containerComponent.appendChild(this.htmlElement);
        return this.htmlElement;
    }
}