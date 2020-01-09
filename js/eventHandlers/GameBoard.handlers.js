let eventHandlers = {};
function computeGameResults(gameBoardComponent,displayResults,resetGame,confirmContinue){
    let selectedBagElements = [...document.querySelectorAll(".lotto-star-game-cell-selected")];
    if(selectedBagElements.length==1)
    {
        
         //select a random bag
        eventHandlers.triggerRandomSelect(gameBoardComponent,(element,elementId)=>{
            let selectedClassName = "lotto-star-game-cell-selected";
            let selectedBagElements = [...document.querySelectorAll(`.${selectedClassName}`)];
            if(selectedBagElements.length<2){
                $(element).classList.add(selectedClassName);
            }
           
            document.querySelector(".lotto-star-message").innerHTML = "<p style='padding:0.5em;border:2px dotted black'>Click Ok To Continue With Selection, Reset To Clear Selection</p>";
        });
         
    }
}
function generateRandomIds(generatedIdsCount){
    let selectionAttempts = generatedIdsCount;
    let counter=0;
    let selectedIndex =-1;
    let ids =[];
    while(counter<selectionAttempts){
        
        selectedIndex = Math.floor(Math.random()*100);
        selectedIndex = selectedIndex>selectionAttempts?(selectedIndex%selectionAttempts):selectedIndex;
        selectedIndex = selectedIndex==0?selectedIndex+1:selectedIndex;
        ids.push(selectedIndex);
        counter+=1;
    }

    return ids;
}

eventHandlers.triggerRandomSelect =  function(gameBoardComponent,selectionDone){
         

        let selectedClassName = "lotto-star-game-cell-selected";
        let alreadySelectedIds = [...document.querySelectorAll("."+selectedClassName)].map(ele=>parseInt(ele.getAttribute("id")));
        let rIDs =   generateRandomIds(gameBoardComponent.gameCells.length);
        let requiredIds =[];
        for(let rID of rIDs){
            if(alreadySelectedIds.indexOf(rID)<0){
                requiredIds.push(rID)
            }
        };

        rIDs = requiredIds;
        let lastIndex =-1;
        let interVal = setInterval(()=>{
            if(rIDs.length==0){
                clearInterval(interVal);
            }
            else
            {
               let currentId = +rIDs.shift();
               let currentEle = document.getElementById(""+currentId)
               currentEle.classList.add(selectedClassName);
               if(rIDs.length>=1){
                 setTimeout(()=>{
                    currentEle.classList.remove(selectedClassName);
                 },400);
               }
               else
               {
                   selectionDone(currentEle,currentId);
               }
             
            }
        },400);
        
}

eventHandlers.onClick = function(gameBoardComponent,displayResults,resetGame,confirmContinue){

    setTimeout(computeGameResults,100,gameBoardComponent,displayResults,resetGame,confirmContinue);
    
};

export default eventHandlers;