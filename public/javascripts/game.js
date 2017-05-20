var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game-container');
var player;

$.ajax({url: '/api/players/data', success: function(doc) {
    log('player',JSON.stringify(doc));
    player = doc;
}});

//add the game states
game.state.add('boot', boot);
game.state.add('preload',preload);
game.state.add('characterCreate', characterCreate);
game.state.add('map', map);
/*
game.state.add('logo', logo);
game.state.add('menu', menu);
game.state.add('char', char);

//inst => instructions
game.state.add('inst', inst);
game.state.add('sett', sett);
game.state.add('store', store);
game.state.add('credit', credit);
*/

game.state.start('boot');

//standard log to console
function log(tag, message)
{
    console.log("["+tag+"] : "+message);
}