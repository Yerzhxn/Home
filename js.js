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
// var logoNum = 0
// var nameNum = 0
// var nameNum1 = 0
// var nameNum2 = 0
// var nameNum3 = 0
// var ktlNum = 0
// var ktl1Num = 0
// var ktl2Num = 0
// var sduNum = 0
// var sdu1Num = 0
// var sdu2Num = 0
// var alemNum = 0
// var alem1Num = 0
// var alem2Num = 0
// var html = 0
// var css = 0
// var js =0
// var soc= 0
// var htmlL=0
// var htmlE = 0
// var cssL=0
// var cssE =0
// var jsL=0
// var jsE =0
// var socL=0
// var socE =0
var orText1 = "YERZHXN ATYKHANOV"
function typeWriter1(str, strId, a) {
  if (a < str.length) {
    document.getElementById(strId).innerHTML += str.charAt(a);
    a++
    setTimeout(typeWriter1, 50, str, strId, a)
  } else {
    a = 0
  }

}

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
let mailT = "Mail will be seen in 2 workDays"
let mobT = "Please call between 11:00 and 18:00"
let telT = "Massage will be seen in 3 hOurs"
let watT = "Massage will be seen in 1 hOurs"
let insT = "Massage will be seen in 2 hOurs"

function go() {
  typeWriter1("ScillS","scillHead",0)
  typeWriter1(htmlT,"scillHtml",0)
  typeWriter1(cssT,"scillCss",0)
  typeWriter1(jsT,"scillJs",0)
  typeWriter1(socT,"scillSoc",0)
  typeWriter1(mailT,"mailT",0)
  typeWriter1(mobT,"mobT",0)
  typeWriter1(telT,"telT",0)
  typeWriter1(watT,"watT",0)
  typeWriter1(insT,"insT",0)


  function lvl(){
    document.getElementById("scill").style.opacity = "1"
    document.getElementById("icon").style.opacity = "1"
    document.getElementById("icon1").style.opacity = "1"
    document.getElementById("icon2").style.opacity = "1"
    document.getElementById("icon3").style.opacity = "1"
    document.getElementById("icon4").style.opacity = "1"

  typeWriter1(htmlLt,"scillHtmlL",0)
  typeWriter1(htmlEt,"scillHtmlE",0)
  typeWriter1(cssLt,"scillCssL",0)
  typeWriter1(cssEt,"scillCssE",0)
  typeWriter1(jsLt,"scillJsL",0)
  typeWriter1(jsEt,"scillJsE",0)
  typeWriter1(socLt,"scillSocL",0)
  typeWriter1(socEt,"scillSocE",0)

  }
  setTimeout(lvl,1000)
  typeWriter1(orText1, logo, 0)
  typeWriter1(orText1, name, 0)
  typeWriter1(name1, name11, 0)
  typeWriter1(name2, name22, 0)
  typeWriter1(name3, name33, 0)
  typeWriter1(ktl, "ktl", 0)
  typeWriter1(ktl1, "ktl1", 0)
  typeWriter1(ktl2, "ktl2", 0)
  typeWriter1(sdu, "sdu", 0)
  typeWriter1(sdu1, "sdu1", 0)
  typeWriter1(sdu2, "sdu2", 0)
  typeWriter1(alem, "alem", 0)
  typeWriter1(alem1, "alem1", 0)
  typeWriter1(alem2, "alem2", 0)
}
setTimeout(go, 1000)
window.onload = typeWriter()


let mail1 = 0
let mob1 = 0
let tel1 = 0
let wat1 = 0
let ins1 = 0
function mail() {
  if (mail1 % 2 == 0) {
    document.getElementById('mail').style.opacity = "1"
    document.getElementById('mailT').style.opacity = "0"
  } else {
    document.getElementById('mail').style.opacity = "0"
    document.getElementById('mailT').style.opacity = "1"  }
  mail1++
}
function mob() {
  if (mob1 % 2 == 0) {
    document.getElementById('mob').style.opacity = "1"
    document.getElementById('mobT').style.opacity = "0"
  } else {
    document.getElementById('mob').style.opacity = "0"
    document.getElementById('mobT').style.opacity = "1"
  }
  mob1++
}
function tel() {
  if (tel1 % 2 == 0) {
    document.getElementById('tel').style.opacity = "1"
    document.getElementById('telT').style.opacity = "0"
  } else {
    document.getElementById('tel').style.opacity = "0"
    document.getElementById('telT').style.opacity = "1"
  }
  tel1++
}
function wat() {
  if (wat1 % 2 == 0) {
    document.getElementById('wat').style.opacity = "1"
    document.getElementById('watT').style.opacity = "0"
  } else {
    document.getElementById('wat').style.opacity = "0"
    document.getElementById('watT').style.opacity = "1"
  }
  wat1++
}
function ins() {
  if (ins1 % 2 == 0) {
    document.getElementById('ins').style.opacity = "1"
    document.getElementById('insT').style.opacity = "0"
  } else {
    document.getElementById('ins').style.opacity = "0"
    document.getElementById('insT').style.opacity = "1"
  }
  ins1++
}