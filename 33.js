const btn = document.getElementById("myBtn")
const car = document.getElementById("myImage")

btn.addEventListener("click",event=>{
    //we can use display or visibility for display we use none and block and for visibility :
    if (car.style.visibility ==="hidden"){
        car.style.visibility = "visible"
        btn.textContent = "Hide"
    }else{
        car.style.visibility ="hidden"
        btn.textContent ="Show"
    }
})