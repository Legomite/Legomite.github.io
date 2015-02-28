//This work is under Apache License 2.0 

addScript("game/achievements.js");
addScript("game/store.js");
addScript("game/upgrades.js");
addScript("game/updater.js");
addScript("game/extensions.js");
addScript("game/music.js");
addScript("game/options.js");
addScript("game/others.js");
addScript("game/save.js");
addScript("game/event/events.js");

$(document).on('touchmove', function(event) {
event.preventDefault();
});

/*setAttribute('tag', 'meta', 'content', 'initial-scale=3.0, user-scalable=no');

setInterval(function() {
minimized = true;
}, 100);*/

stone = 0;
time = 3000;
use = 0;
itemsBought = 0;
offlineMode = false;
extensionEnable = false;
statShown = false;
handMined = 0;
AC = 0;
SMA = 0;
MSA = 0;
FA = 0;
HA = 0;
TWA = 0;
upgradeCount = 0;
costAddAmount1 = 5;
costAddAmount2 = 20;
costAddAmount3 = 40;
costAddAmount4 = 50;
costAddAmount5 = 65;
costAddAmount6 = 1500;
MSG = false;
MSG1 = false;
MSG2 = false;
MSG3 = false;
useAdd = 1;
stoneAdd = 1;
hack = true;
touch = true;
small = false;
noSmoothing = false;
refreshIncrease = true;
currentVersion = "Beta 19";
touchswitch = 'ontouchend';
randomTick = false;
reduceName = 0;
defaultTitle = true;
codeRun = '';
displayNextButton = false;
function load() {
if(isTouchDevice() === false) {
touch = false;
touchswitch = 'onclick';
document.getElementById('type').value = 'Touch Mode OFF';
document.body.innerHTML = document.body.innerHTML.replace(/ontouchend/g,'onclick');
document.body.innerHTML = document.body.innerHTML.replace(/ontouchstart/g,'onmousedown');
$('#type').replaceWith('<input type="button" onClick="switchInput()" value="Touch Mode ON" id="type"  class="font" />');
document.getElementById('background').style.display = 'initial';
document.getElementById('username').style.display = 'initial';
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

$("#steve").mouseup(function() {
store('miner');
});

$("#mines").mouseup(function() {
store('shaft');
});

$("#factory").mouseup(function() {
store('factory');
});

$("#harvester").mouseup(function() {
store('harvester');
});

$("#time").mouseup(function() {
store('timeWarp');
});

$("#men").mousedown(function() {
$("#men").animate({
height: "75px",
width: "75px"
}, 30);
});

$("#men").mouseup(function() {
$("#men").animate({
height: "80px",
width: "80px"
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

musicplayerdelay = setInterval(function() {
newMusic();
clearInterval(musicplayerdelay);
}, 1000);
}

var uagent = navigator.userAgent.toLowerCase();
if(uagent.search("iphone") > -1 || uagent.search("ipod") > -1) {
addcss('visuals/style/iphone.css');
minimized = true;
hide('message');
show('game');
$(document).off('touchmove');
/*document.getElementById('storeBought').style.top = '450px';
document.getElementById('storeBought').style.left = '0px';
document.getElementById('storeBought').style.zIndex = '2';
document.getElementById('register').style.zIndex = '5';
document.getElementById('register').style.top = '650px';
document.getElementById('achieve').style.top = '700px';
document.getElementById('achieve').style.left = '0px';
document.getElementById('menu').style.width = 'initial';
document.getElementById('menu').style.top = '850px';
document.getElementById('menu').style.right = '500px';
document.getElementById('clicks').style.left = '225px';
document.getElementById('clicks').style.width = '100px';
document.getElementById('men').style.left = '10px';
document.getElementById('men').style.top = '770px';
document.getElementById('upgradeMenu').style.zIndex = '3';
document.getElementById('upgradeStore').style.left = '100px';
document.getElementById('upgradeStore').style.top = '770px';
document.getElementById('menu').style.left = '0%';
document.getElementById('menu').style.width = '224px';
document.getElementById('broadcast').style.left = '224px';
document.getElementById('broadcast').style.top = '500px';
document.getElementById('broadcast').style.width = '224px';
fontSize('username', '10px');
fontSize('broadcast', '10px');
size('steveMinerAmount', '224px', '25px');
size('factoryAmount', '224px', '25px');
size('timeWarpAmount', '224px', '25px');
fontSize('steveMinerAmount', '20px');
fontSize('factoryAmount', '20px');
fontSize('timeWarpAmount', '20px');
size('mineShaftAmount', '224px', '25px');
size('harvesterAmount', '224px', '25px');
fontSize('mineShaftAmount', '20px');
fontSize('harvesterAmount', '20px');
document.getElementById('viewed').value = 'Messages Viewed: 1';
hide('rightSideBar');
hide('rightSideBarTwo');
hide('beta');
hide('viewed');
hide('type');
hide('background');
hide('username');
reduceName = 1;
small = true;
Mcapacity = 1;
document.getElementById('username').style.left = '224px';
document.getElementById('username').style.top = '0px';*/
}
}

function registerPost(mess) {
document.getElementById('register').innerHTML = (mess);
}

function bonusPost(mess) {
document.getElementById('stoneEarned').innerHTML = mess;
$('#stoneEarned').fadeIn();
stoneEarnedDelay = setInterval(function() {
$('#stoneEarned').fadeOut();
clearInterval(stoneEarnedDelay);
}, 3000);
}

msg = 0;
opened = 0;
Mcapacity = 4;
function achievePost(postAchieveMes) {
e = document.getElementById('achieve').innerHTML;
msg++;
opened++;
document.getElementById('achieve').innerHTML = '<div id="' + msg + '" ' + touchswitch + '="hide(' + msg + '); opened--;">' + postAchieveMes + '</div>' + e;
check();
}

function check() {
if(opened >= Mcapacity) {
var d = msg - Mcapacity;
removeElement('achieve', d);
}
}

buttValue = 0;

function broadcast(news) {
if(news !== undefined) {
document.getElementById('broadcast').innerHTML = news;
} else {
var randomnumber = Math.floor(Math.random()*currentRange);
broadcast(part1[randomnumber]);
}
}

function resetDefaultTicker(resetValue) {
time = resetValue;
var mainTicker = setInterval(function(){
stone+= use;
checker();
}, time);
}

function clicksOnclick() {
alert(use + " Stone Every " + time + " Milliseconds");
}

menuOpen = false;
function openUpgrades() {
if (menuOpen == false && noSmoothing == false) {
$(document).ready(function(){
    $("#upgradeMenu").slideToggle('slow');
  });
document.getElementById("upgradeStore").style.opacity = "0.8";
menuOpen = true;
} else {
if (menuOpen == true && noSmoothing == false) {
$(document).ready(function(){
    $("#upgradeMenu").slideToggle('slow');
  });
document.getElementById("upgradeStore").style.opacity = "1";
menuOpen = false;
}
}
if (menuOpen == false && noSmoothing == true) {
show("upgradeMenu");
menuOpen = true;
document.getElementById("upgradeStore").style.opacity = "0.8";
} else {
if (menuOpen == true && noSmoothing == true) {
hide("upgradeMenu");
document.getElementById("upgradeStore").style.opacity = "1";
menuOpen = false;
}
}
}
function achieveOnclick() {
document.getElementById("achieve").innerHTML = "";
}
function registerOnclick() {
document.getElementById("register").innerHTML = "";
}
stoneSiege = false;
function stoneSiegeActive(level) {
if(level == "1" && stone >= 25000) {
stone-= 25000;
broadcast("The world, it feels, well different. A dark curse is here!");
hide("stoneSiege");
stoneSiege = true;
steveMiner = steveMiner - 25;
randomTick = false;
document.body.style.backgroundImage = "url('http://i.imgur.com/UskIV3V.jpg')";

setInterval(function() {
if(randomTick == false) {
randomTick = true;
//document.body.style.background="gray";
document.getElementById("beta").innerHTML = "ishbdtxjkwobyrj";
} else {
randomTick = false;
//document.body.style.background="darkgray";
document.getElementById("beta").innerHTML = "owkmvrwdcnciuds";
} 
}, 50);
} else {
achievePost("Failed to purchase.");
}
if(level == "2") {

}
if(level == "3") {

}
}

function showStat() {
if (statShown == false && noSmoothing == false) {
$(document).ready(function(){
    $("#stats").slideToggle('fast');
  });
statShown = true;
} else {
if (noSmoothing == false) {
$(document).ready(function(){
    $("#stats").slideToggle('fast');
  });
statShown = false;
}
if (statShown == false && noSmoothing == true) {
show("stats");
statShown = true;
} else {
if (noSmoothing == true) {
hide("stats");
statShown = false;
} 
}
}
}

updateOpen = false;
function showMen() {
if (updateOpen == false && noSmoothing == false) {
$(document).ready(function(){
    $("#menu").fadeIn('fast');
  });
document.getElementById("men").style.opacity = "0.8";
updateOpen = true;
} else {
if (updateOpen == true && noSmoothing == false) {
$(document).ready(function(){
    $("#menu").fadeOut('fast');
  });
document.getElementById("men").style.opacity = "1";
updateOpen = false;
}
}
if (updateOpen == false && noSmoothing == true) {
show("menu");
updateOpen = true;
document.getElementById("men").style.opacity = "0.8";
} else {
if (updateOpen == true && noSmoothing == true) {
hide("menu");
document.getElementById("men").style.opacity = "1";
updateOpen = false;
}
}
}
playMusic = true;
function stopMusic() {
if(playMusic == true) {
playMusic = false;
document.getElementById("stopMPThree").value = "Music OFF";
stopAudio(audio);
} else {
playMusic = true;
document.getElementById("stopMPThree").value = "Music ON";
playAudio(audio);
}
}

function reset() {
if(getStorage('autosave') == 'true' || getStorage('autosave') == null) {
clearInterval(mainSave);
}
window.localStorage.clear();
window.location.reload();
}

function setOffline() {
if (offlineMode == false) {
offlineMode = true;
document.getElementById("offline").value = "Online Mode";
document.body.style.backgroundImage = "url('visuals/media/background.png/')";
} else {
offlineMode = false;
document.getElementById("offline").value = "Offline Mode";
document.body.style.backgroundImage = "url('http://i.imgur.com/nuyk1Xv.jpg')";
}
}
var mainTicker = setInterval(function(){
stone+= use;
checker();
}, time);

function checkKey() {
if (window.event.keyCode == 13) {
addStone(1);
}
}

function info() {
alert('Alpha Build 20 Released //; 2015 Legomite Incorporation');
}

enableMusic = false;
  
function addStone(check) {
if(check == 1) {
stone+= stoneAdd;
handMined+= stoneAdd;
if(stoneSiege == true) {
random0_o = Math.floor(Math.random()*500);
if(random0_o == 0) {
stone+= 27;
bonusPost('+27');
stoneEarnedDelay = setInterval(function() {
$('#stoneEarned').fadeOut();
clearInterval(stoneEarnedDelay);
}, 3000);
}
}
newMusic();
if(stone >= 100) {
part1[0] = 'You Attract attention from the Miners';
part1[1] = 'Buisness is starting to come out of its dark ages';
part1[2] = 'The stone pile seems to be happier.';
}
} else {
document.write('HOW DARE YOU HACK! HEHEHEHEHE. <br>Do you feel bored? I do.<br> Are you LDX or someone else?');
}
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

function newImg(url, msg) {
$('#achievementsUnlocked').append('<img src=' + url + ' ' + touchswitch + '="alert(\''+ msg +'\');" style="width: 50px; height:50px; margin-right: 0.5px;">');
}

function extend(id) {
descend(null, 1);
$('#upgradeMenu #' + id + ' div').css('display', 'initial');
}

function descend(id, del) {
if(del == null) {
delayed1 = setInterval(function() {
$('#upgradeMenu #' + id + ' div').css('display', 'none');
clearInterval(delayed1);
}, 10);
} else {
$('#upgradeMenu div div').css('display', 'none');
}
}

function getName() {
if(getStorage('name') !== null) {
if(getStorage('name') == 'Stevie') {
return 'Stevie';
} else {
return getStorage('name');
}
} else {
return 'Stevie';
}
}

function removeElement(parentDiv, childDiv){
     if (childDiv == parentDiv) {
          alert("The parent div cannot be removed.");
     }
     else if (document.getElementById(childDiv)) {     
          var child = document.getElementById(childDiv);
          var parent = document.getElementById(parentDiv);
          parent.removeChild(child);
     }
     else {
          return false;
     }
}

upgradesOnline = 0;
function createNewUpgrade(name, codename, description, func, price) {
upgradesOnline++;
$('#pageOne').append('<div id="' + codename + '" ' + touchswitch + '="extend(\'' + codename + '\')">' + name + '<div><br><label style="font-size: 20px; color: purple; text-shadow: 0px 0px 0px">Price: ' + price + '</label><br><label ' + touchswitch + '="' + func + '">Buy |</label> <label ' + touchswitch + '="descend(\'' + codename + '\')">Cancel</label><br><div class="desc">' + description + '</div></div></div>');
}

external = '1';

external = 'Select the type of plugins you want to load.<br><br><div class="center"><label class="mcButton" ontouchend="loadPrompt(pluginList)">Local</label> <label ontouchend="enablePlugins(); dismissPrompt()"  class="mcButton">External</label><br><br><br><div class="center mcButton" style="color: darkred" ontouchend="dismissPrompt()">Cancel</div></div>';

pluginList = '<div class="center">Plugins:<br></div><label ontouchend="loadPrompt(external)">BACK</label><br><br> ' + 
'<div class="pluginItem" ontouchend="addStartup(\'script\', \'game/plugins/legohack/LegoHack.js\'); addScript(\'game/plugins/legohack/LegoHack.js\'); dismissPrompt()"><img src="game/plugins/legohack/logo.png" />LegoHack PRO</div>' +
'<div class="pluginItem" ontouchend="addStartup(\'script\', \'game/plugins/customback/customBackground.js\'); dismissPrompt()"><img src="game/plugins/customback/logo.png" />Custom Background</div>' +
'<div class="pluginItem" ontouchend="addStartup(\'script\', \'game/plugins/forge/forge.js\'); addScript(\'game/plugins/forge/forge.js\'); dismissPrompt()"><img src="game/plugins/forge/logo.png" />Stoneminer FORGE</div>';

resetMsg = '<div style="color: darkred">ARE YOU SURE YOU WANT TO RESET? ALL DATA WILL BE CLEARED</div><br><br><div class="center"><label class="mcButton" style="margin-right: 5px; color: darkblue" ontouchend="dismissPrompt()">Cancel</label><label class="mcButton" style="color: darkred" ontouchend="reset()">CONFIRM</label></div>';

function loadPrompt(vars) {
	if(vars == null) {
	  return 'error';
	} else {
	show('tint');
	show('prompt');
	if(touchswitch == 'onclick') {
  	varss = vars.replace(/ontouchend/g,'onclick');
  	varrs = vars.replace(/ontouchstart/g,'onmousedown')
	  document.getElementById('prompt').innerHTML = varss;
	} else {
	  document.getElementById('prompt').innerHTML = vars;
	}
 }
}

function dismissPrompt(vars) {
hide('tint');
hide('prompt');
}

function addStartup(type, typee) {
	if(type == 'script') {
	if(codeRun.split(typee) == false) {
	codeRun = codeRun + ' addScript("' + typee + '");';
	}
	} else {
		return 'Unknown type.';
	}
}

page = 1;
function nextPage() {
if(page == 1) {
page = 2;
hide('pageOnes');
show('pageTwo');
document.getElementById('moreStoreItems').innerHTML = '< Previous page';
} else {
page = 1;
show('pageOnes');
hide('pageTwo');
document.getElementById('moreStoreItems').innerHTML = 'Next page >';
}
}

developerMode = true;
if(developerMode == true) {
devMSG0 = setInterval(function() {
document.getElementById('devMenu').innerHTML = '<label style="color: purple">core.js</label> loaded!' + '<br>' + document.getElementById('devMenu').innerHTML;
clearInterval(devMSG0);
}, 100);
}
