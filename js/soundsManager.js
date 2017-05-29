var isMuteMusic = false;
var isMuteSounds = false;

function muteMusic() {
    if (isMuteMusic) {
        btnMuteMusic.frame = 0;
        switch (state) {
            case INIT:
                intro.volume = 1;
                break;
            case PLAYING:
                battle.volume = 1;
                break;
            case CREDITS:
                credits.volume = 1;
                break;
        }
    } else {
        btnMuteMusic.frame = 1;
        switch (state) {
            case INIT:
                intro.volume = 0;
                break;
            case PLAYING:
                battle.volume = 0;
                break;
            case CREDITS:
                credits.volume = 0;
                break;
        }
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
    intro.play('', 0, 1, true);
}
function stopIntro() {
    intro.pause();
}
function playBattle() {
    battle.play('', 0, 1, true);
}
function resumeBattle() {
    battle.resume();
}
function stopBattle() {
    battle.pause();
}
function playCredits() {
    credits.play('', 0, 1, false);
}
function stopCredits() {
    credits.pause();
}

function playSound(sound) {
    if (!isMuteSounds) {
        game.add.audio(sound).play('', 0, 1, false);
    }
}