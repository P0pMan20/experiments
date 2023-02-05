let treeBranchyness = 0.4;
let treeHeightBeforeBranch = 0.6;
let treeHeight = 200; //200 px
let treeLeafColour = "#00cc00";
let treeWoodColour = "#663300";

function init(){
    let treeLeafColourPicker = document.querySelector("#treeLeafColour");
    treeLeafColourPicker.addEventListener("input", () => {
        treeLeafColour = treeLeafColourPicker.value;
    })
    let treeWoodColourPicker = document.querySelector("#treeWoodColour");
    treeWoodColourPicker.addEventListener("input", () => {
        treeWoodColour = treeWoodColourPicker.value;
    })


}



function generateTree(){
    let canvas = document.querySelector("#treeCanvas");
    let canvasCtx = canvas.getContext("2d");
    
}