let orText = "Welcome and stay ready......"
let i = 0
let j = 0
let speed = 70;
let speed1 = 220
function typeWriter() {
  if (i < orText.length) {
    document.getElementById("demo").innerHTML += orText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    timer()
  }
}
function timer() {
  document.getElementById("demo").innerHTML += "|";
  setTimeout(del, speed1);
  j++
  if (j == 10) {
    off()
  }
}
function del() {
  document.getElementById("demo").innerHTML = orText.slice(0, orText.length);
  setTimeout(timer, speed1);
}
function off() {
  document.getElementById("demo").style.opacity = "0"
}

var orText1 = "YERZHXN ATYKHANOV"
let name1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quam dicta voluptate maxime praesentium dolorum nemo rerum labore at eius. <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, dignissimos iure? Magni, harum?"
let name2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facere amet explicabo aperiam et fugiat laborum deserunt minima eaque quasi"
let name3 = "Metsuki sutemi"
let logo = "logo"
let name = "name"
let name11 = "name1"
let name33 = "name3"
let name22 = "name2"
let ktl = "KTL"
let ktl1 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, nemo!"
let ktl2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, nemo!"

let sdu = "SDU"
let sdu1 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, nemo!"
let sdu2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, nemo!"

let alem = "ALEM"
let alem1 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, nemo!"
let alem2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, nemo!"
let htmlT ="HTML"
let htmlLt = "▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮"
let htmlEt="▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮"
let cssT ="CSS"
let cssLt = "▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮"
let cssEt="▮▮▮▮▮"
let jsT ="JS"
let jsLt = "▮▮▮▮▮▮▮▮"
let jsEt="▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮"
let socT ="Social ScillS"
let socLt = "▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮▮"
let socEt="▮▮▮"



let block1 = 0;
let block2 = 0;
function typeWriter1(str, strId, a) {
  if (a < str.length) {
    document.getElementById(strId).innerHTML += str.charAt(a);
    a++
    setTimeout(typeWriter1, 15, str, strId, a)
  } else {
    a = 0
  }

}





setTimeout(main, 9000)
window.onload = typeWriter()



function closes(){
  let a = document.getElementById("bottom");
  let b = a.querySelectorAll("p")
  for(var i=0;i<b.length;i++){
    b[i].style.display = "none"
  }
  document.getElementById("box").style.width = "250px"
  document.getElementById("box").style.height = "400px"
  document.querySelector("img").style.width = "250px"
  document.querySelector("img").style.height = "250px"
  document.getElementById("foo").style.display = "none"
}
function opens(){
  let a = document.getElementById("bottom");
  let b = a.querySelectorAll("p")
  for(var i=0;i<b.length;i++){
    b[i].style.display = "flex"
  }
  document.getElementById("box").style.width = "350px"
  document.getElementById("box").style.height = "650px"
  document.querySelector("img").style.width = "350px"
  document.querySelector("img").style.height = "270px"
  document.getElementById("foo").style.display = "flex"
}

function main(){
  document.getElementById("hmain").style.color = "#39FF14"
  document.getElementById("hedu").style.color = "white"

  if(block1==0){
    typeWriter1(orText1, logo, 0)
    typeWriter1(orText1, name, 0)
    typeWriter1(name1, name11, 0)
    typeWriter1(name2, name22, 0)
    typeWriter1(name3, name33, 0)
  }else{
    document.getElementById("block2").style.display = "none"
    document.getElementById("block1").style.display = ""

  }
  block1++

}
function edu(){
  document.getElementById("hedu").style.color = "#39FF14"
  document.getElementById("hmain").style.color = "white"

  if(block2 ==0){
    document.getElementById("block2").style.display = ""
    document.getElementById("block1").style.display = "none"

    typeWriter1("ScillS","scillHead",0)
    typeWriter1(htmlT,"scillHtml",0)
    typeWriter1(cssT,"scillCss",0)
    typeWriter1(jsT,"scillJs",0)
    typeWriter1(socT,"scillSoc",0)



    document.getElementById("scill").style.opacity = "1"

    typeWriter1(htmlLt,"scillHtmlL",0)
    typeWriter1(htmlEt,"scillHtmlE",0)
    typeWriter1(cssLt,"scillCssL",0)
    typeWriter1(cssEt,"scillCssE",0)
    typeWriter1(jsLt,"scillJsL",0)
    typeWriter1(jsEt,"scillJsE",0)
    typeWriter1(socLt,"scillSocL",0)
    typeWriter1(socEt,"scillSocE",0)

    
    typeWriter1(ktl, "ktl", 0)
    typeWriter1(ktl1, "ktl1", 0)
    typeWriter1(ktl2, "ktl2", 0)
    typeWriter1(sdu, "sdu", 0)
    typeWriter1(sdu1, "sdu1", 0)
    typeWriter1(sdu2, "sdu2", 0)
    typeWriter1(alem, "alem", 0)
    typeWriter1(alem1, "alem1", 0)
    typeWriter1(alem2, "alem2", 0)
  }else{
    document.getElementById("block1").style.display = "none"
    document.getElementById("block2").style.display = ""
  }
  block2++
}
