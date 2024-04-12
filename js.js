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
var orText2 = "YERZHXN ATYKHANOV"
var orText1 = "SHORT CUT"
let name1 = "Hi! My name is Yerzhan Atykhanov and I am newbee front end Developer.I'm 21 y.o and live in Astana)"
let name2 = "I love anime and reading.I started webDev nearly 3 month ago.I play guitar and play some video games.My first target is to start the new life )"
let name3 = "My credo is EVERYTHING IS TEMPORARY"
let logo = "logo"
let name = "name"
let name11 = "name1"
let name33 = "name3"
let name22 = "name2"
let ktl = "KTL"
let ktl1 = "Started 2014. 5 years of non-stop learning something new.Critical thinking.Fundamental knowledge.Social live."
let ktl2 = "The best part of my life.Place where I own live-brothers and main part of memories."

let sdu = "SDU"
let sdu1 = "Place where I continued my education.Started programing. The first live experience.Java coding.First love.Next socialization lvl.New horizons."
let sdu2 = "The funniest part of my life.I own friends ,problems ,goals and defeats)"

let alem = "ALEM"
let alem1 = "The last of my edu.path . Go programming .Discipline . Self-study experience .Code envirement .Realization of word PROGRAMMER. JS basics."
let alem2 = "Last part of my path until today. Place where i really start my Dev.Road. The best IT school)"
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

let nul = "NULL"

let block1 = 0;
let block2 = 0;
let block3 = 0;
function typeWriter1(str, strId, a) {
  if (a < str.length) {
    document.getElementById(strId).innerHTML += str.charAt(a);
    a++
    setTimeout(typeWriter1, 15, str, strId, a)
  } else {
    a = 0
  }

}





setTimeout(main, 8000)
window.onload = typeWriter()




function main(){
  document.getElementById("hmain").style.color = "#39FF14"
  document.getElementById("hedu").style.color = "white"
  document.getElementById("hpro").style.color = "white"

  document.getElementById("headTop").style.display = "flex"
  document.getElementById("footer").style.display = "flex"

  if(block1==0){
    typeWriter1(orText2, logo, 0)
    typeWriter1(orText1, name, 0)
    typeWriter1(name1, name11, 0)
    typeWriter1(name2, name22, 0)
    typeWriter1(name3, name33, 0)
  }else{
    document.getElementById("block2").style.display = "none"
    document.getElementById("block4").style.display = "none"
    document.getElementById("block1").style.display = ""
  }
  block1++

}
function edu(){
  document.getElementById("hedu").style.color = "#39FF14"
  document.getElementById("hmain").style.color = "white"
  document.getElementById("hpro").style.color = "white"


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
    document.getElementById("block4").style.display = "none"
    document.getElementById("block1").style.display = "none"
    document.getElementById("block2").style.display = ""

  }
  block2++
}
function pro(){
  document.getElementById("hpro").style.color = "#39FF14"
  document.getElementById("hedu").style.color = "white"
  document.getElementById("hmain").style.color = "white"

  if(block3==0){
    document.getElementById("block1").style.display = "none"
    document.getElementById("block2").style.display = "none"
    typeWriter1(nul, "logopro", 0)
  }else{
    document.getElementById("block1").style.display = "none"
    document.getElementById("block2").style.display = "none"
    document.getElementById("block4").style.display = ""

  }
  block3++
}
let btn =0
function svg(){
  if(btn%2==0){
      document.getElementById("pho").style.display = "block"
     
  }else{
    document.getElementById("pho").style.display = "none"

  } 
  btn++
}