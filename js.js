

let txt = "Hello My Name Is Yerzhan";
let txt1 = "I am front_end developer";
let txt2 = "Welcome to my site";
var speed = 70;
let i = 0
let text=1
let orText="Hello My Name Is Yerzhan"

function typeWriter() {
  if (i < orText.length) {
    document.getElementById("demo").innerHTML += orText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }else{ 
    delWriter() 
  }
}


function delWriter(){
  if (i>0) {
    document.getElementById("demo").innerHTML = orText.slice(0, i);
      i--;
      setTimeout(delWriter, speed);
  }else{
    document.getElementById("demo").innerHTML = "" 
    text++
    orText=txt
    if(text%2==0){
      orText = txt1
    }
    if(text%3==0){
      orText = txt2
      text=0
    }
    typeWriter()
  }
}
window.onload = typeWriter()


function blue(){
  document.getElementById("red").style.animationDuration = "1s";
}
function red(){
  document.getElementById("red").style.animationDuration = "2s";
}
function blue0(){
  document.getElementById("red0").style.animationDuration = "1s";
}
function red0(){
  document.getElementById("red0").style.animationDuration = "2s";
}
function blue1(){
  document.getElementById("red1").style.animationDuration = "1s";
}
function red1(){
  document.getElementById("red1").style.animationDuration = "2s";
}

function home() {
  scroll(0, 0)
}
function short() {
  scroll(0, 870)
  scroll(smooth)

}
function about() {
  scroll(0, 1600)
  scroll(smooth)
}
function cont() {
  scroll(0, 2600)
  scroll(smooth)
}
let width = document.body.style.width
let numWidth = Number(width)
if (numWidth<420){
  document.getElementById('red').style.width = "45px"
  document.getElementById('red').style.height = "45px"
  document.getElementById('red0').style.width = "45px"
  document.getElementById('red0').style.height = "45px"
  document.getElementById('red1').style.width = "45px"
  document.getElementById('red1').style.height = "45px"
  document.getElementById("block").style.marginLeft = "20px"
  document.getElementById("block1").style.marginLeft = "20px"
  document.getElementById("block2").style.marginLeft = "20px"
}
let mail1 = 0
let mob1 = 0
let tel1 = 0
let wat1 = 0
let ins1 = 0
function mail(){
  if(mail1%2==0){
    document.getElementById('mail').style.opacity = "1"
    document.getElementById('mail').style.marginLeft = "-650px"
  }else{
    document.getElementById('mail').style.opacity = "0"
    document.getElementById('mail').style.marginLeft = "0px"
  }
  mail1++
}
function mob(){
  if(mob1%2==0){
    document.getElementById('mob').style.opacity = "1"
    document.getElementById('mob').style.marginLeft = "-650px"
  }else{
    document.getElementById('mob').style.opacity = "0"
    document.getElementById('mob').style.marginLeft = "200px"
  }
  mob1++
}
function tel(){
  if(tel1%2==0){
    document.getElementById('tel').style.opacity = "1"
    document.getElementById('tel').style.marginLeft = "-650px"
  }else{
    document.getElementById('tel').style.opacity = "0"
    document.getElementById('tel').style.marginLeft = "0px"
  }
  tel1++
}
function wat(){
  if(wat1%2==0){
    document.getElementById('wat').style.opacity = "1"
    document.getElementById('wat').style.marginLeft = "-650px"
  }else{
    document.getElementById('wat').style.opacity = "0"
    document.getElementById('wat').style.marginLeft = "0px"
  }
  wat1++
}
function ins(){
  if(ins1%2==0){
    document.getElementById('ins').style.opacity = "1"
    document.getElementById('ins').style.marginLeft = "-650px"
  }else{
    document.getElementById('ins').style.opacity = "0"
    document.getElementById('ins').style.marginLeft = "0px"
  }
  ins1++
}