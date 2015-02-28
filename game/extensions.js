function displayPlugins() {
loadPrompt(pluginList);
}

pluginExist = false;
goalOne = false;
goalTwo = false;
function checker() {
if (extensionEnable == true) {
if (pluginExist == false) {
var option = prompt("What Plugins do you want to load?");
var split = option.split('-')[1];
}
if(split !== '') {
eval(split);
pluginExist = true;
}
if(option == "" || option === false || option == "cancel") {
pluginExist = true;
achievePost('Canceled.');
}

if (option == "customBackground") {
pluginExist = true;
registerPost("Custom Background installed. ");
var imgUrl = prompt("Type in image url for background");
imgPost = "url(" + imgUrl + ")";
document.body.style.backgroundImage = imgPost;
}
if(option == "exLoad") {
pluginExist = true;
var getTheCode = prompt("This plugin is outdated! Use - instead!");
eval(getTheCode);
}
if(option == "goals") {
pluginExist = true;
$('#menu').append('<div> Goals</div>');
selector = prompt("Do You Want To See The Stats? Or The Goals? g/s");
if (selector == "g") {
if (goalOne == false) {
alert("Steve Is Having Trouble Building A Stone House. Get Over 50 Stone For Him. ");
if (stone > 50) {
goalOne = true;
alert("Goal Completed! Check For More!");
}
}
if (goalOne == true && goalTwo == false) {
alert("Steve Needs More Help! Hire About 5 Miners");
if (stoneMinerAmount > 4) {
goalTwo = true;
alert("Goal Completed! Check For More!");
}
}
}
}

if(option == "http") {
pluginExist = true;
var temp = prompt("Enter http plugin address", "http://");
addScript(temp);
}

if(option == "legosHackPlus") {
pluginExist = true;
var daPrompt = prompt("Type in the specific option to enable, 1 = stone 2 = fontChanger 3 = Millisecond Manipulator");

if (daPrompt == "1") {
var SAM = prompt("Type in a specific amount of stone to add");
stone = SAM;
}

if (daPrompt == "2") {
var FC = prompt("Type in a font");
document.getElementById("fontConnect").style.fontFamily = (FC);
document.getElementById("register").style.fontFamily = (FC);
document.getElementById("clicks").style.fontFamily = (FC);
document.getElementById("achieveArchive").style.fontFamily = (FC);
document.getElementById("stopMPThree").style.fontFamily = (FC);
document.getElementById("reset").style.fontFamily = (FC);
document.getElementById("offline").style.fontFamily = (FC);
document.getElementById("button").style.fontFamily = (FC);
document.getElementById("pluginLoad").style.fontFamily = (FC);
document.getElementById("men").style.fontFamily = (FC);
document.getElementById("tag").style.fontFamily = (FC);
document.getElementById("tagg").style.fontFamily = (FC);
document.getElementById('stat').style.fontFamily = (FC);
document.getElementById("itemsArchive").style.fontFamily = (FC);
document.getElementById("steve").style.fontFamily = (FC);
document.getElementById("mines").style.fontFamily = (FC);
document.getElementById("factory").style.fontFamily = (FC);
document.getElementById("harvester").style.fontFamily = (FC);
document.getElementById("time").style.fontFamily = (FC);
}

if (daPrompt == "3") {
clearInterval(mainTicker);
var timeSpeed = prompt('Type in the amount of milliseconds for the speed process. 1 Sec = 1000');
resetDefaultTicker(timeSpeed);
}
}
}
}

setInterval(function() {
checker();
}, 0);

if(developerMode == true) {
devMSG2 = setInterval(function() {
document.getElementById('devMenu').innerHTML = 'extensions.js loaded!' + '<br>' + document.getElementById('devMenu').innerHTML;
clearInterval(devMSG2);
}, 100);
}
