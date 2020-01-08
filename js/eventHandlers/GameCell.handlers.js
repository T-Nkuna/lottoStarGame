let eventHandlers = {};

eventHandlers.onClick = function(event){
    highlightCell(event.currentTarget);
}

eventHandlers.onMouseOut = function(event){

    let targetClassName = "lotto-star-highlight-cell";
    if(event.currentTarget.classList.contains(targetClassName)  && !event.currentTarget.classList.contains("lotto-star-selected-cell")){
        event.currentTarget.classList.remove(targetClassName);
    }
}

eventHandlers.onMouseOver = function(event){
    let targetClassName = "lotto-star-highlight-cell";
    if(!event.currentTarget.classList.contains(targetClassName)){
        event.currentTarget.classList.add(targetClassName);
    }
}


function highlightCell(cellElement){
    
    cellElement.classList.add("lotto-star-highlight-cell");
}



export {eventHandlers as GameCellHandlers};