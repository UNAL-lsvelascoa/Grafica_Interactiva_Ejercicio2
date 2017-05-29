//Constants
var GRAVITY = 1000;
var ROUND_TIME = 60;
var INIT = 0;
var PLAYING = 1;
var PAUSED = 2;
var FINISHED = 3;
var READY = 4;
var FINISH_ROUND = 5;
var LOADING = 6;
var CREDITS = 7;
var LIMIT_LAUNCH = 100;
var GREEN = 0x00FF00;
var YELLOW = 0xFCD516;
var RED = 0xFF0000;
var WHITE = 0xFFFFFF;
var WITHOUT_DIRECTION = 0;
var LEFT_DIRECTION = 1;
var RIGHT_DIRECTION = 2;
var SHOOT_VELOCITY = 800;
var CREDITS_VELOCITY = -20;

//Elements
var platforms;
var collectables;
var creditTexts;
var shots1;
var shots2;
var player1;
var player2;
var lifeBar1;
var lifeBar2;
var background_pause;
var logo;

//Keys
var left1;
var right1;
var up1;
var down1;
var left2;
var right2;
var up2;
var down2;
var enter;
var p;
var u;
var g;
var k;

//Text
var score1 = 0;
var scoreText1;
var score2 = 0;
var scoreText2;
var time = ROUND_TIME;
var timeText;
var readyText;
var roundText;
var winText;

//For States
var dataPause = [];
var state = LOADING;
var fps = 0;
var directions = [WITHOUT_DIRECTION, WITHOUT_DIRECTION];
var isShooting1 = false;
var isShooting2 = false;

//Sounds
var intro;
var battle;
var hit;
var die;
var shoot1;
var shoot2;

//Rounds logic
var round = 1;
var winPlayer1 = false;
var winPlayer2 = false;

//Buttons
var btnStart;
var btnCredits;
var btnMuteMusic;
var btnMuteSounds;

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

function preload() {
    game.load.spritesheet('pikachu', 'assets/characters/pikachu.png', 48, 48);

    game.load.onLoadStart.add(loadStart, this);
    game.load.onFileComplete.add(fileComplete, this);
    game.load.onLoadComplete.add(loadComplete, this);
};

function create() {
    loadAssets();
    initSounds();
};


function update() {
    fps++;

    switch (state) {
        case LOADING:
            break;
        case INIT:
            launchCloud();
            break;
        case READY:
            launchCloud();
            manageCollides();
            if (fps == 120) {
                readyText.text = 'Ready';
            } else {
                if (fps == 240) {
                    readyText.text = 'Set';
                } else {
                    if (fps == 360) {
                        readyText.text = 'Go';
                        state = PLAYING;
                        fps = 0;
                    }
                }
            }
            break;
        case PLAYING:
            launchCollectable(false);
            launchCloud();
            manageCollides();
            move(player1, left1, right1, up1, 0);
            move(player2, left2, right2, up2, 1);
            changeTime();

            if (p.isDown) {
                pause();
            }
            if (g.isDown && score1 > 0 && !isShooting1) {
                isShooting1 = true;
                shoot1();
            } else {
                if (!g.isDown) {
                    isShooting1 = false;
                }
            }
            if (k.isDown && score2 > 0 && !isShooting2) {
                isShooting2 = true;
                shoot2();
            } else {
                if (!k.isDown) {
                    isShooting2 = false;
                }
            }

            game.physics.arcade.collide(player1, shots2, hitTo1);
            game.physics.arcade.collide(player2, shots1, hitTo2);
            break;
        case PAUSED:
            if (u.isDown && time > 0) {
                unpause();
            }
            break;
        case FINISH_ROUND:
            manageCollides();
            break;
        case FINISHED:
            manageCollides();
            break;
        case CREDITS:
            creditsLoadingBar();
            launchCreditText();
            moveCreditText();
            if (fps == 12200) {
                logo.body.velocity.y = 0;
            } else {
                if (fps == 12500) {
                    exitOfCredits();
                }
            }
            break;

    }
};