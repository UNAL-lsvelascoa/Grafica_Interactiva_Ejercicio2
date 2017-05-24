function pause() {
    battle.pause();
    game.add.audio('pause').play('', 0, 1, false);
    background_pause = game.add.sprite(0, 0, 'background_pause');
    state = PAUSED;
    dataPause.push(player1.body.velocity.x);
    dataPause.push(player1.body.velocity.y);
    dataPause.push(player2.body.velocity.x);
    dataPause.push(player2.body.velocity.y);
    player1.body.gravity.y = 0;
    player1.body.velocity.x = 0;
    player1.body.velocity.y = 0;
    player2.body.gravity.y = 0;
    player2.body.velocity.x = 0;
    player2.body.velocity.y = 0;
    for (var i = 0; i < collectables.children.length; i++) {
        dataPause.push(collectables.children[i].body.velocity.x);
        dataPause.push(collectables.children[i].body.velocity.y);
        collectables.children[i].body.gravity.y = 0;
        collectables.children[i].body.velocity.x = 0;
        collectables.children[i].body.velocity.y = 0;
    }
    for (var i = 0; i < platforms.children.length; i++) {
        dataPause.push(platforms.children[i].body.velocity.x);
        platforms.children[i].body.velocity.x = 0;
    }
    for (var i = 0; i < shots1.children.length; i++) {
        dataPause.push(shots1.children[i].body.velocity.x);
        dataPause.push(shots1.children[i].body.velocity.y);
        shots1.children[i].body.velocity.x = 0;
        shots1.children[i].body.velocity.y = 0;
    }
    for (var i = 0; i < shots2.children.length; i++) {
        dataPause.push(shots2.children[i].body.velocity.x);
        dataPause.push(shots2.children[i].body.velocity.y);
        shots2.children[i].body.velocity.x = 0;
        shots2.children[i].body.velocity.y = 0;
    }
}

function unpause() {
    game.add.audio('pause').play('', 0, 1, false);
    battle.resume();
    background_pause.kill();
    state = PLAYING;
    player1.body.gravity.y = GRAVITY;
    player1.body.velocity.x = dataPause.shift();
    player1.body.velocity.y = dataPause.shift();
    player2.body.gravity.y = GRAVITY;
    player2.body.velocity.x = dataPause.shift();
    player2.body.velocity.y = dataPause.shift();
    for (var i = 0; i < collectables.children.length; i++) {
        collectables.children[i].body.gravity.y = GRAVITY;
        collectables.children[i].body.velocity.x = dataPause.shift();
        collectables.children[i].body.velocity.y = dataPause.shift();
    }
    for (var i = 0; i < platforms.children.length; i++) {
        platforms.children[i].body.velocity.x = dataPause.shift();
    }
    for (var i = 0; i < shots1.children.length; i++) {
        shots1.children[i].body.velocity.x = dataPause.shift();
        shots1.children[i].body.velocity.y = dataPause.shift();
    }
    for (var i = 0; i < shots2.children.length; i++) {
        shots2.children[i].body.velocity.x = dataPause.shift();
        shots2.children[i].body.velocity.y = dataPause.shift();
    }
}