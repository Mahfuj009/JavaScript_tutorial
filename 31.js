//addEventListener 


const mybox = document.getElementById("myBox")
function changebackground(event){
         event.target.style.backgroundColor = "cyan";
         event.target.textContent = "Clicked";
}
mybox .addEventListener("click",changebackground)



const mybox2 = document.getElementById("myBox2")
//using anynomous function
//mybox2.addEventListener("click",function(event){
//    event.target.style.backgroundColor = "white";
//    event.target.textContent = "Added to the Cart"
//})

mybox2.addEventListener("click",event =>{
    event.target.style.backgroundColor = "white";
    event.target.textContent = "Added to the Cart"                             
})

mybox2.addEventListener("mouseover",event=>{
    event.target.style.backgroundColor = "blue";
    event.target.textContent = "Are you sure ?";
})

mybox2.addEventListener("mouseout",function(event){
    event.target.style.backgroundColor = "cyan";
    event.target.textContent= "Add to the Cart";
    
})