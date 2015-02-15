function newMusic() {
var randomnumber = Math.floor(Math.random()*16);
if(enableMusic == false) {
if(randomnumber == 0) {
playAudio('music_minecraft');
audio = 'music_minecraft';
enableMusic = true;
} else if(randomnumber == 1) {
playAudio('music_blocks');
audio = 'music_blocks';
enableMusic = true;
} else if(randomnumber == 2) {
playAudio('music_key');
audio = 'music_key';
enableMusic = true;
} else if(randomnumber == 3) {
playAudio('music_door');
audio = 'music_door';
enableMusic = true;
} else if(randomnumber == 4) {
playAudio('music_lullaby');
audio = 'music_lullaby';
enableMusic = true;
} else if(randomnumber == 5) {
playAudio('music_living_mice');
audio = 'music_living_mice';
enableMusic = true;
} else if(randomnumber == 6) {
playAudio('music_haggstrom');
audio = 'music_haggstrom';
enableMusic = true;
} else if(randomnumber == 7) {
playAudio('music_living_mice');
audio = 'music_living_mice';
enableMusic = true;
} else if(randomnumber == 8) {
playAudio('music_dry_hands');
audio = 'music_dry_hands';
enableMusic = true;
} else if(randomnumber == 9) {
playAudio('music_clark');
audio = 'music_clark';
enableMusic = true;
} else if(randomnumber == 10) {
playAudio('music_chris');
audio = 'music_chris';
enableMusic = true;
} else if(randomnumber == 11) {
playAudio('music_sweden');
audio = 'music_sweden';
enableMusic = true;
} else if(randomnumber == 12) {
playAudio('music_cat');
audio = 'music_cat';
enableMusic = true;
} else if(randomnumber == 13) {
playAudio('music_dog');
audio = 'music_dog';
enableMusic = true;
} else if(randomnumber == 14) {
playAudio('music_danny');
audio = 'music_danny';
enableMusic = true;
} else if(randomnumber == 15) {
playAudio('music_beginning');
audio = 'music_beginning';
enableMusic = true;
}
}
}
