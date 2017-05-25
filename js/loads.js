var loadBar;
var loadText;
var goToPostCreate = false;
var loadLoadComponents = false;

function loadAssets() {
    game.load.image('logo', 'assets/logo.png');
    game.load.image('background', 'assets/background.png');
    game.load.image('background_pause', 'assets/background_pause.png');
    game.load.image('ground', 'assets/platform_ground.png');
    game.load.image('cloud', 'assets/platform_cloud.png');
    game.load.image('collectable', 'assets/collectable.png');
    game.load.image('shoot1', 'assets/shoot1.png');
    game.load.image('shoot2', 'assets/shoot2.png');
    game.load.spritesheet('charmander', 'assets/characters/charmander.png', 48, 48);
    game.load.audio('battle', 'assets/sounds/battle.mp3');
    game.load.audio('intro', 'assets/sounds/intro.mp3');
    game.load.audio('hit', 'assets/sounds/hit.mp3');
    game.load.audio('die', 'assets/sounds/die.mp3');
    game.load.audio('shoot1', 'assets/sounds/shoot1.mp3');
    game.load.audio('shoot2', 'assets/sounds/shoot2.mp3');
    game.load.audio('pause', 'assets/sounds/pause.mp3');
    game.load.image('btnStart', 'assets/buttons/btnStart.png');
    //game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);

    game.load.start();
}

function loadStart() {
    if (loadLoadComponents) {
        loadBar = game.add.graphics(100, game.world.centerY - 12);

        loadBar.lineStyle(35, 0xffffff, 1);
        loadBar.tint = YELLOW;
        loadBar.moveTo(0, 0);
        loadBar.lineTo(game.world.width - 200, 0);
        loadBar.scale.x = 0;
        loadBar.endFill();

        player1 = game.add.sprite(52, 260, 'pikachu');
        player1.animations.add('right', [1, 2, 3, 4, 5], 10, true);
        player1.animations.play('right');
        loadText = game.add.text(game.world.centerX, game.world.centerY + 40, "Cargando...", { font: "30px Arial", align: "center", fill: '#ffffff' });
        loadText.anchor.set(0.5);
    }
}

function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
    if (totalFiles != 1) {
        goToPostCreate = true;
        loadBar.scale.x = progress * 0.01;
        player1.x = ((600 * progress) / 100) + 52;
    } else {
        loadLoadComponents = true;
    }
}

function loadComplete() {
    if (goToPostCreate) {
        postCreate();
    }
}