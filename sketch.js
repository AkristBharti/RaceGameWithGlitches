var gamestate = 0, playercount, allplayers, distance = 0, game, form, player;
var database, position;
var car1, car2, car3, car4;
var cri1, cri2, cri3, cri4;
var trackimg, groundimg
var cars;
function preload(){
    trackimg = loadImage("/images/track.jpg");
    groundimg = loadImage("/images/ground.png");
    cri1 = loadImage("/images/car1.png");
    cri2 = loadImage("/images/car2.png");
    cri3 = loadImage("/images/car3.png");
    cri4 = loadImage("/images/car4.png");
}
function setup(){
    database = firebase.database();
    createCanvas(displayWidth-600,displayHeight-200);
    game = new Game();
    game.getState();
    game.start();
}
function draw(){
    background("white");
    if(playercount === 4){
        game.update(1);
    }
    if (gamestate === 1){
        clear();
        game.play();
    }
}
function showerror(){
    console.log("There is some error!")
}