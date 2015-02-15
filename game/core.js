//This work is under Apache License 2.0 

addScript("game/achievements.js");
addScript("game/store.js");
addScript("game/updater.js");
addScript("game/extensions.js");
addScript("game/music.js");
addScript("game/options.js");
addScript("game/others.js");
addScript("game/save.js");

$(document).on('touchmove', function(event) {
event.preventDefault();
});

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
randomTick = false;
reduceName = 0;
defaultTitle = true;
function load() {
if(isTouchDevice() === false) {
newMusic();
touch = false;
document.getElementById('type').value = 'Touch Mode OFF';
q = window.setTimeout(fixFont, 100); 
document.body.innerHTML = document.body.innerHTML.replace(/ontouchend/g,'onclick');
document.body.innerHTML = document.body.innerHTML.replace(/ontouchstart/g,'onmousedown');
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
});
}

minimized = false;
var uagent = navigator.userAgent.toLowerCase();
if(uagent.search("iphone") > -1 || uagent.search("ipod") > -1) {
minimized = true;
$(document).off('touchmove');
document.getElementById('storeBought').style.top = '450px';
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
document.getElementById('username').style.top = '0px';
}
}

function registerPost(mess) {
document.getElementById('register').innerHTML = (mess);
}

msg = 0;
opened = 0;
Mcapacity = 4;
function achievePost(postAchieveMes) {
e = document.getElementById('achieve').innerHTML;
msg++;
opened++;
document.getElementById('achieve').innerHTML = '<div id="' + msg + '" onclick="hide(' + msg + '); opened--;">' + postAchieveMes + '</div>' + e;
check();
}

function check() {
if(opened >= Mcapacity) {
var d = msg - Mcapacity;
hide(d);
}
}

buttValue = 0;

function fixFont() {
clearTimeout(q);
normalFont('default');
}

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

function update() {
newVersion = "Beta 19";
if (currentVersion == newVersion) {
document.getElementById('updateResults').innerHTML = ("You have the latest Build of StoneMiner!");
updateLoad = 2;
} else {
document.getElementById('updateResults').innerHTML = ("An update is available! You need to download " + newVersion + "!");
}
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
$('#broadcast').css('color', 'darkred');
hide("stoneSiege");
stoneSiege = true;
steveMiner = steveMiner - 25;
if(use !== 1000) {
newTime = time - 500;
resetDefaultTicker(newTime);
}
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

defaultFont = true;
fontLevel = 3;
function normalFont(type) {
if(type == null) {
if(fontLevel == 3) {
fontLevel = 1;
document.getElementById("normal").value = "Old Font";
$('.font').css('font-family', 'Helvetica');
$('input').css('font-family', 'Helvetica');
document.getElementById("amount").style.fontSize = "40px";
document.getElementById("label").style.fontSize = "40px";
document.getElementById("upgradeMenu").style.fontSize = "23px";
} else if(fontLevel == 2) {
fontLevel = 3;
document.getElementById("normal").value = "Minecraft Font";
$('.font').css('font-family', 'minecraft, Helvetica');
$('input').css('font-family', 'minecraft, Helvetica');
document.getElementById("normal").style.fontFamily = "Helvetica";
document.getElementById("amount").style.fontSize = ("30px");
document.getElementById("label").style.fontSize = ("30px");
document.getElementById("upgradeMenu").style.fontSize = "17.5px";
} else if(fontLevel == 1) {
fontLevel = 2;
document.getElementById("normal").value = "Reduced Minecraft Font";
$('.font').css('font-family', 'minecraft, Helvetica');
$('input').css('font-family', 'minecraft, Helvetica');
document.getElementById("normal").style.fontFamily = "Helvetica";
document.getElementById("amount").style.fontFamily = ("Helvetica");
document.getElementById("label").style.fontFamily = ("Helvetica");
document.getElementById("beta").style.fontFamily = ("Helvetica");
document.getElementById("broadcast").style.fontFamily = ("Helvetica");
document.getElementById("upgradeMenu").style.fontFamily = ("Helvetica");
document.getElementById("upgradeMenu").style.fontSize = "23px";
}
}
if(type !== null) {
if(type == 'normal') {
fontLevel = 1;
document.getElementById("normal").value = "Old Font";
$('.font').css('font-family', 'Helvetica');
$('input').css('font-family', 'Helvetica');
document.getElementById("amount").style.fontSize = "40px";
document.getElementById("label").style.fontSize = "40px";
document.getElementById("upgradeMenu").style.fontSize = "23px";
} else if(type == 'default') {
fontLevel = 3;
document.getElementById("normal").value = "Minecraft Font";
$('.font').css('font-family', 'minecraft, Helvetica');
$('input').css('font-family', 'minecraft, Helvetica');
document.getElementById("normal").style.fontFamily = "Helvetica";
document.getElementById("amount").style.fontSize = ("30px");
document.getElementById("label").style.fontSize = ("30px");
document.getElementById("upgradeMenu").style.fontSize = "17.5px";
}
if(type == 1) {
fontLevel = 1;
document.getElementById("normal").value = "Old Font";
$('.font').css('font-family', 'Helvetica');
$('input').css('font-family', 'Helvetica');
document.getElementById("amount").style.fontSize = "40px";
document.getElementById("label").style.fontSize = "40px";
document.getElementById("upgradeMenu").style.fontSize = "23px";
} else if(type == 3) {
fontLevel = 3;
document.getElementById("normal").value = "Minecraft Font";
$('.font').css('font-family', 'minecraft, Helvetica');
$('input').css('font-family', 'minecraft, Helvetica');
document.getElementById("normal").style.fontFamily = "Helvetica";
document.getElementById("amount").style.fontSize = ("30px");
document.getElementById("label").style.fontSize = ("30px");
document.getElementById("upgradeMenu").style.fontSize = "17.5px";
} else if(type == 2) {
fontLevel = 2;
document.getElementById("normal").value = "Reduced Minecraft Font";
$('.font').css('font-family', 'minecraft, Helvetica');
$('input').css('font-family', 'minecraft, Helvetica');
document.getElementById("normal").style.fontFamily = "Helvetica";
document.getElementById("amount").style.fontFamily = ("Helvetica");
document.getElementById("label").style.fontFamily = ("Helvetica");
document.getElementById("beta").style.fontFamily = ("Helvetica");
document.getElementById("broadcast").style.fontFamily = ("Helvetica");
document.getElementById("upgradeMenu").style.fontFamily = ("Helvetica");
document.getElementById("upgradeMenu").style.fontSize = "23px";
}
}
var windowHeight = $(window).height();
var HTMLusername = document.getElementById('username').offsetWidth;
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
document.getElementById("stopMPThree").value = "Play Music";
stopAudio(audio);
} else {
playMusic = true;
document.getElementById("stopMPThree").value = "Stop Music";
playAudio(audio);
}
}
function reset() {
var userChoice = confirm("[WARNING] THIS WILL WIPE AWAY ALL YOUR PROGRESS, ARE YOU SURE YOU WANT TO RESET?");
if(userChoice == true) {
document.getElementById("achievementsUnlocked").innerHTML = "";
document.getElementById('achieve').innerHTML = "";
if(isTouchDevice() == true) {
document.getElementById("options").innerHTML = '<input type="button" onclick="reset()" value="Reset Game" id="reset" class="font fancyButt" />          <input type="button" onclick="update()" value="Check For Update" id="button" class="font fancyButt" />          <input type="button" onclick="showStat()" value="Stats" class="font fancyButt" id="stat"/>          <input type="button" onclick="fancyGraphics()" value="Fancy Graphics ON" id="fancy" class="font fancyButt" />          <input type="button" onclick="stopMusic()" value="Stop Music" id="stopMPThree" class="font fancyButt" />          <input type="button" onclick="setOffline()" value="Offline Mode" id="offline" class="font fancyButt" />          <input type="button" onclick="hideBuildings()" value="Hide Buildings" id="hide" class="font fancyButt" />          <input type="button" onclick="enablePlugins()" value="Enable Extensions" id="pluginLoad" class="font fancyButt" />          <input type="button" onclick="normalFont()" value="Minecraft Font" id="normal" />          <input type="button" onclick="intuitive()" value="Increase Legibility OFF" id="legibility"  class="font" />          <input type="button" onclick="titleDisp()" value="Title Displays Stone ON" id="titleDisplay"  class="font" />          <input type="button" onClick="switchInput()" value="Touch Mode ON" id="type"  class="font" />          <input type="button" onclick="changeMessage()" value="Messages Viewed: 4" id="viewed"  class="font" />          <!--<input type="button" onclick="saveGame()" value="Save Game" id="save" />             <input type="button" onclick="focusGame()" value="Focus ON" id="focus" />--> ';
} else {
document.getElementById('options').innerHTML = '<input type="button" onclick="reset()" value="Reset Game" id="reset" class="font fancyButt" /><input type="button" onclick="update()" value="Check For Update" id="button" class="font fancyButt" /><input type="button" onclick="showStat()" value="Stats" class="font fancyButt" id="stat"/><input type="button" onclick="fancyGraphics()" value="Fancy Graphics ON" id="fancy" class="font fancyButt" /><input type="button" onclick="stopMusic()" value="Stop Music" id="stopMPThree" class="font fancyButt" /><input type="button" onclick="setOffline()" value="Offline Mode" id="offline" class="font fancyButt" /><input type="button" onclick="hideBuildings()" value="Hide Buildings" id="hide" class="font fancyButt" /><input type="button" onclick="enablePlugins()" value="Enable Extensions" id="pluginLoad" class="font fancyButt" /><input type="button" onclick="normalFont()" value="Minecraft Font" id="normal" /><input type="button" onclick="intuitive()" value="Increase Legibility OFF" id="legibility"  class="font" /><input type="button" onclick="titleDisp()" value="Title Displays Stone ON" id="titleDisplay"  class="font" /><input type="button" onClick="switchInput()" value="Touch Mode ON" id="type"  class="font" /><input type="button" onclick="changeMessage()" value="Messages Viewed: 4" id="viewed"  class="font" /><!--<input type="button" onclick="saveGame()" value="Save Game" id="save" /><input type="button" onclick="focusGame()" value="Focus ON" id="focus" />--> ';
}
stone = 0;
time = 3000;
use = 0;
itemsBought = 0;
offlineMode = false;
extensionEnable = false;
statShown = false;
enableMusic = false;
handMined = 0;
AC = 0;
SMA = 0;
MSA = 0;
FA = 0;
HA = 0;
TWA = 0;
costAddAmount1 = 5;
costAddAmount2 = 20;
costAddAmount3 = 40;
costAddAmount4 = 50;
costAddAmount5 = 65;
costAddAmount6 = 1500;
MSG = false;
MSS1 = false;
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
reduceName = 0;
newMusic();
steveMiner = 50;
mineShaft = 100;
factory = 500;
harvester = 3300;
timeWarp = 5500;
steveMiner2X = 2000;
useIncrease = 1500;
stoneAddIncrease = 250;
speed = 20000;

msg = 0;
opened = 0;
Mcapacity = 4;
buttValue = 0;
stoneSiege = false;
normalFont('default');
currentUsername = 'Stevie';
document.getElementById('username').innerHTML = currentUsername + '\'s Mineshaft';

refreshIncrease = true;
highNumber = false;
reachForTheSky = false;
needCompany = false;
stoneIndustry = false;
brokenBorder = false;
firstToHire = false;
smog = false;
dawnOfANewCollection = false;
masterOfRockets = false;
rippingTheSpaceTimeContinuum = false;
dirtMouth = false;
mudLover = false;
tunnelDigger = false;
bigSpender = false;
massProduction = false;
firstClick = false;
bigSpenderSilver = false;
bigSpenderGold = false;
bigSpenderPlatinum = false;
bigSpenderSapphire = false;
toastyFingers = false;
hackingTheStoneSiege = false;
hackingInfinityAndBeyond = false;
honestlyHonest = false;
upgradeArmada = false;
justPlainLucky = false;

availibility = true;
upgradeCount = 0;
tickingPurchase = 0;
clearInterval('delayPurchase');
if(hidden == true) {
hideBuildings();
}
if(offlineMode == true) {
setOffline();
}
registerPost("Reset Complete.");
} else {
registerPost("Reset Aborted.");
}
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
addStone();
}
}

function info() {
alert('Alpha Build 19 Released: 1/10/15; 2015 Legomite Incorporation');
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
registerPost("BONUS!!! +27");
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
});

function newImg(url, msg) {
$('#achievementsUnlocked').append('<img src=' + url + ' onclick="alert(\''+ msg +'\');" style="width: 50px; height:50px; margin-right: 0.5px;">');
}

function extend(id) {
$('#upgradeMenu #' + id + ' div').css('display', 'initial');
}

function descend(id) {
$('#upgradeMenu #' + id + ' div').css('display', 'none');
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

page = 1;
function nextPage() {
if(page == 1) {
page = 2;
hide('pageOne');
show('pageTwo');
document.getElementById('upgradePageTurner').innerHTML = 'Game Upgrades<br>/\\ ';
} else {
page = 1;
show('pageOne');
hide('pageTwo');
document.getElementById('upgradePageTurner').innerHTML = 'Item Upgrades<br>\\/ ';
}
}

function createNewUpgrade(name, description, func) {

}
