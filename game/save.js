var setting1 = Options.split(':')[6];

if(setting1 == ' 1 ') {
if(getStorage('autosave') == null || getStorage('autosave') == 'true') {
mainSave = setInterval(SAVEFILE, 50);
} else {
document.getElementById('autosave').value = 'Autosave: OFF';
show('savegame');
}

function SAVEFILE() {
createStorage("stone", stone);
createStorage("use", use);
createStorage("useAdd", useAdd);
createStorage("time", time);
createStorage("gameplayTime", gameplayTime);
createStorage("displayNextButton", displayNextButton);
createStorage("steveMiner", steveMiner);
createStorage("mineShaft", mineShaft);
createStorage("factory", factory);
createStorage("harvester", harvester);
createStorage("timeWarp", timeWarp);
createStorage("SMA", SMA);
createStorage("MSA", MSA);
createStorage("FA", FA);
createStorage("HA", HA);
createStorage("TWA", TWA);
createStorage("CAA1", costAddAmount1);
createStorage("CAA2", costAddAmount2);
createStorage("CAA3", costAddAmount3);
createStorage("CAA4", costAddAmount4);
createStorage("CAA5", costAddAmount5);

createStorage("MSG", MSG);
createStorage("MSG1", MSG1);
createStorage("MSG2", MSG2);
createStorage("MSG3", MSG3);

createStorage("name", currentUsername);

//UPGRADES
createStorage("upgradeTinHelmet", upgradeTinHelmet);
createStorage("upgradeBronzeHelmet", upgradeBronzeHelmet);
createStorage("upgradeIronHelmet", upgradeIronHelmet);
createStorage("ocelotHelpers", ocelotHelpers);
createStorage("alieninvasion", alieninvasion);

//ACHIEVEMENTS
createStorage("highNumber", highNumber);
createStorage("reachForTheSky", reachForTheSky);
createStorage("needCompany", needCompany);
createStorage("stoneIndustry", stoneIndustry);
createStorage("brokenBorder", brokenBorder);
createStorage("firstToHire", firstToHire);
createStorage("smog", smog);
createStorage("dawnOfANewCollection", dawnOfANewCollection);
createStorage("masterOfRockets", masterOfRockets);
createStorage("rippingTheSpaceTimeContinuum", rippingTheSpaceTimeContinuum);
createStorage("dirtMouth", dirtMouth);
createStorage("mudLover", mudLover);
createStorage("tunnelDigger", tunnelDigger);
createStorage("bigSpender", bigSpender);
createStorage("massProduction", massProduction);
createStorage("firstClick", firstClick);
createStorage("bigSpenderSilver", bigSpenderSilver);
createStorage("almostTooManyItems", almostTooManyItems);
createStorage("tooManyItems", tooManyItems);
createStorage("nowTooManyItems", nowTooManyItems);
createStorage("toastyFingers", toastyFingers);
createStorage("hackingTheStoneSiege", hackingTheStoneSiege);
createStorage("hackingInfinityAndBeyond", hackingInfinityAndBeyond);
createStorage("honestlyHonest", honestlyHonest);
createStorage("upgradeArmada", upgradeArmada);
createStorage("justPlainLucky", justPlainLucky);

createStorage("itemsBought", itemsBought);
createStorage("offlineMode", offlineMode);
createStorage("extensionEnable", extensionEnable);
createStorage("statShown", statShown);
createStorage("handMined", handMined);
createStorage("AC", AC);
createStorage("useAdd", useAdd);
createStorage("stoneAdd", stoneAdd);
createStorage("hack", hack);
createStorage("touch", touch);
createStorage("small", small);
createStorage("noSmoothing", noSmoothing);
createStorage("refreshIncrease", refreshIncrease);
createStorage("currentVersion", currentVersion);
createStorage("msg", msg);
createStorage("opened", opened);
createStorage("Mcapacity", Mcapacity);
createStorage("buttValue", buttValue);
createStorage("menuOpen", menuOpen);
createStorage("stoneSiege", stoneSiege);
createStorage("randomTick", randomTick);
createStorage("updateOpen", updateOpen);
createStorage("playMusic", playMusic);
createStorage("pluginExist", pluginExist);
createStorage("defaultTitle", defaultTitle);
createStorage("legibility", legibility);
createStorage("hidden", hidden);
createStorage("fancy", fancy);
createStorage("speedAdd", speedAdd);
createStorage("upgradeCount", upgradeCount);
createStorage("availibility", availibility);
createStorage("currentRange", currentRange);
createStorage("codeRun", codeRun);

var imageData = document.getElementById("achievementsUnlocked").innerHTML.replace(/undefined/g,'');
createStorage("images", imageData);
}

delayTicker = setInterval(function() {
if(typeof(Storage) !== "undefined") {
if(getStorage("resetedGame") !== null) {
createStorage("resetedGame", "nope");
} else {
SAVEGAME();
}

if(getStorage("stone") !== null) {
if(getStorage("stone") == 'Infinity') {
stone = Infinity;
} else {
stone = parseInt(getStorage("stone"));
}
}
if(getStorage("use") !== null) {
use = parseInt(getStorage("use"));
}
if(getStorage("useAdd") !== null) {
useAdd = parseInt(getStorage("useAdd"));
}
if(getStorage("time") !== null) {
resetDefaultTicker(parseInt(getStorage("time")));
}
if(getStorage("gameplayTime") !== null) {
gameplayTime = parseInt(getStorage("gameplayTime"));
}
if(getStorage("displayNextButton") !== null) {
displayNextButton = returnBoolean(getStorage("displayNextButton"));
if(displayNextButton == true) {
show('moreStoreItems');
}
}
if(getStorage("steveMiner") !== null) {
steveMiner = parseInt(getStorage("steveMiner"));
}
if(getStorage("mineShaft") !== null) {
mineShaft = parseInt(getStorage("mineShaft"));
}
if(getStorage("factory") !== null) {
factory = parseInt(getStorage("factory"));
}
if(getStorage("harvester") !== null) {
harvester = parseInt(getStorage("harvester"));
}
if(getStorage("timeWarp") !== null) {
timeWarp = parseInt(getStorage("timeWarp"));;
}
if(getStorage("SMA") !== null) {
SMA = parseInt(getStorage("SMA"));
}
if(getStorage("MSA") !== null) {
MSA = parseInt(getStorage("MSA"));
}
if(getStorage("FA") !== null) {
FA = parseInt(getStorage("FA"));;
}
if(getStorage("HA") !== null) {
HA = parseInt(getStorage("HA"));
}
if(getStorage("TWA") !== null) {
TWA = parseInt(getStorage("TWA"));
}
if(getStorage("CAA1") !== null) {
costAddAmount1 = parseInt(getStorage("CAA1"));
}
if(getStorage("CAA2") !== null) {
costAddAmount2 = parseInt(getStorage("CAA2"));
}
if(getStorage("CAA3") !== null) {
costAddAmount3 = parseInt(getStorage("CAA3"));
}
if(getStorage("CAA4") !== null) {
costAddAmount4 = parseInt(getStorage("CAA4"));
}
if(getStorage("CAA5") !== null) {
costAddAmount5 = parseInt(getStorage("CAA5"));
}
if(getStorage("images") !== null) {
var newData = getStorage("images");
document.getElementById("achievementsUnlocked").innerHTML = newData.replace(/undefined/g,'');
}

//ACHIEVEMENTS
if(getStorage("highNumber") !== null) {
highNumber = returnBoolean(getStorage("highNumber"));
}
if(getStorage("reachForTheSky") !== null) {
reachForTheSky = returnBoolean(getStorage("reachForTheSky"));
}
if(getStorage("needCompany") !== null) {
needCompany = returnBoolean(getStorage("needCompany"));
}
if(getStorage("stoneIndustry") !== null) {
stoneIndustry = returnBoolean(getStorage("stoneIndustry"));
}
if(getStorage("brokenBorder") !== null) {
brokenBorder = returnBoolean(getStorage("brokenBorder"));
}
if(getStorage("firstToHire") !== null) {
firstToHire = returnBoolean(getStorage("firstToHire"));
}
if(getStorage("smog") !== null) {
smog = returnBoolean(getStorage("smog"));
}
if(getStorage("dawnOfANewCollection") !== null) {
dawnOfANewCollection = returnBoolean(getStorage("dawnOfANewCollection"));
}
if(getStorage("masterOfRockets") !== null) {
masterOfRockets = returnBoolean(getStorage("masterOfRockets"));
}
if(getStorage("rippingTheSpaceTimeContinuum") !== null) {
rippingTheSpaceTimeContinuum = returnBoolean(getStorage("rippingTheSpaceTimeContinuum"));
}
if(getStorage("dirtMouth") !== null) {
dirtMouth = returnBoolean(getStorage("dirtMouth"));
}
if(getStorage("mudLover") !== null) {
mudLover = returnBoolean(getStorage("mudLover"));
}
if(getStorage("tunnelDigger") !== null) {
tunnelDigger = returnBoolean(getStorage("tunnelDigger"));
}
if(getStorage("bigSpender") !== null) {
bigSpender = returnBoolean(getStorage("bigSpender"));
}
if(getStorage("massProduction") !== null) {
massProduction = returnBoolean(getStorage("massProduction"));
}
if(getStorage("firstClick") !== null) {
firstClick = returnBoolean(getStorage("firstClick"));
}
if(getStorage("bigSpenderSilver") !== null) {
bigSpenderSilver = returnBoolean(getStorage("bigSpenderSilver"));
}
if(getStorage("almostTooManyItems") !== null) {
almostTooManyItems = returnBoolean(getStorage("almostTwoManyItems"));
}
if(getStorage("tooManyItems") !== null) {
tooManyItems = returnBoolean(getStorage("tooManyItems"));
}
if(getStorage("nowTooManyItems") !== null) {
nowTooManyItems = returnBoolean(getStorage("nowTooManyItems"));
}
if(getStorage("toastyFingers") !== null) {
toastyFingers = returnBoolean(getStorage("toastyFingers"));
}
if(getStorage("hackingTheStoneSiege") !== null) {
hackingTheStoneSiege = returnBoolean(getStorage("hackingTheStoneSiege"));
}
if(getStorage("hackingInfinityAndBeyond") !== null) {
hackingInfinityAndBeyond = returnBoolean(getStorage("hackingInfinityAndBeyond"));
}
if(getStorage("honestlyHonest") !== null) {
honestlyHonest = returnBoolean(getStorage("honestlyHonest"));
}
if(getStorage("upgradeArmada") !== null) {
upgradeArmada = returnBoolean(getStorage("upgradeArmada"));
}
if(getStorage("justPlainLucky") !== null) {
justPlainLucky = returnBoolean(getStorage("justPlainLucky"));
}

if(getStorage("itemsBought") !== null) {
itemsBought = parseInt(getStorage("itemsBought"));
}
if(getStorage("tickingPurchase") !== null) {
tickingPurchase = parseInt(getStorage("tickingPurchase"));
}
if(getStorage("offlineMode") !== null) {
if(returnBoolean(getStorage("offlineMode")) == true) {
setOffline();
}
}
if(getStorage("statShown") !== null) {
statShown = returnBoolean(getStorage("statShown"));
}
if(getStorage("handMined") !== null) {
handMined = parseInt(getStorage("handMined"));
}
if(getStorage("AC") !== null) {
AC = parseInt(getStorage("AC"));
}
if(getStorage("useAdd") !== null) {
useAdd = parseInt(getStorage("useAdd"));
}
if(getStorage("stoneAdd") !== null) {
stoneAdd = parseInt(getStorage("stoneAdd"));
}
if(getStorage("hack") !== null) {
hack = returnBoolean(getStorage("hack"));
}
if(getStorage("touch") !== null) {
if(returnBoolean(getStorage("touch")) == false) {
switchInput();
}
}
if(getStorage("small") !== null) {
small = returnBoolean(getStorage("small"));
}
if(getStorage("noSmoothing") !== null) {
noSmoothing = returnBoolean(getStorage("noSmoothing"));
}
if(getStorage("refreshIncrease") !== null) {
refreshIncrease = returnBoolean(getStorage("refreshIncrease"));
}
if(getStorage("currentVersion") !== null) {
if(currentVersion !== getStorage("currentVersion")) {
alert('Build 20');
}
}
if(getStorage("msg") !== null) {
msg = parseInt(getStorage("msg"));
}
if(getStorage("opened") !== null) {
opened = parseInt(getStorage("opened"));
}
if(getStorage("Mcapacity") !== null) {
Mcapacity = parseInt(getStorage("Mcapacity"));
document.getElementById('viewed').value = 'Messages Viewed: ' + Mcapacity;
}
if(getStorage("buttValue") !== null) {
buttValue = parseInt(getStorage("buttValue"));
}
if(getStorage("currentRange") !== null) {
currentRange = parseInt(getStorage("currentRange"));
}
if(getStorage("menuOpen") !== null) {
if(getStorage("menuOpen") == 'true') {
openUpgrades();
}
}
if(getStorage("stoneSiege") !== null) {
if(getStorage("stoneSiege") == 'true') {
stoneSiegeActive(1);
}
}
if(getStorage("randomTick") !== null) {
randomTick = parseInt(getStorage("randomTick"));
}
if(getStorage("updateOpen") !== null) {
updateOpen = returnBoolean(getStorage("updateOpen"));
if(updateOpen == true) {
updateOpen = false;
showMen();
}
}
if(getStorage("playMusic") !== null) {
if(returnBoolean(getStorage("playMusic")) == false) {
/*playMusic = false;
document.getElementById("stopMPThree").value = "Music OFF";
stopAudio(audio);*/
}
}
if(getStorage("pluginExist") !== null) {
pluginExist = returnBoolean(getStorage("pluginExist"));
}
if(getStorage("MSG") !== null) {
MSG = returnBoolean(getStorage("MSG"));
}
if(getStorage("MSG1") !== null) {
MSG1 = returnBoolean(getStorage("MSG1"));
}
if(getStorage("MSG2") !== null) {
MSG2 = returnBoolean(getStorage("MSG2"));
}
if(getStorage("MSG3") !== null) {
MSG3 = returnBoolean(getStorage("MSG3"));
}
if(getStorage("defaultTitle") !== null) {
if(getStorage("defaultTitle") == 'false') {
titleDisp(); 
}
}
if(getStorage("legibility") !== null) {
if(getStorage("legibility") == 'true') {
intuitive();
}
}
if(getStorage("hidden") !== null) {
if(getStorage("hidden") == 'true') {
hideBuildings();
}
}
if(getStorage("fancy") !== null) {
if(getStorage("fancy") == 'false') {
fancyGraphics();
}
}
if(getStorage("speedAdd") !== null) {
speedAdd = parseInt(getStorage("speedAdd"));
}
if(getStorage("upgradeCount") !== null) {
upgradeCount = parseInt(getStorage("upgradeCount"));
}
if(getStorage("codeRun") !== null) {
codeRun = getStorage("codeRun");
eval(codeRun);
console.log(codeRun);
}

if(getStorage("upgradeTinHelmet") !== null) {
upgradeTinHelmet = getStorage("upgradeTinHelmet");
if(getStorage("upgradeTinHelmet") == 'unlocked') {
createNewUpgrade('Tin Helmet', 'tinhelmet', 'Helps your newly hired miners produce 1 more stone than usual. <div style="color: darkred">NOTE: Tin is actually not in minecraft</div>', 'upgrade(\'tinHelmet\')', '100');
}
}
if(getStorage("upgradeBronzeHelmet") !== null) {
upgradeBronzeHelmet = getStorage("upgradeBronzeHelmet");
if(getStorage("upgradeBronzeHelmet") == 'unlocked') {
createNewUpgrade('Bronze Helmet', 'bronzehelmet', 'Helps your newly hired miners produce 2 more stone than usual. <div style="color: darkred">NOTE: Bronze is also not in minecraft xD</div>', 'upgrade(\'bronzeHelmet\')', '300');
}
}
if(getStorage("upgradeIronHelmet") !== null) {
upgradeIronHelmet = getStorage("upgradeIronHelmet");
if(getStorage("upgradeIronHelmet") == 'unlocked') {
createNewUpgrade('Iron Helmet', 'ironhelmet', 'Helps your newly hired miners produce 4 more stone than usual. <div style="color: darkred">NOTE: Finally a item from Minecraft! :)</div>', 'upgrade(\'ironHelmet\')', '350');
}
}
if(getStorage("ocelotHelpers") !== null) {
ocelotHelpers = getStorage("ocelotHelpers");
if(getStorage("ocelotHelpers") == 'unlocked') {
createNewUpgrade('Ocelot Helpers', 'ocelothelpers', 'Lure the ocelots to help you do your dirty work! Multiplies your Stone per every ' + time + ' secs.', 'upgrade(\'ocelotHelpers\')', '1000');
}
}
if(getStorage("alieninvasion") !== null) {
alieninvasion = getStorage("alieninvasion");
if(getStorage("alieninvasion") == 'unlocked') {
createNewUpgrade('Foreign broadcast', 'alieninvasion', 'You have recieved a alien broadcast! Sadly, you need money to respond to this broadcast.', 'upgrade(\'eventalieninvasion\')', '500000');
} else if(getStorage("alieninvasion") == 'boughted') {
	alienmsg = true;
	addScript('game/event/alieninvasion.js');
}
}
} else {
loadPrompt("Your Browser appears to not support web storage, due to this. Your data WILL not save.");
}
clearInterval(delayTicker);
}, 10);
}

function returnBoolean(booleanThing) {
if(booleanThing == "false") {
return false;
} else {
return true;
}
}

if(developerMode == true) {
devMSG6 = setInterval(function() {
document.getElementById('devMenu').innerHTML = 'save.js loaded!' + '<br>' + document.getElementById('devMenu').innerHTML;
clearInterval(devMSG6);
}, 100);
}


SAVEFILE();
