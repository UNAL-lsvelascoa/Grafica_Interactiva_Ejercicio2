function collect1(player, collectable) {
    collectable.kill();
    score1 += 1;
    scoreText1.text = 'Tiros: ' + score1;
}
function collect2(player, collectable) {
    collectable.kill();
    score2 += 1;
    scoreText2.text = 'Tiros: ' + score2;
}
function launchCollectable(launch) {
    if (game.rnd.integerInRange(1, 60) % 60 == 0 || launch) {
        var collectable = collectables.create(game.rnd.integerInRange(0, 800), 0, 'collectable');

        collectable.body.gravity.y = GRAVITY;
        collectable.body.velocity.x = game.rnd.integerInRange(-500, 500);
        collectable.body.collideWorldBounds = true;

        collectable.body.bounce.y = 0.7 + Math.random() * 0.2;
        collectable.body.bounce.x = 1;

        collectable.scale.setTo(0.5, 0.5);
    }
}
function launchCloud() {
    if (fps % 80 == 0) {
        var cloud = platforms.create(-180, game.rnd.integerInRange(100, 500), 'cloud');
        cloud.body.immovable = true;
        cloud.scale.setTo(0.4, 0.3);
        cloud.body.velocity.x = game.rnd.integerInRange(40, 80);
        cloud.body.checkCollision.up = true;
        cloud.body.checkCollision.down = false;
        cloud.body.checkCollision.left = false;
        cloud.body.checkCollision.right = false;
    }
}
function launchCreditText() {
    switch (fps) {
        case 1:
            game.add.text(game.world.centerX, game.world.height + 40, "PikaWAR", { font: "52px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 200:
            game.add.text(game.world.centerX, game.world.height + 20, "La última batalla entre Pikachus", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 500:
            game.add.text(game.world.centerX, game.world.height + 20, "Un idea original de:", { font: "28px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 600:
            game.add.text(game.world.centerX, game.world.height + 20, "Erick Stevens Velasco Amaya", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 900:
            game.add.text(game.world.centerX, game.world.height + 20, "Desarrolladores:", { font: "28px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 1000:
            game.add.text(game.world.centerX, game.world.height + 20, "Erick Stevens Velasco Amaya", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 1300:
            game.add.text(game.world.centerX, game.world.height + 20, "Profesor:", { font: "28px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 1400:
            game.add.text(game.world.centerX, game.world.height + 20, "Carlos Alberto Delgado Rivera", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 1700:
            game.add.text(game.world.centerX, game.world.height + 20, "Librería de desarrollo:", { font: "28px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 1800:
            game.add.text(game.world.centerX, game.world.height + 20, "Phaser 2.0.1", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 2200:
            game.add.text(game.world.centerX, game.world.height + 20, "Créditos a externos:", { font: "32px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 2400:
            game.add.text(game.world.centerX, game.world.height + 20, "Música:", { font: "28px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 2600:
            game.add.text(game.world.centerX, game.world.height + 20, "Intro - Pokemon Champion Lance (Rock Cover):", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 2700:
            game.add.text(game.world.centerX, game.world.height + 20, "https://www.youtube.com/watch?v=-kZm052_p30", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 2900:
            game.add.text(game.world.centerX, game.world.height + 20, "Batalla - Pokemon Battle Training (Rock Cover):", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 3000:
            game.add.text(game.world.centerX, game.world.height + 20, "https://www.youtube.com/watch?v=2v3plfph38o", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 3200:
            game.add.text(game.world.centerX, game.world.height + 20, "Créditos - Opening 1 (Metal Cover):", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 3300:
            game.add.text(game.world.centerX, game.world.height + 20, "https://www.youtube.com/watch?v=wyBqTBusWqI", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 3500:
            game.add.text(game.world.centerX, game.world.height + 20, "Golpe - Hit sound:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 3600:
            game.add.text(game.world.centerX, game.world.height + 20, "https://www.youtube.com/watch?v=Tp7sDYEq5vI", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 3800:
            game.add.text(game.world.centerX, game.world.height + 20, "Tiro y muerte - Pikachu sounds:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 3900:
            game.add.text(game.world.centerX, game.world.height + 20, "https://www.youtube.com/watch?v=CFehIIECaJ0", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 4100:
            game.add.text(game.world.centerX, game.world.height + 20, "Pausa - Pikachu game sounds:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 4200:
            game.add.text(game.world.centerX, game.world.height + 20, "https://www.youtube.com/watch?v=HujaitYzvrI&t", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 4500:
            game.add.text(game.world.centerX, game.world.height + 20, "Imágenes:", { font: "28px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 4700:
            game.add.text(game.world.centerX, game.world.height + 20, "Pikachu Sprites:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 4800:
            game.add.text(game.world.centerX, game.world.height + 20, "https://s-media-cache-ak0.pinimg.com/originals/6a/51/1b/6a511bba00ccf185abbce719d209ca7a.jpg", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 5000:
            game.add.text(game.world.centerX, game.world.height + 20, "Fondo de la página:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 5100:
            game.add.text(game.world.centerX, game.world.height + 20, "https://images2.alphacoders.com/206/thumb-1920-206292.jpg", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 5300:
            game.add.text(game.world.centerX, game.world.height + 20, "Fondo del juego:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 5400:
            game.add.text(game.world.centerX, game.world.height + 20, "https://s-media-cache-ak0.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 5600:
            game.add.text(game.world.centerX, game.world.height + 20, "Tiro (Ataque):", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 5700:
            game.add.text(game.world.centerX, game.world.height + 20, "http://piq.codeus.net/static/media/userpics/piq_33026_400x400.png", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 5900:
            game.add.text(game.world.centerX, game.world.height + 20, "Tiro (Coleccionable)", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 6000:
            game.add.text(game.world.centerX, game.world.height + 20, "", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 6200:
            game.add.text(game.world.centerX, game.world.height + 20, "Marca de round ganado:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 6300:
            game.add.text(game.world.centerX, game.world.height + 20, "", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 6500:
            game.add.text(game.world.centerX, game.world.height + 20, "Sonido (Activo e inactivo):", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 6600:
            game.add.text(game.world.centerX, game.world.height + 20, "", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 6800:
            game.add.text(game.world.centerX, game.world.height + 20, "Música (Activo e Inactivo):", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 6900:
            game.add.text(game.world.centerX, game.world.height + 20, "", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 7100:
            game.add.text(game.world.centerX, game.world.height + 20, "Medallas:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 7200:
            game.add.text(game.world.centerX, game.world.height + 20, "http://www.freepngimg.com/download/medal/7-2-medal-png-clipart.png", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 7400:
            game.add.text(game.world.centerX, game.world.height + 20, "Nube:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 7500:
            game.add.text(game.world.centerX, game.world.height + 20, "https://phaser.io/content/tutorials/coding-tips-004/cloud-platform.png", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 7700:
            game.add.text(game.world.centerX, game.world.height + 20, "Suelo:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 7800:
            game.add.text(game.world.centerX, game.world.height + 20, "Erick Stevens Velasco Amaya con Adobe Photoshop CS6", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 8000:
            game.add.text(game.world.centerX, game.world.height + 20, "Botón START:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 8100:
            game.add.text(game.world.centerX, game.world.height + 20, "http://pixelartmaker.com/art/0a8a31a07ea245d.png", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 8300:
            game.add.text(game.world.centerX, game.world.height + 20, "Botón NEXT:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 8400:
            game.add.text(game.world.centerX, game.world.height + 20, "http://piq.codeus.net/static/media/userpics/piq_364175_400x400.png", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 8600:
            game.add.text(game.world.centerX, game.world.height + 20, "Botón RESET:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 8700:
            game.add.text(game.world.centerX, game.world.height + 20, "http://piq.codeus.net/static/media/userpics/piq_106361_400x400.png", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 8900:
            game.add.text(game.world.centerX, game.world.height + 20, "Botón CRÉDITOS:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 9000:
            game.add.text(game.world.centerX, game.world.height + 20, "Erick Stevens Velasco Amaya con: http://makepixelart.com/free/", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 9200:
            game.add.text(game.world.centerX, game.world.height + 20, "Logo - PikaWAR The last battle", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 9300:
            game.add.text(game.world.centerX, game.world.height + 20, "Erick Stevens Velasco Amaya con: https://textcraft.net/", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;

        case 9700:
            game.add.text(game.world.centerX, game.world.height + 20, "Para la clase de GRÁFICA INTERACTIVA", { font: "32px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 9800:
            game.add.text(game.world.centerX, game.world.height + 20, "Universidad Nacional de Colombia - Sede Bogotá", { font: "28px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 10100:
            game.add.text(game.world.centerX, game.world.height + 20, "Agradecimientos especiales a", { font: "28px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 10220:
            game.add.text(game.world.centerX, game.world.height + 50, "Juan David Torres por sus pruebas exahustivas.\nMichael Alexander Velasco por sus ideas innovadoras para funcionalidades extra.\nCarlos Alberto Delgado Rivera por haberme enseñado esta gran librería.\nAl equipo de Phaser por su excelente desarrollo\nY a todos los que hicieron parte de la creación de este sueño.", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 11000:
            logo.body.position.y = game.world.height;
            break;
    }
}
function changeTime() {
    if (fps % 60 == 0) {
        time--;
        timeText.text = 'Tiempo: ' + time;
        var delGo = ROUND_TIME - 3;
        switch (time) {
            case 0:
                finishRound();
                break;
            case delGo:
                readyText.destroy();
                break;
        }
    } else {
        if (fps % 118 == 0) {
            launchCollectable(true);
        }
    }
}
function manageCollides() {
    game.physics.arcade.collide(collectables, platforms);
    game.physics.arcade.collide(player1, platforms);
    game.physics.arcade.collide(player2, platforms);
    game.physics.arcade.overlap(player1, collectables, collect1, null, this);
    game.physics.arcade.overlap(player2, collectables, collect2, null, this);
}
function move(player, left, right, up, indexPlayer) {
    if (player.body.touching.down) {
        player.body.velocity.x = 0;
    }
    if (left.isDown) {
        player.body.velocity.x = -150;
        player.animations.play('left');
        directions[indexPlayer] = LEFT_DIRECTION;
    }
    else {
        if (right.isDown) {
            player.body.velocity.x = 150;
            player.animations.play('right');
            directions[indexPlayer] = RIGHT_DIRECTION;
        }
        else {
            player.animations.stop();
            switch (directions[indexPlayer]) {
                case LEFT_DIRECTION:
                    player.frame = 8;
                    break;
                case RIGHT_DIRECTION:
                    player.frame = 3;
                    break;
            }
        }
    }
    if (up.isDown && player.body.touching.down) {
        player.body.velocity.y = -550;
    }
}
function shoot1() {
    switch (directions[0]) {
        case LEFT_DIRECTION:
            var shooting = shots1.create(player1.body.x + 12, player1.body.y + 12, 'shoot1');
            shooting.scale.setTo(0.4, 0.4);
            shooting.body.velocity.x = -SHOOT_VELOCITY;
            score1--;
            scoreText1.text = 'Tiros: ' + score1;
            playSound('shoot1');
            break;
        case RIGHT_DIRECTION:
            var shooting = shots1.create(player1.body.x + 12, player1.body.y + 12, 'shoot1');
            shooting.scale.setTo(0.4, 0.4);
            shooting.body.velocity.x = SHOOT_VELOCITY;
            score1--;
            scoreText1.text = 'Tiros: ' + score1;
            playSound('shoot1');
            break;
    }
}
function shoot2() {
    switch (directions[1]) {
        case LEFT_DIRECTION:
            var shooting = shots2.create(player2.body.x + 12, player2.body.y + 12, 'shoot2');
            shooting.scale.setTo(0.4, 0.4);
            shooting.body.velocity.x = -SHOOT_VELOCITY;
            score2--;
            scoreText2.text = 'Tiros: ' + score2;
            playSound('shoot2');
            break;
        case RIGHT_DIRECTION:
            var shooting = shots2.create(player2.body.x + 12, player2.body.y + 12, 'shoot2');
            shooting.scale.setTo(0.4, 0.4);
            shooting.body.velocity.x = SHOOT_VELOCITY;
            score2--;
            scoreText2.text = 'Tiros: ' + score2;
            playSound('shoot2');
            break;
    }
}

function hitTo1(player, shoot) {
    playSound('hit');
    shoot.kill();
    lifeBar1.scale.x -= game.rnd.realInRange(0.05, 0.12);
    if (lifeBar1.scale.x < 0.15) {
        lifeBar1.tint = RED;
    } else {
        if (lifeBar1.scale.x < 0.4) {
            lifeBar1.tint = YELLOW;
        }
    }
    if (lifeBar1.scale.x <= 0) {
        lifeBar1.scale.x = 0;
        finishRound();
    }
}
function hitTo2(player, shoot) {
    playSound('hit');
    shoot.kill();
    lifeBar2.scale.x -= game.rnd.realInRange(0.05, 0.12);
    if (lifeBar2.scale.x < 0.15) {
        lifeBar2.tint = RED;
    } else {
        if (lifeBar2.scale.x < 0.4) {
            lifeBar2.tint = YELLOW;
        }
    }
    if (lifeBar2.scale.x <= 0) {
        lifeBar2.scale.x = 0;
        finishRound();
    }
}


function win1() {
    player2.animations.play('die');
    player1.animations.play('front');
    var style = { font: "60px Arial", fill: "#FCD516", align: "center" };
    winText = game.add.text(game.world.centerX, 200, 'Jugador 1 ¡GANA!', style);
    winText.anchor.set(0.5);
    if (!winPlayer1) {
        winPlayer1 = true;
        return false;
    }
    return true;
}
function win2() {
    player1.animations.play('die');
    player2.animations.play('front');
    var style = { font: "60px Arial", fill: "#FCD516", align: "center" };
    winText = game.add.text(game.world.centerX, 200, 'Jugador 2 ¡GANA!', style);
    winText.anchor.set(0.5);
    if (!winPlayer2) {
        winPlayer2 = true;
        return false;
    }
    return true;
}
function moveCreditText() {
    for (var i = 0; i < creditTexts.children.length; i++) {
        creditTexts.children[i].y -= 0.35;
    }
    //}
}