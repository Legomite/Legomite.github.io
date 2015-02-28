function enablePlugins() {
if(offlineMode === false) {
extensionEnable = true;
buttValue++;
if (buttValue > 1) {
pluginExist = false;
}
} else {
achievePost("Sorry, Offline mode is on.");
}
}

function titleDisp() {
if(defaultTitle == true) {
defaultTitle = false;
document.title = "StoneMiner";
document.getElementById("titleDisplay").value = "Title Displays Stone OFF";
} else {
defaultTitle = true;
document.getElementById("titleDisplay").value = "Title Displays Stone ON";
}
}
legibility = false;
function intuitive() {
if(legibility == false) {
legibility = true;
document.getElementById("mine").style.border = "1px solid black";
document.getElementById("legibility").value = "Increase Legibility ON";
} else {
legibility = false;
document.getElementById("mine").style.border = "";
document.getElementById("legibility").value = "Increase Legibility OFF";
}
}
hidden = false;
function hideBuildings() {
if(hidden == false) {
$(document).ready(function(){
    $("#storeBought").fadeToggle('fast');
  });
document.getElementById("hide").value = "Buildings OFF";
hidden = true;
} else {
$(document).ready(function(){
    $("#storeBought").fadeToggle('fast');
  });
document.getElementById("hide").value = "Buildings ON";
hidden = false;
}
}
fancy = true;
function fancyGraphics() {
if(fancy == true) {
document.getElementById("fontConnect").style.textShadow="0px 0px 0px black";
document.getElementById("clicks").style.textShadow="0px 0px 0px black";
document.getElementById("steve").style.textShadow="0px 0px 0px black";
document.getElementById("mines").style.textShadow="0px 0px 0px black";
document.getElementById("factory").style.textShadow="0px 0px 0px black";
document.getElementById("harvester").style.textShadow="0px 0px 0px black";
document.getElementById("time").style.textShadow="0px 0px 0px black";
document.getElementById("achieve").style.boxShadow="0px 0px 0px black";
document.getElementById("upgradeMenu").style.textShadow="0px 0px 0px black";
fancy = false;
noSmoothing = true;
document.getElementById("fancy").value = "Fancy Graphics OFF";
} else {
document.getElementById("fontConnect").style.textShadow = "3px 2.98px 0px #002A00";
document.getElementById("clicks").style.textShadow="3px 2.98px 0px #002A00";
document.getElementById("steve").style.textShadow="2px 2px 1px black";
document.getElementById("mines").style.textShadow="2px 2px 1px black";
document.getElementById("factory").style.textShadow="2px 2px 1px black";
document.getElementById("harvester").style.textShadow="2px 2px 1px black";
document.getElementById("time").style.textShadow="2px 2px 1px black";
document.getElementById("achieve").style.boxShadow="0px 0px 5px black";
document.getElementById("upgradeMenu").style.textShadow="5px 5px 5px black";
fancy = true;
noSmoothing = false;
document.getElementById("fancy").value = "Fancy Graphics ON";
}
}

function switchInput() {
if(touch) {
document.getElementById('type').value = 'Touch Mode OFF';
document.body.innerHTML = document.body.innerHTML.replace(/ontouchend/g,'onclick');
document.body.innerHTML = document.body.innerHTML.replace(/ontouchstart/g,'onmousedown');
touchswitch = 'onclick';
document.getElementById('background').style.display = 'initial';
document.getElementById('username').style.display = 'initial';
delay6 = setInterval(function() {
touch = false;
clearInterval(delay6);
}, 500);
$(document).ready(function() {
$("#mine").mousedown(function() {
$("#mine").animate({
height: "205px",
width: "205px",
left: "7px",
top: "83px"
}, 30, function() {
});
});

$("#mine").mouseup(function() {
$("#mine").animate({
height: "220px",
width: "220px",
left: "-1px",
top: "80px"
}, 30, function() {
addStone(1);
});
});

$("#mine").mouseleave(function() {
$("#mine").animate({
height: "220px",
width: "220px",
left: "-1px",
top: "80px"
}, 30);
});
});

$(document).ready(function() {
$("#store div").mousedown(function() {
$(this).animate({
opacity: "0.9"
}, 30);
});
$("#store div").mouseup(function() {
$(this).animate({
opacity: "0.8"
}, 30);
});

$("#store div").mouseleave(function() {
$(this).animate({
opacity: "0.8"
}, 30);
});

$("#upgradeStore").mousedown(function() {
$("#upgradeStore").animate({
height: "75px",
width: "75px"
}, 30);
});

$("#upgradeStore").mouseup(function() {
$("#upgradeStore").animate({
height: "80px",
width: "80px"
}, 30);
});
});
} else if(touch == false) {
document.getElementById('type').value = 'Touch Mode ON';
document.body.innerHTML = document.body.innerHTML.replace(/onclick/g,'ontouchend');
document.body.innerHTML = document.body.innerHTML.replace(/onmousedown/g,'ontouchstart');
document.getElementById('background').style.display = 'initial';
document.getElementById('username').style.display = 'initial';
touchswitch = 'ontouchend';
delay7 = setInterval(function() {
touch = true;
clearInterval(delay7);
}, 500);
$(document).ready(function() {
$("#mine").on("touchstart", function() {
$("#mine").animate({
height: "205px",
width: "205px",
left: "7px",
top: "83px"
}, 30, function() {
});
});
$("#mine").on("touchend", function() {
$("#mine").animate({
height: "220px",
width: "220px",
left: "-1px",
top: "80px"
}, 30, function() {
addStone(1);
});
});

$("#men").on("touchstart", function() {
$("#men").animate({
height: "75px",
width: "75px"
}, 30);
});

$("#men").on("touchend", function() {
$("#men").animate({
height: "80px",
width: "80px"
}, 30);
});

$("#upgradeStore").on("touchstart", function() {
$("#upgradeStore").animate({
height: "75px",
width: "75px"
}, 30);
});

$("#upgradeStore").on("touchend", function() {
$("#upgradeStore").animate({
height: "80px",
width: "80px"
}, 30);
});
});

$(document).ready(function() {
$("#store div").on("touchstart", function() {
$(this).animate({
opacity: "0.9"
}, 30);
});
$("#store div").on("touchend", function() {
$(this).animate({
opacity: "0.8"
}, 30);
});
});
}
}


autosave = true;
function setautosave() {
if(autosave == true) {
autosave = false;
createStorage('autosave', autosave);
document.getElementById('autosave').value = 'Autosave: OFF';
clearInterval(mainSave);
show('savegame');
} else {
autosave = true;
createStorage('autosave', autosave);
mainSave = setInterval(SAVEFILE , 50);
hide('savegame');
document.getElementById('autosave').value = 'Autosave: ON';
}
}


function changeMessage() {
if(small == false) {
if(Mcapacity == 1) {
Mcapacity = 2;
document.getElementById('viewed').value = 'Messages Viewed: 2';
} else if(Mcapacity == 2) {
Mcapacity = 4;
document.getElementById('viewed').value = 'Messages Viewed: 4';
} else if(Mcapacity == 4) {
Mcapacity = 6;
document.getElementById('viewed').value = 'Messages Viewed: 6';
} else if(Mcapacity == 6) {
Mcapacity = 8;
document.getElementById('viewed').value = 'Messages Viewed: 8';
} else if(Mcapacity == 8) {
Mcapacity = 10;
document.getElementById('viewed').value = 'Messages Viewed: 10';
} else if(Mcapacity == 10) {
Mcapacity = 1;
document.getElementById('viewed').value = 'Messages Viewed: 1';
} 
} else {
achievePost('You cannot view more than 1 message at a time on Small Screen mode!');
}
}

preventer = 0;
function changeName() {
if(preventer == 0 && touch == true) {
var newName = prompt('Type in your new name.', currentUsername);
if(newName.length > 12 || newName.length < 2) {
alert('Invaild.');
} else {
currentUsername = newName;
preventer = 1;
}
} else {
preventer = 0;
}
if(touch == false) {
var newName = prompt('Type in your new name.', currentUsername);
if(newName.length > 14 || newName.length < 2) {
alert('Invaild.');
} else {
currentUsername = newName;
preventer = 1;
}
}
document.getElementById('username').innerHTML = currentUsername + '\'s Mineshaft';
}

if(developerMode == true) {
devMSG4 = setInterval(function() {
document.getElementById('devMenu').innerHTML = 'options.js loaded!' + '<br>' + document.getElementById('devMenu').innerHTML;
clearInterval(devMSG4);
}, 100);
}
