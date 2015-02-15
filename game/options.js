function enablePlugins() {
if(offlineMode === false) {
extensionEnable = true;
buttValue = buttValue + 1;
document.getElementById('pluginLoad').value = "Add extension";
if (buttValue > 1) {
pluginExist = false;
}
} else {
achievePost("ERROR Offline Mode Is On!");
registerPost("ERROR Offline Mode Is On!");
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
document.getElementById("hide").value = "Show Buildings";
hidden = true;
} else {
$(document).ready(function(){
    $("#storeBought").fadeToggle('fast');
  });
document.getElementById("hide").value = "Hide Buildings";
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
document.getElementById("steve").style.textShadow="5px 5px 5px black";
document.getElementById("mines").style.textShadow="5px 5px 5px black";
document.getElementById("factory").style.textShadow="5px 5px 5px black";
document.getElementById("harvester").style.textShadow="5px 5px 5px black";
document.getElementById("time").style.textShadow="5px 5px 5px black";
document.getElementById("achieve").style.boxShadow="0px 0px 5px black";
document.getElementById("upgradeMenu").style.textShadow="5px 5px 5px black";
fancy = true;
noSmoothing = false;
document.getElementById("fancy").value = "Fancy Graphics ON";
}
}

function switchInput() {
if(touch) {
touch = false;
document.getElementById('type').value = 'Touch Mode OFF';
document.body.innerHTML = document.body.innerHTML.replace(/ontouchend/g,'onclick');
document.body.innerHTML = document.body.innerHTML.replace(/ontouchstart/g,'onmousedown');
document.getElementById('background').style.display = 'initial';
document.getElementById('username').style.display = 'initial';
if(defaultFont) {
normalFont('default');
} else {
normalFont('normal');
}
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
});
} else {
touch = true;
document.getElementById('type').value = 'Touch Mode ON';
document.body.innerHTML = document.body.innerHTML.replace(/onclick/g,'ontouchend');
document.body.innerHTML = document.body.innerHTML.replace(/onmousedown/g,'ontouchstart');
document.getElementById('background').style.display = 'initial';
document.getElementById('username').style.display = 'initial';
if(defaultFont) {
normalFont('default');
} else {
normalFont('normal');
}
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
});
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
