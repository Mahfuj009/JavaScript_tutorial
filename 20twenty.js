// Date (year,mont ,day,hour,minute,second,ms)
// DAte objects

const date = new Date();

const year = date.getFullYear(); // I can set here like 2023
const month = date.getMonth();
const day = date.getDate()
const hour = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()
const dayofweek = date.getDay()


console.log(date)
console.log(dayofweek)


const date1 = new Date("2023-12-31")
const date2 = new Date("2024-01-01")

if(date2 > date1){
    console.log("Happy new year")
}

