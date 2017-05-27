var isMuteMusic = false;
var isMuteSounds = false;

function muteMusic() {
    if (isMuteMusic) {
        switch (state) {
            case INIT:
                intro.resume();
                break;
            case PLAYING:
                if (battle != undefined) {
                    battle.resume();
                } else {
                    battle = game.add.audio('battle');
                    battle.play('', 0, 1, true);
                }
                break;
        }
    } else {
        switch (state) {
            case INIT:
                intro.pause();
                break;
            case PLAYING:
                if (battle != undefined) {
                    battle.pause();
                }
                break;
        }
    }
    isMuteMusic = !isMuteMusic;
}
function muteSounds() {
    isMuteSounds = !isMuteSounds;
}

function playIntro() {
    if (!isMuteMusic) {
        intro = game.add.audio('intro');
        intro.play('', 0, 1, true);
    }
}
function stopIntro() {
    if (!isMuteMusic) {
        intro.pause();
    }
}
function playBattle() {
    if (!isMuteMusic) {
        battle = game.add.audio('battle');
        battle.play('', 0, 1, true);
    }
}
function resumeBattle() {
    if (!isMuteMusic) {
        battle.resume();
    }
}
function stopBattle() {
    if (!isMuteMusic) {
        battle.pause();
    }
}
function playSound(sound) {
    if (!isMuteSounds) {
        game.add.audio(sound).play('', 0, 1, false);
    }
}