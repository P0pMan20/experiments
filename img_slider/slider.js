
function initt(){
    img1 = new Image()
    img2 = new Image()

    imSlidey = new ImageSlider("sliderCanvas", "slider",img1, img2)
    img1.src = "Resources\\Cat_August_2010-4.jpg"
    img2.src ="Resources\\Labrador_on_Quantock_(2175262184).jpg"
}


function ImageSlider(canvasId, sliderId, image1, image2){
    const canvas = document.getElementById(canvasId);
    const canvasCtx = canvas.getContext("2d");
    const slider = document.getElementById(sliderId)


    // https://stackoverflow.com/a/18053642/13360412
    function getCursorPosition(canvas, event) {
        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        // if(canvasCtx.isPointInPath(CheckPath2D, x, y)){
        //     slider.value = x / rect.right
        //     // console.log(x / rect.right)
        //     slider.dispatchEvent(new InputEvent('input'))
        // }
        slider.value = x / rect.right
        // console.log(x / rect.right)
        slider.dispatchEvent(new InputEvent('input'))


        
    }
    let MouseHeld = false;    
    canvas.addEventListener('mousedown', () =>{MouseHeld= true;})
    document.addEventListener("mouseup", () => {MouseHeld = false} )
    document.addEventListener("mousemove", function(e) {
        if (MouseHeld === true) {
            getCursorPosition(canvas,e)
        }
    } )


    const CheckPath2D = new Path2D()
    CheckPath2D.arc(Math.floor(canvas.width*slider.value), Math.floor(canvas.height/2), 30, 0, Math.PI*2, true);
    CheckPath2D.rect(Math.floor(canvas.width*slider.value) - 5, 0, 10, canvas.height);


    image2.addEventListener("load",
    () => {
        slider.setAttribute("style",`width:${canvas.width}px`)
        canvasCtx.drawImage(image1, 0,0, canvas.width ,canvas.height)
        
        canvasCtx.drawImage(image2, 0,0, Math.floor(image2.width*slider.value), image2.height, 0, 0, Math.floor(canvas.width*slider.value) ,canvas.height)
        
        canvasCtx.beginPath()
        canvasCtx.fillStyle = "rgba(223, 224, 232, 1)";
        canvasCtx.strokeStyle = "rgba(0, 0, 0, 1)";
        canvasCtx.lineWidth = "5"
        canvasCtx.arc(Math.floor(canvas.width*slider.value), Math.floor(canvas.height/2), 30, 0, Math.PI*2, true)
        canvasCtx.stroke()
        canvasCtx.closePath()


        canvasCtx.beginPath()
        canvasCtx.fillStyle = "rgba(223, 224, 232, 1)";
        canvasCtx.strokeStyle = "rgba(0, 0, 0, 1)";
        canvasCtx.lineWidth = "5"
        canvasCtx.strokeRect(Math.floor(canvas.width*slider.value) - 5, 0, 10, canvas.height)
        canvasCtx.fillRect(Math.floor(canvas.width*slider.value) - 5, 0, 10, canvas.height);
        canvasCtx.arc(Math.floor(canvas.width*slider.value), Math.floor(canvas.height/2), 30, 0, Math.PI*2, true)
        canvasCtx.fill()
        canvasCtx.closePath()

        canvasCtx.beginPath()
        canvasCtx.fillStyle = "rgba(0, 0, 0, 1)";
        canvasCtx.moveTo(Math.floor(canvas.width*slider.value)-20,Math.floor(canvas.height/2))
        canvasCtx.lineTo(Math.floor(canvas.width*slider.value)-5,Math.floor(canvas.height/2)+15)
        canvasCtx.lineTo(Math.floor(canvas.width*slider.value)-5,Math.floor(canvas.height/2)-15)
        canvasCtx.fill()
        canvasCtx.closePath()

        canvasCtx.beginPath()
        canvasCtx.fillStyle = "rgba(0, 0, 0, 1)";
        canvasCtx.moveTo(Math.floor(canvas.width*slider.value)+20,Math.floor(canvas.height/2))
        canvasCtx.lineTo(Math.floor(canvas.width*slider.value)+5,Math.floor(canvas.height/2)+15)
        canvasCtx.lineTo(Math.floor(canvas.width*slider.value)+5,Math.floor(canvas.height/2)-15)
        canvasCtx.fill()
        canvasCtx.closePath()

    }, false)
    slider.addEventListener("input", () => {
        canvasCtx.drawImage(image1, 0,0, canvas.width ,canvas.height)
        
        canvasCtx.drawImage(image2, 0,0, Math.floor(image2.width*slider.value), image2.height, 0, 0, Math.floor(canvas.width*slider.value) ,canvas.height)
        
        canvasCtx.beginPath()
        canvasCtx.fillStyle = "rgba(223, 224, 232, 1)";
        canvasCtx.strokeStyle = "rgba(0, 0, 0, 1)";
        canvasCtx.lineWidth = "5"
        canvasCtx.arc(Math.floor(canvas.width*slider.value), Math.floor(canvas.height/2), 30, 0, Math.PI*2, true)
        canvasCtx.stroke()
        canvasCtx.closePath()


        canvasCtx.beginPath()
        canvasCtx.fillStyle = "rgba(223, 224, 232, 1)";
        canvasCtx.strokeStyle = "rgba(0, 0, 0, 1)";
        canvasCtx.lineWidth = "5"
        canvasCtx.strokeRect(Math.floor(canvas.width*slider.value) - 5, 0, 10, canvas.height)
        canvasCtx.fillRect(Math.floor(canvas.width*slider.value) - 5, 0, 10, canvas.height);
        canvasCtx.arc(Math.floor(canvas.width*slider.value), Math.floor(canvas.height/2), 30, 0, Math.PI*2, true)
        canvasCtx.fill()
        canvasCtx.closePath()


        canvasCtx.beginPath()
        canvasCtx.fillStyle = "rgba(0, 0, 0, 1)";
        canvasCtx.moveTo(Math.floor(canvas.width*slider.value)-20,Math.floor(canvas.height/2))
        canvasCtx.lineTo(Math.floor(canvas.width*slider.value)-5,Math.floor(canvas.height/2)+15)
        canvasCtx.lineTo(Math.floor(canvas.width*slider.value)-5,Math.floor(canvas.height/2)-15)
        canvasCtx.fill()
        canvasCtx.closePath()

        canvasCtx.beginPath()
        canvasCtx.fillStyle = "rgba(0, 0, 0, 1)";
        canvasCtx.moveTo(Math.floor(canvas.width*slider.value)+20,Math.floor(canvas.height/2))
        canvasCtx.lineTo(Math.floor(canvas.width*slider.value)+5,Math.floor(canvas.height/2)+15)
        canvasCtx.lineTo(Math.floor(canvas.width*slider.value)+5,Math.floor(canvas.height/2)-15)
        canvasCtx.fill()
        canvasCtx.closePath()


    })
}





function inital(){
    const canvas = document.getElementById("sliderCanvas");
    const canvasCtx = canvas.getContext("2d");
    const image1 = new Image();
    image1.src = "Resources\\Cat_August_2010-4.jpg";
    const image2 = new Image();
    const slider = document.getElementById("slider")


    // https://stackoverflow.com/a/18053642/13360412
    function getCursorPosition(canvas, event) {
        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        // if(canvasCtx.isPointInPath(CheckPath2D, x, y)){
        //     slider.value = x / rect.right
        //     // console.log(x / rect.right)
        //     slider.dispatchEvent(new InputEvent('input'))
        // }
        slider.value = x / rect.right
        // console.log(x / rect.right)
        slider.dispatchEvent(new InputEvent('input'))


        
    }
    let MouseHeld = false;    
    canvas.addEventListener('mousedown', () =>{MouseHeld= true;})
    document.addEventListener("mouseup", () => {MouseHeld = false} )
    document.addEventListener("mousemove", function(e) {
        if (MouseHeld === true) {
            getCursorPosition(canvas,e)
        }
    } )


    const CheckPath2D = new Path2D()
    CheckPath2D.arc(Math.floor(canvas.width*slider.value), Math.floor(canvas.height/2), 30, 0, Math.PI*2, true);
    CheckPath2D.rect(Math.floor(canvas.width*slider.value) - 5, 0, 10, canvas.height);


    image2.addEventListener("load",
    () => {
        slider.setAttribute("style",`width:${canvas.width}px`)
        canvasCtx.drawImage(image1, 0,0, canvas.width ,canvas.height)
        
        canvasCtx.drawImage(image2, 0,0, Math.floor(image2.width*slider.value), image2.height, 0, 0, Math.floor(canvas.width*slider.value) ,canvas.height)
        
        canvasCtx.beginPath()
        canvasCtx.fillStyle = "rgba(223, 224, 232, 1)";
        canvasCtx.strokeStyle = "rgba(0, 0, 0, 1)";
        canvasCtx.lineWidth = "5"
        canvasCtx.arc(Math.floor(canvas.width*slider.value), Math.floor(canvas.height/2), 30, 0, Math.PI*2, true)
        canvasCtx.stroke()
        canvasCtx.closePath()


        canvasCtx.beginPath()
        canvasCtx.fillStyle = "rgba(223, 224, 232, 1)";
        canvasCtx.strokeStyle = "rgba(0, 0, 0, 1)";
        canvasCtx.lineWidth = "5"
        canvasCtx.strokeRect(Math.floor(canvas.width*slider.value) - 5, 0, 10, canvas.height)
        canvasCtx.fillRect(Math.floor(canvas.width*slider.value) - 5, 0, 10, canvas.height);
        canvasCtx.arc(Math.floor(canvas.width*slider.value), Math.floor(canvas.height/2), 30, 0, Math.PI*2, true)
        canvasCtx.fill()
        canvasCtx.closePath()

        canvasCtx.beginPath()
        canvasCtx.fillStyle = "rgba(0, 0, 0, 1)";
        canvasCtx.moveTo(Math.floor(canvas.width*slider.value)-20,Math.floor(canvas.height/2))
        canvasCtx.lineTo(Math.floor(canvas.width*slider.value)-5,Math.floor(canvas.height/2)+15)
        canvasCtx.lineTo(Math.floor(canvas.width*slider.value)-5,Math.floor(canvas.height/2)-15)
        canvasCtx.fill()
        canvasCtx.closePath()

        canvasCtx.beginPath()
        canvasCtx.fillStyle = "rgba(0, 0, 0, 1)";
        canvasCtx.moveTo(Math.floor(canvas.width*slider.value)+20,Math.floor(canvas.height/2))
        canvasCtx.lineTo(Math.floor(canvas.width*slider.value)+5,Math.floor(canvas.height/2)+15)
        canvasCtx.lineTo(Math.floor(canvas.width*slider.value)+5,Math.floor(canvas.height/2)-15)
        canvasCtx.fill()
        canvasCtx.closePath()

    }, false)
    image2.src = "Resources\\Labrador_on_Quantock_(2175262184).jpg";
    slider.addEventListener("input", () => {
        canvasCtx.drawImage(image1, 0,0, canvas.width ,canvas.height)
        
        canvasCtx.drawImage(image2, 0,0, Math.floor(image2.width*slider.value), image2.height, 0, 0, Math.floor(canvas.width*slider.value) ,canvas.height)
        
        canvasCtx.beginPath()
        canvasCtx.fillStyle = "rgba(223, 224, 232, 1)";
        canvasCtx.strokeStyle = "rgba(0, 0, 0, 1)";
        canvasCtx.lineWidth = "5"
        canvasCtx.arc(Math.floor(canvas.width*slider.value), Math.floor(canvas.height/2), 30, 0, Math.PI*2, true)
        canvasCtx.stroke()
        canvasCtx.closePath()


        canvasCtx.beginPath()
        canvasCtx.fillStyle = "rgba(223, 224, 232, 1)";
        canvasCtx.strokeStyle = "rgba(0, 0, 0, 1)";
        canvasCtx.lineWidth = "5"
        canvasCtx.strokeRect(Math.floor(canvas.width*slider.value) - 5, 0, 10, canvas.height)
        canvasCtx.fillRect(Math.floor(canvas.width*slider.value) - 5, 0, 10, canvas.height);
        canvasCtx.arc(Math.floor(canvas.width*slider.value), Math.floor(canvas.height/2), 30, 0, Math.PI*2, true)
        canvasCtx.fill()
        canvasCtx.closePath()


        canvasCtx.beginPath()
        canvasCtx.fillStyle = "rgba(0, 0, 0, 1)";
        canvasCtx.moveTo(Math.floor(canvas.width*slider.value)-20,Math.floor(canvas.height/2))
        canvasCtx.lineTo(Math.floor(canvas.width*slider.value)-5,Math.floor(canvas.height/2)+15)
        canvasCtx.lineTo(Math.floor(canvas.width*slider.value)-5,Math.floor(canvas.height/2)-15)
        canvasCtx.fill()
        canvasCtx.closePath()

        canvasCtx.beginPath()
        canvasCtx.fillStyle = "rgba(0, 0, 0, 1)";
        canvasCtx.moveTo(Math.floor(canvas.width*slider.value)+20,Math.floor(canvas.height/2))
        canvasCtx.lineTo(Math.floor(canvas.width*slider.value)+5,Math.floor(canvas.height/2)+15)
        canvasCtx.lineTo(Math.floor(canvas.width*slider.value)+5,Math.floor(canvas.height/2)-15)
        canvasCtx.fill()
        canvasCtx.closePath()


    })
}
