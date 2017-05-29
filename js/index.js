/*
    Este archivo contiene las funciones principales de Phaser como Preload, Create y Update
    También contiene la mayoría de las variables del juego
*/

//Elementos
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

//Teclas
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

//Textos
var score1 = 0;
var scoreText1;
var score2 = 0;
var scoreText2;
var time = ROUND_TIME;
var timeText;
var readyText;
var roundText;
var winText;

//Variables para los estados
var dataPause = [];
var state = LOADING;
var fps = 0;
var directions = [WITHOUT_DIRECTION, WITHOUT_DIRECTION];
var isShooting1 = false;
var isShooting2 = false;

//Sonidos
var intro;
var battle;
var hit;
var die;
var shoot1;
var shoot2;

//Para la lógica de los Rounds
var round = 1;
var winPlayer1 = false;
var winPlayer2 = false;

//Botones
var btnStart;
var btnCredits;
var btnMuteMusic;
var btnMuteSounds;

//Variable principal para el juego que tendrá un tamaño de 800x600, será cargado en el div "game" y tendrá 3 funciones de estado
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });


//Esta función se ejecuta al principio y me permite cargar el personaje principal para hacer la animación de la pantalla de cargando
function preload() {
    game.load.spritesheet('pikachu', 'assets/characters/pikachu.png', 48, 48);

    game.load.onLoadStart.add(loadStart, this);
    game.load.onFileComplete.add(fileComplete, this);
    game.load.onLoadComplete.add(loadComplete, this);
};

//Esta función crea los elementos necesarios para iniciar el juego
function create() {
    loadAssets();
    initSounds();
};

//Esta función actualiza la pantalla del juego en los diferentes estados
function update() {
    fps++;

    switch (state) {
        //Este caso para la pantalla de carga
        case LOADING:
            break;
        //Este caso para la pantalla de inicio del juego
        case INIT:
            launchCloud();
            break;
        //Este caso para la pantalla de espera a que empiece el Round
        case READY:
            launchCloud();
            manageCollides();
            countdown();
            break;
        //Este caso para la pantalla de juego principal
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
        //Este caso para la pantalla de pausa
        case PAUSED:
            if (u.isDown && time > 0) {
                unpause();
            }
            break;
        //Este caso para la pantalla de finalización de round
        case FINISH_ROUND:
            manageCollides();
            break;
        //Este caso para la pantalla de duelo
        case FINISHED:
            manageCollides();
            break;
        //Este caso para la pantalla de créditos
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