
//creating a new html element
const wm = document.createElement("h1")
const em = document.createElement("h3")
const food = document.createElement("h3")

//inserting into the html element
wm.textContent = "Welcome to JumpFy" 
em.textContent = "Thank You";
wm.id = "heading";
wm.style.color = "orange";
wm.style.textAlign = "center";

food.textContent = "I like burger";


//appending my html file
//document.body.prepend(wm) // adding to the beginning
document.getElementById("box1").prepend(wm)
document.body.append(em);
const box1= document.getElementById("box2");
//document.body.insertBefore(food,box1)


//inserting before without using the id
const boxes = document.querySelectorAll(".box");
document.body.insertBefore(food,boxes[2]);



//removing html element
//steps : selecting the parent then removechild
//document.body.removeChild(food);
//document.getElementById("box1").removeChild(wm) // body is not the direct parent here


//creating a list item element
const newListItem = document.createElement("li")
//add attribute/properties
newListItem.textContent = "woodapple";
newListItem.id = "woodapple";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightblue";

//adding to the ol
//document.body.prepend(newListItem)
//document.getElementById("fruits").prepend(newListItem)
//const pineapple = document.getElementById("pineapple");
//document.getElementById("fruits").insertBefore(newListItem,pineapple)

//if no id
const listItems = document.querySelectorAll("#fruits li")
document.getElementById("fruits").insertBefore(newListItem,listItems[2])

//deleting the newListItem
document.getElementById("fruits").removeChild(newListItem)

