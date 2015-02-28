currentUsername = 'Stevie';
minimized = false;
gameplayTime = 0;

function roundDown(number, decimals) {
    decimals = decimals || 0;
    return ( Math.floor( number * Math.pow(10, decimals) ) / Math.pow(10, decimals) );
}

function doOnOrientationChange() {
switch(window.orientation) {  
case -90:
case 90:
//landscape
if(portrait == true) {
portrait = false;
show('game');
hide('message');
var windowHeight = $(window).height();
var windowWidth = $(window).width();
HTMLbackground = document.getElementById('background').offsetWidth;
document.getElementById('background').style.width = windowWidth - 450 + 'px';
//document.getElementById('background').style.display = 'initial';
document.getElementById('background').style.left = '224px';
HTMLmenu = document.getElementById('menu').style.width;
document.getElementById('menu').style.width = windowWidth - 448 + 'px';
document.getElementById('menu').style.left = '224px';
document.getElementById('username').style.display = 'initial';
document.getElementById('steveMinerAmount').style.width = windowWidth - 448 + 'px';
document.getElementById('steveMinerAmount').style.left = '224px';
document.getElementById('mineShaftAmount').style.width = windowWidth - 448 + 'px';
document.getElementById('mineShaftAmount').style.left = '224px';
document.getElementById('factoryAmount').style.width = windowWidth - 448 + 'px';
document.getElementById('factoryAmount').style.left = '224px';
document.getElementById('harvesterAmount').style.width = windowWidth - 448 + 'px';
document.getElementById('harvesterAmount').style.left = '224px';
document.getElementById('timeWarpAmount').style.width = windowWidth - 448 + 'px';
document.getElementById('timeWarpAmount').style.left = '224px';
} else {
}
break; 
default:
//portrait
if(minimized == false) {
portrait = true;
hide('game');
show('message');
break; 
}
}
}
window.addEventListener('orientationchange', doOnOrientationChange);

portrait = false;

setInterval (function() { 
if(isTouchDevice() == true) {
doOnOrientationChange();
}
document.getElementById('amount').innerHTML = (addCommas(roundDown(stone)));
document.getElementById('itemsArchive').innerHTML = (itemsBought + " Store Items Bought");
document.getElementById("pickedArchiveAmount").innerHTML = (handMined);
document.getElementById("upgradeArchive").innerHTML = (upgradeCount + " Upgrades Bought");
document.getElementById("timeArchive").innerHTML = ("Session time: " + gameplayTime + " Seconds");
if(reduceName == 0) {} else {

}
var HTMLbroadcast = document.getElementById('broadcast').offsetWidth;
if(reduceName == 0) {
} else {
document.getElementById('broadcast').style.left = '224px';
document.getElementById('broadcast').style.top = '100px';
}
divideTime = time / 1000;
roundTime = Math.round(divideTime*10)/10;
document.getElementById('clicks').innerHTML = (use + " Stone Per " + roundTime + " Sec.");
if(defaultTitle == true) {
title((roundDown(stone) + " Stone"));
}
document.getElementById('steveMinerAmount').innerHTML = (SMA + " Miners");
document.getElementById('mineShaftAmount').innerHTML = (MSA + " Mineshafts");
document.getElementById('factoryAmount').innerHTML = (FA + " Factories");
document.getElementById('harvesterAmount').innerHTML = (HA + " Harvesters");
document.getElementById('timeWarpAmount').innerHTML = (TWA + " TimeWarps");
if (stone >= steveMiner) {
document.getElementById('steve').innerHTML = ("Miner<br>Cost: " + steveMiner);
document.getElementById('steve').style.color = "#00AA00";
} else {
document.getElementById('steve').innerHTML = ("Miner<br>Cost: " + steveMiner);
document.getElementById('steve').style.color = "gray";
} 
if (stone >= mineShaft) {
document.getElementById('mines').innerHTML = ("Mine Shaft<br>Cost: " + mineShaft);
document.getElementById('mines').style.color = "#00AA00";
} else {
document.getElementById('mines').innerHTML = ("Mine Shaft<br>Cost: " + mineShaft);
document.getElementById('mines').style.color = "gray";
} 
if (stone >= factory) {
document.getElementById('factory').innerHTML = ("Factory<br>Cost: " + factory);
document.getElementById('factory').style.color = "#00AA00";
} else {
document.getElementById('factory').innerHTML = ("Factory<br>Cost: " + factory);
document.getElementById('factory').style.color = "gray";
} 
if (stone >= harvester) {
document.getElementById('harvester').innerHTML = ("Harvester<br>Cost: " + harvester);
document.getElementById('harvester').style.color = "#00AA00";
} else {
document.getElementById('harvester').innerHTML = ("Harvester<br>Cost: " + harvester);
document.getElementById('harvester').style.color = "gray";
} 
if (stone >= timeWarp) {
document.getElementById('time').innerHTML = ("Time Warp<br>Cost: " + timeWarp);
document.getElementById('time').style.color = "#00AA00";
} else {
document.getElementById('time').innerHTML = ("Time Warp<br>Cost: " + timeWarp);
document.getElementById('time').style.color = "gray";
}
}, 0);

setInterval(function() {
gameplayTime++;

}, 1000);

if(developerMode == true) {
devMSG8 = setInterval(function() {
document.getElementById('devMenu').innerHTML = 'updater.js loaded!' + '<br>' + document.getElementById('devMenu').innerHTML;
clearInterval(devMSG8);
}, 100);
}
