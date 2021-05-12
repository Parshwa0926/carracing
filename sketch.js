var database;
var form,player,game;
var playerCount;
var gameState=0;
var allPlayers;
var canvas;

function setup(){
    canvas = createCanvas(displayWidth -20,displayHeight -30);
    database = firebase.database();
    game=new Game();
    game.getState()
    game.start()


}
function draw(){
if(playerCount ===4){
    game.update(1);
}
if(gameState===1){
    game.play();
}
}