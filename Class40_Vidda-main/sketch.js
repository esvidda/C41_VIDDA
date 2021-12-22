var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var distance=0;
var database;

var form, player, game;
var cars, car1, car2, car3, car4;
var car1Img, car2Img, car3Img, car4Img, track,ground;

var allPlayers; 

function preload(){
  track = loadImage("images/track.jpg");
  car1Img = loadImage("images/car1.png");
  car2Img = loadImage("images/car2.png");
  car3Img = loadImage("images/car3.png");
  car4Img = loadImage("images/car4.png");
  ground =loadImage("images/ground.png")
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();

  //create a new Game
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  //ask if there are 4 players to begin the race
  if(playerCount===4){
    game.update(1);

  }
  if(gameState===1){
    clear();
    game.play();
  }

  if(gameState===2){
    game.end();
  }
}