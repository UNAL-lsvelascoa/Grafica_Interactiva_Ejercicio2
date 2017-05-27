﻿function collect1(player, collectable) {
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
            game.add.audio('shoot1').play('', 0, 1, false);
            break;
        case RIGHT_DIRECTION:
            var shooting = shots1.create(player1.body.x + 12, player1.body.y + 12, 'shoot1');
            shooting.scale.setTo(0.4, 0.4);
            shooting.body.velocity.x = SHOOT_VELOCITY;
            score1--;
            scoreText1.text = 'Tiros: ' + score1;
            game.add.audio('shoot1').play('', 0, 1, false);
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
            game.add.audio('shoot2').play('', 0, 1, false);
            break;
        case RIGHT_DIRECTION:
            var shooting = shots2.create(player2.body.x + 12, player2.body.y + 12, 'shoot2');
            shooting.scale.setTo(0.4, 0.4);
            shooting.body.velocity.x = SHOOT_VELOCITY;
            score2--;
            scoreText2.text = 'Tiros: ' + score2;
            game.add.audio('shoot2').play('', 0, 1, false);
            break;
    }
}

function hitTo1(player, shoot) {
    game.add.audio('hit').play('', 0, 1, false);
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
    game.add.audio('hit').play('', 0, 1, false);
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