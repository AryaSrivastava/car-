var gameState = 0;
var canvas,backgroundImage;
var playerCount,database,player,form,game;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game();
  game.getState();
  game.start();

}

function draw(){
  
}
