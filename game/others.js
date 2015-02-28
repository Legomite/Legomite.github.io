function stoneSiegeConfirm() {
document.getElementById("stoneSiege").style.display = "initial";
hack = false;
}

var windowHeight = $(window).height();
var windowWidth = $(window).width();

HTMLbackground = document.getElementById('background').offsetWidth;
document.getElementById('background').style.width = windowWidth - 450 + 'px';
document.getElementById('background').style.display = 'initial';
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

document.getElementById('username').innerHTML = currentUsername + '\'s Mineshaft';

//Broadcasting Arrays
part1 = ['Miners are partially interested in your buisness.', 'Work is dull as usual', 'Your pile of stone seems to get duller and duller each passing day.', 'Advertising the buisness is embarrasing.', 'This is depressing'];

//Daily Broadcasting
var broadcastDelay = window.setTimeout(startBroadcast, 1000);

currentRange = 5;
function startBroadcast() {
var randomnumber = Math.floor(Math.random()*currentRange);
broadcast(part1[randomnumber]);
setInterval(function() {
var randomnumber = Math.floor(Math.random()*currentRange);
broadcast(part1[randomnumber]);
}, 10000);
clearTimeout(broadcastDelay);
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

var identify = getUrlVars()["inocydia"];
if(identify == 'true' && getStorage('inocydiacheck') == null) {
show('inocydia');
defaultTitle = false;
title('Stone Miner');
} 
if(identify == 'true') {
defaultTitle = false;
title('Stone Miner');
} 

document.body.style.backgroundImage = 'url("visuals/media/background.png")';

if(developerMode == true) {
devMSG5 = setInterval(function() {
document.getElementById('devMenu').innerHTML = 'others.js loaded!' + '<br>' + document.getElementById('devMenu').innerHTML;
clearInterval(devMSG5);
}, 100);
}
