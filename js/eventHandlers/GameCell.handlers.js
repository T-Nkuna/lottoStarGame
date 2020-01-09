let eventHandlers = {};

eventHandlers.onClick = function(event){
    if(!event.currentTarget.classList.contains("lotto-star-game-cell-selected"))
    {
        event.currentTarget.classList.add("lotto-star-game-cell-selected");
    }
}

eventHandlers.triggerRotate = function(currentTarget){
    if(!currentTarget.classList.contains("lotto-star-rotate-element"))
    {
       
        currentTarget.classList.add("lotto-star-rotate-element");
        currentTarget.querySelector(".lotto-star-bag-icon").classList.add("hide-ele");
       
    }
}

eventHandlers.onAnimationEnd = function(event){
    
  event.currentTarget.querySelector(".lotto-star-amount").classList.add("show-ele");
  event.currentTarget.querySelector(".lotto-star-amount").style.display = "inline-block";
  event.currentTarget.querySelector(".lotto-star-bag-icon").style.display ="none";
  document.querySelector(".lotto-star-message").innerHTML = "Click Reset To Clear Selection";
   
};

eventHandlers.onAnimationStart = function(event){
    //event.currentTarget.classList.remove("start-anim");
   // event.currentTarget.classList.add("stop-anim");
  // console.log("Iteration");
  
  // event.currentTarget.querySelector(".lotto-star-amount").classList.add("show-ele");
   
   //lotto-star-bag-icon
};


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



export {eventHandlers as default};