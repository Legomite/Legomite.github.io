//Achievements
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
almostTooManyItems = false;
tooManyItems = false;
nowTooManyItems = false;
toastyFingers = false;
hackingTheStoneSiege = false;
hackingInfinityAndBeyond = false;
honestlyHonest = false;
upgradeArmada = false;
justPlainLucky = false;

//Achivement Checker
setInterval(function(){
document.getElementById('achieveArchive').innerHTML = (AC + "/26 Achievements");
if (highNumber === false && stone >= 100) {
highNumber = true;
AC++;
bonus = 10;
stone+= bonus;
bonusPost("+ " + bonus);
achievePost("[High Number] Achievement Unlocked. Get 100 stone");
newImg("visuals/media/stone.png", "[High Number] Achievement Unlocked. Get 100 stone");
}
if (reachForTheSky == false && stone > 999) {
reachForTheSky = true;
AC++;
bonus = 25;
stone+= bonus;
bonusPost("+ " + bonus);
achievePost("[Reach For The Sky!] Achievement Unlocked. Get 1000 stone");
newImg("visuals/media/stone_pickaxe.png", "[Reach For The Sky!] Achievement Unlocked. Get 1000 stone");
} 
if (needCompany == false && SMA > 9) {
needCompany = true;
AC++;
bonus = 12;
stone+= bonus;
bonusPost("+ " + bonus);
achievePost("[Need Company] Achievement Unlocked. Get 10 Miners");
newImg("visuals/media/wood_pickaxe.png", "[Need Company] Achievement Unlocked. Get 10 Miners");
}
if (stoneIndustry == false && FA > 4) {
stoneIndustry = true;
AC++;
bonus = 15;
stone+= bonus;
bonusPost("+ " + bonus);
achievePost("[Stone Industry] Achievement Unlocked. Get 5 Factories");
newImg("visuals/media/stonebrick.png", "[Stone Industry] Achievement Unlocked. Get 5 Factories");
}
if (brokenBorder == false && stone >= 10000000000000000) {
brokenBorder = true;
AC++;
bonus = 100;
stone+= bonus;
bonusPost("+ " + bonus);
achievePost("[Broken Borders] Achievement Unlocked. Get 10000000000000000 stone");
newImg("http://1.bp.blogspot.com/-LcYCcZ6U57Q/T6AuQSFOAqI/AAAAAAAABO8/86ZNnx6PbvY/s1600/minecraft_stone.jpg", "[Broken Borders] Achievement Unlocked. Get 10000000000000000 stone");
}
if (firstToHire == false && SMA > 0) {
firstToHire = true;
AC++;
bonus = 5;
stone+= bonus;
bonusPost("+ " + bonus);
achievePost("[First To Hire] Achievement Unlocked. Hire your first Miner");
newImg("visuals/media/stevehead.png", "[First To Hire] Achievement Unlocked. Hire your first Miner");
}
if (smog == false && FA > 9) {
smog = true;
AC++;
achievePost("[Smog] Achievement Unlocked. Get 10 Factories");
newImg("http://oyster.ignimgs.com/mediawiki/apis.ign.com/minecraft/6/67/Cobblestone.png", "[Smog] Achievement Unlocked. Get 10 Factories");
}
if (dawnOfANewCollection == false && AC >= 10) {
dawnOfANewCollection = true;
AC++;
bonus = 2;
stone+= bonus;
bonusPost("+ " + bonus);
achievePost("[Dawn Of A New Collection] Achievement Unlocked. Get 10 Achievements");
newImg("http://hydra-media.cursecdn.com/minecraft.gamepedia.com/9/93/Watch.png", "[Dawn Of A New Collection] Achievement Unlocked. Get 10 Achievements");
}
if (masterOfRockets == false && HA > 9) {
masterOfRockets = true;
AC++;
bonus = 30;
stone+= bonus;
bonusPost("+ " + bonus);
achievePost("[Master Of Rockets] Achievement Unlocked. Get 10 Harvesters to collect stone from the moon");
newImg("http://hydra-media.cursecdn.com/minecraft.gamepedia.com/4/47/Moon.png", "[Master Of Rockets] Achievement Unlocked. Get 10 Harvesters to collect stone from the moon");
}
if (rippingTheSpaceTimeContinuum == false && TWA > 4) {
rippingTheSpaceTimeContinuum = true;
AC++;
bonus = 35;
stone+= bonus;
bonusPost("+ " + bonus);
achievePost("[Ripping The Space Time Continuum] Achievement Unlocked. Get  5 Time Warps");
newImg("http://wallpaper.pickywallpapers.com/samsung-epic/sun-in-the-sky-in-minecraft.jpg", "[Ripping The Space Time Continuum] Achievement Unlocked. Get  5 Time Warps");
}
if (dirtMouth == false && MSA > 4) {
dirtMouth = true;
AC++;
bonus = 12;
stone+= bonus;
bonusPost("+ " + bonus);
achievePost("[Dirt Mouth] Achievement Unlocked. Get 5 Mineshafts");
newImg("http://3.bp.blogspot.com/_8Sji9qUo2R8/TNsUFdIHheI/AAAAAAAAACA/LdeXz0aozRc/s1600/Minecart.png", "[Dirt Mouth] Achievement Unlocked. Get 5 Mineshafts");
}
if (mudLover == false && MSA > 9) {
mudLover = true;
AC++;
bonus = 10;
stone+= bonus;
bonusPost("+ " + bonus);
achievePost("[Mud Lover] Achievement Unlocked. Get 10 Mineshafts");
newImg("http://i.imgur.com/K012WIT.png", "[Mud Lover] Achievement Unlocked. Get 10 Mineshafts");
}
if (tunnelDigger == false && MSA > 14) {
tunnelDigger = true;
AC++;
bonus = 15;
stone+= bonus;
bonusPost("+ " + bonus);
achievePost("[Tunnel Digger] Achievement Unlocked. Get 15 Mineshafts");
newImg("http://minecraft-wiki.com/wp-content/uploads/2010/11/Storage_Minecart.png", "[Tunnel Digger] Achievement Unlocked. Get 15 Mineshafts");
}
if (bigSpender == false && itemsBought > 19) {
bigSpender = true;
AC++;
bonus = 23;
stone+= bonus;
bonusPost("+ " + bonus);
achievePost("[Big Spender] Achievement Unlocked. Buy 20 items from the store");
newImg("http://hydra-media.cursecdn.com/minecraft.gamepedia.com/f/f3/Ironitm.png", "[Big Spender] Achievement Unlocked. Buy 20 items from the store");
}
if (massProduction == false && use > 999) {
massProduction = true;
AC++;
bonus = 23;
stone+= bonus;
bonusPost("+ " + bonus);
achievePost("[Mass Production] Achievement Unlocked. Create 1000 stone every  " + time + " Miliseconds");
newImg("http://minecraft-wiki.com/wp-content/uploads/2010/11/Stone.png", "[Mass Production] Achievement Unlocked. Create 1000 stone every  " + time + " Miliseconds");
}
if (firstClick == false && handMined >= 1) {
firstClick = true;
AC++;
achievePost("[First Click] Achievement Unlocked. Click on the stone for the very first time");
newImg("http://www.blocksandgold.com/media/catalog/product/cache/3/image/620x/6cffa5908a86143a54dc6ad9b8a7c38e/s/t/stone_button.png", "[First Click] Achievement Unlocked. Click on the stone for the very first time");
}
if (bigSpenderSilver == false && itemsBought >= 30) {
bigSpenderSilver = true;
AC++;
bonus = 13;
stone+= bonus;
bonusPost("+ " + bonus);
achievePost("[Big Spender Silver] Achievement Unlocked. Buy 30 items from the store");
newImg("http://hydra-media.cursecdn.com/minecraft.gamepedia.com/3/37/Golditm.png", "[Big Spender Silver] Achievement Unlocked. Buy 30 items from the store");
}
if (almostTooManyItems == false && itemsBought >= 55) {
almostTooManyItems = true;
AC++;
bonus = 8;
stone+= bonus;
bonusPost("+ " + bonus);
achievePost("[Almost Too Many Items!] Achievement Unlocked. Buy 55 items from the store");
newImg("http://hydra-media.cursecdn.com/minecraft.gamepedia.com/9/90/Diamond_%28Gem%29.png", "[Almost Too Many Items!] Achievement Unlocked. Buy 55 items from the store");
}
if (tooManyItems == false && itemsBought >= 85) {
tooManyItems = true;
AC++;
bonus = 20;
stone+= bonus;
bonusPost("+ " + bonus);
achievePost("[Too Many Items!] Achievement Unlocked. Buy 85 items from the store");
newImg("visuals/media/diamond_block.png", "[Too Many Items!] Achievement Unlocked. Buy 85 items from the store");
}
if (nowTooManyItems == false && itemsBought >= 100) {
nowTooManyItems = true;
AC++;
bonus = 34;
stone+= bonus;
bonusPost("+ " + bonus);
achievePost("[Now, Too Many Items!] Achievement Unlocked. Buy 100 items from the store");
newImg("http://fc03.deviantart.net/fs71/f/2013/038/4/4/iron_ingot_by_barakaldo-d5u6iw5.gif", "[Now, Too Many Items!] Achievement Unlocked. Buy 100 items from the store");
}
if (toastyFingers == false && handMined >= 1000) {
toastyFingers = true;
AC++;
achievePost("[Toasty Fingers] Achievement Unlocked. Click on the stone 1000 times");
newImg("http://www.librarified.net/wp-content/uploads/2011/06/minecraft-iron-pickaxe.png", "[Toasty Fingers] Achievement Unlocked. Click on the stone 100 times");
}
if (hackingTheStoneSiege == false && stoneSiege == true && hack == true) {
hackingTheStoneSiege = true;
AC++;
achievePost("[Hacking The Stone Siege] Achievement Unlocked. Hack in the Stone Siege");
newImg("http://hydra-media.cursecdn.com/minecraft.gamepedia.com/0/06/Gear.png", "[Hacking The Stone Siege] Achievement Unlocked. Hack in the Stone Siege");
}
if (hackingInfinityAndBeyond == false && stone == Infinity) {
hackingInfinityAndBeyond = true;
AC++;
achievePost("[Hacking Infinity And Beyond!] Achievement Unlocked. Hack the stone to Infinity");
newImg("http://hydra-media.cursecdn.com/minecraft.gamepedia.com/8/8d/Gear-inventory.png", "[Hacking Infinity And Beyond!] Achievement Unlocked. Hack the stone to Infinity");
}
if (honestlyHonest == false && hackingInfinityAndBeyond == true && stone < Infinity) {
honestlyHonest = true;
AC++;
achievePost("[Honestly Honest] Achievement Unlocked. Get To Infinity, then back to a smaller value");
newImg("http://hydra-media.cursecdn.com/minecraft.gamepedia.com/c/cf/Gold_Nugget.png", "[Honestly Honest] Achievement Unlocked. Get To Infinity, then back to a smaller value");
}
if (upgradeArmada == false && upgradeCount >= 5) {
upgradeArmada = true;
AC++;
achievePost("[Upgrade Armada] Achievement Unlocked. Get 5 Or more Upgrades");
newImg("http://hydra-media.cursecdn.com/minecraft.gamepedia.com/c/cd/XP_orb_animation.gif", "[Upgrade Armada] Achievement Unlocked. Get 5 Or more Upgrades");
}
if (justPlainLucky == false) {
lucky = Math.floor(Math.random()*1000000);
if(lucky == 0) {
justPlainLucky = true;
AC++;
achievePost("[Just Plain Lucky] Achievement Unlocked. Every Millisecond has a 1 out of a millionth chance to get this achievement");
newImg("visuals/media/diamond_block.png", "[Just Plain Lucky] Achievement Unlocked. Every Millisecond has a 1 out of a millionth chance to get this achievement");
}
}
if(AC >= 12) {
part1[3] = '[News!] Man in stone mining buisness has earned many of his life\'s goals!';
part1[4] = 'You have achieved many achievements.';
part1[5] = 'You can qualify for the most awards contest, in Crypton.';
currentRange = 6;
}
}, 00);

if(developerMode == true) {
devMSG1 = setInterval(function() {
document.getElementById('devMenu').innerHTML = 'achievements.js loaded!' + '<br>' + document.getElementById('devMenu').innerHTML;
clearInterval(devMSG1);
}, 100);
}
