upgradeTinHelmet = 'locked';
upgradeBronzeHelmet = 'locked';
upgradeIronHelmet = 'locked';

ocelotHelpers = 'locked';
mushroomStew = 'locked';
ocelotMilk = 'locked';
wolfMilk = 'locked';

woodenEnforcedMultiplier = 'locked';
stoneEnforcedMultiplier = 'locked';
ironEnforcedMultiplier = 'locked';
diamondEnforcedMultiplier = 'locked';

enforcedClick = 'locked';
intenselyEnforcedClick = 'locked';
powerfullyIntenseExtremeUltimateClick = 'locked';

alieninvasion = 'locked';
eventAlienInvasion = 0;

speedMultiplier = 'locked';
speedMultipliersBigBrother = 'locked';
speedMultipliersMom = 'locked';
speedMultiplierGod = 'locked';

/* Upgrades has three status
locked = not bought, or available
unlocked = available, not bought
boughted = no longer available. It is bought
*/

upgradeChecker = setInterval(function() {
if(upgradesOnline > 0) {
hide('noUpgrades');
} else {
show('noUpgrades');
}
//Mineral Helmets
if(upgradeTinHelmet == 'locked' && SMA >= 1) {
upgradeTinHelmet = 'unlocked';
createNewUpgrade('Tin Helmet', 'tinhelmet', 'Helps your newly hired miners produce 1 more stone than usual. <div style="color: darkred">NOTE: Tin is actually not in minecraft</div>', 'upgrade(\'tinHelmet\')', '100');
}
if(upgradeBronzeHelmet == 'locked' && SMA >= 5) {
upgradeBronzeHelmet = 'unlocked';
createNewUpgrade('Bronze Helmet', 'bronzehelmet', 'Helps your newly hired miners produce 2 more stone than usual. <div style="color: darkred">NOTE: Bronze is also not in minecraft xD</div>', 'upgrade(\'bronzeHelmet\')', '300');
}
if(upgradeIronHelmet == 'locked' && SMA >= 15) {
upgradeIronHelmet = 'unlocked';
createNewUpgrade('Iron Helmet', 'ironhelmet', 'Helps your newly hired miners produce 4 more stone than usual. <div style="color: darkred">NOTE: Finally a item from Minecraft! :)</div>', 'upgrade(\'ironHelmet\')', '350');
}

if(ocelotHelpers == 'locked' && SMA >= 15 && MSA >= 5) {
ocelotHelpers = 'unlocked';
createNewUpgrade('Ocelot Helpers', 'ocelothelpers', 'Lure the ocelots to help you do your dirty work! Multiplies your Stone per every ' + time + ' secs.', 'upgrade(\'ocelotHelpers\')', '1000');
}

//EVENTS
if(alieninvasion == 'locked' && eventAlienInvasion == 1) {
alieninvasion = 'unlocked';
createNewUpgrade('Foreign broadcast', 'alieninvasion', 'You have recieved a alien broadcast! Sadly, you need money to respond to this broadcast.', 'upgrade(\'eventalieninvasion\')', '500000');
}

//
}, 0);


function upgrade(item) {
if(item == 'tinHelmet' && stone >= 100) {
useAdd+= 0.5;
stone-= 100;
upgradeTinHelmet = 'boughted';
upgradeCount++;
removeElement('pageOne', 'tinhelmet');
upgradesOnline--;
}
if(item == 'bronzeHelmet' && stone >= 300) {
useAdd+= 1;
stone-= 300;
upgradeBronzeHelmet = 'boughted';
upgradeCount++;
removeElement('pageOne', 'bronzehelmet');
upgradesOnline--;
}
if(item == 'ironHelmet' && stone >= 350) {
useAdd+= 1.5;
stone-= 350;
upgradeIronHelmet = 'boughted';
upgradeCount++;
removeElement('pageOne', 'ironhelmet');
upgradesOnline--;
}

if(item == 'ocelotHelpers' && stone >= 250) {
use*= 1.25;
use = parseInt(roundDown(use));
stone-= 1000;
ocelotHelpers = 'boughted';
upgradeCount++;
removeElement('pageOne', 'ocelothelpers');
upgradesOnline--;
}

//EVENTS
if(item == 'eventalieninvasion' && stone >= 500000) {
stone-= 500000;
alieninvasion = 'boughted';
eventalieninvasion = 2;
upgradeCount++;
addScript('game/event/alieninvasion.js');
removeElement('pageOne', 'alieninvasion');
upgradesOnline--;
alienmsg = false;
}
}

//TODO

/*
Save the upgrade item's variable
Test for bugs
*/

if(developerMode == true) {
devMSG9 = setInterval(function() {
document.getElementById('devMenu').innerHTML = 'upgrades.js loaded!' + '<br>' + document.getElementById('devMenu').innerHTML;
clearInterval(devMSG9);
}, 100);
}
