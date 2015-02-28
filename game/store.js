//Store Cost
steveMiner = 50;
mineShaft = 100;
factory = 500;
harvester = 3300;
timeWarp = 5500;
steveMiner2X = 2000;
useIncrease = 1500;
stoneAddIncrease = 250;
speed = 20000;

function store(purchase) {
if(purchase == "miner") {
if (stone >= steveMiner) {
use+= useAdd;
stone-= steveMiner;
steveMiner+= costAddAmount1;
costAddAmount1+= 2;
itemsBought++;
SMA++;
}
if(SMA >= 100 && FA >= 100 && MSG === false) {
m = 1;
MSG = true;
repeaters1 = setInterval(function() {
broadcast("Something is wrong with our workers, it feels, strange...");
$('#broadcast').css('color', 'darkred');
m++;
if(m >= 10000) {
clearInterval(repeaters1);
$('#broadcast').css('color', 'black');
}
}, 0);
}
}

if(purchase == "shaft") {
if (stone >= mineShaft) {
use+= 5;
stone -= mineShaft;
mineShaft+= costAddAmount2;
costAddAmount2+= 5;
itemsBought++;
MSA++;
}
}

if(purchase == "factory") {
if (stone >= factory) {
use+= 10;
stone -= factory;
factory+= costAddAmount3;
costAddAmount3+= 7;
itemsBought++;
FA++;
}
m1 = 0;
repeaters2 = setInterval(function() {
if(FA >= 50 && MSG1 === false) {
broadcast("A dark shadow takes overs the land...");
$('#broadcast').css('color', 'darkred');
MSG1 = true;
}
m1++;
if(m1 >= 10000) {
clearInterval(repeaters2);
$('#broadcast').css('color', 'black');
}
}, 0);
m2 = 0;
repeaters3 = setInterval(function() {
if(FA >= 75 && MSG2 === false) {
broadcast("You feel a evil presence watching you...");
$('#broadcast').css('color', 'darkred');
MSG2 = true;
}
m2++;
if(m2 >= 10000) {
clearInterval(repeaters3);
$('#broadcast').css('color', 'black');
}
}, 0);
}

if(purchase == "harvester") {
if (stone >= harvester) {
use+= 15;
stone-= harvester;
harvester+= costAddAmount4;
costAddAmount4+= 9;
itemsBought++;
HA++;
}
m3 = 0;
repeaters4 = setInterval(function() {
if(HA >= 50 && FA >= 100 && SMA >= 100 && MSG3 === false) {
broadcast("Wait, one of the stone in this one is glowing. You blink, it disappears...");
$('#broadcast').css('color', 'darkred');
MSG3 = true;
stoneSiegeConfirm();
}
m3++;
if(m3 >= 10000) {
clearInterval(repeaters4);
$('#broadcast').css('color', 'black');
}
}, 0);
}

if(purchase == "timeWarp") {
if (stone >= timeWarp) {
use+= 30;
stone-= timeWarp;
timeWarp+= costAddAmount5;
costAddAmount5+= 13;
itemsBought++;
TWA++;
} 
}
}

function buyMinerIncrease() {
if (stone >= steveMiner2X) {
useAdd*= 2;
stone-= steveMiner2X;
steveMiner2X+= 2500;
upgradeCount++;
}
}
speedAdd = 20000;
upgradeCount = 0;
function buySpeed() {
if (stone >= speed) {
if(time > 0) {
newTime = time - 5;
upgradeCount++;
resetDefaultTicker(newTime);
stone-= speed;
speed+= speedAdd;
speedAdd+= 15000;
} else {
achievePost("You Have Exceeded your limit! It can only go as low as 1 Second!");
}
}
}
availibility = true;
function buyUseIncrease() {
if (stone >= useIncrease && availibility) {
if(use !== 0) {
upgradeCount++;
newUsee = use * 1.1;
use = Math.round(newUsee);
useIncrease+= costAddAmount6;
costAddAmount6*= 2;
tickingPurchase = 30;
availibility = false;
document.getElementById('clicksIncrease').style.color = 'gray';
document.getElementById('clicksIncrease').innerHTML = tickingPurchase;
refreshIncrease = false;
delayPurchase = setInterval(function() {
tickingPurchase--;
document.getElementById('clicksIncrease').innerHTML = tickingPurchase;
if(tickingPurchase == 0) {
clearInterval(delayPurchase);
availibility = true;
refreshIncrease = true;
}
}, 1000);
} else {
achievePost("Failed To Purchase, You have 0 Stone Producing!");
}
} 
}
function buyStoneAddIncrease() {
if (stone >= stoneAddIncrease) {
stoneAdd*= 2;
upgradeCount++; 
stone-= stoneAddIncrease;
stoneAddIncrease+= stoneAddIncrease * 2;
}
}


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

$("#steve").on("touchend", function() {
store('miner');
});

$("#mines").on("touchend", function() {
store('shaft');
});

$("#factory").on("touchend", function() {
store('factory');
});

$("#harvester").on("touchend", function() {
store('harvester');
});

$("#time").on("touchend", function() {
store('timeWarp');
});
});

if(developerMode == true) {
devMSG7 = setInterval(function() {
document.getElementById('devMenu').innerHTML = 'store.js loaded!' + '<br>' + document.getElementById('devMenu').innerHTML;
clearInterval(devMSG7);
}, 100);
}
