var canvas, database, gameState = 0, playerCount, form, game, player, allPlayers;
var greeting, greeting1, gryfbutton, slybutton, ravbutton, hufbutton, input, button, title;
var greet, greet1, greetings, greeting1, error;
function setup(){
    canvas = createCanvas(400,400);

    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
    background(100,100,100);
    if(playerCount === 2){
        game.update(1);
    }
}