//classList project

const buttons = document.querySelectorAll(".btn")
buttons.forEach(button =>{
    button.classList.add("enable");
})

buttons.forEach(button=>{
    button.addEventListener("mouseover",event=>{
        event.target.classList.toggle("hover");
    })
})

buttons.forEach(button=>{
    button.addEventListener("mouseout",event=>{
        event.target.classList.toggle("hover");
    })
})

buttons.forEach(button=>{
    button.addEventListener("click",event=>{
        if(event.target.classList.contains("enable")){
            event.target.classList.replace("enable","disable")
        }else{
            event.target.textContent = " fuck";
        }
    })
})

