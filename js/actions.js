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
        var star = collectables.create(game.rnd.integerInRange(0, 800), 0, 'collectable');

        star.body.gravity.y = GRAVITY;
        star.body.velocity.x = game.rnd.integerInRange(-500, 500);
        star.body.collideWorldBounds = true;

        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        star.body.bounce.x = 1;
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
        case 600:
            game.add.text(game.world.centerX, game.world.height + 20, "Un idea original de:", { font: "28px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 700:
            game.add.text(game.world.centerX, game.world.height + 20, "Erick Stevens Velasco Amaya", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 1000:
            game.add.text(game.world.centerX, game.world.height + 20, "Desarrolladores:", { font: "28px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 1100:
            game.add.text(game.world.centerX, game.world.height + 20, "Erick Stevens Velasco Amaya", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 1400:
            game.add.text(game.world.centerX, game.world.height + 20, "Profesor:", { font: "28px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 1500:
            game.add.text(game.world.centerX, game.world.height + 20, "Carlos Alberto Delgado Rivera", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 1800:
            game.add.text(game.world.centerX, game.world.height + 20, "Librería de desarrollo:", { font: "28px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 1900:
            game.add.text(game.world.centerX, game.world.height + 20, "Phaser 2.0.1", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 2500:
            game.add.text(game.world.centerX, game.world.height + 20, "Créditos a externos:", { font: "32px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 2700:
            game.add.text(game.world.centerX, game.world.height + 20, "Música:", { font: "28px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 3000:
            game.add.text(game.world.centerX, game.world.height + 20, "Intro - Pokemon Champion Lance (Rock Cover):", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 3100:
            game.add.text(game.world.centerX, game.world.height + 20, "https://www.youtube.com/watch?v=-kZm052_p30", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 3300:
            game.add.text(game.world.centerX, game.world.height + 20, "Batalla - Pokemon Battle Training (Rock Cover):", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 3400:
            game.add.text(game.world.centerX, game.world.height + 20, "https://www.youtube.com/watch?v=2v3plfph38o", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 3600:
            game.add.text(game.world.centerX, game.world.height + 20, "Créditos - Opening 1 (Metal Cover):", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 3700:
            game.add.text(game.world.centerX, game.world.height + 20, "https://www.youtube.com/watch?v=wyBqTBusWqI", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 3900:
            game.add.text(game.world.centerX, game.world.height + 20, "Golpe - Hit sound:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 4000:
            game.add.text(game.world.centerX, game.world.height + 20, "https://www.youtube.com/watch?v=Tp7sDYEq5vI", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 4200:
            game.add.text(game.world.centerX, game.world.height + 20, "Tiro y muerte - Pikachu sounds:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 4300:
            game.add.text(game.world.centerX, game.world.height + 20, "https://www.youtube.com/watch?v=CFehIIECaJ0", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 4500:
            game.add.text(game.world.centerX, game.world.height + 20, "Pausa - Pikachu game sounds:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 4600:
            game.add.text(game.world.centerX, game.world.height + 20, "https://www.youtube.com/watch?v=HujaitYzvrI&t", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 4900:
            game.add.text(game.world.centerX, game.world.height + 20, "Imágenes:", { font: "28px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 5200:
            game.add.text(game.world.centerX, game.world.height + 20, "Pikachu Sprites:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 5300:
            game.add.text(game.world.centerX, game.world.height + 20, "https://s-media-cache-ak0.pinimg.com/originals/6a/51/1b/6a511bba00ccf185abbce719d209ca7a.jpg", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 5500:
            game.add.text(game.world.centerX, game.world.height + 20, "Fondo de la página:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 5600:
            game.add.text(game.world.centerX, game.world.height + 20, "https://images2.alphacoders.com/206/thumb-1920-206292.jpg", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 5800:
            game.add.text(game.world.centerX, game.world.height + 20, "Fondo del juego:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 5900:
            game.add.text(game.world.centerX, game.world.height + 20, "https://s-media-cache-ak0.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 6100:
            game.add.text(game.world.centerX, game.world.height + 20, "Tiro (Ataque):", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 6200:
            game.add.text(game.world.centerX, game.world.height + 20, "", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 6400:
            game.add.text(game.world.centerX, game.world.height + 20, "Tiro (Coleccionable)", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 6500:
            game.add.text(game.world.centerX, game.world.height + 20, "", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 6700:
            game.add.text(game.world.centerX, game.world.height + 20, "Marca de round ganado:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 6800:
            game.add.text(game.world.centerX, game.world.height + 20, "", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 7000:
            game.add.text(game.world.centerX, game.world.height + 20, "Sonido (Activo):", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 7100:
            game.add.text(game.world.centerX, game.world.height + 20, "", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 7300:
            game.add.text(game.world.centerX, game.world.height + 20, "Sonido (Inactivo):", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 7400:
            game.add.text(game.world.centerX, game.world.height + 20, "", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 7600:
            game.add.text(game.world.centerX, game.world.height + 20, "Música (Activo):", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 7700:
            game.add.text(game.world.centerX, game.world.height + 20, "", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 7900:
            game.add.text(game.world.centerX, game.world.height + 20, "Música (Inactivo):", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 8000:
            game.add.text(game.world.centerX, game.world.height + 20, "", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 8200:
            game.add.text(game.world.centerX, game.world.height + 20, "Botón START:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 8300:
            game.add.text(game.world.centerX, game.world.height + 20, "", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 8500:
            game.add.text(game.world.centerX, game.world.height + 20, "Botón NEXT:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 8600:
            game.add.text(game.world.centerX, game.world.height + 20, "", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 8800:
            game.add.text(game.world.centerX, game.world.height + 20, "Botón RESET:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 8900:
            game.add.text(game.world.centerX, game.world.height + 20, "", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 9100:
            game.add.text(game.world.centerX, game.world.height + 20, "Botón CRÉDITOS:", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 9200:
            game.add.text(game.world.centerX, game.world.height + 20, "Erick Stevens Velasco Amaya con: http://makepixelart.com/free/", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 9400:
            game.add.text(game.world.centerX, game.world.height + 20, "Logo - PikaWAR The last battle", { font: "22px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 9500:
            game.add.text(game.world.centerX, game.world.height + 20, "Erick Stevens Velasco Amaya con: https://textcraft.net/", { font: "18px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;

        case 9900:
            game.add.text(game.world.centerX, game.world.height + 20, "Para la clase de GRÁFICA INTERACTIVA", { font: "32px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
            break;
        case 10000:
            game.add.text(game.world.centerX, game.world.height + 20, "Universidad Nacional de Colombia - Sede Bogotá", { font: "28px Arial", align: "center", fill: '#000000' }, creditTexts).anchor.set(0.5);
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
        creditTexts.children[i].y -= 0.3;
    }
    //}
}