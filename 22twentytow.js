// setTimeout Method

function sayHello(){
    window.alert("Hello");
}

//setTimeout(sayHello,3000)
const timeoutId = setTimeout(()=>window.alert("Hello Dear"),2000);

clearTimeout(timeoutId)


