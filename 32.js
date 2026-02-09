//addEventListner key
const mybox = document.getElementById("myBox")
document.addEventListener("keydown",event =>{
    console.log(`key down = ${event.key}`)
    mybox.textContent = "🥵";
    mybox.style.background = "orange"

})

document.addEventListener("keyup",event=>{
    console.log(`Key up = ${event.key}`)
    mybox.textContent = "😴"
    mybox.style.background = "aquamarine"

})


const moveValue = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown",event=>
{       
    if (event.key.startsWith("Arrow")){
        event.preventDefault();
        switch(event.key){
            case "ArrowUp":
                y -= moveValue;
                break;
            case "ArrowDown":
                y += moveValue;
                break;
            case "ArrowRight":
                x +=moveValue;
                break;
            case "ArrowLeft":
                x-= moveValue;
                break;
            
        }
    mybox.style.top = `${y}px`;
    mybox.style.left = `${x}px`;
    }
}
)
