/*
    Este archivo tiene las funciones que permiten hacer la administración de los eventos de sonido dentro del juego
*/

//Variables para mutear el sonido
var isMuteMusic = false;
var isMuteSounds = false;

//Esta función permite mutear la música en las diferentes pantallas
function muteMusic() {
    if (isMuteMusic) {
        btnMuteMusic.frame = 0;
        intro.volume = 1;
        battle.volume = 1;
        credits.volume = 1;
    } else {
        btnMuteMusic.frame = 1;
        intro.volume = 0;
        battle.volume = 0;
        credits.volume = 0;
    }
    isMuteMusic = !isMuteMusic;
}

//Esta función permite mutear los sonidos en las diferentes pantallas
function muteSounds() {
    if (isMuteSounds) {
        btnMuteSounds.frame = 0;
    } else {
        btnMuteSounds.frame = 1;
    }
    isMuteSounds = !isMuteSounds;
}

//Esta función reproduce la canción del intro
function playIntro() {
    intro.play('', 0);
}
//Esta función detiene la canción del intro
function stopIntro() {
    intro.pause();
}
//Esta función reproduce la canción de un round
function playBattle() {
    battle.play('', 0);
}
//Esta función continua la canción de una batalla desde donde iba
function resumeBattle() {
    battle.resume();
}
//Esta función detiene la canción de una batalla
function stopBattle() {
    battle.pause();
}
//Esta función reproduce la canción de los créditos
function playCredits() {
    credits.play('', 0);
}
//Esta función detiene la canción de los créditos
function stopCredits() {
    credits.pause();
}

//Esta función reproduce un sonido que recibe por parámetro
function playSound(sound) {
    if (!isMuteSounds) {
        game.add.audio(sound).play('', 0);
    }
}