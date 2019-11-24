class Game{
    constructor(){
    }
    getState(){
        var gameStateref = database.ref('gamestate');
        gameStateref.on("value", function(data){
            gamestate = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gamestate: state
        })
    }
    
    async start(){
        if (gamestate === 0){
            player = new Player();
            var playercountref = await database.ref('playercount').once("value");
            if (playercountref.exists()){
                playercount = playercountref.val();
            }

            player.getcount();
            form = new Form();
            form.display();
        }
        car1 = createSprite(100, 200, 30, 100);
        car1.addImage("car1",cri1);
        car2 = createSprite(200, 200, 30, 100);
        car2.addImage("car2", cri2);
        car3 = createSprite(300, 200, 30, 100);
        car3.addImage("car3", cri3);
        car4 = createSprite(400, 200, 30, 100);
        car4.addImage("car4", cri4);
        cars = [car1, car2, car3, car4];

    }

 
    play(){
        form.hide();
        //text("Game is starting...",180, 250 );
        //Player.getplayerinfo()
        if (allplayers !== undefined){
            //var display_position = 130;
            background("red")
            image(trackimg, 0, 0, displayWidth, displayHeight );
            var index = 0;
            var x = 0, y;
            for(var plr in allplayers){
                /*if(plr === "player"+player.index){
                    fill("red");
                }
                else{
                    fill("black");
                }
                display_position += 20;
                text(allplayers[plr].name +  " : " + allplayers[plr].distance, 120, display_position);*/
                index = index + 1;
                x = x+200;
                y = displayHeight-allplayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                if(index === player.index){
                    cars[index-1].shapeColor = "red";
                }
            }
            
        }
        
    
    if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance += 10;
        player.update();
    }
    drawSprites();
    }
}