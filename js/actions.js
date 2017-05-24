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
function launchCollectable() {
    if (game.rnd.integerInRange(1, 60) % 60 == 0) {
        var star = collectables.create(game.rnd.integerInRange(0, 800), 0, 'collectable');

        star.body.gravity.y = GRAVITY;
        star.body.velocity.x = game.rnd.integerInRange(-500, 500);
        star.body.collideWorldBounds = true;

        star.body.bounce.y = 0.7 + Math.random() * 0.2;
        star.body.bounce.x = 1;
    }
}
function changeTime() {
    if (fps % 60 == 0) {
        time--;
        timeText.text = 'Tiempo: ' + time;
        switch (time) {
            case 0:
                finishGame();
                break;
            case 56:
                readyText.destroy();
        }
    }
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
        player.body.velocity.y = -450;
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
            break;
        case RIGHT_DIRECTION:
            var shooting = shots1.create(player1.body.x + 12, player1.body.y + 12, 'shoot1');
            shooting.scale.setTo(0.4, 0.4);
            shooting.body.velocity.x = SHOOT_VELOCITY;
            score1--;
            scoreText1.text = 'Tiros: ' + score1;
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
            break;
        case RIGHT_DIRECTION:
            var shooting = shots2.create(player2.body.x + 12, player2.body.y + 12, 'shoot2');
            shooting.scale.setTo(0.4, 0.4);
            shooting.body.velocity.x = SHOOT_VELOCITY;
            score2--;
            scoreText2.text = 'Tiros: ' + score2;
            break;
    }
}

function hitTo1(player, shoot) {
    shoot.kill();
    lifeBar1.scale.x -= game.rnd.realInRange(0.1, 0.15);
    if (lifeBar1.scale.x < 0.15) {
        lifeBar1.tint = RED;
    } else {
        if (lifeBar1.scale.x < 0.4) {
            lifeBar1.tint = YELLOW;
        }
    }
    if (lifeBar1.scale.x <= 0) {
        lifeBar1.scale.x = 0;
        finishGame();
    }
}
function hitTo2(player, shoot) {
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
        finishGame();
    }
}