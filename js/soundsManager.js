var isMuteMusic = false;
var isMuteSounds = false;

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
function muteSounds() {
    if (isMuteSounds) {
        btnMuteSounds.frame = 0;
    } else {
        btnMuteSounds.frame = 1;
    }
    isMuteSounds = !isMuteSounds;
}

function playIntro() {
    intro.play('', 0);
}
function stopIntro() {
    intro.pause();
}
function playBattle() {
    battle.play('', 0);
}
function resumeBattle() {
    battle.resume();
}
function stopBattle() {
    battle.pause();
}
function playCredits() {
    credits.play('', 0);
}
function stopCredits() {
    credits.pause();
}

function playSound(sound) {
    if (!isMuteSounds) {
        game.add.audio(sound).play('', 0);
    }
}