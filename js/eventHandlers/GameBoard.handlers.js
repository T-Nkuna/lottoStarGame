let eventHandlers = {};
function computeGameResults(selectedBagElements){
    if(selectedBagElements.length==1)
    {
        
         //select a random bag

        //ask if user want's to change selection
        if(confirm("Would you like to change your selection ?")){
            //reset game state
            
        }
        else
        {
            //reveal results then reset game state
        }

        selectedBagElements.forEach(bagEle=>{
            bagEle.classList.remove("lotto-star-game-cell-selected");
        });
    }
}

eventHandlers.onClick = function(event){

    let selectedBagElements = [...document.querySelectorAll(".lotto-star-game-cell-selected")];
    setTimeout(computeGameResults,1000,selectedBagElements);
    
};

export default eventHandlers;