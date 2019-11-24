class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("PLAY");
        this.greeting = createElement('h2' );
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement('h2');
        title.html("Racing Multiplayer Game");
        title.position(displayWidth/2-350, displayHeight/2-160);
        this.input.position(displayWidth/2-350, displayHeight/2-110);
        this.button.position(displayWidth/2-350, displayHeight/2-80);
        this.button.mousePressed(() =>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playercount +=1;
            player.index = playercount;
            player.update();
            player.updatecount(playercount);
            this.greeting.html("Welcom "+ player.name);
            this.greeting.position(200, 250);
        });
    }
}