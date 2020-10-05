var number1 = +prompt("son kiriting")
var number2 = +prompt("yana son kiritng")
var number3 = +prompt("yana kiriting")
  
 if(number1 > number2 && number1 < number3){
     alert("ortacha son birinchi kiritganiz " +number1)
 }else {
     if (number2 > number3 && number2 < number1) {
         alert("orta son ikkinchisi " +number2)         
     }else {
         alert("orta son " +number3)         
     }
     
 }
 
     
 
 var year = +prompt("yoshingizni kiritng")
 
 if (year < 18 && year > 0) {
     alert("hali yoshsiz, o'qing!!!")
     
 }else if (year > 18 && year <= 50) {
     alert("ishlashingiz kerak!!")
     
 }else if (year > 50 && year <= 59) {
     alert("yaqinda pensiyaga chiqasiz")     
 }else if (year > 59) {
     alert("agar tirik bo'lsangiz pensionerga oxshaysiz")
     
 }else{
     alert("yoshingizni sonda yozing")
 }

var boss = "b"

var guest = prompt("loginizi kiriting")

if (guest === boss) {
    alert("Welcome Boss!")    
}else(
    alert("Welcome guest " +guest)
)