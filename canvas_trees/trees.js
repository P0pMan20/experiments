// let treeBranchyness = 0.4;
// let treeHeightBeforeBranch = 0.6;
// let treeHeight = 200; //200 px
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
        console.log(treeWoodColour)
    })


}

function drawRectRotatedAroundCentre(ctx ,x, y, w, h, radians, fillstyle){
    //ty https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations
    /*
    To rotate the rectangle around its own center, we translate the canvas to the center of the rectangle,
    then rotate the canvas, then translate the canvas back to 0,0, and then draw the rectangle.
    */

    console.log(x, y, w, h, radians, fillstyle)
    const halfRectX = x+0.5*w;
    const halfRectY = y+0.5*h;

    ctx.save();
    ctx.translate(halfRectX, halfRectY);
    ctx.rotate(radians);
    ctx.translate(-halfRectX, -halfRectY);
    ctx.fillStyle = fillstyle;
    ctx.fillRect(x, y, w, h);
    ctx.restore()

}


class Tree {
    baseX;
    baseY;
    baseTrunkWidth;
    treeHeight;
    treeHeightBeforeBranch;
    constructor(baseX, baseY, baseTrunkWidth, treeHeight, treeHeightBeforeBranch) {
        this.baseX = baseX;
        this.baseY = baseY;
        this.baseTrunkWidth = baseTrunkWidth;
        this.treeHeight = treeHeight;
        this.treeHeightBeforeBranch = treeHeightBeforeBranch;
    }
}



function generateTree(){
    let canvas = document.querySelector("#treeCanvas");
    let canvasCtx = canvas.getContext("2d");
    let tree = new Tree(Math.round(canvas.width/2 - 30/2), Math.round(canvas.height * 0.9)-250, 30, 250, 1)


    drawRectRotatedAroundCentre(canvasCtx, tree.baseX, tree.baseY, tree.baseTrunkWidth, tree.treeHeight, 180*(Math.PI/180), treeWoodColour)
    drawRectRotatedAroundCentre(canvasCtx, tree.baseX+tree.treeHeight * 0.3-30, tree.baseY+(tree.treeHeightBeforeBranch*-tree.treeHeight)+tree.treeHeight,  tree.baseTrunkWidth * 0.8, tree.treeHeight * 0.3, Math.PI*(3/2), treeWoodColour  )



}